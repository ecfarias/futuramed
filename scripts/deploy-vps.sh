#!/bin/bash
# Script para executar no VPS via SSH
# Atualiza e reconstrói o container Docker de forma SIMPLES e RÁPIDA

echo "=== FUTURAMED - DEPLOY RÁPIDO ==="
echo ""

# Navegar para o diretório do projeto
cd /var/www/futuramed || exit

# Mostrar commit atual antes do pull
echo "Commit atual:"
git log -1 --oneline
echo ""

# Pull das últimas alterações
echo "1. Baixando atualizações do GitHub..."
git pull origin main

# Mostrar commit após o pull
echo ""
echo "Novo commit:"
git log -1 --oneline
echo ""

# Parar o container antes de limpar
echo "2. Parando container..."
docker compose stop futuramed-web

# Limpar cache do Next.js e node_modules do container
echo "3. Limpando cache do Next.js..."
rm -rf .next

# Rebuild FORÇADO sem cache
echo "4. Reconstruindo aplicação (sem cache)..."
docker compose build --no-cache futuramed-web

# Iniciar o container
echo "5. Iniciando aplicação..."
docker compose up -d futuramed-web

# Aguardar container iniciar
echo "6. Aguardando aplicação iniciar..."
sleep 8

# Verificar status
echo ""
echo "7. Status dos containers:"
docker compose ps

# Verificar logs
echo ""
echo "8. Últimos logs da aplicação:"
docker compose logs --tail=15 futuramed-web

echo ""
echo "✅ Deploy concluído! Site: https://futuramedsp.com"
echo ""
