#!/bin/bash

# Script para gerar certificados SSL auto-assinados
# Executar no VPS apenas para teste inicial

echo "🔒 Gerando certificados SSL auto-assinados..."

# Criar diretório ssl se não existir
mkdir -p /var/www/futuramed/ssl

# Gerar certificado auto-assinado
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout /var/www/futuramed/ssl/key.pem \
  -out /var/www/futuramed/ssl/cert.pem \
  -subj "/C=BR/ST=SP/L=SaoPaulo/O=FuturaMed/CN=futuramedsp.com"

# Definir permissões
chmod 600 /var/www/futuramed/ssl/key.pem
chmod 644 /var/www/futuramed/ssl/cert.pem

echo "✅ Certificados gerados em /var/www/futuramed/ssl/"
echo ""
echo "⚠️  ATENÇÃO: Estes são certificados auto-assinados para teste!"
echo "Para produção, configure Let's Encrypt:"
echo "  1. sudo apt install certbot"
echo "  2. sudo certbot certonly --standalone -d futuramedsp.com -d www.futuramedsp.com"
echo "  3. Atualizar nginx.conf para usar certificados Let's Encrypt"
