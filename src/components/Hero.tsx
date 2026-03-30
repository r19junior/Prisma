import { motion } from 'motion/react';
import Marquee from 'react-fast-marquee';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col bg-prisma-white overflow-hidden pt-32 md:pt-40 mesh-bg">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-pillar-education/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-pillar-citizenship/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-1 pb-20 relative z-10">

        {/* Text Content */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-prisma-dark-red" />
              <span className="text-[11px] uppercase tracking-[0.5em] text-prisma-dark-red font-bold font-brand">
                Impacto Global - 2026
              </span>
            </div>

            <h1 className="mb-8 text-prisma-dark-red font-display">
              EXCELENCIA QUE<br />
              <span className="text-prisma-light-red">TRANSFORMA</span><br />
              <span className="text-outline">REALIDADES</span>
            </h1>

            <div className="max-w-xl mb-12">
              <p className="text-lg md:text-xl text-prisma-dark-red/80 font-medium mb-4 font-body">
                Somos un club juvenil que conecta a jóvenes del Perú y el mundo.
              </p>
              <p className="text-sm md:text-base text-prisma-dark-red/60 font-light leading-relaxed font-body">
                Buscamos generar cambios sostenibles a través de la educación, la cultura y la inclusión social, impulsando el liderazgo y la excelencia.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <a href="/nosotros" className="btn-primary group inline-flex">
                <span className="font-display">Nuestra Misión</span>
                <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href="/impacto" className="inline-flex px-8 py-4 rounded-full border border-prisma-dark-red/20 text-prisma-dark-red font-display text-sm uppercase tracking-widest hover:bg-prisma-dark-red hover:text-white transition-all duration-500">
                Ver Proyectos
              </a>
            </div>
          </motion.div>
        </div>

        {/* Visual Content */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl animate-float"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000"
              alt="Team collaboration"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-prisma-dark-red/40 to-transparent" />

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute bottom-8 left-8 right-8 glass p-6 rounded-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase tracking-widest font-bold text-prisma-dark-red font-accent">Prisma Stats</span>
                <span className="text-[10px] text-prisma-dark-red/40 font-accent">2026</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-display text-prisma-dark-red">+15K</p>
                  <p className="text-[9px] uppercase tracking-widest text-prisma-dark-red/60 font-body">Vidas Impactadas</p>
                </div>
                <div>
                  <p className="text-2xl font-display text-prisma-dark-red">12</p>
                  <p className="text-[9px] uppercase tracking-widest text-prisma-dark-red/60 font-body">Países Activos</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-pillar-culture/10 blur-3xl rounded-full -z-10" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-pillar-environment/10 blur-3xl rounded-full -z-10" />
        </div>
      </div>

      {/* Marquee of Values */}
      <div className="w-full border-y border-prisma-dark-red/10 py-6 bg-prisma-white/50 backdrop-blur-sm relative z-20">
        <Marquee speed={30} gradient={false}>
          {[
            { text: 'LIDERAZGO', color: 'var(--color-pillar-education)' },
            { text: 'INNOVACIÓN', color: 'var(--color-pillar-environment)' },
            { text: 'IMPACTO', color: 'var(--color-pillar-inclusion)' },
            { text: 'EXCELENCIA', color: 'var(--color-pillar-culture)' },
            { text: 'EDUCACIÓN', color: 'var(--color-pillar-health)' },
            { text: 'CULTURA', color: 'var(--color-pillar-citizenship)' },
          ].map((item) => (
            <div key={item.text} className="flex items-center mx-12">
              <span className="text-sm font-display tracking-[0.3em] text-prisma-dark-red/30">
                {item.text}
              </span>
              <span className="ml-12" style={{ color: item.color }}>•</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
