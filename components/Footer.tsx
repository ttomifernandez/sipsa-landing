'use client';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-slate-950 to-transparent border-t border-blue-500/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <h4 className="text-white font-bold">SIPSA</h4>
            </div>
            <p className="text-gray-400 text-sm">Prepaga de salud de confianza en Córdoba</p>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">Rápidos</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#planes" className="hover:text-green-400 transition">Planes</a></li>
              <li><a href="#about" className="hover:text-green-400 transition">Sobre Nosotros</a></li>
              <li><a href="#contacto" className="hover:text-green-400 transition">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">Legal</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-green-400 transition">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Privacidad</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Políticas</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">Contacto</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📞 +54 9 351 5929043</li>
              <li>📧 info@sipsa.com.ar</li>
              <li>📍 Córdoba, Argentina</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-500/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 SIPSA - Prepaga de Salud. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-green-400 transition">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
