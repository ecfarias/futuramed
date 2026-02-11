#!/bin/bash
# Script de deploy COMPLETO - remove tudo e reconstrói do zero

echo "=== FUTURAMED - DEPLOY COMPLETO (RECONSTRUÇÃO TOTAL) ==="
echo ""

cd /var/www/futuramed || exit

echo "1. Parando todos os containers..."
docker compose down

echo ""
echo "2. Limpando cache e builds antigos..."
rm -rf .next
docker system prune -f
docker builder prune -f

echo ""
echo "3. Resetando repositório ao estado do GitHub..."
git reset --hard HEAD
git clean -fd
git fetch origin main
git reset --hard origin/main

echo ""
echo "4. Verificando imagens no repositório:"
ls -lh public/images/*.jpg

echo ""
echo "5. Reconstruindo TUDO do zero (sem cache)..."
docker compose build --no-cache

echo ""
echo "6. Iniciando containers..."
docker compose up -d

echo ""
echo "7. Aguardando aplicação iniciar..."
sleep 10

echo ""
echo "8. Verificando imagens DENTRO do container:"
docker compose exec -T futuramed-web ls -lh /app/public/images/*.jpg || echo "❌ IMAGENS NÃO COPIADAS!"

echo ""
echo "9. Status dos containers:"
docker compose ps

echo ""
echo "10. Logs da aplicação:"
docker compose logs --tail=20 futuramed-web

echo ""
echo "✅ Deploy completo finalizado!"
echo "Site: https://futuramedsp.com"
