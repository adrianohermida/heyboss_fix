/**
 * AuthCallback.tsx - OAuth Authentication Callback Page
 *
 * This component handles the OAuth authentication callback flow after a user
 * completes authentication with an external provider (e.g., Google, GitHub).
 * It automatically processes the OAuth code and notifies the parent window
 * about the authentication result.
 *
 * Key Features:
 * - Automatic OAuth code processing
 * - Parent window notification for popup-based auth flows
 * - Loading state with user-friendly UI
 * - Responsive design with modern styling
 *
 * Usage:
 * This component is typically used as a route handler for OAuth callbacks:
 * ```tsx
 * <Route path="/auth/callback" element={<AuthCallback />} />
 * ```
 *
 * Dependencies:
 * - Requires @hey-boss/users-service/react for authentication logic
 * - Uses lucide-react for loading icons
 * - Automatically handles OAuth code exchange and session creation
 *
 * Integration Notes:
 * - This component should be placed at the OAuth callback URL
 * - The parent window will receive the authentication result
 * - No manual user interaction required - fully automated flow
 */

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    async function handleAuth() {
      // Extrai tokens do hash
      const hash = window.location.hash;
      const params = new URLSearchParams(hash.replace('#', '?'));
      const access_token = params.get('access_token');
      const refresh_token = params.get('refresh_token');
      if (!access_token || !refresh_token) {
        navigate('/login?error=callback');
        return;
      }
      try {
        const { supabase } = await import('../../supabaseClient');
        const { error } = await supabase.auth.setSession({ access_token, refresh_token });
        if (error) {
          navigate('/login?error=session');
        } else {
          // Opcional: buscar perfil e redirecionar para dashboard/admin
          const { data } = await supabase.auth.getUser();
          const email = data?.user?.email || '';
          const adminEmails = ["contato@hermidamaia.adv.br", "adrianohermida@gmail.com", "admin@example.com"];
          const isAdmin = adminEmails.some(e => e.toLowerCase() === email.toLowerCase());
          navigate(isAdmin ? '/dashboard' : '/client-portal', { replace: true });
        }
      } catch {
        navigate('/login?error=exception');
      }
    }
    handleAuth();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-bgPrimary text-textPrimary">
      <div className="bg-bgElevated p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Aguarde...</h1>
        <p>Validando autenticação e redirecionando.</p>
      </div>
    </div>
  );
}
