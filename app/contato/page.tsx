export default function ContatoPage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5519995180739";
  const message = encodeURIComponent("Olá! Gostaria de mais informações sobre os produtos Futuramed.");

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fale Conosco</h1>
          <p className="text-xl">Estamos prontos para atendê-lo via WhatsApp</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark mb-4">
                Atendimento Rápido e Personalizado
              </h2>
              <p className="text-lg text-gray-700">
                Entre em contato conosco diretamente pelo WhatsApp para obter informações 
                sobre nossos produtos, tirar dúvidas e fazer pedidos.
              </p>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg shadow-xl p-12 text-center mb-12">
              <div className="inline-block bg-white rounded-full p-6 mb-6">
                <svg className="w-16 h-16 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4">Fale Conosco no WhatsApp</h3>
              <p className="text-xl mb-8">
                Atendimento rápido e direto. Clique no botão abaixo para iniciar uma conversa.
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-xl transition-colors inline-flex items-center shadow-lg"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                +55 19 99518 0739
              </a>
            </div>

            {/* Info Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Endereço */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-start mb-4">
                  <div className="bg-primary text-white rounded-full p-3 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-2">Endereço</h3>
                    <p className="text-gray-700">
                      Rua das Orquídeas, 667 sl. 802<br />
                      Jardim Pompeia<br />
                      Indaiatuba | SP
                    </p>
                  </div>
                </div>
              </div>

              {/* Horário */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-start mb-4">
                  <div className="bg-primary text-white rounded-full p-3 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-2">Horário de Atendimento</h3>
                    <p className="text-gray-700">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 bg-blue-50 border-l-4 border-primary rounded-lg p-6">
              <h3 className="text-xl font-bold text-dark mb-3">
                Por que usar o WhatsApp?
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Resposta Rápida:</strong> Atendimento ágil e direto</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Envio de Documentos:</strong> Compartilhe fotos e arquivos facilmente</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Histórico de Conversas:</strong> Mantenha registro de todo o atendimento</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Atendimento Personalizado:</strong> Comunicação direta e humanizada</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA para Cadastro */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-dark mb-4">
              É Cliente ou Quer se Tornar um?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Complete o cadastro de cliente para ter acesso a condições especiais 
              e agilizar seus pedidos.
            </p>
            <a
              href="/cadastro"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-block"
            >
              Fazer Cadastro de Cliente
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
