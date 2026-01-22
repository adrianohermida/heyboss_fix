// Manifesto: ContactHero
// - Exibe título e subtítulo da página de contato
// - Mobile-first, acessível, tokenização CSS
import React from 'react';
import { useTheme } from '../../../styles/ThemeProvider';
const ContactHero: React.FC = () => {
  const { mode } = useTheme();
  // Estilo institucional: claro = branco/verde, dark = fundo escuro, texto branco, verde só para destaques
  const bg = mode === 'clear'
    ? 'bg-white'
    : 'bg-[var(--color-brand)]';
  const textColor = mode === 'clear' ? 'text-[var(--color-brand)]' : 'text-white';
  const highlight = 'text-[var(--color-success)]';
  return (
    <section className={`text-center mb-16 animate-fade-in py-12 transition-all duration-300 ${bg}`}
      style={mode === 'clear' ? { background: 'linear-gradient(90deg, #F1F5ED 0%, #fff 100%)' } : { background: 'linear-gradient(90deg, #10181B 0%, #173D34 100%)' }}>
      <h1 className={`text-4xl sm:text-5xl font-extrabold mb-6 ${textColor}`}
        style={mode === 'clear' ? { color: 'var(--color-success)' } : { color: '#fff' }}>
        Fale com um Advogado Especialista em <span className={highlight}>Dívidas</span>
      </h1>
      <p className={`max-w-2xl mx-auto text-lg ${mode === 'clear' ? 'text-[var(--color-brand)]' : 'text-white/80'}`}>
        Estamos prontos para ajudar você a recuperar sua paz financeira através da Lei do Superendividamento. Escolha o canal de sua preferência.
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mt-8">
        <span className="inline-flex items-center justify-center rounded-2xl shadow-lg border-2 border-[var(--color-success)] bg-white dark:bg-[var(--color-brand)] transition-all" style={{ width: 96, height: 96 }}>
          <img src="/assets/img/logo_lzI6JHzO.webp" alt="Logo Dr. Adriano Hermida Maia" style={{ width: 72, height: 72, objectFit: 'contain', filter: mode === 'clear' ? 'none' : 'brightness(1.2) contrast(1.1)' }} onError={(e) => { e.currentTarget.src = '/assets/img/473411138_1420160585659716_5467583944226702322_n.png'; }} />
        </span>
        <div className="flex-1 flex flex-col gap-2 md:gap-4">
          <h2 className={`text-2xl md:text-3xl font-extrabold leading-tight ${textColor}`}
            style={mode === 'clear' ? { color: 'var(--color-brand)' } : { color: '#fff' }}>
            Dr. Adriano Hermida Maia
          </h2>
          <h3 className={`text-base md:text-lg font-semibold ${highlight}`}>Fale Conosco</h3>
        </div>
      </div>
    </section>
  );
};
export default ContactHero;
