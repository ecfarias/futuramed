# Script de Deploy Completo - Futuramed
# Executa commit, push e deploy no VPS

param(
    [string]$mensagem = "Atualização do site"
)

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

Write-Host ""
Write-Host "=== Código enviado para GitHub! ===" -ForegroundColor Green
Write-Host ""
Write-Host "Agora, no seu terminal SSH do VPS, execute:" -ForegroundColor Cyan
Write-Host "cd /var/www/futuramed" -ForegroundColor White
Write-Host "git pull origin main" -ForegroundColor White
Write-Host "docker-compose down" -ForegroundColor White
Write-Host "docker-compose up -d --build" -ForegroundColor White
Write-Host ""
