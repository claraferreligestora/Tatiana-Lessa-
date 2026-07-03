import { useState, useEffect } from 'react';
import { 
  ArrowRight,
  Menu,
  X,
  ShieldCheck
} from 'lucide-react';
import InteractiveBook from './components/InteractiveBook';
const depoimentoCristina = '/depoimento-cristina.png';
const depoimentoCristine = '/depoimento-cristine.png';
const depoimentoLidia = '/depoimento-lidia.png';
const depoimentoMarina = '/-marina.png';
const capaBebeEmocional = '/capa-seu-bebe-emocional.png';
const tatiBio = '/tati-bio.png';
const tatiEbook = '/tati-ebook.png';';


export default function App() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  // Scroll animations using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { 
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const animatedElements = document.querySelectorAll('.fade-in-section');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const hotmartLink = 'https://pay.hotmart.com/U100464781R';

  return (
    <div className="min-h-screen bg-offwhite text-dark font-sans selection:bg-primary/20 selection:text-dark antialiased">
      
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-bege text-dark/80 text-center py-2.5 px-4 text-[10px] tracking-[0.2em] uppercase font-medium border-b border-primary/10">
        Disponível em formato digital para leitura imediata
      </div>

      {/* HEADER */}
      <header className="py-6 bg-offwhite/95 backdrop-blur-md sticky top-0 z-50 transition-all duration-300 border-b border-primary/5">
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col text-left">
            <span className="font-serif text-2xl md:text-3xl font-medium tracking-wide text-dark">Tatiana Lessa</span>
            <span className="text-[9px] tracking-[0.25em] uppercase text-primary font-semibold mt-0.5">Psicologia Corporal</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-[11px] uppercase tracking-widest font-medium text-dark/70">
            <a href="#proposito" className="hover:text-accent transition-colors">O Vínculo</a>
            <a href="#sumario" className="hover:text-accent transition-colors">O E-book</a>
            <a href="#sobre" className="hover:text-accent transition-colors">Sobre Mim</a>
            <a href="#depoimentos" className="hover:text-accent transition-colors">Relatos</a>
            <a href="#faq" className="hover:text-accent transition-colors">Dúvidas</a>
          </nav>

          <div className="hidden md:block">
            <a 
              href="#oferta" 
              className="text-[10px] font-semibold tracking-[0.2em] uppercase bg-dark hover:bg-accent text-offwhite px-5 py-3 transition-all duration-300 shadow-sm"
            >
              Adquirir E-book
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-dark focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-offwhite border-t border-primary/10 py-6 px-6 space-y-4 flex flex-col text-left animate-fadeIn">
            <a 
              href="#proposito" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xs uppercase tracking-widest font-semibold text-dark/80 block py-2 border-b border-primary/5"
            >
              O Vínculo
            </a>
            <a 
              href="#sumario" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xs uppercase tracking-widest font-semibold text-dark/80 block py-2 border-b border-primary/5"
            >
              O E-book
            </a>
            <a 
              href="#sobre" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xs uppercase tracking-widest font-semibold text-dark/80 block py-2 border-b border-primary/5"
            >
              Sobre Mim
            </a>
            <a 
              href="#depoimentos" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xs uppercase tracking-widest font-semibold text-dark/80 block py-2 border-b border-primary/5"
            >
              Relatos
            </a>
            <a 
              href="#faq" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xs uppercase tracking-widest font-semibold text-dark/80 block py-2 border-b border-primary/5"
            >
              Dúvidas
            </a>
            <div className="pt-4">
              <a 
                href="#oferta"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center text-xs font-semibold tracking-[0.2em] uppercase bg-accent text-offwhite py-3.5"
              >
                Garantir E-book
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-offwhite">
        
        {/* Soft Background Ambiance */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-bege/20 blur-3xl -z-10" />

        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-bold block">
              Preparação Emocional Materna
            </span>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-dark leading-[1.12] tracking-tight">
              Você está se preparando para o enxoval... <br />
              <span className="italic text-accent font-normal block mt-1">mas e para o vínculo?</span>
            </h1>
            
            <p className="text-base md:text-lg text-dark/75 leading-relaxed font-light max-w-xl">
              A maioria das mães sabe o tamanho exato do berço e a cor do quarto. Poucas sabem, contudo, o que o bebê precisa <span className="font-medium text-dark">sentir no corpo e na alma</span> para se desenvolver saudável desde o primeiro sopro de vida.
            </p>

            <div className="pt-4 space-y-5">
              <a 
                href={hotmartLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 w-full sm:w-auto px-10 py-4 bg-accent hover:bg-accent-hover text-offwhite font-sans text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300"
                id="hero-cta-btn"
              >
                <span>Ler o E-book</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <p className="text-[11px] text-dark/50 tracking-wide font-light max-w-md">
                Acesso imediato via PDF / EPUB. Leia em qualquer dispositivo. <br className="hidden sm:block" />
                Garantia incondicional de 7 dias para você ler e avaliar sem riscos.
              </p>
            </div>
          </div>

          {/* Right Hero Image - Interactive 3D Flipbook Preview */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <InteractiveBook />
          </div>

        </div>
      </section>

      {/* THE PARADIGM SHIFT (Beautiful comparison instead of typical cards) */}
      <section id="proposito" className="py-24 bg-bege/20 border-t border-b border-primary/10 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-16 fade-in-section">
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-bold">O Verdadeiro Enxoval</span>
            <h2 className="font-serif text-3xl md:text-4xl text-dark leading-tight font-normal">
              O que você realmente precisa preparar para a chegada do seu filho?
            </h2>
            <p className="text-sm md:text-base text-dark/60 font-light">
              Uma reflexão profunda sobre o foco da gestação: o mercado consome nosso tempo com objetos, enquanto o desenvolvimento emocional do recém-nascido pede presença e toque.
            </p>
          </div>

          {/* Beautiful Editorial Contrast */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left pt-6">
            
            {/* Traditional aspect */}
            <div className="space-y-4 pb-8 md:pb-0 border-b md:border-b-0 md:border-r border-primary/15 md:pr-12">
              <h3 className="font-serif text-xl font-medium text-dark/70 tracking-wide">
                O Enxoval Tradicional
              </h3>
              <p className="text-sm text-dark/65 leading-relaxed font-light">
                Planejado e consumido à exaustão. Centrado em carrinhos de última geração, decoração de ninhos sofisticados e acessórios que prometem solucionar o sono. Cobre as necessidades físicas e estéticas, mas costuma deixar a mãe ansiosa e o bebê distante da regulação afetiva vital.
              </p>
              <div className="pt-2 text-xs text-dark/50 space-y-1.5 font-light italic">
                <p>— Centrado em objetos externos</p>
                <p>— Promessas comerciais de calmaria</p>
                <p>— Distanciamento do contato corporal intuitivo</p>
              </div>
            </div>

            {/* Emotional aspect */}
            <div className="space-y-4 md:pl-6">
              <h3 className="font-serif text-xl font-medium text-accent tracking-wide flex items-center gap-2">
                O Enxoval Emocional
              </h3>
              <p className="text-sm text-dark/80 leading-relaxed font-light">
                Compreendido e cultivado. Centrado no colo, na presença consciente, no toque regulador de cólicas e no olhar sensível. O e-book conduz você a preparar o ninho psíquico seguro que acolhe a alma do bebê, moldando sua autorregulação e capacidade de amar.
              </p>
              <div className="pt-2 text-xs text-accent space-y-1.5 font-medium">
                <p>— Centrado na pele, na escuta e no olhar</p>
                <p>— Sustentado na presença que de fato acalma</p>
                <p>— Enraizado na psicologia corporal profunda</p>
              </div>
            </div>

          </div>

          {/* Clean Central Quote Block */}
          <div className="max-w-2xl mx-auto py-8 text-center space-y-4">
            <p className="font-serif italic text-lg md:text-xl text-dark leading-relaxed font-light">
              &ldquo;O enxoval material acalenta as expectativas da família; o enxoval emocional acolhe e sustenta o corpo e o espírito do recém-nascido.&rdquo;
            </p>
            <div className="inline-block w-10 h-[1px] bg-primary/40" />
          </div>

        </div>
      </section>

      {/* THE E-BOOK DETAILS & Tactile presentation */}
      <section id="sumario" className="py-24 bg-white border-b border-primary/5 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Beautiful minimalist book mockup */}
          <div className="lg:col-span-5 flex justify-center order-last lg:order-first">
            <div className="relative w-full max-w-[280px]">
              
              {/* Back Soft Drop Shadow */}
              <div className="absolute -inset-6 bg-bege/20 rounded-full blur-2xl -z-10" />
              
              {/* Book Spine Shadow and Case Frame */}
              <div className="w-full aspect-[3/4] bg-white p-3.5 shadow-2xl relative border border-primary/10 transition-transform duration-700 hover:scale-[1.01]">
                <div className="w-full h-full overflow-hidden bg-offwhite border border-primary/10">
                  <img 
                    src={capaBebeEmocional} 
                    alt="Capa do Livro Seu Bebê Emocional" 
                    className="w-full h-full object-cover grayscale-[5%]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Format label overlay */}
              <div className="absolute -bottom-4 -right-4 bg-dark text-offwhite text-[9px] tracking-widest font-semibold uppercase py-2 px-3.5 shadow-md">
                Disponível em PDF &bull; EPUB
              </div>
            </div>
          </div>

          {/* Right: Book copy */}
          <div className="lg:col-span-7 space-y-8 text-left fade-in-section">
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-bold">O E-book</span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-dark leading-tight">
              Seu Bebê Emocional
            </h2>
            <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">O que toda mãe precisa saber antes do nascimento</p>
            
            <div className="w-16 h-[1px] bg-primary/30" />
            
            <p className="text-base text-dark/75 leading-relaxed font-light">
              Este e-book reúne orientações essenciais e acolhedoras sobre a vida emocional nos primeiros meses do seu filho. Com uma linguagem livre de jargões técnicos herméticos, mas respaldada em vinte anos de clínica de psicologia corporal, você aprenderá como pequenos gestos diários a forma de amamentar, de acolher o choro ou rituais de toque tem a capacidade de criar a estrutura de apego seguro do bebê.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-4 border-t border-primary/10 font-sans text-xs">
              <div className="space-y-1">
                <span className="text-[9px] text-dark/40 uppercase tracking-widest">Leitura Paced</span>
                <p className="font-medium text-dark">Desenvolvido para ler no ritmo da rotina materna</p>
              </div>
              <div className="space-y-1">
                <span className="text-[9px] text-dark/40 uppercase tracking-widest">Acesso Vitalício</span>
                <p className="font-medium text-dark">Arquivo digital definitivo no seu e-mail</p>
              </div>
              <div className="space-y-1">
                <span className="text-[9px] text-dark/40 uppercase tracking-widest">Cuidado Clínico</span>
                <p className="font-medium text-dark">Linguagem terna, humana e sem imposição de culpas</p>
              </div>
              <div className="space-y-1">
                <span className="text-[9px] text-dark/40 uppercase tracking-widest">Conteúdo Prático</span>
                <p className="font-medium text-dark">Rituais de regulação corporal e massagem integrativa</p>
              </div>
            </div>
            
            <div className="pt-4">
              <a 
                href="#oferta"
                className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] font-semibold text-accent hover:text-dark transition-colors"
              >
                <span>Ver condições de aquisição</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* TABLE OF CONTENTS / SUMÁRIO (Designed to look like an authentic book index) */}
      <section className="py-24 bg-bege/10 border-t border-b border-primary/10">
        <div className="max-w-3xl mx-auto px-6 space-y-16 fade-in-section">
          
          <div className="text-center space-y-4">
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-bold">Sumário Editorial</span>
            <h2 className="font-serif text-3xl md:text-4xl text-dark font-normal">
              O que você vai descobrir nas páginas do guia
            </h2>
            <p className="text-sm text-dark/60 font-light max-w-md mx-auto">
              Uma trilha suave construída de forma linear, conduzindo sua autoconfiança através do afeto biológico e emocional.
            </p>
          </div>

          {/* Genuine Table of Contents Layout */}
          <div className="space-y-8 font-sans max-w-2xl mx-auto">
            
            {/* Chapter 1 */}
            <div className="group border-b border-primary/10 pb-5">
              <div className="flex justify-between items-baseline">
                <h4 className="font-serif text-lg md:text-xl text-dark font-medium group-hover:text-accent transition-colors">
                  01. Os sentimentos do bebê antes de nascer
                </h4>
                <span className="text-[11px] font-mono text-dark/40 hidden sm:inline">Pág. 11</span>
              </div>
              <p className="text-xs text-dark/60 font-light mt-2 leading-relaxed">
                A vida uterina e a psicossomática da gestação. Como o feto recebe e se regula a partir dos estímulos corporais e hormonais da mãe, desmistificando os sentimentos desse período.
              </p>
            </div>

            {/* Chapter 2 */}
            <div className="group border-b border-primary/10 pb-5">
              <div className="flex justify-between items-baseline">
                <h4 className="font-serif text-lg md:text-xl text-dark font-medium group-hover:text-accent transition-colors">
                  02. Primeiros momentos pós-parto
                </h4>
                <span className="text-[11px] font-mono text-dark/40 hidden sm:inline">Pág. 27</span>
              </div>
              <p className="text-xs text-dark/60 font-light mt-2 leading-relaxed">
                A transição do útero para o mundo externo. Como planejar o acolhimento do recém-nascido no primeiro sopro de vida para garantir uma experiência somática de segurança total.
              </p>
            </div>

            {/* Chapter 3 */}
            <div className="group border-b border-primary/10 pb-5">
              <div className="flex justify-between items-baseline">
                <h4 className="font-serif text-lg md:text-xl text-dark font-medium group-hover:text-accent transition-colors">
                  03. Amamentação e Afeto
                </h4>
                <span className="text-[11px] font-mono text-dark/40 hidden sm:inline">Pág. 43</span>
              </div>
              <p className="text-xs text-dark/60 font-light mt-2 leading-relaxed">
                Para além do leite: o aleitamento materno como fonte primária de nutrição afetiva, contato tátil regulador e a construção do olhar recíproco inicial.
              </p>
            </div>

            {/* Chapter 4 */}
            <div className="group border-b border-primary/10 pb-5">
              <div className="flex justify-between items-baseline">
                <h4 className="font-serif text-lg md:text-xl text-dark font-medium group-hover:text-accent transition-colors">
                  04. Rotina, Sono e Segurança
                </h4>
                <span className="text-[11px] font-mono text-dark/40 hidden sm:inline">Pág. 59</span>
              </div>
              <p className="text-xs text-dark/60 font-light mt-2 leading-relaxed">
                O ritmo biológico do recém-nascido. Como a previsibilidade afetuosa e pequenos rituais baseados no corpo estruturam uma segurança interna profunda, facilitando o repouso.
              </p>
            </div>

            {/* Chapter 5 */}
            <div className="group border-b border-primary/10 pb-5">
              <div className="flex justify-between items-baseline">
                <h4 className="font-serif text-lg md:text-xl text-dark font-medium group-hover:text-accent transition-colors">
                  05. A Mãe Suficientemente Boa
                </h4>
                <span className="text-[11px] font-mono text-dark/40 hidden sm:inline">Pág. 75</span>
              </div>
              <p className="text-xs text-dark/60 font-light mt-2 leading-relaxed">
                Urgência do desapego das imposições de perfeição. Por que seu bebê não precisa de uma mãe impecável, mas sim de uma presença humana real, sensível e reparadora.
              </p>
            </div>

            {/* Chapter 6 */}
            <div className="group border-b border-primary/10 pb-5">
              <div className="flex justify-between items-baseline">
                <h4 className="font-serif text-lg md:text-xl text-dark font-medium group-hover:text-accent transition-colors">
                  06. O Vínculo através dos Sentidos
                </h4>
                <span className="text-[11px] font-mono text-dark/40 hidden sm:inline">Pág. 89</span>
              </div>
              <p className="text-xs text-dark/60 font-light mt-2 leading-relaxed">
                A voz, o calor térmico e os canais somáticos de tranquilidade. Como conduzir a conexão com seu filho através dos sentidos biológicos, atenuando estresses maternos comuns.
              </p>
            </div>

            {/* Chapter 7 */}
            <div className="group border-b border-primary/10 pb-5">
              <div className="flex justify-between items-baseline">
                <h4 className="font-serif text-lg md:text-xl text-dark font-medium group-hover:text-accent transition-colors">
                  07. O Toque e a Massagem
                </h4>
                <span className="text-[11px] font-mono text-dark/40 hidden sm:inline">Pág. 103</span>
              </div>
              <p className="text-xs text-dark/60 font-light mt-2 leading-relaxed">
                Práticas baseadas na clínica biodinâmica. O toque estruturado que regula cólicas, acalma o choro noturno e equilibra o sistema nervoso em desenvolvimento do bebê.
              </p>
            </div>

            {/* Chapter 8 */}
            <div className="group border-b border-primary/10 pb-5">
              <div className="flex justify-between items-baseline">
                <h4 className="font-serif text-lg md:text-xl text-dark font-medium group-hover:text-accent transition-colors">
                  08. O Papel do Pai na Tríade
                </h4>
                <span className="text-[11px] font-mono text-dark/40 hidden sm:inline">Pág. 121</span>
              </div>
              <p className="text-xs text-dark/60 font-light mt-2 leading-relaxed">
                A sustentação do ninho. A presença de suporte do pai ou parceiro como elemento estrutural para que a díade mãe-bebê descanse em segurança emocional.
              </p>
            </div>

          </div>

          <div className="text-center">
            <p className="text-[10px] font-mono tracking-widest text-dark/40">TODOS OS DIREITOS RESERVADOS &bull; TATIANA LESSA</p>
          </div>

        </div>
      </section>

      {/* AUTHORITY / BIO (Warm, Trusting and Editorial) */}
      <section id="sobre" className="py-24 bg-white border-b border-primary/5 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[280px]">
              <div className="absolute inset-0 border border-primary/20 translate-x-3 translate-y-3 -z-10" />
              
              <div className="w-full aspect-[3/4] bg-white p-3.5 shadow-xl border border-primary/10">
                <div className="w-full h-full overflow-hidden bg-bege">
                  <img 
                    src={tatiBio} 
                    alt="Tatiana Lessa - Psicóloga" 
                    className="w-full h-full object-cover grayscale-[10%]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right text bio */}
          <div className="lg:col-span-7 space-y-6 text-left fade-in-section">
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-bold block">A Autora</span>
            
            <div className="space-y-1">
              <h2 className="font-serif text-3xl md:text-4xl font-normal text-dark">
                Tatiana Lessa
              </h2>
              <span className="text-xs font-medium tracking-wider text-accent uppercase block">
                Psicóloga Corporal &bull; CRP 06/76796
              </span>
            </div>
            
            <div className="w-16 h-[1px] bg-primary/30" />
            
            <div className="text-sm md:text-base text-dark/75 leading-relaxed space-y-5 font-light">
              <p>
                Atuo como psicóloga clínica há duas décadas, com especializações profundas e dedicadas em Psicologia Corporal Biodinâmica e Análise Psicossomática.
              </p>
              <p>
                Ao longo de anos de trabalho, liderei e coordenei projetos municipais de assistência direta e apoio materno-infantil em Taubaté, no interior de São Paulo. Foi nessa vivência diária, amparando centenas de famílias e recém-nascidos, que testemunhei de perto a solidão materna e as dúvidas que silenciosamente cercam o nascimento.
              </p>
              <p>
                Este e-book é o resultado desse compromisso de vida: traduzir os alicerces teóricos e clínicos do desenvolvimento infantil corporal em caminhos de afeto, acolhimento prático e absoluta segurança para o cotidiano da mãe e do seu pequeno.
              </p>
            </div>
            
            <div className="pt-2">
              <p className="font-serif italic text-dark/60 text-sm">
                &ldquo;Acredito que mães apoiadas, livres de cobranças excessivas, são o verdadeiro pilar para uma infância emocionalmente saudável.&rdquo;
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECONDARY EDITORIAL BLOCK (High Perceived Value) */}
      <section className="py-24 bg-bege/20 border-t border-b border-primary/10">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12 fade-in-section">
          
          <div className="space-y-3">
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-bold">O Ofício</span>
            <h2 className="font-serif text-3xl md:text-4xl text-dark font-light">
              Desmistificando o primeiro semestre de vida do bebê
            </h2>
          </div>

          <div className="flex justify-center">
            <div className="relative max-w-xl border border-primary/10 bg-white p-3 shadow-lg">
              <img 
                src={tatiEbook} 
                alt="Tatiana Lessa em consultório" 
                className="w-full h-auto max-h-[380px] object-cover grayscale-[5%]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 bg-offwhite/95 backdrop-blur border border-primary/25 px-3 py-1.5 text-[9px] tracking-widest uppercase font-semibold text-dark shadow-sm">
                Embasado &bull; Prático
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto text-left space-y-6 text-sm md:text-base text-dark/75 leading-relaxed font-light">
            <p>
              Com minha trajetória no consultório e em projetos públicos, estruturei este guia para responder às dúvidas corporais e emocionais mais profundas das mães — aquelas que o enxoval tradicional costuma ignorar.
            </p>
            <p>
              O caminho é construído com carinho e amparo científico, dando a você a clareza necessária para acolher o bebê com serenidade e sem culpas infundadas.
            </p>
          </div>

        </div>
      </section>

      {/* REVIEWS & TESTIMONIALS (Elegant editorial reviews instead of standard cards with stars) */}
      <section id="depoimentos" className="py-24 bg-white border-b border-primary/5 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 space-y-16 fade-in-section">
          
          <div className="text-center space-y-4">
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-bold">Relatos Espontâneos</span>
            <h2 className="font-serif text-3xl md:text-4xl text-dark font-normal">
              O carinho de quem viveu essa preparação
            </h2>
            <p className="text-sm text-dark/65 max-w-sm mx-auto font-light">
              Palavras sinceras de mães e cuidadoras que leram o guia e transformaram o seu modo de sentir a maternidade.
            </p>
          </div>

          {/* Genuine editorial testimonial flow */}
          <div className="space-y-12 max-w-2xl mx-auto">
            
            {/* Review 1 */}
            <div className="space-y-4 text-left border-l-2 border-accent/40 pl-6 py-1">
              <p className="font-serif italic text-base md:text-lg text-dark/85 leading-relaxed font-light">
                &ldquo;Saber que sou suficiente para ele e que o contato corporal e o vínculo que começamos a criar desde a gestação é o alicerce de sua saúde me fez viver essa fase com profunda paz e acolhimento.&rdquo;
              </p>
              <div className="flex items-center space-x-3.5 pt-1">
                <img 
                  src={depoimentoLidia} 
                  alt="Lídia Esper" 
                  className="w-9 h-9 rounded-full object-cover border border-primary/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h5 className="text-xs font-semibold text-dark">Lídia Esper</h5>
                  <p className="text-[10px] text-dark/50 font-light">Mãe e leitora</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="space-y-4 text-left border-l-2 border-accent/40 pl-6 py-1">
              <p className="font-serif italic text-base md:text-lg text-dark/85 leading-relaxed font-light">
                &ldquo;Este livro mostra de forma extremamente suave como nossos gestos diários impactam a biologia do recém-nascido. Ensina com leveza e nos alivia da fantasia da maternidade idealizada.&rdquo;
              </p>
              <div className="flex items-center space-x-3.5 pt-1">
                <img 
                  src={depoimentoCristine} 
                  alt="Cristine Silva" 
                  className="w-9 h-9 rounded-full object-cover border border-primary/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h5 className="text-xs font-semibold text-dark">Cristine Silva</h5>
                  <p className="text-[10px] text-dark/50 font-light">Mãe de primeira viagem</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="space-y-4 text-left border-l-2 border-accent/40 pl-6 py-1">
              <p className="font-serif italic text-base md:text-lg text-dark/85 leading-relaxed font-light">
                &ldquo;Estou encantada com as orientações sensoriais. Ajudou muito a acalmar as cólicas de nossa neta e a trazer um sono muito mais sereno para ela e para minha filha.&rdquo;
              </p>
              <div className="flex items-center space-x-3.5 pt-1">
                <img 
                  src={depoimentoCristina} 
                  alt="Cristina Amaral" 
                  className="w-9 h-9 rounded-full object-cover border border-primary/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h5 className="text-xs font-semibold text-dark">Cristina Amaral</h5>
                  <p className="text-[10px] text-dark/50 font-light">Avó dedicada</p>
                </div>
              </div>
            </div>

            {/* Review 4 */}
            <div className="space-y-4 text-left border-l-2 border-accent/40 pl-6 py-1">
              <p className="font-serif italic text-base md:text-lg text-dark/85 leading-relaxed font-light">
                &ldquo;De forma acessível, a Tatiana traz dicas corporais simples e altamente eficazes para fortalecer o afeto seguro da criança e nos guiar nesse início desafiador.&rdquo;
              </p>
              <div className="flex items-center space-x-3.5 pt-1">
                <img 
                  src={depoimentoMarina} 
                  alt="Marina Ferraz" 
                  className="w-9 h-9 rounded-full object-cover border border-primary/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h5 className="text-xs font-semibold text-dark">Marina Ferraz</h5>
                  <p className="text-[10px] text-dark/50 font-light">Leitora</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* AUDIENCE IDENTIFICATION */}
      <section className="py-24 bg-bege/20 border-t border-b border-primary/10">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12 fade-in-section">
          
          <div className="space-y-3">
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-bold">Identificação</span>
            <h2 className="font-serif text-3xl md:text-4xl text-dark font-light">
              Para quem este e-book foi escrito
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto text-sm">
            
            <div className="space-y-1.5">
              <h4 className="font-serif text-lg font-medium text-dark">— Gestantes em Preparação</h4>
              <p className="text-dark/70 font-light leading-relaxed">
                Que desejam transcender as decisões de enxovais físicos e construir desde o ventre os caminhos do apego seguro do bebê.
              </p>
            </div>

            <div className="space-y-1.5">
              <h4 className="font-serif text-lg font-medium text-dark">— Mães de Primeira Viagem</h4>
              <p className="text-dark/70 font-light leading-relaxed">
                Para quem se sente desamparada ou confusa em meio a tantas exigências do mercado e palpites contraditórios de terceiros.
              </p>
            </div>

            <div className="space-y-1.5">
              <h4 className="font-serif text-lg font-medium text-dark">— Pais e Redes de Apoio</h4>
              <p className="text-dark/70 font-light leading-relaxed">
                Avós, tios, madrinhas ou parceiros que desejam apoiar a recém-mãe de maneira sensível e respeitosa nesse início delicado.
              </p>
            </div>

            <div className="space-y-1.5">
              <h4 className="font-serif text-lg font-medium text-dark">— Doulas e Profissionais</h4>
              <p className="text-dark/70 font-light leading-relaxed">
                Profissionais de parto e pós-parto que procuram um material sensível para indicar e enriquecer a orientação de suas clientes.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* PRICING & GUARANTEE (Beautiful Elegant Invitation Design instead of AI slop box) */}
      <section id="oferta" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-xl mx-auto px-6 fade-in-section">
          
          {/* Elegant card container with very fine border and generous padding */}
          <div className="border border-primary/25 bg-offwhite p-8 md:p-14 text-center space-y-10 relative shadow-lg">
            
            {/* Artisanal Trust Seal / Stamp */}
            <div className="absolute -top-8 -right-4 md:-top-10 md:-right-8 w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-dashed border-accent/30 bg-[#FDFBF7] flex flex-col items-center justify-center shadow-md rotate-[-6deg] select-none z-10 transition-transform duration-500 hover:rotate-0 hover:scale-105">
              <div className="absolute inset-1.5 rounded-full border border-primary/5 pointer-events-none" />
              <ShieldCheck className="w-5 h-5 text-accent mb-0.5 animate-pulse" />
              <span className="font-serif text-xs md:text-sm font-bold text-dark tracking-tight leading-none">7 DIAS</span>
              <span className="text-[7px] md:text-[8px] uppercase tracking-[0.15em] text-accent font-semibold mt-0.5">Garantia</span>
              <span className="text-[6px] md:text-[7px] uppercase tracking-[0.1em] text-primary/65 font-medium leading-none">Sem riscos</span>
            </div>
            
            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-bold">Aquisição do Guia</span>
              <h3 className="font-serif text-3xl font-light text-dark">Adquira Seu E-book</h3>
              <div className="w-10 h-[1px] bg-primary/40 mx-auto mt-3" />
            </div>

            {/* Price block */}
            <div className="space-y-2">
              <p className="text-xs text-dark/40 line-through font-mono">De: R$ 97,00</p>
              <p className="text-[10px] text-accent uppercase tracking-[0.2em] font-semibold">Valor Promocional</p>
              
              <div className="flex justify-center items-baseline space-x-1 py-1">
                <span className="font-serif text-xl text-dark/70">R$</span>
                <span className="font-serif text-6xl font-light text-dark tracking-tighter">47</span>
                <span className="font-serif text-2xl text-dark/70">,00</span>
                <span className="text-xs text-dark/55 ml-2 font-light">à vista</span>
              </div>
              
              <p className="text-[11px] text-dark/60 font-light">
                ou parcelado em cartão de crédito através da Hotmart
              </p>
            </div>

            {/* CTA action */}
            <div className="space-y-4 max-w-sm mx-auto">
              <a 
                href={hotmartLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-accent hover:bg-accent-hover text-offwhite text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow"
                id="checkout-btn"
              >
                Garantir Enxoval Emocional
              </a>
              
              <p className="text-[10px] text-dark/40 font-light">
                Ambiente de pagamento 100% seguro intermediado pela Hotmart.
              </p>
            </div>

            {/* Guarantee statement */}
            <div className="border-t border-primary/10 pt-8 mt-4 text-left space-y-3">
              <h5 className="font-serif text-lg font-normal text-dark">Garantia e Respeito</h5>
              <p className="text-xs text-dark/70 leading-relaxed font-light">
                Quero que você leia e se sinta amparada. Você tem 7 dias completos a partir da data de aquisição para ler o guia. Se sentir que o material não condiz com as suas expectativas, devolvemos integralmente seu valor, sem justificativas ou burocracia.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ ACCORDION (Minimalist and seamless integration) */}
      <section id="faq" className="py-24 bg-bege/20 border-t border-b border-primary/10 scroll-mt-20">
        <div className="max-w-2xl mx-auto px-6 space-y-12 fade-in-section">
          
          <div className="text-center space-y-3">
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-bold">Respostas Claras</span>
            <h2 className="font-serif text-3xl text-dark font-normal">
              Dúvidas Comuns
            </h2>
          </div>

          <div className="divide-y divide-primary/15 border-t border-b border-primary/15 font-sans">
            
            {/* Q1 */}
            <div className="py-5">
              <button 
                onClick={() => toggleFAQ(0)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
              >
                <span className="font-serif text-base text-dark font-medium pr-4 leading-snug">
                  Estou grávida há pouco tempo. O guia já me serve?
                </span>
                <span className="text-accent shrink-0 font-mono text-lg font-light">
                  {openFAQIndex === 0 ? '—' : '+'}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openFAQIndex === 0 ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="text-xs sm:text-sm text-dark/70 leading-relaxed font-light">
                  Sim. O e-book traz uma perspectiva preventiva preciosa, ajudando você a se preparar emocionalmente com calma e antecedência, construindo o vínculo inicial antes mesmo de entrar no turbilhão da rotina pós-parto.
                </div>
              </div>
            </div>

            {/* Q2 */}
            <div className="py-5">
              <button 
                onClick={() => toggleFAQ(1)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
              >
                <span className="font-serif text-base text-dark font-medium pr-4 leading-snug">
                  Como funciona o envio do e-book?
                </span>
                <span className="text-accent shrink-0 font-mono text-lg font-light">
                  {openFAQIndex === 1 ? '—' : '+'}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openFAQIndex === 1 ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="text-xs sm:text-sm text-dark/70 leading-relaxed font-light">
                  A entrega é imediata. Assim que o pagamento for confirmado, você receberá um e-mail automático da Hotmart com as instruções de acesso para baixar seu e-book em formato PDF e EPUB, compatível com Kindle, celulares e tablets.
                </div>
              </div>
            </div>

            {/* Q3 */}
            <div className="py-5">
              <button 
                onClick={() => toggleFAQ(2)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
              >
                <span className="font-serif text-base text-dark font-medium pr-4 leading-snug">
                  Sou mãe de segunda viagem. Faz sentido ler?
                </span>
                <span className="text-accent shrink-0 font-mono text-lg font-light">
                  {openFAQIndex === 2 ? '—' : '+'}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openFAQIndex === 2 ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="text-xs sm:text-sm text-dark/70 leading-relaxed font-light">
                  Absolutamente. Cada filho inaugura uma vivência emocional inédita. O e-book traz insights psicossomáticos e corporais que frequentemente redefinem nossa visão do comportamento infantil e do apego seguro, independentemente da experiência anterior.
                </div>
              </div>
            </div>

            {/* Q4 */}
            <div className="py-5">
              <button 
                onClick={() => toggleFAQ(3)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
              >
                <span className="font-serif text-base text-dark font-medium pr-4 leading-snug">
                  O conteúdo é de difícil compreensão?
                </span>
                <span className="text-accent shrink-0 font-mono text-lg font-light">
                  {openFAQIndex === 3 ? '—' : '+'}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openFAQIndex === 3 ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="text-xs sm:text-sm text-dark/70 leading-relaxed font-light">
                  Pelo contrário. O livro foi escrito em linguagem de conversação, terna, afetuosa e direta. O foco principal é a transposição dos ensinamentos da clínica corporal para a aplicação viva no colo de mães reais.
                </div>
              </div>
            </div>

          </div>
 
        </div>
      </section>

      {/* FINAL INSPIRATIONAL BLOCK */}
      <section className="py-24 md:py-32 bg-offwhite">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12 fade-in-section">
          
          <div className="w-10 h-[1px] bg-primary/40 mx-auto" />
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark leading-relaxed max-w-2xl mx-auto font-light">
            Não espere pelo choro para descobrir como construir o refúgio seguro do seu bebê.
          </h2>

          <p className="font-serif text-lg text-accent italic max-w-xl mx-auto">
            Você e seu filho merecem uma transição de colo confortável e consciente.
          </p>

          <div className="pt-4 space-y-4">
            <a 
              href={hotmartLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 px-10 py-4.5 bg-accent hover:bg-accent-hover text-offwhite font-sans text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300"
              id="final-cta-btn"
            >
              <span>Adquirir o Guia Completo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            
            <p className="text-[10px] text-dark/50 tracking-widest uppercase">
              R$ 47,00 &bull; Leitura imediata &bull; Garantia de 7 dias
            </p>
          </div>

          <div className="w-10 h-[1px] bg-primary/20 mx-auto pt-12" />

          {/* FOOTER */}
          <footer className="pt-8 text-[11px] text-dark/50 space-y-3 font-light leading-relaxed max-w-xl mx-auto">
            <p className="font-serif text-xs text-dark font-normal tracking-wide">
              Tatiana Lessa &copy; 2026 &bull; Psicóloga Corporal &bull; Todos os direitos reservados
            </p>
            <p>
              Este e-book possui caráter estritamente educativo e preventivo. Orientações individualizadas e intervenções de saúde mental materna e infantil devem ser obtidas em sessões e consultas clínicas dedicadas com profissionais credenciados.
            </p>
          </footer>

        </div>
      </section>

    </div>
  );
}
