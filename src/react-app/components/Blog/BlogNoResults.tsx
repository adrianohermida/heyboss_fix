import React from 'react';
type Props = { onClear: () => void };
const BlogNoResults: React.FC<Props> = ({ onClear }) => (
  <div className="text-center py-20 bg-[var(--color-cardElevated)] rounded-3xl border border-dashed border-[var(--color-border)]/30">
    <p className="text-[var(--color-text)]/70 dark:text-white/70 text-lg">Nenhum artigo encontrado para sua busca.</p>
    <button onClick={onClear} className="mt-4 text-[var(--color-success)] font-bold hover:underline">Limpar filtros</button>
  </div>
);
export default BlogNoResults;
