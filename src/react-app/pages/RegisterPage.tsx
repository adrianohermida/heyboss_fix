

import React from 'react';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import RegisterForm from '../components/Register/RegisterForm';
import RegisterSkeleton from '../components/Register/RegisterSkeleton';
import { registerPageManifest } from '../components/Register/RegisterPage.manifest';

const RegisterPage = () => {
  // Could add loading state for async skeleton if needed
  return (
    <>
      <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-brand-dark text-white">
          <div
            className="max-w-md w-full space-y-8 p-8 sm:p-12 rounded-[2.5rem] border relative overflow-hidden shadow-2xl"
            style={{
              background: 'var(--color-card)',
              borderColor: 'var(--color-border)',
              color: 'var(--color-text)',
              boxShadow: '0 4px 32px 0 rgba(0,0,0,0.10)'
            }}
          >
          <div className="absolute top-0 left-0 w-full h-1 bg-brand-primary" />
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">Criar Conta</h2>
            <p className="mt-2 text-white/50">Preencha seus dados para se cadastrar</p>
          </div>
          <RegisterForm />
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default RegisterPage;
