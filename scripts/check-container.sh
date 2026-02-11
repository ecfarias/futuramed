#!/bin/bash
# Script para verificar dentro do container Docker

echo "=== DIAGNÓSTICO DENTRO DO CONTAINER ==="
echo ""

cd /var/www/futuramed || exit

echo "1. Verificando arquivos no container:"
docker compose exec futuramed-web ls -lh /app/public/images/ 2>/dev/null || echo "❌ Erro ao listar arquivos"
echo ""

echo "2. Verificando se joints-multi.jpg existe no container:"
docker compose exec futuramed-web ls -lh /app/public/images/joints-multi.jpg 2>/dev/null || echo "❌ ARQUIVO NÃO EXISTE NO CONTAINER!"
echo ""

echo "3. Verificando toda estrutura public no container:"
docker compose exec futuramed-web find /app/public -type f
echo ""

echo "4. Logs recentes do container:"
docker compose logs --tail=30 futuramed-web
echo ""
