# Certificados SSL

Esta pasta contém os certificados SSL para o nginx.

## Configuração Inicial (Certificados Auto-Assinados)

Para desenvolvimento/teste inicial, criar certificados auto-assinados:

```bash
# No VPS, dentro do diretório do projeto
mkdir -p ssl
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout ssl/key.pem \
  -out ssl/cert.pem \
  -subj "/C=BR/ST=SP/L=SaoPaulo/O=FuturaMed/CN=futuramedsp.com"
```

## Configuração com Let's Encrypt (Recomendado para Produção)

### 1. Instalar Certbot no VPS

```bash
sudo apt update
sudo apt install certbot python3-certbot-nginx -y
```

### 2. Obter certificado

```bash
sudo certbot certonly --standalone -d futuramedsp.com -d www.futuramedsp.com
```

### 3. Atualizar nginx.conf

Descomentar as linhas no arquivo `nginx.conf`:

```nginx
ssl_certificate /etc/letsencrypt/live/futuramedsp.com/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/futuramedsp.com/privkey.pem;
```

E comentar as linhas temporárias.

### 4. Atualizar docker compose.yml

Adicionar volume no serviço nginx:

```yaml
volumes:
  - /etc/letsencrypt:/etc/letsencrypt:ro
```

### 5. Renovação Automática

O Certbot configura automaticamente um cron job para renovação.

Para testar a renovação:

```bash
sudo certbot renew --dry-run
```

## Após configurar certificados

Reiniciar os containers:

```bash
docker compose restart nginx
```
