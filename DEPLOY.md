# 🚀 Guia de Deploy - Futuramed

## 📋 Pré-requisitos

### No GitHub
1. Criar repositório no GitHub (ex: `usuario/futuramed`)
2. Adicionar o remote localmente:
   ```bash
   git remote add origin https://github.com/usuario/futuramed.git
   ```

### No VPS (72.61.27.131)
- Docker e Docker Compose instalados
- Domínio futuramedsp.com apontando para o IP do VPS (DNS configurado)

## 🔄 Fluxo de Deploy

```
[Seu Computador] --git push--> [GitHub] --git pull--> [VPS] --docker build--> [Site no Ar]
```

## 📝 Passo a Passo

### 1️⃣ Preparar Certificados SSL no VPS

Primeiro acesso via SSH ao VPS:
```bash
ssh usuario@72.61.27.131
```

Opção A - Certificado Let's Encrypt (RECOMENDADO para produção):
```bash
sudo apt update
sudo apt install certbot -y
sudo certbot certonly --standalone -d futuramedsp.com -d www.futuramedsp.com
```

Opção B - Certificado auto-assinado (apenas para teste):
```bash
cd /var/www/futuramed
bash scripts/generate-ssl.sh
```

### 2️⃣ Commit e Push Local (no seu PC)

```powershell
# Usando o script PowerShell
.\scripts\deploy-local.ps1 -mensagem "Deploy inicial do site Futuramed"
```

Ou manualmente:
```powershell
git add .
git commit -m "Deploy inicial do site Futuramed"
git push origin main
```

### 3️⃣ Deploy no VPS

Conectar via SSH:
```bash
ssh usuario@72.61.27.131
```

Primeira vez (clonar repositório):
```bash
cd /var/www
git clone https://github.com/usuario/futuramed.git
cd futuramed
```

Deploy (primeira vez ou atualizações):
```bash
cd /var/www/futuramed
bash scripts/deploy-vps.sh
```

## ✅ Verificação

Após o deploy, o site estará disponível em:
- 🌐 https://futuramedsp.com
- 🔢 https://72.61.27.131

## 🔧 Comandos Úteis

### Ver logs em tempo real
```bash
cd /var/www/futuramed
docker compose logs -f
```

### Ver logs apenas do nginx
```bash
docker compose logs -f nginx
```

### Ver logs apenas da aplicação
```bash
docker compose logs -f futuramed-web
```

### Reiniciar serviços
```bash
docker compose restart
```

### Parar todos os serviços
```bash
docker compose down
```

### Reconstruir tudo do zero
```bash
docker compose down
docker system prune -af
docker compose up -d --build
```

## 🔐 Configurar Let's Encrypt (após primeiro deploy)

1. Obter certificados (se ainda não fez):
```bash
sudo certbot certonly --standalone -d futuramedsp.com -d www.futuramedsp.com
```

2. Atualizar `nginx.conf` no código:
   - Descomentar linhas do Let's Encrypt
   - Comentar linhas dos certificados temporários

3. Atualizar `docker compose.yml`:
   - Adicionar volume: `- /etc/letsencrypt:/etc/letsencrypt:ro`

4. Fazer commit e push das mudanças

5. No VPS, fazer deploy novamente:
```bash
cd /var/www/futuramed
bash scripts/deploy-vps.sh
```

## 📧 Configurar E-mail (Opcional)

Criar arquivo `.env` no VPS em `/var/www/futuramed/.env`:
```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-senha-app
EMAIL_FROM=noreply@futuramedsp.com
```

Depois reiniciar:
```bash
docker compose restart
```

## 🆘 Troubleshooting

### Site não carrega
```bash
# Verificar se containers estão rodando
docker compose ps

# Ver logs de erros
docker compose logs --tail=50

# Verificar portas
sudo netstat -tulpn | grep -E '80|443'
```

### Certificado SSL inválido
- Certifique-se que o DNS está apontando corretamente
- Aguarde alguns minutos para propagação do DNS
- Use `nslookup futuramedsp.com` para verificar

### Erro ao fazer git pull
```bash
# Resetar mudanças locais (cuidado!)
git reset --hard origin/main
git pull
```

## 📱 Contatos

- WhatsApp: 5519995180739
- E-mail: cadastro@futuramedsp.com
