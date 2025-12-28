import React from 'react';

const VideoCarousel = ({ videos }) => {
    // Duplicate videos to create seamless loop
    const carouselVideos = [...videos, ...videos, ...videos, ...videos];

    return (
        <div className="w-full overflow-hidden relative group pause-on-hover">
            <div className="flex gap-8 w-max animate-scroll">
                {carouselVideos.map((video, index) => (
                    <div
                        key={index}
                        className="relative w-[300px] sm:w-[400px] aspect-video flex-shrink-0 rounded-lg overflow-hidden shadow-xl"
                    >
                        <video
                            src={video}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover pointer-events-none"
                            onContextMenu={(e) => e.preventDefault()}
                        />
                    </div>
                ))}
            </div>
            {/* Gradient Overlays for smooth fade effect at edges */}
            <div className="absolute inset-y-0 left-0 w-8 md:w-32 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-8 md:w-32 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none"></div>
        </div>
    );
};

export default VideoCarousel;
