#!/bin/bash

echo "🔍 DIAGNÓSTICO DE CONECTIVIDADE"
echo "================================"
echo ""

# 1. Verificar DNS
echo "1. DNS Resolution:"
echo "   futuramedsp.com:"
dig +short futuramedsp.com
echo "   www.futuramedsp.com:"
dig +short www.futuramedsp.com
echo ""

# 2. IP do servidor
echo "2. IP do Servidor:"
hostname -I | awk '{print $1}'
echo ""

# 3. Portas abertas
echo "3. Portas em uso:"
netstat -tlnp | grep -E ':(80|443) '
echo ""

# 4. Firewall (UFW)
echo "4. Status do Firewall:"
sudo ufw status || echo "UFW não instalado"
echo ""

# 5. Iptables
echo "5. Regras iptables:"
sudo iptables -L -n | grep -E '(80|443)'
echo ""

# 6. Testar porta 80 localmente
echo "6. Teste local porta 80:"
timeout 3 nc -zv localhost 80 2>&1 || echo "Porta 80 não responde"
echo ""

# 7. Containers rodando
echo "7. Containers ativos:"
docker ps --format "table {{.Names}}\t{{.Ports}}"
echo ""

echo "================================"
echo ""
echo "Para abrir portas no firewall, execute:"
echo "  sudo ufw allow 80/tcp"
echo "  sudo ufw allow 443/tcp"
echo ""
echo "Para testar externamente:"
echo "  curl -I http://futuramedsp.com"
