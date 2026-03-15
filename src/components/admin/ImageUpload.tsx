import { useState } from 'react';
import { Upload, X, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface ImageUploadProps {
  label: string;
  currentImage?: string;
  onUpload: (url: string) => void;
  bucket?: string;
  folder?: string;
}

export default function ImageUpload({
  label,
  currentImage,
  onUpload,
  bucket = 'images',
  folder = 'uploads',
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setError('');
      setUploading(true);

      if (!e.target.files || e.target.files.length === 0) {
        return;
      }

      const file = e.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${folder}/${Math.random()}.${fileExt}`;

      const { error: uploadError, data } = await supabase.storage
        .from(bucket)
        .upload(fileName, file);

      if (uploadError) {
        throw uploadError;
      }

      const { data: { publicUrl } } = supabase.storage
        .from(bucket)
        .getPublicUrl(fileName);

      onUpload(publicUrl);
    } catch (error) {
      setError('Erreur lors du téléchargement de l\'image');
      console.error('Upload error:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleRemove = () => {
    onUpload('');
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>

      {currentImage ? (
        <div className="relative">
          <img
            src={currentImage}
            alt="Preview"
            className="w-full h-48 object-cover rounded-lg border border-white/10"
          />
          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-2 right-2 p-2 bg-red-500/80 hover:bg-red-500 text-white rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <label className="block w-full h-48 border-2 border-dashed border-white/20 rounded-lg hover:border-[#4ECDC4]/50 transition-colors cursor-pointer">
          <div className="flex flex-col items-center justify-center h-full text-gray-400">
            {uploading ? (
              <Loader2 className="w-8 h-8 animate-spin" />
            ) : (
              <>
                <Upload className="w-8 h-8 mb-2" />
                <span className="text-sm">Cliquez pour télécharger une image</span>
              </>
            )}
          </div>
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleUpload}
            disabled={uploading}
          />
        </label>
      )}

      {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
    </div>
  );
}