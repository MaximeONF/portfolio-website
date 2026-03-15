import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Lock, Mail, AlertCircle, CheckCircle } from 'lucide-react';

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secretCode, setSecretCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const SIGNUP_SECRET = 'ADMIN2026';

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (secretCode !== SIGNUP_SECRET) {
      setError('Code secret invalide');
      return;
    }

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    if (password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères');
      return;
    }

    setLoading(true);

    try {
      const { error: signupError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/admin/login`,
        },
      });

      if (signupError) throw signupError;

      setSuccess(true);
      setTimeout(() => {
        navigate('/admin/login');
      }, 2000);
    } catch (err: any) {
      setError(err.message || 'Une erreur est survenue lors de la création du compte');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Créer un compte admin</h1>
          <p className="text-gray-600">Inscription sécurisée avec code secret</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            <p className="text-green-700 text-sm">Compte créé avec succès! Redirection...</p>
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label htmlFor="secretCode" className="block text-sm font-medium text-gray-700 mb-2">
              Code secret
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="secretCode"
                type="text"
                value={secretCode}
                onChange={(e) => setSecretCode(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Entrez le code secret"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="admin@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Mot de passe
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="••••••••"
                required
                minLength={6}
              />
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
              Confirmer le mot de passe
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="••••••••"
                required
                minLength={6}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Création en cours...' : 'Créer le compte'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/admin/login')}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            Déjà un compte? Se connecter
          </button>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <p className="text-xs text-blue-800">
            <strong>Note de sécurité:</strong> Cette page d'inscription est protégée par un code secret.
            Le code est: <code className="bg-blue-100 px-2 py-1 rounded">ADMIN2026</code>
          </p>
        </div>
      </div>
    </div>
  );
}