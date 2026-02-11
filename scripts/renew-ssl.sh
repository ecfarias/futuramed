#!/bin/bash
# Script para renovar certificados SSL manualmente

echo "=== RENOVAÇÃO MANUAL DE CERTIFICADOS SSL ==="
echo ""

cd /var/www/futuramed || exit

echo "1. Forçando renovação do certificado..."
docker compose run --rm certbot renew --force-renewal

if [ $? -eq 0 ]; then
    echo ""
    echo "2. Recarregando configuração do Nginx..."
    docker compose exec nginx nginx -s reload
    
    echo ""
    echo "✅ Certificado renovado com sucesso!"
    echo ""
    echo "3. Verificando novo certificado:"
    openssl x509 -in /etc/letsencrypt/live/futuramedsp.com/fullchain.pem -noout -dates
else
    echo ""
    echo "❌ Erro na renovação do certificado!"
    echo "Verifique os logs: docker compose logs certbot"
    exit 1
fi
