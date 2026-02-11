#!/bin/bash
# Script de emergência - Remove SSL e usa apenas HTTP
# Use apenas se SSL estiver completamente quebrado

echo "=== MODO EMERGÊNCIA - HTTP ONLY ==="
echo ""
read -p "Tem certeza que quer desabilitar SSL? (sim/NAO): " resposta

if [ "$resposta" != "sim" ]; then
    echo "Operação cancelada."
    exit 0
fi

cd /var/www/futuramed || exit

echo "1. Fazendo backup da configuração atual..."
cp docker-compose.yml docker-compose.yml.backup-ssl
cp nginx.conf nginx.conf.backup-ssl

echo "2. Aplicando configuração HTTP-only..."
cp nginx-http-only.conf nginx.conf

echo "3. Reiniciando Nginx..."
docker compose restart nginx

echo ""
echo "⚠️  ATENÇÃO: Site está rodando SEM SSL!"
echo "Para restaurar SSL:"
echo "  1. bash /var/www/futuramed/scripts/setup-ssl.sh"
echo "  2. Restaurar arquivos: cp *.backup-ssl para originais"
echo "  3. docker compose restart nginx"
