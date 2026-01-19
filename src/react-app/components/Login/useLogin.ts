import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useTheme } from '../../../styles/ThemeProvider';

const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { mode } = useTheme();

  const inputBg = mode === 'clear' ? 'bg-gray-50' : 'bg-brand-dark';
  const inputText = mode === 'clear' ? 'text-gray-900' : 'text-white';
  const inputBorder = mode === 'clear' ? 'border-gray-200' : 'border-white/10';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const { supabase } = await import('../../../supabaseClient');
      if (!supabase) {
        setError('Erro de configuração: Supabase não inicializado. Verifique suas variáveis de ambiente.');
        setLoading(false);
        return;
      }
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setError(error.message);
      } else {
        navigate('/dashboard', { replace: true });
      }
    } catch (err: any) {
      if (err?.status === 404) {
        setError('Serviço de autenticação indisponível. Tente novamente mais tarde.');
      } else if (err instanceof SyntaxError) {
        setError('Resposta inesperada do servidor.');
      } else {
        setError('Erro inesperado ao tentar fazer login. Verifique sua conexão ou contate o suporte.');
      }
    }
    setLoading(false);
  };

  return { email, password, setEmail, setPassword, loading, error, handleLogin, mode, inputBg, inputText, inputBorder };
};

export default useLogin;
