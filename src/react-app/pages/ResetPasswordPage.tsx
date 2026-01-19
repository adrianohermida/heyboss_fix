

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import ResetPasswordForm from '../components/ResetPassword/ResetPasswordForm';
import ResetPasswordSkeleton from '../components/ResetPassword/ResetPasswordSkeleton';
import { resetPasswordPageManifest } from '../components/ResetPassword/ResetPasswordPage.manifest';

const ResetPasswordPage = () => {
  // Could add loading state for async skeleton if needed
  return (
    <>
      <div style={{ minHeight: '100vh', background: 'var(--color-bg)', color: 'var(--color-text)' }}>
        <Header />
        <main className="flex items-center justify-center px-4 py-12 min-h-[80vh]">
          <div
            className="w-full max-w-md space-y-8 p-8 sm:p-12 rounded-[2.5rem] border relative overflow-hidden shadow-2xl animate-fade-in"
            style={{
              background: 'var(--color-card)',
              borderColor: 'var(--color-border)',
              color: 'var(--color-text)',
              boxShadow: '0 4px 32px 0 rgba(0,0,0,0.10)'
            }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-primary" />
            <div className="text-center">
              <h2 className="text-3xl font-extrabold" style={{ color: 'var(--color-text)' }}>Redefinir Senha</h2>
              <p className="mt-2" style={{ color: 'var(--color-border)' }}>Digite sua nova senha abaixo</p>
            </div>
            <ResetPasswordForm />
          </div>
        </main>
        <Footer />
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default ResetPasswordPage;
