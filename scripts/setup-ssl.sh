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

# Parar Nginx temporariamente se estiver rodando
echo "Parando containers..."
cd /var/www/futuramed
docker-compose down

# Criar diretórios necessários
echo "Criando diretórios..."
mkdir -p certbot/www
mkdir -p certbot/conf
mkdir -p certbot/lib

# Iniciar Nginx em modo HTTP apenas
echo "Iniciando Nginx para validação..."
docker-compose up -d nginx

# Aguardar Nginx iniciar
sleep 5

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

# Reiniciar todos os containers
echo ""
echo "Reiniciando containers com SSL..."
docker-compose down
docker-compose up -d

echo ""
echo "✅ SSL configurado com sucesso!"
echo ""
echo "Verifique o site:"
echo "  https://futuramedsp.com"
echo "  https://www.futuramedsp.com"
echo ""
echo "Os certificados serão renovados automaticamente pelo Certbot."
