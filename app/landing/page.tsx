export default function LandingPage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5551981113836";
  const message = encodeURIComponent("Olá! Vi a página do BioChronic e gostaria de mais informações!");

  return (
    <div className="bg-white">
      {/* Hero Impactante */}
      <section className="relative bg-gradient-to-br from-primary via-blue-600 to-blue-700 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              BioChronic
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-semibold">
              Kit Completo para Tratamento de Dor Crônica
            </p>
            <p className="text-xl md:text-2xl mb-10 opacity-90">
              Tudo que você precisa em um único kit estéril e certificado pela ANVISA
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-12 py-6 rounded-lg font-bold text-2xl transition-all hover:scale-105 inline-flex items-center shadow-2xl"
            >
              <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              FALE CONOSCO AGORA
            </a>
            <p className="mt-6 text-lg opacity-75">
              🔒 Atendimento rápido e personalizado via WhatsApp
            </p>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-dark mb-4">
            Por que escolher o BioChronic?
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Desenvolvido para profissionais que exigem qualidade, segurança e eficiência
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow">
              <div className="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">100% Estéril</h3>
              <p className="text-lg text-gray-700">
                Produto completamente estéril, garantindo máxima segurança para você e seus pacientes.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow">
              <div className="bg-blue-100 text-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">Kit Completo</h3>
              <p className="text-lg text-gray-700">
                Todos os 7 componentes necessários em um único kit. Praticidade e economia.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow">
              <div className="bg-purple-100 text-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">Certificado ANVISA</h3>
              <p className="text-lg text-gray-700">
                Registro ANVISA Nº 80371259033. Conformidade total com as normas brasileiras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Componentes do Kit */}
      <section className="py-16 md:py-24 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-dark mb-4">
            O que está incluído?
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            7 componentes essenciais para procedimentos seguros e eficazes
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Escalpe para coleta de sangue",
                "Adaptador convencional para coleta",
                "Válvula 3 vias",
                "Seringa 20ml",
                "Tubo coletor PRP",
                "Cânula 20G x 100mm",
                "Agulhas 18G e 21G para seringa",
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex items-center">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4 text-xl font-bold">
                    {index + 1}
                  </div>
                  <p className="text-lg text-dark font-medium">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center">
              <p className="text-lg text-gray-700 mb-2">
                <strong>Código de Referência:</strong>
              </p>
              <p className="text-3xl font-bold text-primary mb-6">KBIOCR001</p>
              <p className="text-gray-600">
                Todos os componentes em embalagem individual lacrada e estéril
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social / Diferenciais */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-dark mb-16">
              Por que profissionais confiam na Futuramed?
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex items-start">
                <div className="bg-primary text-white rounded-lg p-3 mr-4 flex-shrink-0">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-2">Qualidade Garantida</h3>
                  <p className="text-lg text-gray-700">
                    Produtos com certificação ANVISA e padrões internacionais de qualidade.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary text-white rounded-lg p-3 mr-4 flex-shrink-0">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-2">Suporte Dedicado</h3>
                  <p className="text-lg text-gray-700">
                    Atendimento rápido e personalizado via WhatsApp. Estamos sempre disponíveis.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary text-white rounded-lg p-3 mr-4 flex-shrink-0">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-2">Entrega Ágil</h3>
                  <p className="text-lg text-gray-700">
                    Logística eficiente para garantir que você tenha o produto quando precisar.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary text-white rounded-lg p-3 mr-4 flex-shrink-0">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-2">Expertise</h3>
                  <p className="text-lg text-gray-700">
                    Conhecimento especializado em medicina esportiva e tratamento de dor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Gigante */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-green-500 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Pronto para começar?
            </h2>
            <p className="text-2xl md:text-3xl mb-12">
              Fale conosco agora e descubra como o BioChronic pode transformar seu tratamento de dor crônica
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 hover:bg-gray-100 px-16 py-8 rounded-lg font-bold text-3xl transition-all hover:scale-105 inline-flex items-center shadow-2xl"
            >
              <svg className="w-10 h-10 mr-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              SOLICITAR INFORMAÇÕES
            </a>
            <p className="mt-8 text-xl">
              ⚡ Resposta rápida | 💬 Atendimento personalizado | 🔒 100% Seguro
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
