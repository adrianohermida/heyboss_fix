import React from 'react';

const AboutHero: React.FC = () => (
  <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-[var(--color-cardElevated)] text-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--color-success)_0%,transparent_70%)]/10" aria-hidden />
    <div className="relative z-10 px-4 max-w-4xl mx-auto">
      <div className="inline-flex items-center gap-2 bg-[var(--color-success)]/10 border border-[var(--color-success)]/20 px-4 py-2 rounded-full mb-6">
        <span className="text-[var(--color-success)] text-xs font-bold uppercase tracking-widest">Conheça nossa história</span>
      </div>
      <h1 className="text-3xl md:text-5xl font-extrabold mb-6" style={{ color: 'var(--color-brand)' }}>
        Compromisso com a sua <span style={{ color: 'var(--color-success)' }}>Dignidade Financeira</span>
      </h1>
      <p className="text-base md:text-lg text-[var(--color-text)]/90 leading-relaxed">
        Liderado pelo Dr. Adriano Hermida Maia, referência nacional na Lei do Superendividamento, devolvendo a paz a milhares de famílias brasileiras.
      </p>
    </div>
  </section>
);

export default AboutHero;
