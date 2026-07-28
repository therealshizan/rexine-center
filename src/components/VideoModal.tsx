import React from 'react';
import { X, Play } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9000] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-10 h-10 bg-black/60 text-white rounded-full flex items-center justify-center hover:bg-[#C67C4E] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player Frame */}
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0"
          title="Rexine Centre Craftsmanship & Showroom Tour"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};
