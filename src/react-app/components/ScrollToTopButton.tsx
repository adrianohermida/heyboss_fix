import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-[1050] bg-brand-primary text-white p-3 rounded-full shadow-lg hover:bg-brand-success focus-visible:ring-2 focus-visible:ring-brand-success transition-all"
      style={{ marginBottom: '96px' }} // Extra margin to clear Freshchat widget
      aria-label="Voltar ao início"
    >
      <ArrowUp size={24} />
    </button>
  );
}
