# 🚨 RECUPERAÇÃO RÁPIDA - Timeout no HTTPS

## Problema Atual
O Nginx está tentando usar certificados SSL que não existem, causando falha na inicialização e timeout.

## ✅ Solução Rápida (Execute NO VPS)

### 1. Conectar no VPS
```bash
ssh root@72.61.27.131
```

### 2. Ir para o diretório do projeto
```bash
cd /var/www/futuramed
```

### 3. Atualizar código
```bash
git pull origin main
```

### 4. Usar configuração HTTP temporária
```bash
# Backup da configuração SSL
cp nginx.conf nginx.conf.ssl.bak

# Usar apenas HTTP temporariamente
cp nginx-http-only.conf nginx.conf
```

### 5. Reiniciar containers
```bash
docker compose down
docker compose up -d
```

### 6. Verificar se está funcionando
```bash
# Aguardar iniciar
sleep 10

# Testar HTTP
curl -I http://futuramedsp.com

# Ver logs
docker compose logs --tail=50 nginx
docker compose logs --tail=50 futuramed-web
```

**Agora o site deve estar acessível em HTTP:** http://futuramedsp.com

### 7. Obter certificados Let's Encrypt
```bash
docker compose run --rm certbot certonly \
  --webroot \
  --webroot-path=/var/www/certbot \
  --email cadastro@futuramedsp.com \
  --agree-tos \
  --no-eff-email \
  -d futuramedsp.com \
  -d www.futuramedsp.com
```

### 8. Ativar SSL
```bash
# Restaurar configuração SSL completa
cp nginx.conf.ssl.bak nginx.conf

# Reiniciar Nginx
docker compose restart nginx

# Aguardar
sleep 5

# Testar HTTPS
curl -I https://futuramedsp.com
```

**Pronto! Site com HTTPS funcionando:** https://futuramedsp.com 🔒

---

## 🎯 Ou Use o Script Automatizado

Todo o processo acima pode ser feito automaticamente:

```bash
cd /var/www/futuramed
bash scripts/setup-ssl.sh
```

Este script faz tudo automaticamente:
1. ✅ Faz backup da configuração SSL
2. ✅ Usa HTTP temporariamente
3. ✅ Obtém certificados Let's Encrypt
4. ✅ Restaura configuração SSL
5. ✅ Reinicia Nginx com HTTPS

---

## 🔍 Verificações

### Site está acessível?
```bash
# HTTP
curl -I http://futuramedsp.com

# HTTPS
curl -I https://futuramedsp.com
```

### Containers rodando?
```bash
docker compose ps
```

### Ver logs
```bash
# Todos os logs
docker compose logs --tail=100

# Apenas Nginx
docker compose logs --tail=50 nginx

# Apenas Certbot
docker compose logs certbot
```

### Certificados existem?
```bash
docker compose exec nginx ls -la /etc/letsencrypt/live/futuramedsp.com/
```

Deve mostrar:
- fullchain.pem
- privkey.pem
- chain.pem

---

## 💡 Explicação

**Por que o timeout?**
- O Nginx estava configurado para usar certificados SSL
- Os certificados não existiam
- O Nginx falhou ao iniciar
- Porta 443 não respondia = timeout

**A solução:**
1. Iniciar Nginx apenas com HTTP (porta 80)
2. Usar Let's Encrypt para obter certificados
3. Ativar SSL com os certificados reais

**Arquivos:**
- `nginx.conf` - Configuração SSL completa (produção)
- `nginx-http-only.conf` - Configuração temporária HTTP (obter certificados)

---

**Tempo estimado:** 5-10 minutos
