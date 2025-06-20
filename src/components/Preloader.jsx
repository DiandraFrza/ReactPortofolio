import React, { useState, useEffect, useRef } from "react";

const initialPhrases = [
  "Initializing virtual DOM...",
  "Compiling React components...",
  "Styling with Tailwind CSS...",
  "Securing API endpoints...",
  "Deploying to Vercel...",
  "Finalizing awesomeness...",
];

const shuffleArray = (array) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

function Preloader() {
  const [phrases, setPhrases] = useState([]);
  const phrasesRef = useRef(null);
  const animationFrameId = useRef(null);
  const verticalSpacing = 50;

  useEffect(() => {
    setPhrases(shuffleArray([...initialPhrases]));
  }, []);

  useEffect(() => {
    if (phrases.length === 0 || !phrasesRef.current) return;

    const upwardMovingGroup = phrasesRef.current;
    let currentY = 0;
    const targetY = -(phrases.length - 3) * verticalSpacing;

    const animateLoading = () => {
      if (currentY > targetY) {
        currentY -= 0.7;
        upwardMovingGroup.style.transform = `translateY(${currentY}px)`;
        animationFrameId.current = requestAnimationFrame(animateLoading);
      }
    };

    animationFrameId.current = requestAnimationFrame(animateLoading);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [phrases]);

  return (
    <>
      <div id="page">
        <div className="flex flex-col items-center">
          <div id="phrase_box">
            <svg width="100%" height="100%">
              <defs>
                <mask
                  id="mask"
                  maskUnits="userSpaceOnUse"
                  maskContentUnits="userSpaceOnUse"
                >
                  <linearGradient
                    id="linearGradient"
                    gradientUnits="objectBoundingBox"
                    x2="0"
                    y2="1"
                  >
                    <stop stopColor="white" stopOpacity="0" offset="0%" />
                    <stop stopColor="white" stopOpacity="1" offset="30%" />
                    <stop stopColor="white" stopOpacity="1" offset="70%" />
                    <stop stopColor="white" stopOpacity="0" offset="100%" />
                  </linearGradient>
                  <rect
                    width="100%"
                    height="100%"
                    fill="url(#linearGradient)"
                  />
                </mask>
              </defs>
              <g width="100%" height="100%" style={{ mask: "url(#mask)" }}>
                <g id="phrases" ref={phrasesRef}>
                  {phrases.map((phrase, index) => {
                    const yOffset = 30 + verticalSpacing * index;
                    const animationDelay = (index / phrases.length) * 18 + "s";

                    return (
                      <g key={index}>
                        <text
                          fill="white"
                          x="50"
                          y={yOffset}
                          fontSize="18"
                          fontFamily="Arial, sans-serif"
                        >
                          {phrase}
                        </text>
                        <g
                          transform={`translate(10 ${yOffset - 20}) scale(.9)`}
                        >
                          <circle
                            className="loading-circle"
                            fill="rgba(255,255,255,0)"
                            cx="16"
                            cy="16"
                            r="15"
                            style={{ animationDelay }}
                          />
                          <polygon
                            className="loading-polygon"
                            points="21.661,7.643 13.396,19.328 9.429,15.361 7.075,17.714 13.745,24.384 24.345,9.708"
                            fill="white"
                            style={{ animationDelay }}
                          />
                          <path
                            d="M16,0C7.163,0,0,7.163,0,16s7.163,16,16,16s16-7.163,16-16S24.837,0,16,0z M16,30C8.28,30,2,23.72,2,16C2,8.28,8.28,2,16,2 c7.72,0,14,6.28,14,14C30,23.72,23.72,30,16,30z"
                            fill="white"
                          />
                        </g>
                      </g>
                    );
                  })}
                </g>
              </g>
            </svg>
          </div>
          <div id="loading_status">
            Loading<span className="dot">.</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
          </div>
        </div>
        <div id="footer">
          Diandra<span className="accent">Frzaa.</span>
        </div>
      </div>

      <style>{`
        #page {
          align-items: center;
          background: linear-gradient(to top right, #1e293b 10%, #334155 65%, #4c1d95 125%);
          position: fixed; inset: 0;
          z-index: 9999; display: flex;
          justify-content: center;
        }
        #phrase_box {
          height: 150px;
          overflow: hidden;
          width: 350px;
          margin-bottom: 20px;
        }
        #loading_status {
          font-family: monospace;
          font-weight: bold;
          font-size: 1.25rem;
          color: #d8b4fe;
          text-shadow: 0 0 5px #d8b4fe, 0 0 10px #d8b4fe, 0 0 20px #a855f7;
          animation: subtle-pulse 2s ease-in-out infinite;
        }
        #loading_status .dot {
          animation: dot-bounce 1.5s infinite;
        }
        #loading_status .dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        #loading_status .dot:nth-child(3) {
          animation-delay: 0.4s;
        }
        #footer {
          position: fixed; bottom: 30px;
          left: 0; right: 0;
          display: flex; justify-content: center;
          color: white; font-weight: bold;
          font-size: 1.1rem;
          letter-spacing: 1.5px;
          text-shadow: 0 0 8px rgba(192, 132, 252, 0.25);
        }
        #footer .accent {
            color: #c084fc;
        }
        .loading-polygon { animation: fill-to-purple 20s infinite; }
        .loading-circle { animation: fill-to-white 20s infinite; }

        @keyframes fill-to-white { 0%, 2% { opacity: 0; } 7%, 100% { opacity: 1; } }
        @keyframes fill-to-purple { 0%, 2% { fill: white; } 7%, 100% { fill: #a855f7; } }
        @keyframes subtle-pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        @keyframes dot-bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-3px); }
        }
      `}</style>
    </>
  );
}

export default Preloader;
