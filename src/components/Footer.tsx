import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer({ hideCta = false }: { hideCta?: boolean }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      if (email.includes('error')) {
        setStatus('error');
      } else {
        setStatus('success');
        setEmail('');
      }
    }, 1500);
  };

  return (
    <footer id="join" className="pt-40 pb-12 px-6 md:px-20 bg-prisma-white">
      <div className="max-w-[1400px] mx-auto">
        {!hideCta && (
          <div className="flex flex-col items-center text-center mb-40">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
              className="max-w-4xl w-full"
            >
              <span className="text-[11px] uppercase tracking-[0.6em] text-prisma-light-red font-bold mb-8 block font-brand">
                Forma parte del cambio
              </span>
              <h2 className="text-6xl md:text-9xl tracking-tighter mb-16 text-prisma-dark-red font-display leading-none">
                ÚNETE AL <span className="text-prisma-light-red">CLUB</span>
              </h2>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto relative">
                <div className="relative group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="TU EMAIL"
                    className="w-full bg-transparent border-b border-prisma-dark-red/20 py-6 px-4 text-prisma-dark-red font-display text-lg focus:outline-none focus:border-prisma-dark-red transition-all duration-500 placeholder:text-prisma-dark-red/20 font-body"
                    disabled={status === 'loading' || status === 'success'}
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    className={`absolute right-0 bottom-6 text-2xl transition-all duration-500 ${
                      status === 'success' ? 'text-green-500' : 'text-prisma-dark-red hover:translate-x-2'
                    }`}
                  >
                    {status === 'loading' ? '...' : status === 'success' ? '✓' : '→'}
                  </button>
                </div>
                
                <AnimatePresence mode="wait">
                  {status === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-6 text-[10px] uppercase tracking-[0.3em] text-green-600 font-bold"
                    >
                      ¡Bienvenido al Club! Pronto recibirás noticias.
                    </motion.p>
                  )}
                  {status === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-6 text-[10px] uppercase tracking-[0.3em] text-red-600 font-bold"
                    >
                      Algo salió mal. Inténtalo de nuevo.
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 border-t border-prisma-dark-red/10 pt-24">
          <div className="md:col-span-6">
            <a href="#" className="font-display text-3xl mb-8 block text-prisma-dark-red uppercase tracking-tight">
              PRISMA<span className="text-prisma-light-red">.</span>
            </a>
            <p className="text-prisma-dark-red/60 text-base max-w-sm font-light leading-relaxed">
              Liderando la transformación social a través de la excelencia juvenil y la visión global.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.4em] text-prisma-dark-red font-bold mb-8">Explora</h4>
            <ul className="space-y-4 text-sm text-prisma-dark-red/60">
              <li><a href="/" className="hover:text-prisma-dark-red transition-all duration-300">Inicio</a></li>
              <li><a href="/historia" className="hover:text-prisma-dark-red transition-all duration-300">Historia</a></li>
              <li><a href="/equipo" className="hover:text-prisma-dark-red transition-all duration-300">Equipo</a></li>
              <li><a href="/proyectos" className="hover:text-prisma-dark-red transition-all duration-300">Proyectos</a></li>
              <li><a href="/aliados" className="hover:text-prisma-dark-red transition-all duration-300">Aliados</a></li>
              <li><a href="/contacto" className="hover:text-prisma-dark-red transition-all duration-300">Contacto</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.4em] text-prisma-dark-red font-bold mb-8">Social</h4>
            <div className="flex gap-8">
              <a href="#" className="text-prisma-dark-red/60 hover:text-prisma-dark-red transition-all duration-500">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-prisma-dark-red/60 hover:text-prisma-dark-red transition-all duration-500">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-prisma-dark-red/60 hover:text-prisma-dark-red transition-all duration-500">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-prisma-dark-red/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[9px] uppercase tracking-[0.5em] text-prisma-dark-red/30">
          <p>© 2026 PRISMA GLOBAL CLUB. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-prisma-dark-red transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-prisma-dark-red transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
