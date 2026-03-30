import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const text = textRef.current;
    const content = text.innerText;
    text.innerHTML = content
      .trim()
      .split(/\s+/)
      .map((word) => `<span class="word opacity-20 inline-block">${word}</span>`)
      .join(' ');

    const words = text.querySelectorAll('.word');

    gsap.to(words, {
      opacity: 1,
      stagger: 0.05,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
      },
    });
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-32 md:py-48 px-6 min-h-screen flex flex-col justify-center bg-prisma-white">
      <div className="max-w-[1140px] mx-auto w-full">
        <div className="flex items-center gap-6 mb-16">
          <span className="text-[11px] uppercase tracking-[0.6em] text-prisma-dark-red font-bold">
            Nuestra Esencia
          </span>
          <div className="flex-1 h-[1px] bg-prisma-dark-red/10" />
        </div>
        
        <h2 ref={textRef} className="text-4xl md:text-6xl lg:text-7xl leading-[1.2] tracking-tight text-prisma-dark-red mb-32 md:mb-48 font-display text-left">
          Somos un club juvenil que conecta a jóvenes del Perú y el mundo para unir sus voces y transformar realidades mediante proyectos de voluntariado alineados a los ODS.
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-24 border-t border-prisma-dark-red/10 pt-16 md:pt-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <span className="text-[11px] text-prisma-light-red font-bold tracking-widest">01.</span>
              <h3 className="text-[11px] uppercase tracking-[0.4em] text-prisma-dark-red font-bold">Visión</h3>
            </div>
            <p className="text-lg text-prisma-dark-red/60 leading-relaxed font-light">
              Ser un movimiento juvenil referente a nivel mundial donde la excelencia y colaboración se vive en cada acto de servicio inspirando a una generación que piensen globalmente y actúen localmente.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <span className="text-[11px] text-prisma-light-red font-bold tracking-widest">02.</span>
              <h3 className="text-[11px] uppercase tracking-[0.4em] text-prisma-dark-red font-bold">Misión</h3>
            </div>
            <p className="text-lg text-prisma-dark-red/60 leading-relaxed font-light">
              Generar un impacto positivo y sostenible en comunidades locales con visión global a través del cumplimiento de los Objetivos de Desarrollo Sostenible.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <span className="text-[11px] text-prisma-light-red font-bold tracking-widest">03.</span>
              <h3 className="text-[11px] uppercase tracking-[0.4em] text-prisma-dark-red font-bold">Valores</h3>
            </div>
            <div className="text-lg text-prisma-dark-red/60 leading-relaxed font-light grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p>Excelencia</p>
                <p>Innovación</p>
                <p>Empatía</p>
              </div>
              <div className="space-y-2">
                <p>Pasión</p>
                <p>Proactividad</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
