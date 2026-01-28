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

# Parar containers
echo "2. Parando containers..."
docker-compose down

# Limpar imagens antigas (opcional)
echo "3. Limpando imagens antigas..."
docker image prune -f

# Reconstruir e iniciar
echo "4. Reconstruindo e iniciando containers..."
docker-compose up -d --build

# Aguardar containers iniciarem
echo "5. Aguardando containers iniciarem..."
sleep 5

# Verificar status
echo ""
echo "6. Verificando status dos containers..."
docker-compose ps

# Verificar logs
echo ""
echo "7. Logs do nginx:"
docker-compose logs --tail=15 nginx

echo ""
echo "8. Logs da aplicação:"
docker-compose logs --tail=15 futuramed-web

echo ""
echo "=== Deploy concluído! ==="
echo "Site disponível em: https://futuramedsp.com"
echo "IP direto: https://72.61.27.131"
echo ""
echo "Comandos úteis:"
echo "  - Ver todos os logs: docker-compose logs -f"
echo "  - Reiniciar serviços: docker-compose restart"
echo "  - Parar tudo: docker-compose down"
