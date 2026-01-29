# Guia de Configuração SSL com Let's Encrypt

Este guia explica como configurar certificados SSL gratuitos do Let's Encrypt no seu VPS.

## Pré-requisitos

✅ Domínio apontando para o VPS (futuramedsp.com)  
✅ Portas 80 e 443 abertas no firewall  
✅ Docker e Docker Compose instalados  
✅ Código atualizado no VPS

## Passo 1: Fazer Deploy do Código Atualizado

No seu computador local, faça commit e push das alterações:

```bash
git add .
git commit -m "Configurar SSL com Let's Encrypt"
git push origin main
```

## Passo 2: Conectar no VPS

```bash
ssh root@72.61.27.131
```

## Passo 3: Atualizar Código no VPS

```bash
cd /var/www/futuramed
bash scripts/deploy-vps.sh
```

## Passo 4: Configurar SSL (Primeira Vez)

**IMPORTANTE:** Este passo deve ser executado apenas UMA vez, na primeira configuração.

```bash
cd /var/www/futuramed
bash scripts/setup-ssl.sh
```

O script irá:
1. Parar os containers
2. Validar o DNS
3. Iniciar Nginx em modo HTTP
4. Obter certificados do Let's Encrypt
5. Reiniciar tudo com HTTPS funcionando

## Passo 5: Verificar SSL

Acesse no navegador:
- https://futuramedsp.com
- https://www.futuramedsp.com

Você deve ver o cadeado verde! 🔒

## Renovação Automática

Os certificados serão renovados automaticamente pelo container Certbot que verifica a renovação a cada 12 horas.

Para verificar a renovação manualmente:

```bash
docker compose exec certbot certbot renew --dry-run
```

## Solução de Problemas

### Erro: Certificados não encontrados

Se o Nginx não encontrar os certificados, execute:

```bash
# Ver logs do Nginx
docker compose logs nginx

# Tentar obter certificados novamente
docker compose run --rm certbot certonly \
  --webroot \
  --webroot-path=/var/www/certbot \
  --email cadastro@futuramedsp.com \
  --agree-tos \
  --no-eff-email \
  -d futuramedsp.com \
  -d www.futuramedsp.com

# Reiniciar Nginx
docker compose restart nginx
```

### Erro: Timeout na porta 443

Verifique o firewall:

```bash
# Verificar portas abertas
sudo ufw status

# Abrir portas necessárias
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

### Erro: DNS não resolve

Verifique se o domínio aponta para o IP correto:

```bash
dig +short futuramedsp.com
# Deve retornar: 72.61.27.131

nslookup futuramedsp.com
```

## Comandos Úteis

```bash
# Ver status dos containers
docker compose ps

# Ver logs em tempo real
docker compose logs -f

# Ver apenas logs do Nginx
docker compose logs -f nginx

# Ver apenas logs do Certbot
docker compose logs certbot

# Reiniciar Nginx
docker compose restart nginx

# Recriar tudo do zero
docker compose down
docker compose up -d --build

# Verificar validade dos certificados
docker compose exec certbot certbot certificates

# Forçar renovação (teste)
docker compose exec certbot certbot renew --dry-run

# Forçar renovação (real - use com cuidado)
docker compose exec certbot certbot renew --force-renewal
```

## Estrutura de Volumes

Os certificados são armazenados em volumes Docker:

- `certbot-etc`: Certificados Let's Encrypt (`/etc/letsencrypt`)
- `certbot-var`: Dados do Certbot (`/var/lib/letsencrypt`)
- `certbot-www`: Diretório para validação ACME (`/var/www/certbot`)

Esses volumes persistem mesmo quando os containers são recriados.

## Próximos Deploys

Nos próximos deploys, NÃO é necessário executar `setup-ssl.sh` novamente.

Apenas execute:

```bash
cd /var/www/futuramed
bash scripts/deploy-vps.sh
```

Os certificados serão mantidos e renovados automaticamente.

---

**Dúvidas?** Entre em contato com a equipe de desenvolvimento.
