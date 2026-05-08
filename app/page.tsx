import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Plans from '@/components/Plans';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      <Hero />
      <About />
      <Plans />
      <ContactForm />
      <Footer />
    </main>
  );
}
