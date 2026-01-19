
import React from 'react';
import Header from '../components/Header';
// import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import ForgotPasswordForm from '../components/ForgotPassword/ForgotPasswordForm';
import { forgotPasswordPageManifest } from '../components/ForgotPassword/ForgotPasswordPage.manifest';

const ForgotPasswordPage = () => (
  <>
    <div className="min-h-screen bg-brand-dark selection:bg-brand-primary selection:text-white">
      <Header />
      <main className="flex items-center justify-center px-4 py-12 min-h-[80vh]">
          <section
            className="w-full max-w-md space-y-8 p-8 sm:p-12 rounded-[2.5rem] border relative overflow-hidden shadow-2xl"
            style={{
              background: 'var(--color-card)',
              borderColor: 'var(--color-border)',
              color: 'var(--color-text)',
              boxShadow: '0 4px 32px 0 rgba(0,0,0,0.10)'
            }}
            aria-labelledby="forgot-password-title"
          >
          <div className="absolute top-0 left-0 w-full h-1 bg-brand-primary" />
          <div className="text-center">
            <h2 id="forgot-password-title" className="text-3xl font-extrabold text-white">Recuperar Senha</h2>
            <p className="mt-2 text-white/50">Informe seu e-mail para receber o link de redefinição</p>
          </div>
          <ForgotPasswordForm />
        </section>
      </main>
      {/* Footer removido: agora é global via App.tsx */}
    </div>
    <ScrollToTopButton />
  </>
);

export default ForgotPasswordPage;
