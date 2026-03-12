export default function Hero() {
  return (
    <section className="relative w-full h-dvh overflow-hidden">
      
      {/* FONDO (Cielo y sol) */}
      <div className="absolute inset-0 -z-20">
        <img 
          src="/BackgroundSky.svg" 
          alt="Cielo atardecer" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col animate-fade-in-up">
        
        {/* BLOQUE SUPERIOR: Textos */}
        <div className="flex-1 flex flex-col items-center justify-center px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bungee-shade text-[#130b4d] leading-tight text-center">
            JESUCRISTO<br />SUPERSTAR
          </h1>
          <p className="mt-4 text-xl md:text-2xl lg:text-3xl font-bungee text-[#130b4d] tracking-widest text-center">
            HILO CONDUCTOR - 2026
          </p>
        </div>

        {/* BLOQUE INFERIOR: Cruces */}
        <div className="w-full relative shrink-0">
          <img 
            src="/HillCrosses.svg" 
            alt="Cruces en el monte" 
            className="w-full h-[35vh] md:h-auto max-h-[45vh] lg:max-h-[55vh] object-cover object-top"
          />
          
          {/* ICONO FLECHA ANIMADA */}
          <div className="absolute bottom-[1dvh] left-0 right-0 flex justify-center z-20 animate-bounce cursor-pointer">
            <svg 
              className="w-8 h-8 ml-2 md:w-12 md:h-12 text-white/70"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}