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

# Verificar credenciais e resetar qualquer mudança local
echo "1. Preparando repositório..."
git reset --hard HEAD
git clean -fd

# Pull das últimas alterações COM FORCE
echo "2. Baixando atualizações do GitHub..."
git fetch origin main
git reset --hard origin/main

# Mostrar commit após o pull
echo ""
echo "Novo commit:"
git log -1 --oneline
git log -1 --stat | head -20
echo ""

# Verificar se arquivo existe
echo "3. Verificando arquivos críticos..."
ls -lh public/images/joints-multi.jpg 2>/dev/null || echo "⚠️  ATENÇÃO: joints-multi.jpg não encontrado!"
echo ""

# Parar o container antes de limpar
echo "4. Parando container..."
docker compose stop futuramed-web

# Limpar cache do Next.js e node_modules do container
echo "5. Limpando cache do Next.js..."
rm -rf .next

# Rebuild FORÇADO sem cache
echo "6. Reconstruindo aplicação (sem cache)..."
docker compose build --no-cache futuramed-web

# Inic8. Aguardando aplicação iniciar..."
sleep 8

# Verificar status
echo ""
echo "9. Status dos containers:"
docker compose ps

# Verificar logs
echo ""
echo "10. Status dos containers:"
docker compose ps

# Verificar logs
echo ""
echo "8. Últimos logs da aplicação:"
docker compose logs --tail=15 futuramed-web

echo ""
echo "✅ Deploy concluído! Site: https://futuramedsp.com"
echo ""
