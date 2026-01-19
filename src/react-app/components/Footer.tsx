import React from 'react';
import { useTheme } from '../../styles/ThemeProvider';
import { colors } from '../../styles/theme';

export default function Footer() {
  const { mode } = useTheme();
  return (
    <footer
      className={`py-8 md:py-12 border-t w-full`}
      style={{ background: 'var(--color-footerBg)', color: 'var(--color-text)' }}
      aria-label="Rodapé institucional"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p
          className="text-xs md:text-sm font-medium tracking-wide"
          style={{ color: 'var(--color-text)', opacity: 0.92 }}
        >
          © 2024 Hermida Maia Advocacia. Todos os direitos reservados.
        </p>
        <nav className="flex flex-wrap gap-4 justify-center md:justify-end mt-4 md:mt-0">
          <a
            href="/politica-privacidade"
            className="text-xs md:text-sm font-medium underline underline-offset-2 hover:text-[var(--color-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded transition-colors"
            style={{ color: 'var(--color-text)', opacity: 0.8 }}
            aria-label="Política de Privacidade"
          >
            Política de Privacidade
          </a>
          <a
            href="/contato"
            className="text-xs md:text-sm font-medium underline underline-offset-2 hover:text-[var(--color-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded transition-colors"
            style={{ color: 'var(--color-text)', opacity: 0.8 }}
            aria-label="Contato"
          >
            Contato
          </a>
        </nav>
      </div>
    </footer>
  );
}
