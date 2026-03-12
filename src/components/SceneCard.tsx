interface ItemScene {
  title: string;
}

interface SceneCardProps {
  title: string;
  songs?: ItemScene[];
  readings?: ItemScene[];
  onActionClick?: () => void;
}

export default function SceneCard({
  title,
  songs = [],
  readings = [],
  onActionClick,
}: SceneCardProps) {
  
  const fixedColors = ["bg-[#ff8c00]", "bg-[#ffed00]", "bg-[#00d800]"];

  const combinedItems = [
    ...songs.map((song) => ({ ...song, type: "song" })),
    ...readings.map((reading) => ({ ...reading, type: "reading" })),
  ];

  const displayedItems = combinedItems.slice(0, 3);
  
  // Calculamos si sobran elementos
  const extraItemsCount = combinedItems.length - 3;

  return (
    <div
      className="bg-[#FFD977] border-6 border-azul-noche rounded-4xl p-4 flex flex-col gap-4 w-full max-w-sm mx-auto shadow-xl mt-10
      transition-all duration-300 ease-in-out hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl font-caveat-brush
      "
    >
      <div className="bg-azul-noche rounded-2xl py-8 px-4 flex items-center justify-center">
        <h3
          className="text-white text-3xl text-center font-bold tracking-wider"
        >
          {title}
        </h3>
      </div>

      <div className="flex flex-1 justify-center flex-col gap-3 mt-2">
        {displayedItems.map((item, index) => (
          <div
            key={index}
            className={`${fixedColors[index]} flex justify-between items-center py-2 px-4 rounded-r-full -ml-4 pr-6 hover:-mr-2 transition-all `}
          >
            <span
              className="text-2xl text-black truncate mr-2"
            >
              {item.title}
            </span>

            {item.type === "song" ? (
              // Icono de Nota Musical
              <svg className="w-6 h-6 text-black shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
              </svg>
            ) : (
              // NUEVO: Icono de Libro Abierto
              <svg className="w-6 h-6 text-black shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10.5 2h3v7h6v3h-6v10h-3V12h-6V9h6V2z" />
              </svg>
            )}
          </div>
        ))}
        
        {extraItemsCount > 0 && (
          <div className="text-left pr-6 -mt-1">
            <span className="text-azul-noche text-lg font-bold">
              + {extraItemsCount} más...
            </span>
          </div>
        )}
      </div>

      <button
        onClick={onActionClick}
        className="border-0 mt-4 bg-azul-noche text-white text-xl py-3 px-6 rounded-full cursor-pointer hover:bg-opacity-90 hover:scale-105 transition-all duration-300 tracking-widest font-bold"
      >
        VER ESCENA +
      </button>
    </div>
  );
}