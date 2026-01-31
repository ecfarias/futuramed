#!/bin/bash
# Script para executar no VPS via SSH
# Atualiza e reconstrói o container Docker de forma SIMPLES e RÁPIDA

echo "=== FUTURAMED - DEPLOY RÁPIDO ==="
echo ""

# Navegar para o diretório do projeto
cd /var/www/futuramed || exit

# Pull das últimas alterações
echo "1. Baixando atualizações do GitHub..."
git pull origin main

# Limpar apenas .next local (cache do Next.js)
echo "2. Limpando cache do Next.js..."
rm -rf .next

# Rebuild e restart APENAS o container da aplicação
echo "3. Atualizando aplicação..."
docker compose up -d --build --no-deps futuramed-web

# Aguardar container iniciar
echo "4. Aguardando aplicação iniciar..."
sleep 5

# Verificar status
echo ""
echo "5. Status dos containers:"
docker compose ps

# Verificar logs
echo ""
echo "6. Últimos logs da aplicação:"
docker compose logs --tail=10 futuramed-web

echo ""
echo "✅ Deploy concluído! Site: https://futuramedsp.com"
echo ""
