# Futuramed Website - Quick Start Guide

## ✅ What Was Built

A complete Next.js 14 institutional website with:
- 6 pages (Home, About, Products, Contact, Registration, Landing)
- WhatsApp integration throughout
- Email system with file uploads
- Responsive design
- Docker deployment ready

## 🚀 Quick Deploy (on VPS 72.62.111.1)

```bash
# Clone repository
git clone https://github.com/ecfarias/futuramed.git
cd futuramed

# Setup environment
cp .env.example .env
nano .env  # Add your SMTP credentials

# Deploy with Docker
docker-compose up -d

# Check logs
docker-compose logs -f
```

## 📧 SMTP Configuration (Gmail)

1. Enable 2-factor auth on Gmail
2. Generate app password: https://myaccount.google.com/apppasswords
3. Add to `.env`:
```env
SMTP_USER=your-email@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx
```

## 🖼️ Replace Images

Upload your images to `public/images/`:
- `logo.png` - Your company logo
- `office-1.jpg`, `office-2.jpg` - Office photos
- `torre-medical.jpg` - Building photo
- `biochronic-table.jpg` - Product table
- `biochronic-components.jpg` - Product photos
- `biochronic-logo.jpg` - BioChronic logo

## 🔍 Test Locally

```bash
npm install
npm run dev
# Visit http://localhost:3000
```

## 📝 Important URLs

- Home: http://72.62.111.1/
- Products: http://72.62.111.1/produtos
- Registration: http://72.62.111.1/cadastro
- Landing: http://72.62.111.1/landing
- Contact: http://72.62.111.1/contato
- About: http://72.62.111.1/sobre

## ⚠️ Before Going Live

1. ✅ Replace all placeholder images
2. ✅ Configure SMTP credentials
3. ✅ Test email sending
4. ✅ Test form with all 5 documents
5. ✅ Test on mobile devices
6. ✅ Configure SSL certificate (Let's Encrypt)

## 🆘 Troubleshooting

**Email not sending?**
- Check SMTP credentials in `.env`
- For Gmail, use app password (not regular password)
- Check logs: `docker-compose logs -f`

**Port 80 in use?**
- Check: `sudo lsof -i :80`
- Stop other services or change port in `docker-compose.yml`

**Build fails?**
- Clear cache: `rm -rf .next node_modules`
- Reinstall: `npm install`
- Rebuild: `npm run build`

## 📞 Contact Info in Site

- WhatsApp: +55 51 98111-3836
- Email (for registrations): dudo.rs@gmail.com
- Address: RUA DAS ORQUIDEAS, 667 - SALA 802, INDAIATUBA/SP

## 🎯 Product Info

**BioChronic Kit:**
- REF: KBIOCR001
- ANVISA: Nº 80371259033
- 7 components included
- 100% sterile

---

**Status**: ✅ Ready for Production
**Last Updated**: 2026-01-25
