import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Historia', href: '/historia' },
  { name: 'Equipo', href: '/equipo' },
  { name: 'Proyectos', href: '/proyectos' },
  { name: 'Aliados', href: '/aliados' },
  { name: 'Contacto', href: '/contacto' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePath, setActivePath] = useState('/');

  useEffect(() => {
    setActivePath(window.location.pathname);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 px-6 py-6 ${
          scrolled ? 'bg-prisma-white/80 backdrop-blur-md py-4 border-b border-prisma-dark-red/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1140px] mx-auto flex items-center justify-between">
          <a href="/" className="font-display text-3xl tracking-tighter text-prisma-dark-red group font-brand">
            PRISMA<span className="text-prisma-light-red group-hover:animate-pulse">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              // Exact match or active sub-route
              const isActive = activePath === link.href || (link.href !== '/' && activePath.startsWith(link.href));
              
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[11px] uppercase tracking-[0.3em] transition-all duration-500 font-medium relative group font-accent ${
                    isActive ? 'text-prisma-dark-red' : 'text-prisma-dark-red/40 hover:text-prisma-dark-red'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-2 left-0 h-[1px] bg-prisma-dark-red transition-all duration-500 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </a>
              );
            })}
            <a 
              href="/unete" 
              className="text-[11px] uppercase tracking-[0.3em] text-prisma-dark-red font-bold border-b border-prisma-dark-red/20 pb-1 hover:border-prisma-dark-red transition-all duration-500 font-brand"
            >
              Únete al Club
            </a>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 text-prisma-dark-red"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-10 p-4 text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl md:text-7xl font-display text-white hover:text-prisma-light-red transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
