# Script para renovar SSL no VPS
param()

$VPS_IP = "72.61.27.131"
$VPS_USER = "root"

Write-Host "=== RENOVAÇÃO DE SSL NO VPS ===" -ForegroundColor Cyan
Write-Host ""

ssh "${VPS_USER}@${VPS_IP}" "bash /var/www/futuramed/scripts/renew-ssl.sh"
