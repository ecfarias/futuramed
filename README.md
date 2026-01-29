# Futuramed Sports Medicine

Website institucional completo para a Futuramed Sports Medicine - Distribuidora especializada em produtos médicos para tratamento de dor crônica.

## 🚀 Tecnologias

- **Framework**: Next.js 14 com App Router
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Email**: Nodemailer
- **Containerização**: Docker + docker compose

## 📋 Estrutura do Projeto

```
futuramed/
├── app/                    # Páginas e rotas (App Router)
│   ├── page.tsx           # Home
│   ├── sobre/             # Página Sobre
│   ├── produtos/          # Página Produtos
│   ├── contato/           # Página Contato
│   ├── cadastro/          # Cadastro de Cliente
│   ├── landing/           # Landing Page
│   └── api/
│       └── cadastro/      # API para envio de email
├── components/            # Componentes reutilizáveis
├── lib/                   # Utilitários (email, etc)
├── public/               # Assets estáticos
│   └── images/           # Imagens do site
├── Dockerfile            # Configuração Docker
├── docker compose.yml    # Orquestração Docker
└── .env.example          # Variáveis de ambiente

```

## 📦 Instalação Local

### Pré-requisitos

- Node.js 20+
- npm ou yarn

### Passos

1. Clone o repositório:
```bash
git clone https://github.com/ecfarias/futuramed.git
cd futuramed
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local` com suas credenciais:
```env
# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WHATSAPP_NUMBER=5519995180739

# Email (use suas credenciais SMTP)
EMAIL_TO=cadastro@futuramedsp.com
SMTP_HOST=smtppro.zoho.com
SMTP_PORT=587
SMTP_USER=eduardo@futuramedsp.com
SMTP_PASS=Futura@2026
EMAIL_FROM=nao-responder@futuramedsp.com
```

4. Execute em modo de desenvolvimento:
```bash
npm run dev
```

5. Acesse: http://localhost:3000

## 🐳 Deploy com Docker

### Build e Execute Localmente

1. Build da imagem:
```bash
docker compose build
```

2. Execute o container:
```bash
docker compose up -d
```

3. Acesse: http://localhost

### Deploy no VPS (72.62.111.1)

1. Acesse o VPS via SSH:
```bash
ssh usuario@72.62.111.1
```

2. Clone o repositório:
```bash
git clone https://github.com/ecfarias/futuramed.git
cd futuramed
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
nano .env
```

Preencha com as credenciais reais:
```env
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-senha-app
```

4. Execute com Docker:
```bash
docker compose up -d
```

5. Verifique os logs:
```bash
docker compose logs -f
```

6. Acesse: http://72.62.111.1

### Comandos Úteis Docker

```bash
# Parar containers
docker compose down

# Reiniciar
docker compose restart

# Ver logs
docker compose logs -f futuramed-web

# Rebuild após mudanças
docker compose up -d --build
```

## 📧 Configuração de Email (SMTP)

### Opção 1: Gmail

1. Ative a verificação em 2 etapas na sua conta Google
2. Gere uma senha de aplicativo: https://myaccount.google.com/apppasswords
3. Use as credenciais no `.env`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu-email@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx
```

### Opção 2: SendGrid

```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=SG.sua-api-key
```

### Opção 3: Outros Provedores

- Mailgun
- Amazon SES
- Postmark

Configure de acordo com a documentação do provedor escolhido.

## 🎨 Estrutura de Páginas

### 1. Home (`/`)
- Hero section com logo
- Apresentação da empresa
- Destaque BioChronic
- CTAs para WhatsApp

### 2. Sobre (`/sobre`)
- História e missão
- Fotos das instalações
- Valores e diferenciais

### 3. Produtos (`/produtos`)
- Catálogo BioChronic
- Componentes do kit
- Especificações técnicas
- Registro ANVISA

### 4. Contato (`/contato`)
- **Apenas WhatsApp** (sem formulário de email)
- Endereço e informações
- CTAs para conversar

### 5. Cadastro de Cliente (`/cadastro`)
- Formulário com validação
- Upload de 5 documentos obrigatórios
- Envio por email com anexos

### 6. Landing Page (`/landing`)
- Foco em conversão
- Hero impactante
- Benefícios destacados
- CTA gigante

## 🔒 Segurança

- Validação de tipos de arquivo (PDF, JPG, PNG)
- Limite de tamanho: 5MB por arquivo
- Sanitização de inputs
- Headers de segurança configurados

## 📱 WhatsApp Integration

Número: **+55 19 99518 0739**

Formato do link:
```
https://wa.me/5519995180739?text=Mensagem
```

## 🎨 Identidade Visual

- **Cor Primária**: `#0EA5E9` (Azul ciano)
- **Cor Secundária**: `#00B0FF`
- **Cinza Escuro**: `#1F2937`
- **Cinza Claro**: `#F3F4F6`
- **Fonte**: Inter (Google Fonts)

## 📄 Documentos do Cadastro

1. Cadastro Nacional de Pessoa Jurídica - CNPJ
2. Autorização de Funcionamento da Empresa (AFE)
3. Licença / Alvará Sanitário Estadual ou Municipal
4. Alvará de Localização e Funcionamento
5. Certificado de Responsável Técnico

Todos devem ser anexados no formato PDF, JPG ou PNG (máx. 5MB cada).

## 🛠️ Desenvolvimento

### Scripts disponíveis

```bash
npm run dev      # Modo desenvolvimento
npm run build    # Build produção
npm run start    # Start produção
npm run lint     # Linter
```

### Adicionar novas imagens

Coloque as imagens em `public/images/` e use com:

```tsx
import Image from "next/image";

<Image
  src="/images/sua-imagem.jpg"
  alt="Descrição"
  width={800}
  height={600}
/>
```

## 🐛 Troubleshooting

### Build falha

```bash
# Limpe cache e reinstale
rm -rf .next node_modules
npm install
npm run build
```

### Email não envia

1. Verifique as credenciais SMTP no `.env`
2. Para Gmail, certifique-se de usar senha de aplicativo
3. Verifique os logs: `docker compose logs -f`

### Porta 80 já está em uso

```bash
# Encontre o processo
sudo lsof -i :80

# Mate o processo ou mude a porta no docker compose.yml
ports:
  - "8080:3000"
```

## 📞 Informações de Contato

- **Endereço**: Rua das Orquídeas, 667 sl. 802 | Indaiatuba | SP
- **WhatsApp**: +55 19 99518-0739
- **Email Cadastro**: cadastro@futuramedsp.com

## 📝 Licença

© 2024 Futuramed Sports Medicine. Todos os direitos reservados.

---

**Desenvolvido com ❤️ usando Next.js 14**
