import Link from "next/link";
import Image from "next/image";

export default function ProdutosPage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5551981113836";
  const message = encodeURIComponent("Olá! Gostaria de mais informações sobre o BioChronic.");

  const components = [
    "Escalpe para coleta de sangue",
    "Adaptador convencional para coleta",
    "Válvula 3 vias",
    "Seringa 20ml",
    "Tubo coletor PRP",
    "Cânula 20G x 100mm",
    "Agulhas 18G e 21G para seringa",
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossos Produtos</h1>
          <p className="text-xl">Soluções completas para tratamento de dor crônica</p>
        </div>
      </section>

      {/* BioChronic Principal */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Produto Destaque
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                BioChronic
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Kit para Tratamento de Dor Crônica
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-gray-700">
                    <strong>Produto Estéril:</strong> Garantia de segurança e higiene em todos os procedimentos
                  </p>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-gray-700">
                    <strong>Kit Completo:</strong> Todos os componentes necessários em um único kit
                  </p>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-gray-700">
                    <strong>Certificado ANVISA:</strong> Registro Nº 80371259033
                  </p>
                </div>
              </div>
              <div className="bg-light p-6 rounded-lg mb-8">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Código de Referência:</strong>
                </p>
                <p className="text-2xl font-bold text-dark">KBIOCR001</p>
              </div>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Solicitar Informações
              </a>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
  <div className="h-80 bg-gray-200 relative">
    <Image
      src="/futuramed/images/biochronic-logo.jpg"
      alt="BioChronic Logo"
      fill
      className="object-contain p-8"
    />
  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Componentes do Kit */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-dark mb-4 text-center">
            Componentes do Kit BioChronic
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            O kit BioChronic vem completo com todos os componentes necessários para realizar 
            procedimentos de tratamento de dor crônica com segurança e eficácia.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {components.map((component, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-start">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                  {index + 1}
                </div>
                <p className="text-lg text-dark">{component}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
<div className="h-80 bg-gray-200 relative">
  <Image
    src="/futuramed/images/biochronic-table.jpg"
    alt="Especificações Técnicas BioChronic"
    fill
    className="object-contain p-4"
  />
</div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Especificações Técnicas</h3>
                <p className="text-gray-600">
                  Detalhamento completo dos componentes e suas especificações.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
<div className="h-80 bg-gray-200 relative">
  <Image
    src="/futuramed/images/biochronic-components.jpg"
    alt="Componentes do Kit BioChronic"
    fill
    className="object-contain p-4"
  />
</div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Componentes Visuais</h3>
                <p className="text-gray-600">
                  Visualização de todos os itens inclusos no kit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indicações */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark mb-8 text-center">
              Indicações e Uso
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-dark mb-4">Indicações:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Tratamento de dor crônica</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Procedimentos regenerativos</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Medicina esportiva</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-dark mb-4">Características:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">100% estéril e descartável</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Embalagem individual lacrada</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Registro ANVISA ativo</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <p className="text-sm text-gray-700">
                  <strong>Importante:</strong> Produto de uso exclusivo por profissionais da área da saúde. 
                  Consulte sempre um médico especializado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Interessado no BioChronic?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato conosco pelo WhatsApp para mais informações sobre 
            preços, disponibilidade e condições especiais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center justify-center"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Solicitar Informações
            </a>
            <Link
              href="/cadastro"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-block"
            >
              Fazer Cadastro de Cliente
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
