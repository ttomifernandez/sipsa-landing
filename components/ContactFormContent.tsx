'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  plan: string;
}

export default function ContactFormContent() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    plan: searchParams.get('plan') || 'estandar',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Guardar datos en localStorage
    localStorage.setItem('sipsaFormData', JSON.stringify(formData));

    // Crear mensaje para WhatsApp
    const planNames: Record<string, string> = {
      basico: 'Plan Básico',
      estandar: 'Plan Estándar',
      premium: 'Plan Premium',
    };

    const planName = planNames[formData.plan] || formData.plan;
    const message = encodeURIComponent(
      `Hola, me interesa el plan ${planName} de SIPSA. Mi nombre es ${formData.nombre}, mi email es ${formData.email} y mi teléfono es ${formData.telefono}.`
    );

    // Redirigir a WhatsApp
    setTimeout(() => {
      window.open(
        `https://wa.me/5493515929043?text=${message}`,
        '_blank'
      );
      setSubmitted(true);
      setLoading(false);
    }, 300);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 border-2 border-green-400 rounded-2xl p-12">
          <div className="text-5xl mb-4">✓</div>
          <h3 className="text-3xl font-bold text-white mb-4">¡Gracias!</h3>
          <p className="text-gray-300 mb-8">
            Tu solicitud ha sido enviada. En breve nos pondremos en contacto a través de WhatsApp.
          </p>
          <div className="space-y-2 text-gray-400 text-sm mb-8">
            <p><strong>Nombre:</strong> {formData.nombre}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Teléfono:</strong> {formData.telefono}</p>
            <p><strong>Plan:</strong> {formData.plan}</p>
          </div>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                nombre: '',
                email: '',
                telefono: '',
                plan: 'estandar',
              });
            }}
            className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition"
          >
            Enviar otra solicitud
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Contactanos Hoy</h2>
        <p className="text-gray-400">Completa el formulario y nos comunicaremos con vos en breve</p>
      </div>

      <div className="bg-gradient-to-br from-slate-800/50 to-blue-800/30 border border-blue-500/30 rounded-2xl p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white font-semibold mb-2">Nombre Completo</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
              className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-400 transition"
            />
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              required
              className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-400 transition"
            />
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">Teléfono</label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="+54 9 351 XXXXXXX"
              required
              className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-400 transition"
            />
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">Plan Seleccionado</label>
            <select
              name="plan"
              value={formData.plan}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-green-400 transition"
            >
              <option value="basico">Plan Básico - $1.899/mes</option>
              <option value="estandar">Plan Estándar - $3.499/mes</option>
              <option value="premium">Plan Premium - $5.299/mes</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-green-400 to-green-600 text-white font-bold rounded-lg hover:from-green-500 hover:to-green-700 transition transform hover:scale-105 disabled:opacity-50"
          >
            {loading ? 'Enviando...' : 'Continuar por WhatsApp'}
          </button>

          <p className="text-gray-400 text-center text-sm">
            Al enviar, serás redirigido a WhatsApp para confirmar tu solicitud
          </p>
        </form>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="bg-slate-800/30 border border-blue-500/20 rounded-lg p-6 text-center">
          <div className="text-2xl mb-2">📞</div>
          <p className="text-white font-semibold mb-2">Teléfono</p>
          <p className="text-gray-400">+54 9 351 5929043</p>
        </div>
        <div className="bg-slate-800/30 border border-blue-500/20 rounded-lg p-6 text-center">
          <div className="text-2xl mb-2">📧</div>
          <p className="text-white font-semibold mb-2">Email</p>
          <p className="text-gray-400">info@sipsa.com.ar</p>
        </div>
      </div>
    </div>
  );
}
