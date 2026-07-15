import React, { useState, useEffect } from 'react';
import { UploadCloud, Trash2 } from 'lucide-react';
import { get, set, del } from 'idb-keyval';

interface ImageUploaderProps {
  id: string;
  defaultText: string;
  defaultImagePath?: string;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ id, defaultText, defaultImagePath }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const storedImage = await get(id);
        if (storedImage) {
          setImageUrl(storedImage as string);
        } else if (defaultImagePath) {
          setImageUrl(defaultImagePath);
        }
      } catch (err) {
        console.error("Failed to load image from IndexedDB", err);
        if (defaultImagePath) setImageUrl(defaultImagePath);
      } finally {
        setIsLoaded(true);
      }
    };
    loadImage();
  }, [id, defaultImagePath]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result as string;
        setImageUrl(base64String);
        try {
          await set(id, base64String);
        } catch (err) {
          console.error("Failed to save image to IndexedDB", err);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await del(id);
      setImageUrl(defaultImagePath || null);
    } catch (err) {
      console.error("Failed to delete image from IndexedDB", err);
    }
  };

  if (!isLoaded) {
    return <div className="w-full h-full min-h-[40vh] flex items-center justify-center animate-pulse bg-sky-50 rounded-2xl"></div>;
  }

  if (imageUrl) {
    return (
      <div className="relative w-full h-full flex items-center justify-center group">
        <img 
            src={imageUrl} 
            alt="Uploaded content" 
            className="w-full max-h-[50vh] md:max-h-[60vh] object-contain rounded-xl md:rounded-2xl"
            onError={() => {
              if (imageUrl === defaultImagePath) setImageUrl(null);
            }}
        />
        <label className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer rounded-xl md:rounded-2xl">
          <UploadCloud className="w-16 h-16 text-white" />
          <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
        </label>
        <button 
          onClick={handleDelete}
          className="absolute top-4 right-4 p-3 bg-red-500 hover:bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all transform hover:scale-110 shadow-lg z-10"
          title="Delete Image"
        >
          <Trash2 className="w-6 h-6" />
        </button>
      </div>
    );
  }

  return (
    <label className="w-full h-full min-h-[40vh] border-8 border-dashed border-sky-200 hover:border-sky-400 bg-sky-50/50 hover:bg-sky-50 transition-colors flex flex-col items-center justify-center rounded-2xl cursor-pointer group p-8 text-center">
      <UploadCloud className="w-24 h-24 text-sky-300 group-hover:text-sky-400 mb-6 transition-colors" />
      <p className="text-2xl md:text-4xl font-bold text-sky-600 font-display">{defaultText}</p>
      <p className="text-slate-500 mt-4 font-bold text-sm md:text-xl">Click to upload image from your device</p>
      <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
    </label>
  );
};
