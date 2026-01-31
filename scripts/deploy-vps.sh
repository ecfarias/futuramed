#!/bin/bash
# Script para executar no VPS via SSH
# Atualiza e reconstrói o container Docker

echo "=== FUTURAMED - DEPLOY NO VPS ==="
echo ""

# Navegar para o diretório do projeto
cd /var/www/futuramed || exit

# Pull das últimas alterações
echo "1. Baixando atualizações do GitHub..."
git pull origin main

# Limpar cache do Next.js LOCAL (no VPS)
echo "2. Limpando cache do Next.js no VPS..."
rm -rf .next
rm -rf node_modules/.cache

# Parar containers
echo "3. Parando e removendo containers..."
docker compose down --volumes --remove-orphans

# Limpar cache e imagens antigas
echo "4. Limpando cache Docker (build cache, imagens não usadas)..."
docker builder prune -af
docker image prune -af
docker system prune -f

# Reconstruir SEM CACHE e iniciar
echo "5. Reconstruindo containers SEM CACHE..."
docker compose build --no-cache --pull

echo "6. Iniciando containers..."
docker compose up -d

# Aguardar containers iniciarem
echo "7. Aguardando containers iniciarem..."
sleep 10

# Verificar status
echo ""
echo "8. Verificando status dos containers..."
docker compose ps

# Verificar logs
echo ""
echo "9. Logs do nginx:"
docker compose logs --tail=15 nginx

echo ""
echo "10. Logs da aplicação:"
docker compose logs --tail=15 futuramed-web

echo ""
echo "=== Deploy concluído! ==="
echo "Site disponível em: https://futuramedsp.com"
echo ""

# Verificar se SSL está configurado
if docker compose exec -T nginx test -f /etc/letsencrypt/live/futuramedsp.com/fullchain.pem 2>/dev/null; then
    echo "✅ Certificados SSL encontrados e funcionando!"
else
    echo "⚠️  CERTIFICADOS SSL NÃO ENCONTRADOS!"
    echo ""
    echo "Execute o script de configuração SSL:"
    echo "  bash scripts/setup-ssl.sh"
fi

echo ""
echo "Comandos úteis:"
echo "  - Ver todos os logs: docker compose logs -f"
echo "  - Reiniciar serviços: docker compose restart"
echo "  - Parar tudo: docker compose down"
echo "  - Configurar SSL: bash scripts/setup-ssl.sh"
