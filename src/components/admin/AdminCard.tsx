import { ReactNode } from 'react';

interface AdminCardProps {
  title: string;
  description?: string;
  children: ReactNode;
  actions?: ReactNode;
}

export default function AdminCard({ title, description, children, actions }: AdminCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden">
      <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          {description && <p className="text-sm text-gray-400 mt-1">{description}</p>}
        </div>
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}