import nodemailer from "nodemailer";

export async function sendEmail({
  to,
  subject,
  html,
  attachments,
}: {
  to: string;
  subject: string;
  html: string;
  attachments?: Array<{
    filename: string;
    content: Buffer;
    contentType: string;
  }>;
}) {
  console.log("=== DEBUG SMTP CONFIG ===");
  console.log("SMTP_HOST:", process.env.SMTP_HOST);
  console.log("SMTP_PORT:", process.env.SMTP_PORT);
  console.log("SMTP_USER:", process.env.SMTP_USER);
  console.log("========================");

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM || "noreply@futuramed.com",
    to,
    subject,
    html,
    attachments,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

export function generateCadastroEmailHTML(data: {
  razaoSocial: string;
  cnpj: string;
  email: string;
  telefone: string;
}) {
  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Novo Cadastro de Cliente</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #0EA5E9, #00B0FF);
      color: white;
      padding: 30px;
      text-align: center;
      border-radius: 8px 8px 0 0;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      background: #f9fafb;
      padding: 30px;
      border: 1px solid #e5e7eb;
      border-top: none;
    }
    .info-row {
      margin-bottom: 20px;
      padding: 15px;
      background: white;
      border-radius: 6px;
      border-left: 4px solid #0EA5E9;
    }
    .info-label {
      font-weight: bold;
      color: #1F2937;
      margin-bottom: 5px;
    }
    .info-value {
      color: #4B5563;
    }
    .documents {
      margin-top: 30px;
      padding: 20px;
      background: #fff;
      border-radius: 6px;
      border: 2px dashed #0EA5E9;
    }
    .documents h2 {
      color: #1F2937;
      margin-top: 0;
    }
    .documents ul {
      list-style: none;
      padding: 0;
    }
    .documents li {
      padding: 8px 0;
      border-bottom: 1px solid #e5e7eb;
    }
    .documents li:last-child {
      border-bottom: none;
    }
    .footer {
      text-align: center;
      margin-top: 30px;
      padding: 20px;
      color: #6B7280;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>🏥 Novo Cadastro de Cliente</h1>
    <p>Futuramed Sports Medicine</p>
  </div>
  
  <div class="content">
    <p>Um novo cliente realizou cadastro através do site. Seguem os dados:</p>
    
    <div class="info-row">
      <div class="info-label">Razão Social / Nome:</div>
      <div class="info-value">${data.razaoSocial}</div>
    </div>
    
    <div class="info-row">
      <div class="info-label">CNPJ / CPF:</div>
      <div class="info-value">${data.cnpj}</div>
    </div>
    
    <div class="info-row">
      <div class="info-label">Email:</div>
      <div class="info-value">${data.email}</div>
    </div>
    
    <div class="info-row">
      <div class="info-label">Telefone:</div>
      <div class="info-value">${data.telefone}</div>
    </div>
    
    <div class="documents">
      <h2>📎 Documentos Anexados</h2>
      <ul>
        <li>✅ Cadastro Nacional de Pessoa Jurídica - CNPJ</li>
        <li>✅ Autorização de Funcionamento da Empresa (AFE)</li>
        <li>✅ Licença / Alvará Sanitário Estadual ou Municipal</li>
        <li>✅ Alvará de Localização e Funcionamento</li>
        <li>✅ Certificado de Responsável Técnico</li>
      </ul>
      <p style="margin-top: 15px; color: #6B7280; font-size: 14px;">
        Todos os documentos estão anexados a este email.
      </p>
    </div>
  </div>
  
  <div class="footer">
    <p>Este é um email automático do sistema de cadastro da Futuramed Sports Medicine.</p>
    <p>Data: ${new Date().toLocaleString("pt-BR")}</p>
  </div>
</body>
</html>
  `;
}
