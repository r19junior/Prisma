import Marquee from 'react-fast-marquee';

const partners = [
  'UNESCO', 'ONU MUJERES', 'UNICEF', 'GLOBAL SHAPERS', 'RED CROSS', 'GREENPEACE', 'WWF', 'AMNESTY'
];

export default function PartnersTicker() {
  return (
    <section id="partners" className="py-16 bg-prisma-white border-y border-prisma-dark-red/5">
      <Marquee speed={40} gradient={true} gradientColor="#f8f8f8" gradientWidth={150} pauseOnHover={true}>
        {partners.map((partner, i) => (
          <div key={partner} className="flex items-center mx-12">
            <span className="text-[9px] font-bold tracking-[0.5em] text-prisma-dark-red/20 uppercase">Prisma</span>
            <div className="w-[1px] h-4 bg-prisma-dark-red/10 mx-8" />
            <span className="text-xl md:text-2xl font-display tracking-tight text-prisma-dark-red/30 hover:text-prisma-dark-red/60 transition-all duration-700 cursor-default uppercase">
              {partner}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
