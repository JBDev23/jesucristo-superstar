export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-azul-noche text-[#fcf6e3] py-16 px-6 w-full relative z-20 shadow-[0_-10px_30px_rgba(0,0,0,0.2)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* LADO IZQUIERDO: Título de la obra */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-bungee-shade text-white drop-shadow-md">
            JESUCRISTO<br />SUPERSTAR
          </h2>
          <p className="mt-2 text-xl font-bungee text-[#FFD977] tracking-widest">
            HILO CONDUCTOR - 2026
          </p>
        </div>

        {/* LADO DERECHO: Créditos de Juniors MD */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <p 
            className="text-2xl mb-1 text-[#fcf6e3]/90 font-bold" 
            style={{ fontFamily: "cursive" }}
          >
            Un proyecto creado por
          </p>
          <h3 className="text-3xl font-bold text-[#116645] tracking-widest mb-6">
            JUNIORS M.D. ENDAVANT
          </h3>
          
          {/* REDES SOCIALES (Opcional) */}
          <div className="flex gap-6">
            {/* Icono de Instagram */}
            <a 
              href="https://www.instagram.com/juniorsendavant/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#fcf6e3] hover:text-[#116645] hover:scale-110 transition-all cursor-pointer" 
              aria-label="Instagram de Juniors MD Endavant"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            {/* Icono de Facebook */}
            <a 
              href="https://www.facebook.com/Endavantunits" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#fcf6e3] hover:text-[#116645] hover:scale-110 transition-all cursor-pointer" 
              aria-label="Facebook de Juniors MD Endavant"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
              </svg>
            </a>

            {/* Icono de TikTok */}
            <a 
              href="https://www.tiktok.com/@juniorsendavant" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#fcf6e3] hover:text-[#116645] hover:scale-110 transition-all cursor-pointer" 
              aria-label="TikTok de Juniors MD Endavant"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* LÍNEA DIVISORIA Y COPYRIGHT */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#fcf6e3]/20 flex flex-col md:flex-row justify-between items-center text-sm text-[#fcf6e3]/50 gap-4 font-sans">
        <p>© {currentYear} Juniors M.D. Endavant. Tots els drets reservats.</p>
        <p className="tracking-widest uppercase">Hilo Conductor - 2026</p>
      </div>
    </footer>
  );
}