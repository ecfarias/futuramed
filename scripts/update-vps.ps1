# Script de Atualização no VPS - Futuramed
# Executa apenas o deploy no VPS (assume que o código já está no GitHub)
# Use este script quando já tiver feito push e só quiser atualizar o VPS

param(
    [switch]$force,
    [switch]$logs
)

$VPS_IP = "72.61.27.131"
$VPS_USER = "root"

Write-Host "=== FUTURAMED - ATUALIZAÇÃO VPS ===" -ForegroundColor Cyan
Write-Host ""

# Verificar se há alterações não commitadas
$status = git status --porcelain
if ($status -and !$force) {
    Write-Host "⚠️  Atenção: Você tem alterações não commitadas!" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Alterações pendentes:" -ForegroundColor Yellow
    git status --short
    Write-Host ""
    Write-Host "Opções:" -ForegroundColor Cyan
    Write-Host "  1. Use '.\scripts\deploy-local.ps1' para fazer commit + push + deploy"
    Write-Host "  2. Use '.\scripts\update-vps.ps1 -force' para atualizar mesmo assim"
    Write-Host ""
    exit 1
}

# Verificar se o branch local está atualizado com o remoto
Write-Host "1. Verificando status do repositório..." -ForegroundColor Yellow
git fetch origin main -q

$local = git rev-parse '@'
$remote = git rev-parse '@{u}'

if ($local -ne $remote) {
    Write-Host "⚠️  Seu branch local está diferente do GitHub" -ForegroundColor Yellow
    Write-Host "   Execute 'git push' ou use '.\scripts\deploy-local.ps1'" -ForegroundColor Yellow
    Write-Host ""
    if (!$force) {
        Write-Host "Use -force para continuar mesmo assim" -ForegroundColor Gray
        exit 1
    }
}

Write-Host "✓ Repositório verificado" -ForegroundColor Green
Write-Host ""

# Executar deploy no VPS via SSH
Write-Host "2. Conectando ao VPS ($VPS_IP)..." -ForegroundColor Yellow
Write-Host "3. Executando deploy remoto..." -ForegroundColor Yellow
Write-Host ""
Write-Host "--- Saída do VPS ---" -ForegroundColor Gray

ssh "${VPS_USER}@${VPS_IP}" "bash /var/www/futuramed/scripts/deploy-vps.sh"

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "=== ✅ ATUALIZAÇÃO CONCLUÍDA! ===" -ForegroundColor Green
    Write-Host "Site disponível em: https://futuramedsp.com" -ForegroundColor Cyan
    Write-Host ""
    
    # Mostrar logs se solicitado
    if ($logs) {
        Write-Host "Logs da aplicação:" -ForegroundColor Yellow
        ssh "${VPS_USER}@${VPS_IP}" "cd /var/www/futuramed && docker compose logs --tail=20 futuramed-web"
    }
} else {
    Write-Host ""
    Write-Host "❌ Erro na atualização!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Para diagnóstico, execute:" -ForegroundColor Yellow
    Write-Host "  ssh ${VPS_USER}@${VPS_IP} 'cd /var/www/futuramed && docker compose logs --tail=50'" -ForegroundColor Gray
    exit 1
}
