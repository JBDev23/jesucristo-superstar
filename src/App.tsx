import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Footer from './components/Footer';
import MiniPlayer from './components/MiniPlayer';
import InfoSection from './components/InfoSection';
import { escenasData } from './data/scenesData';

const playlist = escenasData.flatMap(escena => 
  escena.modalItems.filter(item => item.type === "song")
);

function App() {
  const [currentSong, setCurrentSong] = useState<{ title: string, src: string } | null>({
    title: "Canción de Judas",
    src: "/songs/canción-de-judas.mp3"
  });

  const [upNext, setUpNext] = useState<{ title: string, src: string, countdown: number } | null>(null);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    if (!upNext) return;

    if (upNext.countdown === 0) {
      setCurrentSong({ title: upNext.title, src: upNext.src });
      setUpNext(null);
      return;
    }

    const timer = setTimeout(() => {
      setUpNext(prev => prev ? { ...prev, countdown: prev.countdown - 1 } : null);
    }, 1000);

    return () => clearTimeout(timer);
  }, [upNext]);

  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY > window.innerHeight/2) {
        setIsPastHero(true);
      } else {
        setIsPastHero(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSongEnd = () => {
    if (!currentSong) return;
    const currentIndex = playlist.findIndex(song => song.title === currentSong.title);
    
    if (currentIndex !== -1 && currentIndex < playlist.length - 1) {
      const nextSong = playlist[currentIndex + 1];
      setUpNext({ title: nextSong.title, src: nextSong.audioSrc || "", countdown: 3 });
    }
  };

  const handlePlaySong = (title: string, src: string) => {
    setUpNext(null);
    setCurrentSong({ title, src });
  };

  const handleClosePlayer = () => {
    setCurrentSong(null);
    setUpNext(null);
  };

  const openModalAndScroll = (sceneIndex: number, itemTitle: string) => {
    setSelectedIndex(sceneIndex);
    
    setTimeout(() => {
      const elementId = `item-${itemTitle.replace(/\s+/g, '-')}`;
      const element = document.getElementById(elementId);
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  };

const handleTitleClick = () => {
    if (!currentSong) return;
    const sceneIndex = escenasData.findIndex(escena => 
      escena.modalItems.some(item => item.title === currentSong.title)
    );
    if (sceneIndex !== -1) {
      openModalAndScroll(sceneIndex, currentSong.title);
    }
  };

  return (
    <main className="min-h-screen w-full">
      <Hero />
      
      <InfoSection 
        onPlaySong={handlePlaySong}
        selectedIndex={selectedIndex} 
        setSelectedIndex={setSelectedIndex}  
        onItemClick={(sceneIndex, itemTitle) => openModalAndScroll(sceneIndex, itemTitle)}
      />
      
      <Footer />

      {currentSong && (
        <MiniPlayer 
          songTitle={currentSong.title} 
          audioSrc={currentSong.src} 
          onClose={handleClosePlayer} 
          isVisible={isPastHero} 
          onSongEnd={handleSongEnd}
          upNext={upNext}
          onCancelUpNext={() => setUpNext(null)}
          onPlayUpNextNow={() => {
            if (upNext) {
              setCurrentSong({ title: upNext.title, src: upNext.src });
              setUpNext(null);
            }
          }}
          onTitleClick={handleTitleClick}
        />
      )}
    </main>
  );
}

export default App;