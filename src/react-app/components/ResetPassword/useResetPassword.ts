import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useTheme } from '../../../styles/ThemeProvider';

const useResetPassword = () => {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const { mode } = useTheme();

  const inputBg = mode === 'clear' ? 'bg-gray-50' : 'bg-brand-dark';
  const inputText = mode === 'clear' ? 'text-gray-900' : 'text-white';
  const inputBorder = mode === 'clear' ? 'border-gray-200' : 'border-white/10';

  // Extrai access_token do hash da URL
  function getToken() {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.replace('#', '?'));
    return params.get('access_token');
  }
  const access_token = getToken();

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    if (!access_token) {
      setError('Token de redefinição inválido ou expirado.');
      setLoading(false);
      return;
    }
    try {
      const { supabase } = await import('../../../supabaseClient');
      const { error } = await supabase.auth.updateUser({ password }, { accessToken: access_token });
      if (error) {
        setError(error.message);
      } else {
        setSuccess('Senha redefinida com sucesso! Faça login novamente.');
        setTimeout(() => navigate('/login'), 2000);
      }
    } catch (err: any) {
      setError('Erro ao redefinir senha. Tente novamente.');
    }
    setLoading(false);
  };

  return { password, setPassword, loading, error, success, handleResetPassword, mode, inputBg, inputText, inputBorder };
};

export default useResetPassword;
