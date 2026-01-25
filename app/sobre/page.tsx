import Image from "next/image";

export default function SobrePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre a Futuramed</h1>
          <p className="text-xl">Conheça nossa história, missão e valores</p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark mb-6">Nossa História</h2>
            <p className="text-lg text-gray-700 mb-6">
              A Futuramed Sports Medicine nasceu com o propósito de fornecer produtos médicos 
              de alta qualidade para profissionais da área da saúde, especialmente voltados 
              para o tratamento de dor crônica.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Com sede em Indaiatuba/SP, nossa empresa se dedica a oferecer soluções 
              inovadoras que combinam tecnologia avançada, segurança e eficácia para 
              melhorar a qualidade de vida dos pacientes.
            </p>
          </div>
        </div>
      </section>

      {/* Instalações */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">
            Nossas Instalações
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Escritório 1
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Escritório Administrativo</h3>
                <p className="text-gray-600">
                  Ambiente moderno e equipado para atender nossos clientes.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Torre Medical
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Torre Medical</h3>
                <p className="text-gray-600">
                  Localização estratégica em complexo médico de referência.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Escritório 2
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Área de Atendimento</h3>
                <p className="text-gray-600">
                  Espaço dedicado ao atendimento e suporte aos clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão e Valores */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-dark mb-6">Nossa Missão</h2>
              <p className="text-lg text-gray-700 mb-6">
                Fornecer produtos médicos de excelência para o tratamento de dor crônica, 
                contribuindo para a melhoria da qualidade de vida dos pacientes e apoiando 
                os profissionais da saúde com soluções inovadoras e seguras.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-dark mb-6">Nossos Valores</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Qualidade</h3>
                    <p className="text-gray-600">Produtos com certificação ANVISA e padrões internacionais.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Segurança</h3>
                    <p className="text-gray-600">Compromisso com a segurança dos pacientes e profissionais.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Inovação</h3>
                    <p className="text-gray-600">Tecnologia de ponta para melhores resultados clínicos.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Atendimento</h3>
                    <p className="text-gray-600">Suporte dedicado e atendimento personalizado.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">
            Nossos Diferenciais
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Certificações</h3>
              <p className="text-gray-600">
                Todos os produtos com registro ANVISA e certificações necessárias.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Expertise</h3>
              <p className="text-gray-600">
                Conhecimento especializado em medicina esportiva e tratamento de dor.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Suporte</h3>
              <p className="text-gray-600">
                Atendimento ágil e personalizado via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-dark mb-8 text-center">
            Nossa Localização
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 mb-4">
                <strong>Endereço:</strong>
              </p>
              <p className="text-xl text-dark font-semibold mb-2">
                RUA DAS ORQUIDEAS, 667 - SALA 802
              </p>
              <p className="text-lg text-gray-600">
                JARDIM POMPEIA - INDAIATUBA/SP
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
