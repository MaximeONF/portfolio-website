import { Loader2, Save } from 'lucide-react';

interface SaveButtonProps {
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
  children?: React.ReactNode;
}

export default function SaveButton({ loading, onClick, type = 'submit', children }: SaveButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className="px-6 py-3 bg-gradient-to-r from-[#4ECDC4] to-[#44A08D] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#4ECDC4]/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
    >
      {loading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Enregistrement...</span>
        </>
      ) : (
        <>
          <Save className="w-5 h-5" />
          <span>{children || 'Enregistrer'}</span>
        </>
      )}
    </button>
  );
}