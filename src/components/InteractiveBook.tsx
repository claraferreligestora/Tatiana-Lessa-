import React, { useState } from 'react';
import { 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw,
  Sparkles
} from 'lucide-react';

import capaBebeEmocional from '../assets/images/capa-seu-bebe-emocional.jpg';
import tatiHero from '../assets/images/tati-hero.jpg';

export default function InteractiveBook() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSpread, setCurrentSpread] = useState(0);
  const [isFlipping, setIsFlipping] = useState<'next' | 'prev' | null>(null);

  const totalSpreads = 3;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentSpread < totalSpreads - 1 && !isFlipping) {
      setIsFlipping('next');
      setTimeout(() => {
        setCurrentSpread(prev => prev + 1);
        setIsFlipping(null);
      }, 500);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentSpread > 0 && !isFlipping) {
      setIsFlipping('prev');
      setTimeout(() => {
        setCurrentSpread(prev => prev - 1);
        setIsFlipping(null);
      }, 500);
    }
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
    setCurrentSpread(0);
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

  return (
    <div className="w-full flex flex-col items-center justify-center">
      
      {/* Floating Action Hint */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="mb-4 inline-flex items-center space-x-2 bg-accent/10 border border-accent/25 px-4 py-2 text-[10px] tracking-widest uppercase text-accent font-semibold rounded-full animate-bounce shadow-sm hover:bg-accent/15 transition-all"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Toque no livro para folhear o preview</span>
        </button>
      )}

      {/* Book Frame wrapper */}
      <div 
        className="book-viewport relative w-full max-w-[340px] md:max-w-[620px] aspect-[4/3] md:aspect-[1.5/1] flex items-center justify-center cursor-pointer select-none"
        onClick={() => !isOpen && setIsOpen(true)}
      >
        
        {/* Closed Book Cover state */}
        {!isOpen ? (
          <div className="relative w-[280px] h-[380px] transition-transform duration-500 hover:rotate-y-[-10deg] shadow-2xl border border-primary/20 bg-white p-3.5 rounded-r-[4px] transform-style-preserve-3d group">
            
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
          </div>
        ) : (
          
          /* Open Book Spread state */
          <div className="relative w-full h-full bg-[#FAF6F0] shadow-2xl border border-primary/15 rounded-sm flex overflow-hidden">
            
            {/* Soft inner page depth shadow */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/[0.02] via-transparent to-black/[0.03]" />
            
            {/* Spine divider */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-8 h-full book-spine-divider z-20" />

            {/* Left Page (Desktop Spread View / Mobile Swipe View) */}
            <div className="w-1/2 h-full bg-[#FAF6F0] page-shadow-left border-r border-primary/5 flex flex-col relative z-10 p-4 md:p-6 select-text overflow-y-auto">
              {pages[currentSpread].left.type === 'intro-cover' ? (
                <div className="flex flex-col justify-between h-full text-left">
                  <div className="space-y-3">
                    <span className="text-[9px] tracking-widest text-primary font-semibold uppercase block border-b border-primary/10 pb-2">
                      {pages[currentSpread].left.subtitle}
                    </span>
                    <h3 className="font-serif text-lg md:text-2xl text-dark font-medium leading-tight">
                      {pages[currentSpread].left.title}
                    </h3>
                    <p className="text-xs text-dark/70 leading-relaxed font-light font-sans pt-1">
                      {pages[currentSpread].left.content}
                    </p>
                  </div>
                  <div className="border-t border-primary/10 pt-4 mt-4">
                    <p className="font-serif italic text-xs md:text-sm text-dark/65 leading-relaxed font-light">
                      {pages[currentSpread].left.quote}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col justify-between h-full text-left">
                  <div className="space-y-3">
                    <span className="text-[9px] tracking-[0.2em] text-primary font-semibold uppercase block">
                      {pages[currentSpread].left.chapter}
                    </span>
                    <h3 className="font-serif text-lg md:text-xl text-dark font-medium leading-snug">
                      {pages[currentSpread].left.title}
                    </h3>
                    <p className="text-xs text-dark/75 leading-relaxed font-light font-sans pt-1">
                      {pages[currentSpread].left.content}
                    </p>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-mono text-dark/40 border-t border-primary/5 pt-3 mt-3">
                    <span>Seu Bebê Emocional</span>
                    <span>{pages[currentSpread].left.page}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Right Page */}
            <div className="w-1/2 h-full bg-[#FAF6F0] page-shadow-right flex flex-col relative z-10 p-4 md:p-6 select-text overflow-y-auto">
              
              {/* Visual simulated flipping layer animation */}
              {isFlipping && (
                <div className={`absolute inset-0 bg-[#EFEAE2] z-30 opacity-45 pointer-events-none transition-all duration-500 ${
                  isFlipping === 'next' ? 'translate-x-[-100%] scale-x-0' : 'translate-x-[100%] scale-x-0'
                }`} />
              )}

              {pages[currentSpread].right.type === 'editorial' ? (
                <div className="flex flex-col justify-between h-full text-left">
                  <div className="space-y-3">
                    <span className="text-[9px] tracking-[0.2em] text-primary font-semibold uppercase block">
                      {pages[currentSpread].right.chapter}
                    </span>
                    <h3 className="font-serif text-lg md:text-xl text-dark font-medium leading-snug">
                      {pages[currentSpread].right.title}
                    </h3>
                    <p className="text-xs text-dark/75 leading-relaxed font-light font-sans pt-1">
                      {pages[currentSpread].right.content}
                    </p>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-mono text-dark/40 border-t border-primary/5 pt-3 mt-3">
                    <span>Seu Bebê Emocional</span>
                    <span>{pages[currentSpread].right.page}</span>
                  </div>
                </div>
              ) : pages[currentSpread].right.type === 'practical' ? (
                <div className="flex flex-col justify-between h-full text-left">
                  <div className="space-y-3">
                    <span className="text-[9px] tracking-[0.2em] text-accent font-semibold uppercase block">
                      {pages[currentSpread].right.tag}
                    </span>
                    <h3 className="font-serif text-lg md:text-xl text-dark font-medium leading-snug">
                      {pages[currentSpread].right.title}
                    </h3>
                    <p className="text-xs text-dark/75 leading-relaxed font-light font-sans">
                      {pages[currentSpread].right.content}
                    </p>
                    <ul className="space-y-2 text-[11px] text-dark/80 font-sans font-light mt-1 pl-1">
                      {pages[currentSpread].right.bullets?.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-accent text-[12px] leading-none shrink-0">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-mono text-dark/40 border-t border-primary/5 pt-3 mt-3">
                    <span>Guia de Psicologia Corporal</span>
                    <span>{pages[currentSpread].right.page}</span>
                  </div>
                </div>
              ) : (
                /* Author note type */
                <div className="flex flex-col justify-between h-full text-left">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <img 
                        src={tatiHero} 
                        alt="Tatiana Lessa" 
                        className="w-10 h-10 rounded-full object-cover border border-primary/20 grayscale"
                      />
                      <div>
                        <h4 className="font-serif text-sm font-semibold text-dark">{pages[currentSpread].right.signature}</h4>
                        <p className="text-[8px] text-dark/40 uppercase tracking-wider">{pages[currentSpread].right.cref}</p>
                      </div>
                    </div>
                    <p className="text-xs text-dark/75 leading-relaxed font-light font-sans pt-1">
                      {pages[currentSpread].right.content}
                    </p>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-mono text-dark/40 border-t border-primary/5 pt-3 mt-3">
                    <span>Pág. Final</span>
                    <span>{pages[currentSpread].right.page}</span>
                  </div>
                </div>
              )}
            </div>

          </div>
        )}

      </div>

      {/* Control Navigation Buttons */}
      {isOpen && (
        <div className="mt-6 flex items-center justify-center space-x-6">
          <button 
            onClick={handlePrev}
            disabled={currentSpread === 0}
            className={`p-2.5 rounded-full border border-primary/20 bg-white text-dark transition-all ${
              currentSpread === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-primary/5 active:scale-95 hover:text-accent'
            }`}
            aria-label="Página anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <span className="text-xs uppercase tracking-[0.2em] font-sans font-medium text-dark/60">
            Pág. {currentSpread * 2 + 1} - {currentSpread * 2 + 2} de {totalSpreads * 2}
          </span>

          <button 
            onClick={handleNext}
            disabled={currentSpread === totalSpreads - 1}
            className={`p-2.5 rounded-full border border-primary/20 bg-white text-dark transition-all ${
              currentSpread === totalSpreads - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-primary/5 active:scale-95 hover:text-accent'
            }`}
            aria-label="Próxima página"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <button
            onClick={handleReset}
            className="p-2.5 rounded-full border border-primary/20 bg-white text-dark hover:bg-primary/5 hover:text-accent transition-all active:scale-95"
            title="Fechar Livro"
            aria-label="Fechar livro"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Touch helper label */}
      {isOpen && (
        <p className="text-[10px] tracking-wider uppercase text-dark/40 mt-3 font-sans">
          Toque nas setas para folhear ou recomeçar
        </p>
      )}

    </div>
  );
}
