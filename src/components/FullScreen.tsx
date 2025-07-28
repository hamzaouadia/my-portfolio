import { useState } from 'react';
import { Maximize, Minimize } from 'lucide-react'; // optional icon lib

export default function FullscreenToggle() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true));
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false));
    }
  };

  return (
    <button
      onClick={toggleFullscreen}
      className="fixed hover-target bottom-4 left-4 z-[9999] bg-black/70 text-white px-2 py-2 rounded-lg shadow-md hover:bg-black"
    >
      {isFullscreen ? (
        <Minimize className="w-5 h-5" />
      ) : (
        <Maximize className="w-5 h-5" />
      )}
    </button>
  );
}
