import { motion } from 'motion/react';

const pillars = [
  {
    title: 'Educación de calidad',
    color: 'var(--color-pillar-education)',
    description: 'Buscamos la calidad y la mejora continua en cada acción para maximizar el impacto sostenible.',
    icon: '01',
    size: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    title: 'Medio Ambiente y Sostenibilidad',
    color: 'var(--color-pillar-environment)',
    description: 'Creamos soluciones creativas y adaptables para desafíos sociales y ambientales.',
    icon: '02',
    size: 'col-span-1 row-span-1',
  },
  {
    title: 'Desarrollo e Inclusión Social',
    color: 'var(--color-pillar-inclusion)',
    description: 'Trabajamos con solidaridad, honestidad e integridad para transformar vidas a nivel local y global.',
    icon: '03',
    size: 'col-span-1 row-span-1',
  },
  {
    title: 'Cultura y Diversidad Artística',
    color: 'var(--color-pillar-culture)',
    description: 'Hacemos las cosas con propósito, energía, alegría y compromiso.',
    icon: '04',
    size: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    title: 'Salud y Bienestar',
    color: 'var(--color-pillar-health)',
    description: 'Aseguramos el bienestar de los demás por nuestro sentido de responsabilidad.',
    icon: '05',
    size: 'col-span-1 row-span-1',
  },
  {
    title: 'Ciudadanía Activa',
    color: 'var(--color-pillar-citizenship)',
    description: 'Actuamos con iniciativa para anticipar y responder a las necesidades de las comunidades.',
    icon: '06',
    size: 'col-span-1 row-span-1',
  },
];

export default function PillarsGrid() {
  return (
    <section id="pillars" className="py-32 md:py-48 px-6 bg-prisma-white">
      <div className="max-w-[1140px] mx-auto">
        <div className="mb-24 md:mb-32">
          <div className="flex items-center gap-6 mb-12">
            <span className="text-[11px] uppercase tracking-[0.6em] text-prisma-dark-red font-bold">
              Pilares de Impacto
            </span>
            <div className="flex-1 h-[1px] bg-prisma-dark-red/10" />
          </div>
          <h2 className="text-6xl md:text-8xl lg:text-9xl tracking-tighter text-prisma-dark-red font-display leading-[1.1] text-left">
            NUESTRAS ÁREAS<br />DE ACCIÓN
          </h2>
        </div>

        <div className="flex flex-col">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true }}
              className="group relative border-t border-prisma-dark-red/10 py-16 flex flex-col md:flex-row items-start md:items-center gap-12 cursor-pointer"
            >
              {/* Hover Background */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-700 pointer-events-none"
                style={{ backgroundColor: pillar.color }}
              />

              <div className="flex items-center gap-8 md:w-1/3">
                <span className="text-sm font-bold tracking-widest text-prisma-light-red">
                  {pillar.icon}.
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight text-prisma-dark-red group-hover:translate-x-4 transition-transform duration-700">
                  {pillar.title}
                </h3>
              </div>

              <div className="md:w-1/2">
                <p className="text-sm md:text-base text-prisma-dark-red/60 font-light leading-relaxed max-w-xl">
                  {pillar.description}
                </p>
              </div>

              <div className="ml-auto">
                <div 
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-prisma-dark-red/10 flex items-center justify-center group-hover:bg-prisma-dark-red group-hover:text-white transition-all duration-700"
                >
                  <span className="text-xl md:text-2xl group-hover:rotate-45 transition-transform duration-700">→</span>
                </div>
              </div>

              {/* Pillar Color Indicator */}
              <div 
                className="absolute left-0 top-0 w-1 h-0 group-hover:h-full transition-all duration-700"
                style={{ backgroundColor: pillar.color }}
              />
            </motion.div>
          ))}
          <div className="border-t border-prisma-dark-red/10" />
        </div>
      </div>
    </section>
  );
}
