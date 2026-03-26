import { useState, useRef, useEffect } from "react";

interface MiniPlayerProps {
  songTitle: string;
  audioSrc?: string;
  onClose: () => void;
  isVisible: boolean;
  onSongEnd?: () => void;

  upNext?: { title: string, countdown: number } | null;
  onCancelUpNext?: () => void;
  onPlayUpNextNow?: () => void;
}

const formatTime = (time: number) => {
  if (isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default function MiniPlayer({
  songTitle,
  audioSrc,
  onClose,
  isVisible,
  onSongEnd,
  upNext, 
  onCancelUpNext, 
  onPlayUpNextNow
}: MiniPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [maxChars, setMaxChars] = useState(16);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 450) {
        setMaxChars(9);
      } else if (width < 750) {
        setMaxChars(18);
      } else {
        setMaxChars(22);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isLongTitle = songTitle.length > maxChars;

  useEffect(() => {
    if (audioSrc && audioRef.current) {
      setCurrentTime(0);
      setIsPlaying(false);
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [audioSrc]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const stopSong = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || duration === 0) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickPercent = clickX / rect.width;
    
    audioRef.current.currentTime = clickPercent * duration;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <>
      <style>
        {`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
        .mask-fade-edges {
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
      `}
      </style>
      <div
        className={`fixed bottom-[5dvh] z-60 bg-[#FFD977] border-4 border-azul-noche text-azul-noche rounded-4xl md:rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.5)] flex items-center transition-all duration-500 ease-in-out
        left-4 right-4 max-w-[95dvw] md:max-w-fit mx-auto px-5 py-1 gap-4 
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-32 opacity-0 pointer-events-none"}
      `}
      >
        {audioSrc && (
          <audio 
            ref={audioRef} 
            src={audioSrc} 
            onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
            onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
            onEnded={() => {
              setIsPlaying(false);
              if (onSongEnd) onSongEnd();
            }}
          />
        )}

        {/* VINILO ANIMADO */}
        <div
          className={`w-12 h-12 md:w-16 md:h-16 lg:w-21 lg:h-21 shrink-0 flex items-center justify-center drop-shadow-md ${isPlaying ? "animate-spin" : ""}`}
          style={{
            animationDuration: "2.5s",
            animationTimingFunction: "linear",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Base negra del disco */}
            <circle cx="12" cy="12" r="11" fill="#111827" />

            {/* Surcos grises para darle textura */}
            <circle cx="12" cy="12" r="9" stroke="#374151" strokeWidth="0.5" />
            <circle cx="12" cy="12" r="7" stroke="#374151" strokeWidth="0.5" />

            {/* Brillos */}
            <path
              d="M 12 1.5 A 10.5 10.5 0 0 0 1.5 12"
              stroke="#4B5563"
              strokeWidth="0.75"
              strokeLinecap="round"
            />
            <path
              d="M 22.5 12 A 10.5 10.5 0 0 1 17 21.2"
              stroke="#4B5563"
              strokeWidth="0.75"
              strokeLinecap="round"
            />

            {/* Etiqueta central de color */}
            <circle cx="12" cy="12" r="4" fill="#8a0194" />

            {/* Detalle curvo amarillo en la etiqueta*/}
            <path
              d="M 12 8.5 A 3.5 3.5 0 0 1 15.5 12"
              stroke="oklch(83.3% 0.145 321.434)"
              strokeWidth="1"
              strokeLinecap="round"
            />

            {/* Agujero central del vinilo */}
            <circle cx="12" cy="12" r="1.2" fill="#FFD977" />
          </svg>
        </div>

        {/* INFO DE LA CANCIÓN */}
        <div className="flex flex-col flex-1 min-w-0 overflow-hidden relative">
          <span className="text-sm md:text-base font-mono text-azul-noche/70 pr-2">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>

          {/* Contenedor del texto con el difuminado */}
          <div
            className={`w-full min-w-50 max-w-65 overflow-hidden whitespace-nowrap flex items-center ${isLongTitle ? "mask-fade-edges" : ""}`}
          >
            {/* El div que realmente se mueve */}
            <div
              className={`${isLongTitle ? "animate-marquee flex w-max" : "truncate"}`}
            >
              <span
                className={`text-lg md:text-xl font-bold font-sans ${isLongTitle ? "pr-8" : ""}`}
              >
                {songTitle}
              </span>

              {/* Si es largo, duplicamos el texto para que el bucle sea infinito y no haya saltos */}
              {isLongTitle && (
                <span
                  className="text-lg md:text-xl font-bold font-sans pr-8"
                  aria-hidden="true"
                >
                  {songTitle}
                </span>
              )}
            </div>
          </div>

          <div 
            className="h-1 w-[90%] bg-[#fcf6e3]/50 rounded-full mt-1.5 overflow-hidden cursor-pointer"
            onClick={handleSeek}
          >
            <div
              className="h-full bg-[#FF6E28] rounded-full relative"
              style={{
                width: `${progressPercent}%`,
                transition: "width 0.1s linear",
              }}
            >
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#ff9762] shadow-[0_0_5px_#FFD977]" />
            </div>
          </div>
        </div>

        {/* CONTROLES */}
        <div className="flex items-center gap-2 pl-2 border-l border-azul-noche/70">          
          <button
            onClick={togglePlay}
            className="w-10 h-10 ml-1 flex items-center justify-center bg-azul-noche text-white rounded-full hover:scale-110 hover:bg-[#FF6E28] hover:text-azul-noche transition-all shadow-md cursor-pointer"
          >
            {isPlaying ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          <button 
            onClick={stopSong}
            className=" text-[#FF6E28]/80 hover:text-[#FF6E28] hover:scale-110 transition-all cursor-pointer"
            aria-label="Detener canción"
          >
            <svg className="w-7 h-7 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 6h12v12H6z" />
            </svg>
          </button>

          <button
            onClick={onClose}
            className="text-azul-noche hover:text-[#FF6E28] transition-colors cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {upNext && (
          <div className="absolute rounded-2xl bottom-full mb-3 left-0 bg-[#FFD977] border-4 border-azul-noche shadow-[0_10px_20px_rgba(0,0,0,0.5)] p-4 flex flex-col gap-2 w-full md:w-[95] z-50 animate-pop-in">
            <div className="flex items-center justify-between border-b-2 border-azul-noche/20 pb-1">
              <span className="text-azul-noche font-bold text-sm tracking-wider uppercase">
                Siguiente en {upNext.countdown}...
              </span>
              <button onClick={onCancelUpNext} className="text-azul-noche/60 hover:text-azul-noche hover:scale-110 transition-all cursor-pointer">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
            
            <div className="text-azul-noche font-black text-xl font-sans truncate pr-2" title={upNext.title}>
              {upNext.title}
            </div>
            
            <div className="flex gap-3 mt-1">
              <button 
                onClick={onPlayUpNextNow} 
                className="flex-1 bg-azul-noche text-white border-2 border-azul-noche font-bold py-2 hover:bg-[#FF6E28] hover:text-azul-noche transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                Reproducir
              </button>
              <button 
                onClick={onCancelUpNext} 
                className="flex-1 bg-transparent text-azul-noche border-2 border-azul-noche font-bold py-2 hover:bg-[#FF6E28] hover:text-white transition-colors cursor-pointer"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
