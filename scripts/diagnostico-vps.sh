#!/bin/bash
# Script de diagnóstico para verificar estado do VPS

echo "=== DIAGNÓSTICO FUTURAMED VPS ==="
echo ""

cd /var/www/futuramed || exit

echo "1. Branch e commit atual:"
git branch
git log -1 --oneline
echo ""

echo "2. Status do git (mudanças não commitadas):"
git status --short
echo ""

echo "3. Diferença com origin/main:"
git fetch origin main -q
git log HEAD..origin/main --oneline
echo ""

echo "4. Arquivos de imagem existentes:"
ls -lh public/images/*.jpg 2>/dev/null || echo "Nenhuma imagem JPG encontrada"
echo ""

echo "5. Status dos containers:"
docker compose ps
echo ""

echo "6. Hash do último commit remoto (GitHub):"
git ls-remote origin main | cut -f1
echo ""

echo "7. Hash do commit local:"
git rev-parse HEAD
echo ""

echo "8. Verificar se joints-multi.jpg existe:"
if [ -f "public/images/joints-multi.jpg" ]; then
    ls -lh public/images/joints-multi.jpg
else
    echo "❌ ARQUIVO NÃO EXISTE!"
fi
echo ""
