import { useEffect, useRef } from "react";

interface SceneDetailProps {
  isOpen: boolean;
  onClose: () => void;
  sceneTitle: string;
  synopsis?: string;
  items: {
    title: string;
    type: "song" | "reading";
    colorClass: string;
    content: string;
  }[];
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

export default function SceneDetailModal({
  isOpen,
  onClose,
  sceneTitle,
  synopsis,
  items,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}: SceneDetailProps) {
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);


  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [sceneTitle]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-azul-noche/60 backdrop-blur-sm">
      <div className="bg-[#ffe39b] w-full max-w-8xl max-h-[90vh] rounded-4xl border-8 border-azul-noche flex flex-col shadow-2xl relative overflow-hidden">
        
        {/* BOTÓN DE CERRAR */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 bg-[#FF6E28] text-white p-2 rounded-full border-4 border-azul-noche hover:scale-110 hover:bg-[#FFD977] hover:text-azul-noche transition-all cursor-pointer shadow-lg"
          aria-label="Cerrar detalle"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* CABECERA (Fija) */}
        <div className="bg-azul-noche px-8 py-8 sm:py-10 text-center shrink-0">
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-white font-bungee-shade drop-shadow-md pr-12 sm:pr-0">
            {sceneTitle}
          </h2>
        </div>

        <div ref={scrollContainerRef} className="flex-1 overflow-y-auto p-6 sm:p-10 hide-scrollbar flex flex-col">
          
          {synopsis && (
            <div className="mb-12">
              <h4 className="text-2xl text-azul-noche font-bold mb-4" style={{ fontFamily: "cursive" }}>
                Contexto de la escena:
              </h4>
              <p className="text-lg text-gray-800 leading-relaxed font-medium">
                {synopsis}
              </p>
            </div>
          )}

          <div className="flex flex-col gap-12">
            {items.map((item, index) => {
              const cantidadDeLineas = item.content.split('\n').length;
              const clasesDeColumnas = cantidadDeLineas > 12 
                ? "md:columns-2 lg:columns-3" 
                : "columns-1 max-w-3xl";

              return (
                <div key={index} className="flex flex-col">
                  <div className={`${item.colorClass} border-4 border-azul-noche rounded-2xl py-3 px-6 inline-flex w-fit items-center gap-3 shadow-md mb-6 -ml-2 sm:-ml-4`}>
                    {item.type === "song" ? (
                      <svg className="w-6 h-6 text-black shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" /></svg>
                    ) : (
                      <svg className="w-6 h-6 text-black shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M10.5 2h3v7h6v3h-6v10h-3V12h-6V9h6V2z" /></svg>
                    )}
                    <h3 className="text-2xl font-bold text-black" style={{ fontFamily: "cursive" }}>
                      {item.title}
                    </h3>
                  </div>

                  <div className="px-4 sm:px-8 border-l-4 border-azul-noche/20 ml-2 sm:ml-4">
                    <pre className={`whitespace-pre-wrap font-sans text-lg text-gray-800 leading-relaxed gap-12 ${clasesDeColumnas}`}>
                      {item.content}
                    </pre>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-auto pt-16 flex justify-between items-center w-full">
            
            {/* Botón Anterior */}
            <div className="w-1/3">
              {hasPrev && (
                <button 
                  onClick={onPrev}
                  className="cursor-pointer flex items-center gap-2 text-azul-noche font-bold text-lg hover:text-[#FF6E28] transition-colors"
                  style={{ fontFamily: "cursive" }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                  ANTERIOR
                </button>
              )}
            </div>

            <div className="w-1/3 flex justify-center">
              <div className="w-2 h-2 rounded-full bg-azul-noche/30"></div>
            </div>

            {/* Botón Siguiente */}
            <div className="w-1/3 flex justify-end">
              {hasNext && (
                <button 
                  onClick={onNext}
                  className="cursor-pointer flex items-center gap-2 text-azul-noche font-bold text-lg hover:text-[#FF6E28] transition-colors"
                  style={{ fontFamily: "cursive" }}
                >
                  SIGUIENTE
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}