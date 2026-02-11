# Script para verificar SSL no VPS
param()

$VPS_IP = "72.61.27.131"
$VPS_USER = "root"

Write-Host "=== VERIFICAÇÃO DE SSL NO VPS ===" -ForegroundColor Cyan
Write-Host ""

ssh "${VPS_USER}@${VPS_IP}" "bash /var/www/futuramed/scripts/check-ssl.sh"

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "Para renovar manualmente (se necessário):" -ForegroundColor Yellow
    Write-Host "  .\scripts\renew-ssl.ps1" -ForegroundColor Gray
}
