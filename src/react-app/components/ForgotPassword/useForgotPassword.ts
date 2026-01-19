import { useState } from 'react';


const useForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const { supabase } = await import('../../../supabaseClient');
      if (!supabase) {
        setError('Erro de configuração: Supabase não inicializado. Verifique suas variáveis de ambiente.');
        setLoading(false);
        return;
      }
      const { error } = await supabase.auth.resetPasswordForEmail(email);
      if (error) {
        setError(error.message);
      } else {
        setSuccess('Se o e-mail estiver cadastrado, você receberá instruções para redefinir sua senha.');
      }
    } catch (err: any) {
      setError('Erro inesperado ao tentar recuperar senha. Tente novamente ou contate o suporte.');
    }
    setLoading(false);
  };

  return { email, setEmail, loading, error, success, handleForgotPassword };
};

export default useForgotPassword;
