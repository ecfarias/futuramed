"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "futuramed_cadastro_form";

export default function CadastroPage() {
  const [formData, setFormData] = useState({
    razaoSocial: "",
    cnpj: "",
    email: "",
    telefone: "",
  });

  const [files, setFiles] = useState<{ [key: string]: File | null }>({
    doc_cnpj: null,
    doc_afe: null,
    doc_alvara_sanitario: null,
    doc_alvara_funcionamento: null,
    doc_certificado_tecnico: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [isAutoSaved, setIsAutoSaved] = useState(false);

  // Load saved form data on mount
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        if (parsed.formData) {
          setFormData(parsed.formData);
        }
        setIsAutoSaved(true);
        // Show notification that data was restored
        setMessage({
          type: "success",
          text: "✓ Seus dados foram restaurados automaticamente.",
        });
        // Clear the message after 3 seconds
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      } catch (error) {
        console.error("Error loading saved form data:", error);
      }
    }
  }, []);

  // Auto-save form data to localStorage
  useEffect(() => {
    if (formData.razaoSocial || formData.cnpj || formData.email || formData.telefone) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ formData }));
      setIsAutoSaved(true);
    }
  }, [formData]);

  const documentLabels = {
    doc_cnpj: "Cadastro Nacional de Pessoa Jurídica - CNPJ",
    doc_afe: "Autorização de Funcionamento da Empresa (AFE)",
    doc_alvara_sanitario: "Licença / Alvará Sanitário Estadual ou Municipal",
    doc_alvara_funcionamento: "Alvará de Localização e Funcionamento",
    doc_certificado_tecnico: "Certificado de Responsável Técnico",
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];
      if (!allowedTypes.includes(file.type)) {
        setMessage({
          type: "error",
          text: "Tipo de arquivo não permitido. Use apenas PDF, JPG ou PNG.",
        });
        return;
      }

      // Validate file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        setMessage({
          type: "error",
          text: "Arquivo muito grande. O tamanho máximo é 5MB.",
        });
        return;
      }

      setFiles({
        ...files,
        [fieldName]: file,
      });
      setMessage(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    // Validate all files are uploaded
    const allFilesUploaded = Object.values(files).every((file) => file !== null);
    if (!allFilesUploaded) {
      setMessage({
        type: "error",
        text: "Por favor, anexe todos os 5 documentos obrigatórios.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("razaoSocial", formData.razaoSocial);
      formDataToSend.append("cnpj", formData.cnpj);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("telefone", formData.telefone);

      Object.entries(files).forEach(([key, file]) => {
        if (file) {
          formDataToSend.append(key, file);
        }
      });

      const response = await fetch("/api/cadastro", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({
          type: "success",
          text: "Cadastro enviado com sucesso! Entraremos em contato em breve.",
        });
        // Clear localStorage after successful submission
        localStorage.removeItem(STORAGE_KEY);
        setIsAutoSaved(false);
        // Reset form
        setFormData({
          razaoSocial: "",
          cnpj: "",
          email: "",
          telefone: "",
        });
        setFiles({
          doc_cnpj: null,
          doc_afe: null,
          doc_alvara_sanitario: null,
          doc_alvara_funcionamento: null,
          doc_certificado_tecnico: null,
        });
        // Reset file inputs
        const fileInputs = document.querySelectorAll('input[type="file"]');
        fileInputs.forEach((input) => {
          (input as HTMLInputElement).value = "";
        });
      } else {
        setMessage({
          type: "error",
          text: data.error || "Erro ao enviar cadastro. Tente novamente.",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Erro ao enviar cadastro. Verifique sua conexão e tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cadastro de Cliente</h1>
          <p className="text-xl">Complete seu cadastro para se tornar nosso parceiro</p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-primary rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-dark mb-2">Documentos Necessários</h3>
              <p className="text-gray-700 mb-4">
                Para completar seu cadastro, você precisará enviar os seguintes documentos (PDF, JPG ou PNG - máx. 5MB cada):
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {Object.values(documentLabels).map((label, index) => (
                  <li key={index}>{label}</li>
                ))}
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
              {/* Auto-save Indicator */}
              {isAutoSaved && !message && (
                <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-center text-sm text-blue-800">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Seus dados estão sendo salvos automaticamente
                </div>
              )}
              
              {/* Message */}
              {message && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    message.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {message.text}
                </div>
              )}

              {/* Basic Info */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-dark mb-6">Informações da Empresa</h2>
                
                <div className="mb-6">
                  <label htmlFor="razaoSocial" className="block text-gray-700 font-semibold mb-2">
                    Nome / Razão Social *
                  </label>
                  <input
                    type="text"
                    id="razaoSocial"
                    name="razaoSocial"
                    value={formData.razaoSocial}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="cnpj" className="block text-gray-700 font-semibold mb-2">
                    CNPJ / CPF *
                  </label>
                  <input
                    type="text"
                    id="cnpj"
                    name="cnpj"
                    value={formData.cnpj}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="00.000.000/0000-00"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="telefone" className="block text-gray-700 font-semibold mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              {/* Documents */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-dark mb-6">Documentos Obrigatórios</h2>
                
                {Object.entries(documentLabels).map(([fieldName, label]) => (
                  <div key={fieldName} className="mb-6">
                    <label htmlFor={fieldName} className="block text-gray-700 font-semibold mb-2">
                      {label} *
                    </label>
                    <input
                      type="file"
                      id={fieldName}
                      name={fieldName}
                      onChange={(e) => handleFileChange(e, fieldName)}
                      accept=".pdf,.jpg,.jpeg,.png"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-dark"
                    />
                    {files[fieldName] && (
                      <p className="mt-2 text-sm text-green-600 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Arquivo selecionado: {files[fieldName]?.name}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex-1 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors ${
                    isSubmitting
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-primary-dark"
                  }`}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Cadastro"}
                </button>
              </div>

              <p className="mt-6 text-sm text-gray-600 text-center">
                Ao enviar este formulário, você concorda com nossos termos de uso e política de privacidade.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-dark mb-6">
              Dúvidas sobre o cadastro?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Entre em contato conosco pelo WhatsApp para obter ajuda com o processo de cadastro.
            </p>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5551981113836"}?text=${encodeURIComponent("Olá! Preciso de ajuda com o cadastro de cliente.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
