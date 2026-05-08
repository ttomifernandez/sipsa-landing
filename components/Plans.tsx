'use client';

interface Plan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const plans: Plan[] = [
  {
    id: 'basico',
    name: 'Plan Básico',
    price: 1899,
    description: 'Perfecto para empezar',
    features: [
      'Cobertura médica general',
      'Acceso a 250+ profesionales',
      'Telemedicina incluida',
      'Medicamentos con descuento',
      'Estudios de laboratorio',
    ],
  },
  {
    id: 'estandar',
    name: 'Plan Estándar',
    price: 3499,
    description: 'La mejor relación precio-beneficio',
    features: [
      'Todo Plan Básico +',
      'Acceso a 400+ profesionales',
      'Cobertura odontológica',
      'Kinesiología y fisioterapia',
      'Oftalmología incluida',
      'Descuentos en farmacia',
      'Atención prioritaria',
    ],
    highlighted: true,
  },
  {
    id: 'premium',
    name: 'Plan Premium',
    price: 5299,
    description: 'Máxima cobertura y beneficios',
    features: [
      'Todo Plan Estándar +',
      'Acceso a 500+ profesionales',
      'Psicología y psiquiatría',
      'Internación en clínicas premium',
      'Cobertura de cirugías mayores',
      'Medicamentos sin límite',
      'Ambulancia incluida',
      'Atención VIP 24/7',
    ],
  },
];

export default function Plans() {
  return (
    <section id="planes" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Nuestros Planes</h2>
          <p className="text-gray-400 text-lg">Elige el plan que mejor se adapte a ti y tu familia</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl overflow-hidden transition transform hover:scale-105 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-green-500/30 to-blue-500/30 border-2 border-green-400 shadow-2xl'
                  : 'bg-gradient-to-br from-slate-800/50 to-blue-800/30 border border-blue-500/30'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 text-center text-sm font-bold">
                  ⭐ MÁS POPULAR
                </div>
              )}

              <div className={`p-8 ${plan.highlighted ? 'pt-16' : ''}`}>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-green-400">${plan.price}</span>
                    <span className="text-gray-400">/mes</span>
                  </div>
                  <p className="text-gray-500 text-xs mt-2">Sin aumentos por edad</p>
                </div>

                <a
                  href={`#contacto?plan=${plan.id}`}
                  className={`block w-full py-3 rounded-lg font-semibold transition text-center ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-green-400 to-green-600 text-white hover:from-green-500 hover:to-green-700'
                      : 'bg-blue-600/20 text-blue-400 hover:bg-blue-600/40 border border-blue-500/50'
                  }`}
                >
                  Contactar
                </a>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-300 text-sm">
                      <span className="text-green-400 font-bold text-lg">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">¿Necesitas algo personalizado?</h3>
          <p className="text-gray-400 mb-6">Contáctanos para crear un plan adaptado a tus necesidades específicas</p>
          <a
            href="#contacto"
            className="inline-block px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition"
          >
            Hablar con un asesor
          </a>
        </div>
      </div>
    </section>
  );
}
