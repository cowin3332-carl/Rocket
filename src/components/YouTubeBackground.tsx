import React from 'react';

export const YouTubeBackground: React.FC = () => {
  const videoId = 'C3iHAgwIYtI';
  
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2">
        <iframe
          className="w-full h-full object-cover"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1`}
          allow="autoplay; encrypted-media"
          frameBorder="0"
        />
      </div>
      {/* Overlay to ensure readability and add a cinematic tint */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#030712]" />
    </div>
  );
};
