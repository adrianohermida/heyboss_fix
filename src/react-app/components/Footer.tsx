import React from 'react';
import { useTheme } from '../../styles/ThemeProvider';
import { colors } from '../../styles/theme';

export default function Footer() {
  const { mode } = useTheme();
  return (
    <footer
      className="w-full py-10 border-t-0 shadow-[0_-2px_16px_0_#394a6610]"
      style={{ background: 'var(--color-brand)', color: 'var(--color-white)' }}
      aria-label="Rodapé institucional"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <nav className="flex flex-wrap gap-6 justify-center md:justify-start mb-4 md:mb-0">
          <a
            href="/politica-privacidade"
            className="text-xs md:text-sm font-medium hover:text-[var(--color-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded transition-colors"
            style={{ color: 'var(--color-white)', opacity: 0.85 }}
            aria-label="Política de Privacidade"
          >
            Política de Privacidade
          </a>
          <a
            href="/contato"
            className="text-xs md:text-sm font-medium hover:text-[var(--color-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded transition-colors"
            style={{ color: 'var(--color-white)', opacity: 0.85 }}
            aria-label="Contato"
          >
            Contato
          </a>
        </nav>
        <p
          className="text-xs md:text-sm font-semibold tracking-wide mt-2 md:mt-0"
          style={{ color: 'var(--color-white)', opacity: 0.92 }}
        >
          © 2024 Hermida Maia Advocacia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
