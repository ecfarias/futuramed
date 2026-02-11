#!/bin/bash
# Script para verificar status dos certificados SSL

echo "=== VERIFICAÇÃO DE CERTIFICADOS SSL ==="
echo ""

# Verificar se o certificado existe
if [ ! -f "/etc/letsencrypt/live/futuramedsp.com/fullchain.pem" ]; then
    echo "❌ CRÍTICO: Certificado não encontrado!"
    echo "Execute: bash /var/www/futuramed/scripts/setup-ssl.sh"
    exit 1
fi

# Mostrar informações do certificado
echo "1. Informações do certificado:"
openssl x509 -in /etc/letsencrypt/live/futuramedsp.com/fullchain.pem -noout -dates -subject -issuer
echo ""

# Verificar dias restantes
echo "2. Dias até expiração:"
openssl x509 -in /etc/letsencrypt/live/futuramedsp.com/fullchain.pem -noout -checkend 0 && echo "✅ Certificado válido"
openssl x509 -in /etc/letsencrypt/live/futuramedsp.com/fullchain.pem -noout -checkend 604800 || echo "⚠️  ATENÇÃO: Certificado expira em menos de 7 dias!"
openssl x509 -in /etc/letsencrypt/live/futuramedsp.com/fullchain.pem -noout -checkend 2592000 || echo "⚠️  AVISO: Certificado expira em menos de 30 dias"
echo ""

# Listar todos os certificados
echo "3. Certificados instalados:"
certbot certificates 2>/dev/null || echo "Certbot não disponível"
echo ""

# Status do container certbot
echo "4. Status do Certbot container:"
cd /var/www/futuramed
docker compose ps certbot
echo ""

# Logs recentes do certbot
echo "5. Logs recentes do Certbot:"
docker compose logs --tail=10 certbot 2>/dev/null || echo "Sem logs disponíveis"
echo ""

# Teste de conexão SSL
echo "6. Teste de conexão SSL:"
timeout 5 openssl s_client -connect futuramedsp.com:443 -servername futuramedsp.com </dev/null 2>/dev/null | grep "Verify return code" || echo "❌ Não foi possível conectar via SSL"
echo ""

echo "=== FIM DA VERIFICAÇÃO ==="
