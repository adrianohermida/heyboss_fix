import React from 'react';
const BlogHero: React.FC = () => (
  <section className="text-center mb-10 animate-fade-in pt-24">
    <div className="inline-flex items-center gap-2 bg-[var(--color-cardElevated)] border border-[var(--color-brand-primary)]/30 px-4 py-2 rounded-full mb-6">
      <span className="w-2 h-2 bg-[var(--color-brand-primary)] rounded-full animate-pulse" />
      <span className="text-[var(--color-brand-primary)] text-xs font-bold uppercase tracking-widest">Notícias e Artigos Jurídicos</span>
    </div>
    <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 text-[var(--color-brand-primary)] dark:text-white drop-shadow-sm">Blog de Defesa do Consumidor: Guia para Eliminar Dívidas</h1>
    <p className="max-w-2xl mx-auto text-lg text-[var(--color-text)]/80 dark:text-white/80">
      Informação jurídica de qualidade sobre a Lei 14.181/2021 e superendividamento para ajudar você a renegociar dívidas e recuperar sua paz financeira.
    </p>
  </section>
);
export default BlogHero;
