import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

const items = [
  {
    icon: Target,
    title: 'Missão',
    desc: 'Soluções jurídicas inovadoras para libertar consumidores do superendividamento, garantindo dignidade e paz financeira.'
  },
  {
    icon: Eye,
    title: 'Visão',
    desc: 'Ser referência nacional na defesa do consumidor endividado, reconhecido pela excelência técnica e ética.'
  },
  {
    icon: Heart,
    title: 'Valores',
    desc: 'Ética, transparência, empatia e compromisso com a justiça social e o mínimo existencial.'
  }
];

const MissionVisionValues: React.FC = () => (
  <section className="py-16 bg-[var(--color-bg-alt)]">
    <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-6">
      {items.map((item, idx) => (
        <div key={idx} className="bg-[var(--color-cardElevated)] p-6 rounded-2xl border border-[var(--color-border)]/10 hover:border-[var(--color-brand-primary)]/30 transition-all group">
          <div className="bg-[var(--color-brand-primary)]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <item.icon className="text-[var(--color-brand-primary)]" size={24} />
          </div>
          <h3 className="text-lg font-bold text-[var(--color-brand)] mb-2">{item.title}</h3>
          <p className="text-[var(--color-text-secondary)]/80 text-xs leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default MissionVisionValues;
