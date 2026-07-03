import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw,
  Sparkles,
  X
} from 'lucide-react';

const capaBebeEmocional = "/capa-seu-bebe-emocional.jpg";
const tatiHero = "/tati-hero.jpg";

export default function InteractiveBook() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0); // 0 to 5
  const [isFlipping, setIsFlipping] = useState<'next' | 'prev' | null>(null);
  const [isDesktopState, setIsDesktopState] = useState(false);

  const totalPages = 6;

  useEffect(() => {
    const checkIsDesktop = () => {
      const isDesktop = window.innerWidth >= 768;
      setIsDesktopState(isDesktop);
      if (isDesktop) {
        // Ensure we are always aligned to a spread (even page index) on desktop
        setCurrentPage(prev => Math.floor(prev / 2) * 2);
      }
    };
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFlipping) return;

    const increment = isDesktopState ? 2 : 1;
    if (currentPage + increment < totalPages) {
      setIsFlipping('next');
      setTimeout(() => {
        setCurrentPage(prev => {
          const nextVal = prev + increment;
          return isDesktopState ? Math.floor(nextVal / 2) * 2 : nextVal;
        });
        setIsFlipping(null);
      }, 300);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFlipping) return;

    const decrement = isDesktopState ? 2 : 1;
    if (currentPage - decrement >= 0) {
      setIsFlipping('prev');
      setTimeout(() => {
        setCurrentPage(prev => {
          const prevVal = prev - decrement;
          return isDesktopState ? Math.floor(prevVal / 2) * 2 : prevVal;
        });
        setIsFlipping(null);
      }, 300);
    }
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
    setCurrentPage(0);
  };

  // Pre-defined page content objects for elegance and styling consistency
  const pages = [
    // Spread 0
    {
      left: {
        type: 'intro-cover',
        title: 'Seu Bebê Emocional',
        subtitle: 'Um convite ao sentir materno e corporal',
        content: 'Este é um preview exclusivo das páginas do livro digital. Folheie o livro tocando nos controles laterais e sinta a ternura destas palavras escritas para acalmar seu coração de mãe.',
        quote: '“O enxoval material acalenta as expectativas; o emocional acolhe e sustenta o bebê.”'
      },
      right: {
        type: 'editorial',
        chapter: 'Capítulo I',
        title: 'O Nascimento do Sentir',
        content: 'Ao nascer, o bebê não traz consigo apenas necessidades físicas de amamentação e agasalho. Cada célula de seu corpo minúsculo anseia pelo calor térmico, pela vibração da voz materna e pelo toque firme de mãos conscientes.',
        page: 'Pág. 11'
      }
    },
    // Spread 1
    {
      left: {
        type: 'editorial',
        chapter: 'Capítulo II',
        title: 'Vida Intrauterina',
        content: 'No silêncio do útero, o bebê flutua em um ecossistema de vibrações corporais. Ele sente o ritmo cardíaco, a respiração de sua mãe e as variações bioquímicas de seu bem-estar. Ali é fundado o primeiro diálogo somático do ser humano.',
        page: 'Pág. 21'
      },
      right: {
        type: 'practical',
        tag: 'Prática Clínica',
        title: 'O Toque que Regula',
        content: 'Aprenda como pequenos rituais de massagem integrativa corporal acalmam as cólicas, confortam o estresse infantil e propiciam um sono profundo e reparador:',
        bullets: [
          'Abraço Térmico: Apoiar a palma morna sobre o abdômen do bebê.',
          'Deslizar Rítmico: Movimentos descendentes suaves do peito aos pés.'
        ],
        page: 'Pág. 103'
      }
    },
    // Spread 2
    {
      left: {
        type: 'editorial',
        chapter: 'Capítulo V',
        title: 'Mãe Suficientemente Boa',
        content: 'Livre-se da busca incessante pela perfeição. O seu bebê não precisa de uma mãe impecável, mas sim de uma presença humana real, atenta e perfeitamente capaz de reparar as pequenas falhas diárias com colo e acolhimento.',
        page: 'Pág. 75'
      },
      right: {
        type: 'author-note',
        title: 'Uma Jornada de Vínculo',
        content: 'Escrevi cada palavra com o compromisso clínico de mais de 20 anos na psicologia corporal. Desejo que estas páginas sirvam de abrigo e farol para guiar seus primeiros passos como mãe.',
        signature: 'Tatiana Lessa',
        cref: 'Psicóloga Corporal • CRP 06/76796',
        page: 'Pág. 121'
      }
    }
  ];

  const leftPageIndex = Math.floor(currentPage / 2) * 2;
  const rightPageIndex = leftPageIndex + 1;

  const renderPage = (pageData: any) => {
    if (pageData.type === 'intro-cover') {
      return (
        <div className="flex flex-col justify-between h-full text-left">
          <div className="space-y-3">
            <span className="text-[9px] tracking-widest text-primary font-semibold uppercase block border-b border-primary/10 pb-2">
              {pageData.subtitle}
            </span>
            <h3 className="font-serif text-lg md:text-2xl text-dark font-medium leading-tight">
              {pageData.title}
            </h3>
            <p className="text-xs text-dark/70 leading-relaxed font-light font-sans pt-1">
              {pageData.content}
            </p>
          </div>
          <div className="border-t border-primary/10 pt-4 mt-4">
            <p className="font-serif italic text-xs md:text-sm text-dark/65 leading-relaxed font-light">
              {pageData.quote}
            </p>
          </div>
        </div>
      );
    }

    if (pageData.type === 'editorial') {
      return (
        <div className="flex flex-col justify-between h-full text-left">
          <div className="space-y-3">
            <span className="text-[9px] tracking-[0.2em] text-primary font-semibold uppercase block">
              {pageData.chapter}
            </span>
            <h3 className="font-serif text-lg md:text-xl text-dark font-medium leading-snug">
              {pageData.title}
            </h3>
            <p className="text-xs text-dark/75 leading-relaxed font-light font-sans pt-1">
              {pageData.content}
            </p>
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-dark/40 border-t border-primary/5 pt-3 mt-3">
            <span>Seu Bebê Emocional</span>
            <span>{pageData.page}</span>
          </div>
        </div>
      );
    }

    if (pageData.type === 'practical') {
      return (
        <div className="flex flex-col justify-between h-full text-left">
          <div className="space-y-3">
            <span className="text-[9px] tracking-[0.2em] text-accent font-semibold uppercase block">
              {pageData.tag}
            </span>
            <h3 className="font-serif text-lg md:text-xl text-dark font-medium leading-snug">
              {pageData.title}
            </h3>
            <p className="text-xs text-dark/75 leading-relaxed font-light font-sans">
              {pageData.content}
            </p>
            <ul className="space-y-2 text-[11px] text-dark/80 font-sans font-light mt-1 pl-1">
              {pageData.bullets?.map((b: string, idx: number) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-accent text-[12px] leading-none shrink-0">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-dark/40 border-t border-primary/5 pt-3 mt-3">
            <span>Guia de Psicologia Corporal</span>
            <span>{pageData.page}</span>
          </div>
        </div>
      );
    }

    if (pageData.type === 'author-note') {
      return (
        <div className="flex flex-col justify-between h-full text-left">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img 
                src={tatiHero} 
                alt="Tatiana Lessa" 
                className="w-10 h-10 rounded-full object-cover border border-primary/20 grayscale"
              />
              <div>
                <h4 className="font-serif text-sm font-semibold text-dark">{pageData.signature}</h4>
                <p className="text-[8px] text-dark/40 uppercase tracking-wider">{pageData.cref}</p>
              </div>
            </div>
            <p className="text-xs text-dark/75 leading-relaxed font-light font-sans pt-1">
              {pageData.content}
            </p>
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-dark/40 border-t border-primary/5 pt-3 mt-3">
            <span>Pág. Final</span>
            <span>{pageData.page}</span>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      
      {/* Book Frame wrapper */}
      <div 
        className="book-viewport relative w-full flex flex-col items-center justify-center cursor-pointer select-none py-4"
        onClick={() => setIsOpen(true)}
      >
        
        {/* Closed Book Cover state */}
        <div className="relative w-[240px] h-[330px] md:w-[280px] md:h-[380px] transition-transform duration-500 hover:rotate-y-[-10deg] shadow-2xl border border-primary/20 bg-white p-3.5 rounded-r-[4px] transform-style-preserve-3d group">
          
          {/* Elegant spine detail */}
          <div className="absolute top-0 left-0 w-4 h-full bg-gradient-to-r from-dark/25 via-dark/10 to-transparent z-10" />
          
          {/* Front Cover Card */}
          <div className="w-full h-full overflow-hidden bg-bege border border-primary/10 relative flex flex-col justify-between p-6">
            
            {/* Cover Image Background */}
            <img 
              src={capaBebeEmocional} 
              alt="Capa do E-book Seu Bebê Emocional" 
              className="absolute inset-0 w-full h-full object-cover grayscale-[4%] group-hover:scale-102 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            
            {/* Accent Book Ribbon Bookmark */}
            <div className="absolute bottom-0 right-10 w-4 h-12 bg-accent/90 transform translate-y-2 group-hover:translate-y-1 transition-all shadow z-20 flex items-end justify-center pb-1">
              <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[6px] border-b-bege" />
            </div>
          </div>

          {/* Floating Action Badge overlay ON TOP of the cover - perfectly centered and visible on mobile */}
          <div className="absolute inset-x-0 bottom-6 flex justify-center z-30 px-3">
            <div className="bg-accent text-offwhite border border-accent/30 px-4 py-2.5 rounded-full shadow-lg flex items-center space-x-2 text-[10px] font-semibold tracking-widest uppercase animate-bounce">
              <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
              <span>Folhear Preview</span>
            </div>
          </div>

        </div>

      </div>

      {/* Pop-up/Lightbox Modal for the Interactive E-book */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-dark/90 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4 md:p-6 transition-all duration-300"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Content container to prevent outer click close */}
          <div 
            className="relative w-full max-w-[340px] md:max-w-[700px] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Close Header */}
            <div className="w-full flex justify-between items-center mb-4 text-offwhite">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-[10px] md:text-xs uppercase tracking-widest font-medium text-offwhite/80">Preview Interativo</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 text-offwhite/80 hover:text-offwhite transition-all"
                title="Fechar Preview"
                aria-label="Fechar preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Open Book Spread state */}
            <div className="relative w-[290px] h-[400px] md:w-[660px] md:h-[440px] bg-[#FAF6F0] shadow-2xl border border-primary/15 rounded-sm flex overflow-hidden animate-in fade-in zoom-in-95 duration-200">
              
              {/* Soft inner page depth shadow */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/[0.02] via-transparent to-black/[0.03]" />
              
              {/* Spine divider */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-8 h-full book-spine-divider z-20 hidden md:block" />

              {/* Left Page (Desktop Spread View / Mobile Single View) */}
              <div className={`${currentPage % 2 === 0 ? 'w-full flex' : 'hidden'} md:w-1/2 md:flex md:flex-col h-full bg-[#FAF6F0] page-shadow-left border-r border-primary/5 relative z-10 p-5 md:p-7 select-text overflow-y-auto`}>
                {renderPage(pages[leftPageIndex / 2].left)}
              </div>

              {/* Right Page (Desktop Spread View / Mobile Single View) */}
              <div className={`${currentPage % 2 === 1 ? 'w-full flex' : 'hidden'} md:w-1/2 md:flex md:flex-col h-full bg-[#FAF6F0] page-shadow-right relative z-10 p-5 md:p-7 select-text overflow-y-auto`}>
                
                {/* Visual simulated flipping layer animation */}
                {isFlipping && (
                  <div className={`absolute inset-0 bg-[#EFEAE2] z-30 opacity-45 pointer-events-none transition-all duration-500 ${
                    isFlipping === 'next' ? 'translate-x-[-100%] scale-x-0' : 'translate-x-[100%] scale-x-0'
                  }`} />
                )}
                {renderPage(pages[Math.floor(rightPageIndex / 2)].right)}
              </div>

            </div>

            {/* Control Navigation Buttons */}
            <div className="mt-6 flex items-center justify-center space-x-6 text-offwhite">
              <button 
                onClick={handlePrev}
                disabled={currentPage === 0}
                className={`p-2.5 rounded-full border border-white/20 bg-white/5 text-offwhite transition-all ${
                  currentPage === 0 ? 'opacity-20 cursor-not-allowed' : 'hover:bg-white/10 active:scale-95 hover:text-accent'
                }`}
                aria-label="Página anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Mobile page number indicator */}
              <span className="block md:hidden text-xs uppercase tracking-[0.2em] font-sans font-medium text-offwhite/60">
                Pág. {currentPage + 1} de {totalPages}
              </span>

              {/* Desktop page number indicator */}
              <span className="hidden md:block text-xs uppercase tracking-[0.2em] font-sans font-medium text-offwhite/60">
                Pág. {leftPageIndex + 1} - {rightPageIndex + 1} de {totalPages}
              </span>

              <button 
                onClick={handleNext}
                disabled={isDesktopState ? currentPage >= 4 : currentPage >= 5}
                className={`p-2.5 rounded-full border border-white/20 bg-white/5 text-offwhite transition-all ${
                  (isDesktopState ? currentPage >= 4 : currentPage >= 5) ? 'opacity-20 cursor-not-allowed' : 'hover:bg-white/10 active:scale-95 hover:text-accent'
                }`}
                aria-label="Próxima página"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <button
                onClick={handleReset}
                className="p-2.5 rounded-full border border-white/20 bg-white/5 text-offwhite hover:bg-white/10 hover:text-accent transition-all active:scale-95"
                title="Voltar ao início"
                aria-label="Voltar ao início"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Helper label */}
            <p className="text-[10px] tracking-wider uppercase text-offwhite/40 mt-3 font-sans text-center">
              Toque nas setas para folhear &bull; Clique fora ou Esc para fechar
            </p>

          </div>
        </div>
      )}

    </div>
  );
}

