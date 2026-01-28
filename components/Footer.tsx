import Link from "next/link";

export default function Footer() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5519995180739";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4">Futuramed Sports Medicine</h3>
            <p className="text-gray-300">
              Distribuidora especializada em produtos médicos para tratamento de dor crônica.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-primary transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="text-gray-300 hover:text-primary transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-300 hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/cadastro" className="text-gray-300 hover:text-primary transition-colors">
                  Cadastro de Cliente
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <strong>Endereço:</strong><br />
                Rua das Orquídeas, 667 sl. 802<br />
                Jardim Pompeia | Indaiatuba | SP
              </li>
              <li>
                <strong>WhatsApp:</strong><br />
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +55 19 99518-0739
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Futuramed Sports Medicine. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
