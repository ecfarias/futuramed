import { NextRequest, NextResponse } from "next/server";
import { sendEmail, generateCadastroEmailHTML } from "@/lib/email";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Extract form fields
    const razaoSocial = formData.get("razaoSocial") as string;
    const cnpj = formData.get("cnpj") as string;
    const email = formData.get("email") as string;
    const telefone = formData.get("telefone") as string;

    // Validate required fields
    if (!razaoSocial || !cnpj || !email || !telefone) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    // Extract and validate files
    const requiredFiles = [
      "doc_cnpj",
      "doc_afe",
      "doc_alvara_sanitario",
      "doc_alvara_funcionamento",
      "doc_certificado_tecnico",
    ];

    const fileLabels: { [key: string]: string } = {
      doc_cnpj: "CNPJ",
      doc_afe: "AFE",
      doc_alvara_sanitario: "Alvará Sanitário",
      doc_alvara_funcionamento: "Alvará de Funcionamento",
      doc_certificado_tecnico: "Certificado Técnico",
    };

    const attachments = [];

    for (const fileKey of requiredFiles) {
      const file = formData.get(fileKey) as File;

      if (!file) {
        return NextResponse.json(
          { error: `O documento "${fileLabels[fileKey]}" é obrigatório.` },
          { status: 400 }
        );
      }

      // Validate file type
      if (!ALLOWED_TYPES.includes(file.type)) {
        return NextResponse.json(
          {
            error: `O arquivo "${fileLabels[fileKey]}" deve ser PDF, JPG ou PNG.`,
          },
          { status: 400 }
        );
      }

      // Validate file size
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          {
            error: `O arquivo "${fileLabels[fileKey]}" excede o tamanho máximo de 5MB.`,
          },
          { status: 400 }
        );
      }

      // Convert file to buffer
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      attachments.push({
        filename: `${fileLabels[fileKey]}_${file.name}`,
        content: buffer,
        contentType: file.type,
      });
    }

    // Generate email HTML
    const emailHTML = generateCadastroEmailHTML({
      razaoSocial,
      cnpj,
      email,
      telefone,
    });

    // Send email
    const emailTo = process.env.EMAIL_TO || "dudo.rs@gmail.com";
    await sendEmail({
      to: emailTo,
      subject: `Novo Cadastro de Cliente - ${razaoSocial}`,
      html: emailHTML,
      attachments,
    });

    return NextResponse.json(
      { success: true, message: "Cadastro enviado com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing cadastro:", error);
    return NextResponse.json(
      { error: "Erro ao processar cadastro. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}
