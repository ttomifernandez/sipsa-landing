import { Suspense } from 'react';
import ContactFormContent from './ContactFormContent';

export default function ContactForm() {
  return (
    <section id="contacto" className="py-20 px-4 bg-gradient-to-b from-transparent to-blue-900/30">
      <Suspense fallback={<div className="text-center text-white">Cargando formulario...</div>}>
        <ContactFormContent />
      </Suspense>
    </section>
  );
}
