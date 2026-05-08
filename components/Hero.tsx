'use client';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 text-sm font-semibold">
            ✓ Cobertura Confiable en Córdoba
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Tu Salud es Nuestra{' '}
          <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
            Prioridad
          </span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          SIPSA ofrece planes de prepaga integrales con acceso a los mejores profesionales de la salud en Córdoba.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#planes" 
            className="px-8 py-4 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold rounded-lg hover:from-green-500 hover:to-green-700 transition transform hover:scale-105"
          >
            Ver Planes
          </a>
          <a 
            href="#contacto" 
            className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition"
          >
            Más Información
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">15K+</div>
            <p className="text-gray-400 text-sm">Clientes Activos</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
            <p className="text-gray-400 text-sm">Prestadores</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">20+</div>
            <p className="text-gray-400 text-sm">Años Operando</p>
          </div>
        </div>
      </div>
    </section>
  );
}
