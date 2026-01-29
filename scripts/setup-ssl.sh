#!/bin/bash

# Script para configurar SSL com Let's Encrypt no VPS
# Executar uma vez no VPS após o deploy inicial

set -e

echo "🔒 Configurando SSL com Let's Encrypt..."
echo ""

# Verificar se o domínio está apontando corretamente
echo "Verificando DNS..."
DOMAIN="futuramedsp.com"
IP=$(dig +short $DOMAIN | tail -n1)
echo "Domínio $DOMAIN aponta para: $IP"
echo ""

# Navegar para o diretório do projeto
cd /var/www/futuramed

# Parar containers se estiverem rodando
echo "Parando containers..."
docker-compose down 2>/dev/null || true

# Fazer backup da configuração SSL
echo "Fazendo backup do nginx.conf..."
cp nginx.conf nginx.conf.ssl.bak

# Usar configuração HTTP-only temporária
echo "Usando configuração HTTP-only temporária..."
cp nginx-http-only.conf nginx.conf

# Iniciar containers com HTTP apenas
echo "Iniciando Nginx em modo HTTP para validação..."
docker-compose up -d

# Aguardar containers iniciarem
echo "Aguardando containers iniciarem..."
sleep 10

# Verificar se está funcionando
echo "Testando HTTP..."
curl -f http://futuramedsp.com/ > /dev/null 2>&1 && echo "✅ HTTP funcionando!" || echo "⚠️ HTTP com problemas"

# Obter certificados Let's Encrypt
echo ""
echo "Obtendo certificados Let's Encrypt..."
docker-compose run --rm certbot certonly \
  --webroot \
  --webroot-path=/var/www/certbot \
  --email cadastro@futuramedsp.com \
  --agree-tos \
  --no-eff-email \
  -d futuramedsp.com \
  -d www.futuramedsp.com

# Verificar se certificados foram criados
if docker-compose exec -T nginx test -f /etc/letsencrypt/live/futuramedsp.com/fullchain.pem 2>/dev/null; then
    echo "✅ Certificados criados com sucesso!"
    
    # Restaurar configuração SSL completa
    echo "Restaurando configuração SSL..."
    cp nginx.conf.ssl.bak nginx.conf
    
    # Reiniciar Nginx para usar SSL
    echo "Reiniciando Nginx com SSL..."
    docker-compose restart nginx
    
    # Aguardar reiniciar
    sleep 5
    
    echo ""
    echo "✅ SSL configurado com sucesso!"
    echo ""
    echo "Teste o site:"
    echo "  http://futuramedsp.com → deve redirecionar para HTTPS"
    echo "  https://futuramedsp.com → deve carregar com cadeado 🔒"
    echo ""
else
    echo "❌ Erro ao criar certificados!"
    echo "Mantendo configuração HTTP-only."
    echo "Verifique os logs: docker-compose logs certbot"
    exit 1
fi

echo "Os certificados serão renovados automaticamente pelo Certbot."
