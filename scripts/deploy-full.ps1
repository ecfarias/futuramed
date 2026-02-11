# Script de Deploy COMPLETO - Reconstrução total no VPS
param()

$VPS_IP = "72.61.27.131"
$VPS_USER = "root"

Write-Host "=== DEPLOY COMPLETO (RECONSTRUÇÃO TOTAL) ===" -ForegroundColor Red
Write-Host ""
Write-Host "ATENÇÃO: Este script vai:" -ForegroundColor Yellow
Write-Host "  - Parar todos os containers" -ForegroundColor Yellow
Write-Host "  - Limpar cache do Docker" -ForegroundColor Yellow
Write-Host "  - Reconstruir tudo do zero" -ForegroundColor Yellow
Write-Host "  - Downtime de ~2-3 minutos" -ForegroundColor Yellow
Write-Host ""

$confirm = Read-Host "Confirma? (S/N)"
if ($confirm -ne "S" -and $confirm -ne "s") {
    Write-Host "Cancelado." -ForegroundColor Gray
    exit 0
}

Write-Host ""
Write-Host "Executando deploy completo no VPS..." -ForegroundColor Cyan
Write-Host ""

ssh "${VPS_USER}@${VPS_IP}" "bash /var/www/futuramed/scripts/deploy-full.sh"

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "=== ✅ DEPLOY COMPLETO FINALIZADO! ===" -ForegroundColor Green
    Write-Host ""
    Write-Host "Teste agora:" -ForegroundColor Cyan
    Write-Host "  https://futuramedsp.com/produtos/bioblock" -ForegroundColor Gray
    Write-Host "  https://futuramedsp.com/produtos/biochronic" -ForegroundColor Gray
    Write-Host "  https://futuramedsp.com/produtos/jointsmulti" -ForegroundColor Gray
} else {
    Write-Host ""
    Write-Host "❌ Erro no deploy!" -ForegroundColor Red
    exit 1
}
