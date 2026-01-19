
import React from 'react';
import { Star } from 'lucide-react';
import { useTheme } from '../../../styles/ThemeProvider';

const Testimonials: React.FC = () => {
  const { mode } = useTheme();
  const bg = mode === 'clear' ? 'bg-brand-secondary' : 'bg-brand-dark';
  const text = mode === 'clear' ? 'text-gray-900' : 'text-white';
  const textSub = mode === 'clear' ? 'text-brand-dark/60' : 'text-white/60';
  const cardBg = mode === 'clear' ? 'bg-[var(--color-cardElevated)] border border-gray-200 shadow-xl' : 'bg-[var(--color-card)] border border-white/10 shadow-xl';
  return (
    <section className={`py-24 ${bg}`} aria-labelledby="depoimentos-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="depoimentos-title" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-brand)] mb-4">Depoimentos de Clientes sobre Defesa do Consumidor e Dívidas</h2>
          <p className="text-lg text-[var(--color-text)]/80">Histórias reais de quem recuperou a paz com nossa advocacia especializada em dívidas e superendividamento.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Maria Silva", text: "Eu não conseguia mais dormir. O Dr. Adriano conseguiu reduzir minha dívida em 70% e agora consigo pagar com dignidade.", rating: 5 },
            { name: "João Santos", text: "Excelente atendimento. Profissionais extremamente competentes que realmente entendem da Lei do Superendividamento.", rating: 5 },
            { name: "Ana Costa", text: "Minha vida mudou. Estava presa em juros abusivos de cartões e hoje tenho um plano de pagamento que cabe no meu bolso.", rating: 5 }
          ].map((t, idx) => (
            <div key={idx} className={`${cardBg} p-8 rounded-3xl relative flex flex-col h-full`}>
              <div className="flex text-[var(--color-accent)] mb-6" aria-label="Nota máxima, 5 estrelas">
                {Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={18} fill="currentColor" aria-hidden="true" />)}
              </div>
              <p className="italic mb-8 leading-relaxed text-[var(--color-text)]/90 text-base">"{t.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={`https://ui-avatars.com/api/?name=${t.name.replace(' ', '+')}&background=0d9c6e&color=fff`} className="w-12 h-12 rounded-full border-2 border-[var(--color-accent)] shadow" alt={`Depoimento de ${t.name} sobre sucesso na redução de dívidas`} loading="lazy" />
                <div>
                  <p className="font-bold text-[var(--color-brand)] text-base">{t.name}</p>
                  <p className="text-[var(--color-text)]/60 text-xs">Cliente Verificado</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
