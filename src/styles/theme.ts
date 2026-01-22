// src/styles/theme.ts
// Centralização de cores para clear/dark mode

export const colors = {
  clear: {
    bg: '#ffffff', // fundo geral branco
    brand: '#173D34', // cor matriz branding (verde escuro)
    accent: '#00d969', // destaque vibrante
    text: '#173D34', // texto principal (verde escuro)
    card: '#ffffff', // cards e superfícies
    cardElevated: '#F1F5ED', // cards elevados ou destaque (fundo alternado)
    border: '#e5e7eb',
    footerBg: '#173D34',
    white: '#ffffff', // branco puro
    success: '#00d969', // verde sucesso
    error: '#e53935', // vermelho erro
    warning: '#ffb300', // amarelo alerta
    info: '#1976d2', // azul info
  },
  dark: {
    bg: '#173D34', // fundo escuro verde matriz
    brand: '#173D34', // matriz branding
    accent: '#00d969', // destaque vibrante
    text: '#F1F5ED', // texto claro (fundo escuro)
    card: '#173D34', // cards escuros
    cardElevated: '#223F36', // cards elevados escuros (um tom acima do brand)
    border: '#223F36',
    footerBg: '#173D34',
    white: '#F1F5ED', // fundo alternado claro
    success: '#00d969', // verde sucesso
    error: '#ff6659', // vermelho erro escuro
    warning: '#ffd54f', // amarelo alerta escuro
    info: '#90caf9', // azul info escuro
  }
};

export type ThemeMode = 'clear' | 'dark';
