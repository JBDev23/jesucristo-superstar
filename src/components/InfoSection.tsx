import { useState } from "react";
import SceneCard from "./SceneCard";
import SceneDetailModal from "./SceneDetailModal";
import { escenasData } from '../data/scenesData';

export default function InfoSection() {
  

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const isModalOpen = selectedIndex !== null;

  const currentScene = isModalOpen ? escenasData[selectedIndex] : null;

  return (
    <div className="w-full relative bg-[#FF6E28] -mt-0.5">
      <img
        src="/ContentHeader.svg"
        alt="Transición del monte"
        className="w-full h-auto object-cover object-top"
      />

      <section className="w-full min-h-screen bg-linear-to-b from-[#FF6E28] to-[#FFD977] py-20 px-8 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bungee-shade text-azul-noche mb-10 text-center drop-shadow-md">
          ESCENAS
        </h1>

        <div className="w-full flex flex-wrap max-w-[95%] md:max-w-8/10">
          {escenasData.map((escena, index) => (
            <SceneCard 
              key={index}
              title={escena.title}
              songs={escena.songs}
              readings={escena.readings}
              onActionClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>
      </section>

      <SceneDetailModal 
        isOpen={isModalOpen} 
        onClose={() => setSelectedIndex(null)} 
        sceneTitle={currentScene?.title || ""}
        synopsis={currentScene?.synopsis}
        items={currentScene?.modalItems || []}
        hasPrev={isModalOpen && selectedIndex > 0}
        onPrev={() => isModalOpen && setSelectedIndex(selectedIndex - 1)}
        hasNext={isModalOpen && selectedIndex < escenasData.length - 1}
        onNext={() => isModalOpen && setSelectedIndex(selectedIndex + 1)}
      />
    </div>
  );
}
