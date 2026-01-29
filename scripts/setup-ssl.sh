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

# Parar containers antigos que podem estar ocupando portas
echo "Parando containers antigos..."
docker stop nginx 2>/dev/null || true
docker rm nginx 2>/dev/null || true

# Parar containers se estiverem rodando
echo "Parando containers do compose..."
docker compose down 2>/dev/null || true

# Obter certificados Let's Encrypt (modo standalone - mais simples)
echo ""
echo "Obtendo certificados Let's Encrypt..."
docker run --rm -p 80:80 -p 443:443 \
  -v certbot-etc:/etc/letsencrypt \
  -v certbot-var:/var/lib/letsencrypt \
  certbot/certbot certonly \
  --standalone \
  --preferred-challenges http \
  --email cadastro@futuramedsp.com \
  --agree-tos \
  --no-eff-email \
  --keep-until-expiring \
  --non-interactive \
  -d futuramedsp.com \
  -d www.futuramedsp.com

# Verificar se certificados foram criados
echo ""
echo "Verificando certificados..."
if docker run --rm -v certbot-etc:/etc/letsencrypt certbot/certbot certificates | grep -q "futuramedsp.com"; then
    echo "✅ Certificados criados com sucesso!"
else
    echo "❌ Erro ao criar certificados!"
    echo "Verifique se:"
    echo "  1. As portas 80 e 443 estão abertas no firewall"
    echo "  2. O DNS está apontando para este servidor"
    echo "  3. Não há nada bloqueando as portas"
    exit 1
fi

# Fazer backup da configuração SSL
echo ""
echo "Fazendo backup do nginx.conf..."
cp nginx.conf nginx.conf.ssl.bak 2>/dev/null || true

# Usar configuração HTTP-only temporária
echo "Usando configuração HTTP-only temporária..."
cp nginx-http-only.conf nginx.conf

# Iniciar containers com HTTP apenas
echo ""
echo "Iniciando containers..."
docker compose up -d

# Aguardar containers iniciarem
echo "Aguardando containers iniciarem..."
sleep 10

# Restaurar configuração SSL completa
echo ""
echo "Ativando SSL..."
cp nginx.conf.ssl.bak nginx.conf
docker compose restart nginx

echo ""
echo "✅ SSL configurado com sucesso!"
echo ""
echo "Teste o site:"
echo "  http://futuramedsp.com → deve redirecionar para HTTPS"
echo "  https://futuramedsp.com → deve carregar com cadeado 🔒"
echo ""
echo "Os certificados serão renovados automaticamente pelo Certbot."
