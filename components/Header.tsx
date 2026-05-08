'use client';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900/80 to-blue-900/80 backdrop-blur-md border-b border-blue-500/20">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">SIPSA</h1>
            <p className="text-xs text-green-400">Prepaga Córdoba</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-gray-300 hover:text-white transition">Sobre Nosotros</a>
          <a href="#planes" className="text-gray-300 hover:text-white transition">Planes</a>
          <a href="#contacto" className="text-gray-300 hover:text-white transition">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
