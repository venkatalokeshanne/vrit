'use client';


const ScrollingBanner = ({ text, isVisible = true }) => {
  if (!isVisible || !text) {
    return null;
  }

  return (
    <>
      <div className="w-full bg-red-600 text-white py-3 shadow-lg relative z-50 hover-pause-scroll">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="scrolling-text inline-block">
            <span className="text-sm font-bold px-8">
              🔥 {text} 🔥
            </span>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        .scrolling-text {
          animation: scroll-left 20s linear infinite;
        }
        
        .hover-pause-scroll:hover .scrolling-text {
          animation-play-state: paused;
        }
        
        @keyframes scroll-left {
          0% {
            transform: translateX(50vw);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </>
  );
};

export default ScrollingBanner;
