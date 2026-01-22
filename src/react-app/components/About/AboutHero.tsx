import React from 'react';

const AboutHero: React.FC = () => (
  <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 text-center transition-all duration-300" style={{ background: mode === 'clear' ? 'linear-gradient(90deg, #F1F5ED 0%, #fff 100%)' : 'linear-gradient(90deg, #173D34 0%, #00d969 100%)' }}>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--color-success)_0%,transparent_70%)]/10" aria-hidden />
    <div className="relative z-10 px-4 max-w-4xl mx-auto">
      <div className="inline-flex items-center gap-2 bg-[var(--color-success)]/10 border border-[var(--color-success)]/20 px-4 py-2 rounded-full mb-6 shadow-md">
        <span className="text-[var(--color-success)] text-xs font-bold uppercase tracking-widest">Conheça nossa história</span>
      </div>
      <h1 className="text-3xl md:text-5xl font-extrabold mb-6" style={{ color: 'var(--color-brand)' }}>
        Compromisso com a sua <span style={{ color: 'var(--color-success)' }}>Dignidade Financeira</span>
      </h1>
      <p className="text-base md:text-lg text-[var(--color-text)]/90 leading-relaxed">
          Escritório fundado por Dr. Adriano Hermida Maia, referência nacional em defesa do superendividado e direito bancário.
      </p>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          <span className="inline-flex items-center justify-center rounded-2xl shadow-lg border-2 border-[var(--color-success)] bg-white dark:bg-[var(--color-brand)] transition-all" style={{ width: 128, height: 128 }}>
            <img src="/assets/img/logo_lzI6JHzO.webp" alt="Logo Dr. Adriano Hermida Maia" style={{ width: 96, height: 96, objectFit: 'contain', filter: mode === 'clear' ? 'none' : 'brightness(1.2) contrast(1.1)' }} onError={(e) => { e.currentTarget.src = '/assets/img/473411138_1420160585659716_5467583944226702322_n.png'; }} />
          </span>
          <div className="flex-1 flex flex-col gap-2 md:gap-4">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight" style={{ color: 'var(--color-brand)' }}>
              Dr. Adriano Hermida Maia
            </h1>
            <h2 className="text-lg md:text-xl font-semibold" style={{ color: 'var(--color-brand)' }}>
              Defesa do Superendividado
            </h2>
            <p className="text-base md:text-lg text-[var(--color-text)]">
              Escritório fundado por Dr. Adriano Hermida Maia, referência nacional em defesa do superendividado e direito bancário.
            </p>
          </div>
        </div>
    </div>
  </section>
);

export default AboutHero;
