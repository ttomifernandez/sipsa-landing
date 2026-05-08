'use client';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-transparent to-blue-900/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre SIPSA</h2>
          <p className="text-gray-400 text-lg">Líderes en prepaga de salud en Córdoba</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-green-400 mb-3">Nuestra Misión</h3>
              <p className="text-gray-300 leading-relaxed">
                En SIPSA, nos comprometemos a brindar acceso a servicios de salud de calidad, innovadores y accesibles para todas las familias cordobesas. Creemos que todos merecen cuidado médico integral sin complicaciones.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-green-400 mb-3">¿Por qué elegirnos?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Red de más de 500 profesionales y clínicas</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Atención 24/7 con telemedicina incluida</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Cobertura en medicamentos y análisis</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Sin esperas ni autorizaciones complicadas</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Planes flexibles para tu presupuesto</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-2xl p-8">
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h4 className="text-green-400 font-semibold mb-2">Desde 2004</h4>
                <p className="text-gray-400 text-sm">20 años de confianza y experiencia en Córdoba</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h4 className="text-green-400 font-semibold mb-2">Certificados Internacionales</h4>
                <p className="text-gray-400 text-sm">ISO 9001 y estándares de calidad garantizados</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h4 className="text-green-400 font-semibold mb-2">Atención Personalizada</h4>
                <p className="text-gray-400 text-sm">Equipo dedicado para resolver tus dudas</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h4 className="text-green-400 font-semibold mb-2">Innovación Tecnológica</h4>
                <p className="text-gray-400 text-sm">App móvil para gestión rápida y fácil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
