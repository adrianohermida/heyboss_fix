import React from 'react';
import { Search } from 'lucide-react';
type Cat = { id: number; nome: string };
type Props = {
  searchTerm: string;
  setSearchTerm: (v: string) => void;
  categories: Cat[];
  activeCategory: number|null;
  setActiveCategory: (v: number|null) => void;
};
const BlogSearchFilter: React.FC<Props> = ({ searchTerm, setSearchTerm, categories, activeCategory, setActiveCategory }) => (
  <div className="max-w-4xl mx-auto mb-10 space-y-6">
    <div className="relative">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]/60 dark:text-white/30" size={20} />
      <input
        type="text"
        placeholder="Buscar artigos por título ou assunto..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="w-full bg-[var(--color-card)] border border-[var(--color-border)]/30 rounded-2xl py-4 pl-12 pr-4 text-[var(--color-text)] dark:text-white focus:border-[var(--color-brand-primary)] outline-none transition-all shadow-xl placeholder:text-[var(--color-text-secondary)]/60 dark:placeholder:text-white/30"
      />
    </div>
    <div className="flex flex-wrap justify-center gap-3">
      <button
        onClick={() => setActiveCategory(null)}
        className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${!activeCategory ? 'bg-[var(--color-brand-primary)] border-[var(--color-brand-primary)] text-white' : 'bg-[var(--color-card)] border-[var(--color-border)]/30 text-[var(--color-text-secondary)]/80 dark:text-white/60 hover:text-[var(--color-brand-primary)] hover:bg-[var(--color-cardElevated)]'}`}
      >
        Todos
      </button>
      {categories.map(cat => (
        <button
          key={cat.id}
          onClick={() => setActiveCategory(cat.id)}
          className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${activeCategory === cat.id ? 'bg-[var(--color-brand-primary)] border-[var(--color-brand-primary)] text-white' : 'bg-[var(--color-card)] border-[var(--color-border)]/30 text-[var(--color-text-secondary)]/80 dark:text-white/60 hover:text-[var(--color-brand-primary)] hover:bg-[var(--color-cardElevated)]'}`}
        >
          {cat.nome}
        </button>
      ))}
    </div>
  </div>
);
export default BlogSearchFilter;
