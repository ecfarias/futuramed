# Script de Deploy Completo - Futuramed
# Executa commit, push e deploy automatizado no VPS via SSH

param(
    [string]$mensagem = "Atualização do site"
)

$VPS_IP = "72.61.27.131"
$VPS_USER = "root"

Write-Host "=== FUTURAMED - DEPLOY COMPLETO ===" -ForegroundColor Cyan
Write-Host ""

# 1. Git Add
Write-Host "1. Adicionando arquivos ao Git..." -ForegroundColor Yellow
git add .

# 2. Git Commit
Write-Host "2. Fazendo commit: $mensagem" -ForegroundColor Yellow
git commit -m "$mensagem"

# 3. Git Push
Write-Host "3. Enviando para GitHub..." -ForegroundColor Yellow
git push origin main

if ($LASTEXITCODE -ne 0) {
    Write-Host "Erro ao fazer push!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "=== Código enviado para GitHub! ===" -ForegroundColor Green
Write-Host ""

# 4. Deploy no VPS via SSH
Write-Host "4. Executando deploy no VPS via SSH..." -ForegroundColor Yellow
ssh "${VPS_USER}@${VPS_IP}" "bash /var/www/futuramed/scripts/deploy-vps.sh"

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "=== DEPLOY CONCLUÍDO! ===" -ForegroundColor Green
    Write-Host "Site disponível em: https://futuramedsp.com" -ForegroundColor Cyan
} else {
    Write-Host ""
    Write-Host "Erro no deploy automático. Execute manualmente no VPS:" -ForegroundColor Yellow
    Write-Host "ssh ${VPS_USER}@${VPS_IP}" -ForegroundColor White
    Write-Host "cd /var/www/futuramed" -ForegroundColor White
    Write-Host "bash scripts/deploy-vps.sh" -ForegroundColor White
}

Write-Host ""
