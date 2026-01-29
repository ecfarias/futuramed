# 🚀 Checklist de Deploy com SSL

Use este checklist para garantir que tudo está correto.

## ✅ Pré-Deploy (Local)

- [ ] Código testado localmente
- [ ] Todas as mudanças commitadas
- [ ] README atualizado se necessário
- [ ] Variáveis de ambiente verificadas

## 📤 Deploy

### Primeira Vez (Com SSL)

```bash
# 1. Deploy do código
.\scripts\deploy-local.ps1 -mensagem "Configurar SSL"

# 2. Conectar no VPS
ssh root@72.61.27.131

# 3. Configurar SSL (APENAS primeira vez)
cd /var/www/futuramed
bash scripts/setup-ssl.sh
```

### Próximos Deploys

```bash
# Apenas fazer deploy
.\scripts\deploy-local.ps1 -mensagem "Sua mensagem"
```

## 🔍 Verificações Pós-Deploy (NO VPS)

### 1. Verificar Containers
```bash
docker-compose ps
```
Todos devem estar `Up`

### 2. Verificar Logs
```bash
# Nginx
docker-compose logs --tail=50 nginx

# Aplicação
docker-compose logs --tail=50 futuramed-web

# Certbot
docker-compose logs --tail=20 certbot
```

### 3. Verificar Certificados SSL
```bash
docker-compose exec certbot certbot certificates
```

Deve mostrar:
- Domínios: futuramedsp.com, www.futuramedsp.com
- Expiry Date: ~90 dias no futuro
- Certificate Path: /etc/letsencrypt/live/futuramedsp.com/fullchain.pem

### 4. Testar URLs

No navegador, verificar:
- [ ] http://futuramedsp.com → Redireciona para HTTPS ✅
- [ ] https://futuramedsp.com → Carrega com cadeado verde 🔒
- [ ] https://www.futuramedsp.com → Carrega com cadeado verde 🔒

### 5. Verificar DNS
```bash
dig +short futuramedsp.com
# Deve retornar: 72.61.27.131
```

### 6. Verificar Portas Abertas
```bash
sudo ufw status
# 80/tcp ALLOW
# 443/tcp ALLOW
```

Ou testar externamente:
```bash
# No seu computador
Test-NetConnection -ComputerName 72.61.27.131 -Port 80
Test-NetConnection -ComputerName 72.61.27.131 -Port 443
```

### 7. Verificar Headers de Segurança

No navegador, abrir DevTools (F12) → Network → Selecionar o documento principal → Headers

Deve conter:
- `Strict-Transport-Security: max-age=31536000; includeSubDomains`
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`

Ou via curl:
```bash
curl -I https://futuramedsp.com
```

## 🔧 Comandos Úteis

```bash
# Ver todos os logs em tempo real
docker-compose logs -f

# Reiniciar apenas o Nginx
docker-compose restart nginx

# Reiniciar tudo
docker-compose restart

# Parar tudo
docker-compose down

# Iniciar tudo
docker-compose up -d

# Reconstruir e iniciar
docker-compose up -d --build

# Ver uso de recursos
docker stats

# Limpar containers parados
docker system prune

# Verificar renovação SSL (teste)
docker-compose exec certbot certbot renew --dry-run

# Forçar renovação SSL
docker-compose exec certbot certbot renew --force-renewal
docker-compose restart nginx
```

## 🚨 Solução de Problemas

### Problema: Timeout no HTTPS

**Causa:** Certificados não configurados ou Nginx não iniciou

**Solução:**
```bash
# Verificar logs
docker-compose logs nginx

# Verificar se certificados existem
docker-compose exec nginx ls -la /etc/letsencrypt/live/futuramedsp.com/

# Se não existirem, executar setup-ssl.sh
bash scripts/setup-ssl.sh
```

### Problema: Certbot falha ao obter certificados

**Causa:** DNS não está apontando corretamente ou porta 80 bloqueada

**Solução:**
```bash
# Verificar DNS
dig +short futuramedsp.com

# Verificar se porta 80 está acessível
curl -I http://futuramedsp.com/.well-known/acme-challenge/test

# Verificar firewall
sudo ufw status
```

### Problema: Aplicação não carrega

**Causa:** Container futuramed-web com problemas

**Solução:**
```bash
# Ver logs detalhados
docker-compose logs futuramed-web

# Reiniciar container
docker-compose restart futuramed-web

# Se persistir, reconstruir
docker-compose up -d --build futuramed-web
```

### Problema: Certificados expiraram

**Causa:** Renovação automática falhou

**Solução:**
```bash
# Forçar renovação
docker-compose exec certbot certbot renew --force-renewal

# Reiniciar Nginx
docker-compose restart nginx

# Verificar logs do Certbot
docker-compose logs certbot
```

## 📊 Monitoramento

### Verificar Status Geral
```bash
# Status dos containers
docker-compose ps

# Uso de recursos
docker stats

# Logs gerais
docker-compose logs --tail=100
```

### Verificar Validade dos Certificados
```bash
# Via Certbot
docker-compose exec certbot certbot certificates

# Via OpenSSL
echo | openssl s_client -servername futuramedsp.com -connect futuramedsp.com:443 2>/dev/null | openssl x509 -noout -dates
```

### Verificar Próxima Renovação
```bash
docker-compose exec certbot certbot certificates
# Verifica "Expiry Date"
```

## 🎯 Métricas de Sucesso

- [ ] Site carrega via HTTPS
- [ ] Cadeado verde no navegador
- [ ] Sem erros no console do navegador
- [ ] Tempo de resposta < 2 segundos
- [ ] Todos os containers rodando
- [ ] Certificados válidos por > 60 dias
- [ ] Headers de segurança presentes

---

**Última atualização:** 28 de janeiro de 2026
