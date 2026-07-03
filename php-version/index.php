<?php
/**
 * E-book Landing Page - Tatiana Lessa - "Seu Bebê Emocional"
 * Versão Standalone PHP - Compatível com qualquer hospedagem (Apache, Nginx, cPanel, Hostgator, Vercel, etc.)
 * 
 * Sinta-se à vontade para alterar as variáveis de configuração abaixo para adaptar a página.
 */

// CONFIGURAÇÃO GERAL
$hotmartLink = "https://pay.hotmart.com/U100464781R";
$precoDe = "97,00";
$precoPor = "47,00";
$authorName = "Tatiana Lessa";
$authorCref = "Psicóloga Corporal • CRP 06/76796";

// CAPÍTULOS DO E-BOOK (SUMÁRIO)
$chapters = [
    [
        "num" => "01",
        "title" => "Os sentimentos do bebê antes de nascer",
        "page" => "11",
        "desc" => "A vida uterina e a psicossomática da gestação. Como o feto recebe e se regula a partir dos estímulos corporais e hormonais da mãe, desmistificando os sentimentos desse período."
    ],
    [
        "num" => "02",
        "title" => "Primeiros momentos pós-parto",
        "page" => "27",
        "desc" => "A transição do útero para o mundo externo. Como planejar o acolhimento do recém-nascido no primeiro sopro de vida para garantir uma experiência somática de segurança total."
    ],
    [
        "num" => "03",
        "title" => "Amamentação e Afeto",
        "page" => "43",
        "desc" => "Para além do leite: o aleitamento materno como fonte primária de nutrição afetiva, contato tátil regulador e a construção do olhar recíproco inicial."
    ],
    [
        "num" => "04",
        "title" => "Rotina, Sono e Segurança",
        "page" => "59",
        "desc" => "O ritmo biológico do recém-nascido. Como a previsibilidade afetuosa e pequenos rituais baseados no corpo estruturam uma segurança interna profunda, facilitando o repouso."
    ],
    [
        "num" => "05",
        "title" => "A Mãe Suficientemente Boa",
        "page" => "75",
        "desc" => "Urgência do desapego das imposições de perfeição. Por que seu bebê não precisa de uma mãe impecável, mas sim de uma presença humana real, sensível e reparadora."
    ],
    [
        "num" => "06",
        "title" => "O Vínculo através dos Sentidos",
        "page" => "89",
        "desc" => "A voz, o calor térmico e os canais somáticos de tranquilidade. Como conduzir a conexão com seu filho através dos sentidos biológicos, atenuando estresses maternos comuns."
    ],
    [
        "num" => "07",
        "title" => "O Toque e a Massagem",
        "page" => "103",
        "desc" => "Práticas baseadas na clínica biodinâmica. O toque estruturado que regula cólicas, acalma o choro noturno e equilibra o sistema nervoso em desenvolvimento do bebê."
    ],
    [
        "num" => "08",
        "title" => "O Papel do Pai na Tríade",
        "page" => "121",
        "desc" => "A sustentação do ninho. A presença de suporte do pai ou parceiro como elemento estrutural para que a díade mãe-bebê descanse em segurança emocional."
    ]
];

// DEPOIMENTOS
$testimonials = [
    [
        "quote" => "Saber que sou suficiente para ele e que o contato corporal e o vínculo que começamos a criar desde a gestação é o alicerce de sua saúde me fez viver essa fase com profunda paz e acolhimento.",
        "author" => "Lídia Esper",
        "role" => "Mãe e leitora",
        "image" => "assets/images/depoimento-lidia.png"
    ],
    [
        "quote" => "Este livro mostra de forma extremamente suave como nossos gestos diários impactam a biologia do recém-nascido. Ensina com leveza e nos alivia da fantasia da maternidade idealizada.",
        "author" => "Cristine Silva",
        "role" => "Mãe de primeira viagem",
        "image" => "assets/images/depoimento-cristine.png"
    ],
    [
        "quote" => "Estou encantada com as orientações sensoriais. Ajudou muito a acalmar as cólicas de nossa neta e a trazer um sono muito mais sereno para ela e para minha filha.",
        "author" => "Cristina Amaral",
        "role" => "Avó dedicada",
        "image" => "assets/images/depoimento-cristina.png"
    ],
    [
        "quote" => "De forma acessível, a Tatiana traz dicas corporais simples e altamente eficazes para fortalecer o afeto seguro da criança e nos guiar nesse início desafiador.",
        "author" => "Marina Ferraz",
        "role" => "Leitora",
        "image" => "assets/images/depoimento-marina.png"
    ]
];

// FAQS
$faqs = [
    [
        "question" => "Estou grávida há pouco tempo. O guia já me serve?",
        "answer" => "Sim. O e-book traz uma perspectiva preventiva preciosa, ajudando você a se preparar emocionalmente com calma e antecedência, construindo o vínculo inicial antes mesmo de entrar no turbilhão da rotina pós-parto."
    ],
    [
        "question" => "Como funciona o envio do e-book?",
        "answer" => "A entrega é imediata. Assim que o pagamento for confirmado, você receberá um e-mail automático da Hotmart com as instruções de acesso para baixar seu e-book em formato PDF e EPUB, compatível com Kindle, celulares e tablets."
    ],
    [
        "question" => "Sou mãe de segunda viagem. Faz sentido ler?",
        "answer" => "Absolutamente. Cada filho inaugura uma vivência emocional inédita. O e-book traz insights psicossomáticos e corporais que frequentemente redefinem nossa visão do comportamento infantil e do apego seguro, independentemente da experiência anterior."
    ],
    [
        "question" => "O conteúdo é de difícil compreensão?",
        "answer" => "Pelo contrário. O livro foi escrito em linguagem de conversação, terna, afetuosa e direta. O foco principal é a transposição dos ensinamentos da clínica corporal para a aplicação viva no colo de mães reais."
    ]
];

?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tatiana Lessa - Seu Bebê Emocional</title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS Play CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        serif: ['"Cormorant Garamond"', 'serif'],
                        sans: ['"DM Sans"', 'sans-serif'],
                    },
                    colors: {
                        primary: '#C9A89A',       // rosa antigo
                        accent: '#C9625F',        // cor de destaque para botões
                        'accent-hover': '#b14f4c', // hover do botão
                        bege: '#F5EDE4',          // bege quente
                        offwhite: '#FDFAF7',      // branco off-white
                        dark: '#3D2B1F',          // marrom escuro
                    }
                }
            }
        }
    </script>

    <style>
        html {
            scroll-behavior: smooth;
        }
        body {
            font-family: 'DM Sans', sans-serif;
            background-color: #FDFAF7;
            color: #3D2B1F;
        }
        
        /* Fade-in Scroll Animations */
        .fade-in-section {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
            will-change: opacity, transform;
        }
        .fade-in-section.is-visible {
            opacity: 1;
            transform: translateY(0);
        }

        /* 3D Flipbook effects */
        .book-viewport {
            perspective: 1500px;
        }
        .book-spine-divider {
            background: linear-gradient(to right, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.02) 25%, rgba(0,0,0,0.02) 75%, rgba(0,0,0,0.12) 100%);
        }
        .page-shadow-right {
            box-shadow: 8px 0 20px rgba(0,0,0,0.06), inset -5px 0 15px rgba(0,0,0,0.02);
        }
        .page-shadow-left {
            box-shadow: -8px 0 20px rgba(0,0,0,0.06), inset 5px 0 15px rgba(0,0,0,0.02);
        }
    </style>
</head>
<body class="min-h-screen bg-offwhite text-dark antialiased selection:bg-primary/20 selection:text-dark">

    <!-- TOP ANNOUNCEMENT BAR -->
    <div class="bg-bege text-dark/80 text-center py-2.5 px-4 text-[10px] tracking-[0.2em] uppercase font-medium border-b border-primary/10">
        Disponível em formato digital para leitura imediata
    </div>

    <!-- HEADER -->
    <header class="py-6 bg-offwhite/95 backdrop-blur-md sticky top-0 z-50 transition-all duration-300 border-b border-primary/5">
        <div class="max-w-5xl mx-auto px-6 flex justify-between items-center">
            <div class="flex flex-col text-left">
                <span class="font-serif text-2xl md:text-3xl font-medium tracking-wide text-dark"><?php echo $authorName; ?></span>
                <span class="text-[9px] tracking-[0.25em] uppercase text-primary font-semibold mt-0.5">Psicologia Corporal</span>
            </div>

            <!-- Desktop Nav -->
            <nav class="hidden md:flex items-center space-x-8 text-[11px] uppercase tracking-widest font-medium text-dark/70">
                <a href="#proposito" class="hover:text-accent transition-colors">O Vínculo</a>
                <a href="#sumario" class="hover:text-accent transition-colors">O E-book</a>
                <a href="#sobre" class="hover:text-accent transition-colors">Sobre Mim</a>
                <a href="#depoimentos" class="hover:text-accent transition-colors">Relatos</a>
                <a href="#faq" class="hover:text-accent transition-colors">Dúvidas</a>
            </nav>

            <div class="hidden md:block">
                <a href="#oferta" class="text-[10px] font-semibold tracking-[0.2em] uppercase bg-dark hover:bg-accent text-offwhite px-5 py-3 transition-all duration-300 shadow-sm">
                    Adquirir E-book
                </a>
            </div>

            <!-- Mobile Menu Button -->
            <button id="mobile-menu-btn" class="md:hidden text-dark focus:outline-none" aria-label="Toggle Menu">
                <i data-lucide="menu" class="w-5 h-5"></i>
            </button>
        </div>

        <!-- Mobile Navigation Drawer -->
        <div id="mobile-menu" class="hidden md:hidden bg-offwhite border-t border-primary/10 py-6 px-6 space-y-4 flex flex-col text-left">
            <a href="#proposito" class="mobile-nav-link text-xs uppercase tracking-widest font-semibold text-dark/80 block py-2 border-b border-primary/5">O Vínculo</a>
            <a href="#sumario" class="mobile-nav-link text-xs uppercase tracking-widest font-semibold text-dark/80 block py-2 border-b border-primary/5">O E-book</a>
            <a href="#sobre" class="mobile-nav-link text-xs uppercase tracking-widest font-semibold text-dark/80 block py-2 border-b border-primary/5">Sobre Mim</a>
            <a href="#depoimentos" class="mobile-nav-link text-xs uppercase tracking-widest font-semibold text-dark/80 block py-2 border-b border-primary/5">Relatos</a>
            <a href="#faq" class="mobile-nav-link text-xs uppercase tracking-widest font-semibold text-dark/80 block py-2 border-b border-primary/5">Dúvidas</a>
            <div class="pt-4">
                <a href="#oferta" class="mobile-nav-link block text-center text-xs font-semibold tracking-[0.2em] uppercase bg-accent text-offwhite py-3.5">
                    Garantir E-book
                </a>
            </div>
        </div>
    </header>

    <!-- HERO SECTION -->
    <section class="relative py-20 lg:py-32 overflow-hidden bg-offwhite">
        <!-- Soft Background Ambiance -->
        <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-bege/20 blur-3xl -z-10"></div>

        <div class="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <!-- Left Hero Content -->
            <div class="lg:col-span-7 space-y-8 text-left">
                <span class="text-[10px] tracking-[0.3em] uppercase text-primary font-bold block">
                    Preparação Emocional Materna
                </span>
                
                <h1 class="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-dark leading-[1.12] tracking-tight">
                    Você está se preparando para o enxoval... <br />
                    <span class="italic text-accent font-normal block mt-1">mas e para o vínculo?</span>
                </h1>
                
                <p class="text-base md:text-lg text-dark/75 leading-relaxed font-light max-w-xl">
                    A maioria das mães sabe o tamanho exato do berço e a cor do quarto. Poucas sabem, contudo, o que o bebê precisa <span class="font-medium text-dark">sentir no corpo e na alma</span> para se desenvolver saudável desde o primeiro sopro de vida.
                </p>

                <div class="pt-4 space-y-5">
                    <a href="<?php echo $hotmartLink; ?>" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center space-x-3 w-full sm:w-auto px-10 py-4 bg-accent hover:bg-accent-hover text-offwhite font-sans text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                        <span>Ler o E-book</span>
                        <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                    </a>

                    <p class="text-[11px] text-dark/50 tracking-wide font-light max-w-md">
                        Acesso imediato via PDF / EPUB. Leia em qualquer dispositivo. <br class="hidden sm:block" />
                        Garantia incondicional de 7 dias para você ler e avaliar sem riscos.
                    </p>
                </div>
            </div>

            <!-- Right Hero Image - Interactive 3D Flipbook Preview Trigger -->
            <div class="lg:col-span-5 flex justify-center lg:justify-end w-full">
                <div class="w-full flex flex-col items-center justify-center">
                    
                    <div id="book-trigger" class="book-viewport relative w-full flex flex-col items-center justify-center cursor-pointer select-none py-4">
                        <div class="relative w-[240px] h-[330px] md:w-[280px] md:h-[380px] transition-transform duration-500 hover:rotate-y-[-10deg] shadow-2xl border border-primary/20 bg-white p-3.5 rounded-r-[4px] transform-style-preserve-3d group">
                            
                            <!-- Elegant spine detail -->
                            <div class="absolute top-0 left-0 w-4 h-full bg-gradient-to-r from-dark/25 via-dark/10 to-transparent z-10"></div>
                            
                            <!-- Front Cover Card -->
                            <div class="w-full h-full overflow-hidden bg-bege border border-primary/10 relative flex flex-col justify-between p-6">
                                <!-- Cover Image Background -->
                                <img src="assets/images/capa-seu-bebe-emocional.jpg" alt="Capa do E-book Seu Bebê Emocional" class="absolute inset-0 w-full h-full object-cover grayscale-[4%] group-hover:scale-102 transition-transform duration-700">
                                
                                <!-- Shimmer Effect -->
                                <div class="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                
                                <!-- Accent Book Ribbon Bookmark -->
                                <div class="absolute bottom-0 right-10 w-4 h-12 bg-accent/90 transform translate-y-2 group-hover:translate-y-1 transition-all shadow z-20 flex items-end justify-center pb-1">
                                    <div class="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[6px] border-b-bege"></div>
                                </div>
                            </div>

                            <!-- Floating Action Badge overlay ON TOP of the cover -->
                            <div class="absolute inset-x-0 bottom-6 flex justify-center z-30 px-3">
                                <div class="bg-accent text-offwhite border border-accent/30 px-4 py-2.5 rounded-full shadow-lg flex items-center space-x-2 text-[10px] font-semibold tracking-widest uppercase animate-bounce">
                                    <i data-lucide="sparkles" class="w-3.5 h-3.5 text-primary animate-pulse"></i>
                                    <span>Folhear Preview</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>

    <!-- THE PARADIGM SHIFT -->
    <section id="proposito" class="py-24 bg-bege/20 border-t border-b border-primary/10 scroll-mt-20">
        <div class="max-w-4xl mx-auto px-6 text-center space-y-16 fade-in-section">
            
            <div class="space-y-4 max-w-2xl mx-auto">
                <span class="text-[10px] tracking-[0.3em] uppercase text-primary font-bold">O Verdadeiro Enxoval</span>
                <h2 class="font-serif text-3xl md:text-4xl text-dark leading-tight font-normal">
                    O que você realmente precisa preparar para a chegada do seu filho?
                </h2>
                <p class="text-sm md:text-base text-dark/60 font-light">
                    Uma reflexão profunda sobre o foco da gestação: o mercado consome nosso tempo com objetos, enquanto o desenvolvimento emocional do recém-nascido pede presença e toque.
                </p>
            </div>

            <!-- Beautiful Editorial Contrast -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 text-left pt-6">
                <!-- Traditional aspect -->
                <div class="space-y-4 pb-8 md:pb-0 border-b md:border-b-0 md:border-r border-primary/15 md:pr-12">
                    <h3 class="font-serif text-xl font-medium text-dark/70 tracking-wide">
                        O Enxoval Tradicional
                    </h3>
                    <p class="text-sm text-dark/65 leading-relaxed font-light">
                        Planejado e consumido à exaustão. Centrado em carrinhos de última geração, decoração de ninhos sofisticados e acessórios que prometem solucionar o sono. Cobre as necessidades físicas e estéticas, mas costuma deixar a mãe ansiosa e o bebê distante da regulação afetiva vital.
                    </p>
                    <div class="pt-2 text-xs text-dark/50 space-y-1.5 font-light italic">
                        <p>— Centrado em objetos externos</p>
                        <p>— Promessas comerciais de calmaria</p>
                        <p>— Distanciamento do contato corporal intuitivo</p>
                    </div>
                </div>

                <!-- Emotional aspect -->
                <div class="space-y-4 md:pl-6">
                    <h3 class="font-serif text-xl font-medium text-accent tracking-wide flex items-center gap-2">
                        O Enxoval Emocional
                    </h3>
                    <p class="text-sm text-dark/80 leading-relaxed font-light">
                        Compreendido e cultivado. Centrado no colo, na presença consciente, no toque regulador de cólicas e no olhar sensível. O e-book conduz você a preparar o ninho psíquico seguro que acolhe a alma do bebê, moldando sua autorregulação e capacidade de amar.
                    </p>
                    <div class="pt-2 text-xs text-accent space-y-1.5 font-medium">
                        <p>— Centrado na pele, na escuta e no olhar</p>
                        <p>— Sustentado na presença que de fato acalma</p>
                        <p>— Enraizado na psicologia corporal profunda</p>
                    </div>
                </div>
            </div>

            <!-- Clean Central Quote Block -->
            <div class="max-w-2xl mx-auto py-8 text-center space-y-4">
                <p class="font-serif italic text-lg md:text-xl text-dark leading-relaxed font-light">
                    &ldquo;O enxoval material acalenta as expectativas da família; o enxoval emocional acolhe e sustenta o corpo e o espírito do recém-nascido.&rdquo;
                </p>
                <div class="inline-block w-10 h-[1px] bg-primary/40"></div>
            </div>

        </div>
    </section>

    <!-- THE E-BOOK DETAILS -->
    <section id="sumario" class="py-24 bg-white border-b border-primary/5 scroll-mt-20">
        <div class="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <!-- Left: Beautiful book mockup -->
            <div class="lg:col-span-5 flex justify-center order-last lg:order-first">
                <div class="relative w-full max-w-[280px]">
                    <div class="absolute -inset-6 bg-bege/20 rounded-full blur-2xl -z-10"></div>
                    
                    <div class="w-full aspect-[3/4] bg-white p-3.5 shadow-2xl relative border border-primary/10 transition-transform duration-700 hover:scale-[1.01]">
                        <div class="w-full h-full overflow-hidden bg-offwhite border border-primary/10">
                            <img src="assets/images/capa-seu-bebe-emocional.jpg" alt="Capa do Livro Seu Bebê Emocional" class="w-full h-full object-cover grayscale-[5%]">
                        </div>
                    </div>

                    <div class="absolute -bottom-4 -right-4 bg-dark text-offwhite text-[9px] tracking-widest font-semibold uppercase py-2 px-3.5 shadow-md">
                        Disponível em PDF &bull; EPUB
                    </div>
                </div>
            </div>

            <!-- Right: Book description -->
            <div class="lg:col-span-7 space-y-8 text-left fade-in-section">
                <span class="text-[10px] tracking-[0.3em] uppercase text-primary font-bold">O E-book</span>
                
                <h2 class="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-dark leading-tight">
                    Seu Bebê Emocional
                </h2>
                <p class="text-xs uppercase tracking-[0.2em] text-accent font-semibold">O que toda mãe precisa saber antes do nascimento</p>
                
                <div class="w-16 h-[1px] bg-primary/30"></div>
                
                <p class="text-base text-dark/75 leading-relaxed font-light">
                    Este e-book reúne orientações essenciais e acolhedoras sobre a vida emocional nos primeiros meses do seu filho. Com uma linguagem livre de jargões técnicos herméticos, mas respaldada em vinte anos de clínica de psicologia corporal, você aprenderá como pequenos gestos diários - a forma de amamentar, de acolher o choro ou rituais de toque - têm a capacidade de criar a estrutura de apego seguro do bebê.
                </p>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-4 border-t border-primary/10 font-sans text-xs">
                    <div class="space-y-1">
                        <span class="text-[9px] text-dark/40 uppercase tracking-widest">Leitura Paced</span>
                        <p class="font-medium text-dark">Desenvolvido para ler no ritmo da rotina materna</p>
                    </div>
                    <div class="space-y-1">
                        <span class="text-[9px] text-dark/40 uppercase tracking-widest">Acesso Vitalício</span>
                        <p class="font-medium text-dark">Arquivo digital definitivo no seu e-mail</p>
                    </div>
                    <div class="space-y-1">
                        <span class="text-[9px] text-dark/40 uppercase tracking-widest">Cuidado Clínico</span>
                        <p class="font-medium text-dark">Linguagem terna, humana e sem imposição de culpas</p>
                    </div>
                    <div class="space-y-1">
                        <span class="text-[9px] text-dark/40 uppercase tracking-widest">Conteúdo Prático</span>
                        <p class="font-medium text-dark">Rituais de regulação corporal e massagem integrativa</p>
                    </div>
                </div>
                
                <div class="pt-4">
                    <a href="#oferta" class="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] font-semibold text-accent hover:text-dark transition-colors">
                        <span>Ver condições de aquisição</span>
                        <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                    </a>
                </div>
            </div>

        </div>
    </section>

    <!-- TABLE OF CONTENTS (SUMÁRIO EDITORIAL) -->
    <section class="py-24 bg-bege/10 border-t border-b border-primary/10">
        <div class="max-w-3xl mx-auto px-6 space-y-16 fade-in-section">
            
            <div class="text-center space-y-4">
                <span class="text-[10px] tracking-[0.3em] uppercase text-primary font-bold">Sumário Editorial</span>
                <h2 class="font-serif text-3xl md:text-4xl text-dark font-normal">
                    O que você vai descobrir nas páginas do guia
                </h2>
                <p class="text-sm text-dark/60 font-light max-w-md mx-auto">
                    Uma trilha suave construída de forma linear, conduzindo sua autoconfiança através do afeto biológico e emocional.
                </p>
            </div>

            <!-- Table of Chapters -->
            <div class="space-y-8 font-sans max-w-2xl mx-auto">
                <?php foreach ($chapters as $chapter): ?>
                <div class="group border-b border-primary/10 pb-5">
                    <div class="flex justify-between items-baseline">
                        <h4 class="font-serif text-lg md:text-xl text-dark font-medium group-hover:text-accent transition-colors">
                            <?php echo $chapter['num']; ?>. <?php echo $chapter['title']; ?>
                        </h4>
                        <span class="text-[11px] font-mono text-dark/40 hidden sm:inline">Pág. <?php echo $chapter['page']; ?></span>
                    </div>
                    <p class="text-xs text-dark/60 font-light mt-2 leading-relaxed">
                        <?php echo $chapter['desc']; ?>
                    </p>
                </div>
                <?php endforeach; ?>
            </div>

            <div class="text-center">
                <p class="text-[10px] font-mono tracking-widest text-dark/40">TODOS OS DIREITOS RESERVADOS &bull; <?php echo mb_strtoupper($authorName, 'UTF-8'); ?></p>
            </div>

        </div>
    </section>

    <!-- BIO / SOBRE MIM -->
    <section id="sobre" class="py-24 bg-white border-b border-primary/5 scroll-mt-20">
        <div class="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <!-- Left portrait -->
            <div class="lg:col-span-5 flex justify-center">
                <div class="relative w-full max-w-[280px]">
                    <div class="absolute inset-0 border border-primary/20 translate-x-3 translate-y-3 -z-10"></div>
                    
                    <div class="w-full aspect-[3/4] bg-white p-3.5 shadow-xl border border-primary/10">
                        <div class="w-full h-full overflow-hidden bg-bege">
                            <img src="assets/images/tati-bio.jpg" alt="Tatiana Lessa - Psicóloga" class="w-full h-full object-cover grayscale-[10%]">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right text bio -->
            <div class="lg:col-span-7 space-y-6 text-left fade-in-section">
                <span class="text-[10px] tracking-[0.3em] uppercase text-primary font-bold block">A Autora</span>
                
                <div class="space-y-1">
                    <h2 class="font-serif text-3xl md:text-4xl font-normal text-dark">
                        <?php echo $authorName; ?>
                    </h2>
                    <span class="text-xs font-medium tracking-wider text-accent uppercase block">
                        <?php echo $authorCref; ?>
                    </span>
                </div>
                
                <div class="w-16 h-[1px] bg-primary/30"></div>
                
                <div class="text-sm md:text-base text-dark/75 leading-relaxed space-y-5 font-light">
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
                
                <div class="pt-2">
                    <p class="font-serif italic text-dark/60 text-sm">
                        &ldquo;Acredito que mães apoiadas, livres de cobranças excessivas, são o verdadeiro pilar para uma infância emocionalmente saudável.&rdquo;
                    </p>
                </div>
            </div>

        </div>
    </section>

    <!-- SECONDARY EDITORIAL BLOCK -->
    <section class="py-24 bg-bege/20 border-t border-b border-primary/10">
        <div class="max-w-4xl mx-auto px-6 text-center space-y-12 fade-in-section">
            
            <div class="space-y-3">
                <span class="text-[10px] tracking-[0.3em] uppercase text-primary font-bold">O Ofício</span>
                <h2 class="font-serif text-3xl md:text-4xl text-dark font-light">
                    Desmistificando o primeiro semestre de vida do bebê
                </h2>
            </div>

            <div class="flex justify-center">
                <div class="relative max-w-xl border border-primary/10 bg-white p-3 shadow-lg">
                    <img src="assets/images/tati-ebook.jpg" alt="Tatiana Lessa em consultório" class="w-full h-auto max-h-[380px] object-cover grayscale-[5%]">
                    <div class="absolute top-6 left-6 bg-offwhite/95 backdrop-blur border border-primary/25 px-3 py-1.5 text-[9px] tracking-widest uppercase font-semibold text-dark shadow-sm">
                        Embasado &bull; Prático
                    </div>
                </div>
            </div>

            <div class="max-w-2xl mx-auto text-left space-y-6 text-sm md:text-base text-dark/75 leading-relaxed font-light">
                <p>
                    Com minha trajetória no consultório e em projetos públicos, estruturei este guia para responder às dúvidas corporais e emocionais mais profundas das mães — aquelas que o enxoval tradicional costuma ignorar.
                </p>
                <p>
                    O caminho é construído com carinho e amparo científico, dando a você a clareza necessária para acolher o bebê com serenidade e sem culpas infundadas.
                </p>
            </div>

        </div>
    </section>

    <!-- REVIEWS & TESTIMONIALS -->
    <section id="depoimentos" class="py-24 bg-white border-b border-primary/5 scroll-mt-20">
        <div class="max-w-4xl mx-auto px-6 space-y-16 fade-in-section">
            
            <div class="text-center space-y-4">
                <span class="text-[10px] tracking-[0.3em] uppercase text-primary font-bold">Relatos Espontâneos</span>
                <h2 class="font-serif text-3xl md:text-4xl text-dark font-normal">
                    O carinho de quem viveu essa preparação
                </h2>
                <p class="text-sm text-dark/65 max-w-sm mx-auto font-light">
                    Palavras sinceras de mães e cuidadoras que leram o guia e transformaram o seu modo de sentir a maternidade.
                </p>
            </div>

            <!-- Editorial testimonials loop -->
            <div class="space-y-12 max-w-2xl mx-auto">
                <?php foreach ($testimonials as $t): ?>
                <div class="space-y-4 text-left border-l-2 border-accent/40 pl-6 py-1">
                    <p class="font-serif italic text-base md:text-lg text-dark/85 leading-relaxed font-light">
                        &ldquo;<?php echo $t['quote']; ?>&rdquo;
                    </p>
                    <div class="flex items-center space-x-3.5 pt-1">
                        <img src="<?php echo $t['image']; ?>" alt="<?php echo $t['author']; ?>" class="w-9 h-9 rounded-full object-cover border border-primary/20">
                        <div>
                            <h5 class="text-xs font-semibold text-dark"><?php echo $t['author']; ?></h5>
                            <p class="text-[10px] text-dark/50 font-light"><?php echo $t['role']; ?></p>
                        </div>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>

        </div>
    </section>

    <!-- AUDIENCE IDENTIFICATION -->
    <section class="py-24 bg-bege/20 border-t border-b border-primary/10">
        <div class="max-w-4xl mx-auto px-6 text-center space-y-12 fade-in-section">
            
            <div class="space-y-3">
                <span class="text-[10px] tracking-[0.3em] uppercase text-primary font-bold">Identificação</span>
                <h2 class="font-serif text-3xl md:text-4xl text-dark font-light">
                    Para quem este e-book foi escrito
                </h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto text-sm">
                <div class="space-y-1.5">
                    <h4 class="font-serif text-lg font-medium text-dark">— Gestantes em Preparação</h4>
                    <p class="text-dark/70 font-light leading-relaxed">
                        Que desejam transcender as decisões de enxovais físicos e construir desde o ventre os caminhos do apego seguro do bebê.
                    </p>
                </div>

                <div class="space-y-1.5">
                    <h4 class="font-serif text-lg font-medium text-dark">— Mães de Primeira Viagem</h4>
                    <p class="text-dark/70 font-light leading-relaxed">
                        Para quem se sente desamparada ou confusa em meio a tantas exigências do mercado e palpites contraditórios de terceiros.
                    </p>
                </div>

                <div class="space-y-1.5">
                    <h4 class="font-serif text-lg font-medium text-dark">— Pais e Redes de Apoio</h4>
                    <p class="text-dark/70 font-light leading-relaxed">
                        Avós, tios, madrinhas ou parceiros que desejam apoiar a recém-mãe de maneira sensível e respeitosa nesse início delicado.
                    </p>
                </div>

                <div class="space-y-1.5">
                    <h4 class="font-serif text-lg font-medium text-dark">— Doulas e Profissionais</h4>
                    <p class="text-dark/70 font-light leading-relaxed">
                        Profissionais de parto e pós-parto que procuram um material sensível para indicar e enriquecer a orientação de suas clientes.
                    </p>
                </div>
            </div>

        </div>
    </section>

    <!-- PRICING & OFFER -->
    <section id="oferta" class="py-24 bg-white scroll-mt-20">
        <div class="max-w-xl mx-auto px-6 fade-in-section">
            
            <div class="border border-primary/25 bg-offwhite p-8 md:p-14 text-center space-y-10 relative shadow-lg">
                
                <!-- Trust Seal / Stamp -->
                <div class="absolute -top-8 -right-4 md:-top-10 md:-right-8 w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-dashed border-accent/30 bg-[#FDFBF7] flex flex-col items-center justify-center shadow-md rotate-[-6deg] select-none z-10 transition-transform duration-500 hover:rotate-0 hover:scale-105">
                    <div class="absolute inset-1.5 rounded-full border border-primary/5 pointer-events-none"></div>
                    <i data-lucide="shield-check" class="w-5 h-5 text-accent mb-0.5 animate-pulse"></i>
                    <span class="font-serif text-xs md:text-sm font-bold text-dark tracking-tight leading-none">7 DIAS</span>
                    <span class="text-[7px] md:text-[8px] uppercase tracking-[0.15em] text-accent font-semibold mt-0.5">Garantia</span>
                    <span class="text-[6px] md:text-[7px] uppercase tracking-[0.1em] text-primary/65 font-medium leading-none">Sem riscos</span>
                </div>
                
                <div class="space-y-2">
                    <span class="text-[10px] tracking-[0.3em] uppercase text-primary font-bold">Aquisição do Guia</span>
                    <h3 class="font-serif text-3xl font-light text-dark">Adquira Seu E-book</h3>
                    <div class="w-10 h-[1px] bg-primary/40 mx-auto mt-3"></div>
                </div>

                <!-- Pricing Block -->
                <div class="space-y-2">
                    <p class="text-xs text-dark/40 line-through font-mono">De: R$ <?php echo $precoDe; ?></p>
                    <p class="text-[10px] text-accent uppercase tracking-[0.2em] font-semibold">Valor Promocional</p>
                    
                    <div class="flex justify-center items-baseline space-x-1 py-1">
                        <span class="font-serif text-xl text-dark/70">R$</span>
                        <span class="font-serif text-6xl font-light text-dark tracking-tighter">47</span>
                        <span class="font-serif text-2xl text-dark/70">,00</span>
                        <span class="text-xs text-dark/55 ml-2 font-light">à vista</span>
                    </div>
                    
                    <p class="text-[11px] text-dark/60 font-light">
                        ou parcelado em cartão de crédito através da Hotmart
                    </p>
                </div>

                <!-- CTA Button -->
                <div class="space-y-4 max-w-sm mx-auto">
                    <a href="<?php echo $hotmartLink; ?>" target="_blank" rel="noopener noreferrer" class="block w-full py-4 bg-accent hover:bg-accent-hover text-offwhite text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow">
                        Garantir Enxoval Emocional
                    </a>
                    <p class="text-[10px] text-dark/40 font-light">
                        Ambiente de pagamento 100% seguro intermediado pela Hotmart.
                    </p>
                </div>

                <!-- Guarantee statement -->
                <div class="border-t border-primary/10 pt-8 mt-4 text-left space-y-3">
                    <h5 class="font-serif text-lg font-normal text-dark">Garantia e Respeito</h5>
                    <p class="text-xs text-dark/70 leading-relaxed font-light">
                        Quero que você leia e se sinta amparada. Você tem 7 dias completos a partir da data de aquisição para ler o guia. Se sentir que o material não condiz com as suas expectativas, devolvemos integralmente seu valor, sem justificativas ou burocracia.
                    </p>
                </div>

            </div>
        </div>
    </section>

    <!-- FAQ ACCORDION -->
    <section id="faq" class="py-24 bg-bege/20 border-t border-b border-primary/10 scroll-mt-20">
        <div class="max-w-2xl mx-auto px-6 space-y-12 fade-in-section">
            
            <div class="text-center space-y-3">
                <span class="text-[10px] tracking-[0.3em] uppercase text-primary font-bold">Respostas Claras</span>
                <h2 class="font-serif text-3xl text-dark font-normal">
                    Dúvidas Comuns
                </h2>
            </div>

            <div class="divide-y divide-primary/15 border-t border-b border-primary/15 font-sans">
                <?php foreach ($faqs as $i => $f): ?>
                <div class="py-5 faq-item">
                    <button class="w-full flex justify-between items-center text-left focus:outline-none faq-btn" data-index="<?php echo $i; ?>">
                        <span class="font-serif text-base text-dark font-medium pr-4 leading-snug">
                            <?php echo $f['question']; ?>
                        </span>
                        <span class="text-accent shrink-0 font-mono text-lg font-light faq-icon">+</span>
                    </button>
                    
                    <div class="faq-content transition-all duration-300 ease-in-out overflow-hidden max-h-0 opacity-0">
                        <div class="text-xs sm:text-sm text-dark/70 leading-relaxed font-light pt-3">
                            <?php echo $f['answer']; ?>
                        </div>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
 
        </div>
    </section>

    <!-- FINAL INSPIRATIONAL BLOCK -->
    <section class="py-24 md:py-32 bg-offwhite">
        <div class="max-w-4xl mx-auto px-6 text-center space-y-12 fade-in-section">
            
            <div class="w-10 h-[1px] bg-primary/40 mx-auto"></div>
            
            <h2 class="font-serif text-3xl md:text-4xl lg:text-5xl text-dark leading-relaxed max-w-2xl mx-auto font-light">
                Não espere pelo choro para descobrir como construir o refúgio seguro do seu bebê.
            </h2>

            <p class="font-serif text-lg text-accent italic max-w-xl mx-auto">
                Você e seu filho merecem uma transição de colo confortável e consciente.
            </p>

            <div class="pt-4 space-y-4">
                <a href="<?php echo $hotmartLink; ?>" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center space-x-3 px-10 py-4.5 bg-accent hover:bg-accent-hover text-offwhite font-sans text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                    <span>Adquirir o Guia Completo</span>
                    <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                </a>
                
                <p class="text-[10px] text-dark/50 tracking-widest uppercase">
                    R$ <?php echo $precoPor; ?> &bull; Leitura imediata &bull; Garantia de 7 dias
                </p>
            </div>

            <div class="w-10 h-[1px] bg-primary/20 mx-auto pt-12"></div>

            <!-- FOOTER -->
            <footer class="pt-8 text-[11px] text-dark/50 space-y-3 font-light leading-relaxed max-w-xl mx-auto">
                <p class="font-serif text-xs text-dark font-normal tracking-wide">
                    <?php echo $authorName; ?> &copy; <?php echo date('Y'); ?> &bull; Psicóloga Corporal &bull; Todos os direitos reservados
                </p>
                <p>
                    Este e-book possui caráter estritamente educativo e preventivo. Orientações individualizadas e intervenções de saúde mental materna e infantil devem ser obtidas em sessões e consultas clínicas dedicadas com profissionais credenciados.
                </p>
            </footer>

        </div>
    </section>


    <!-- ==============================================
         LIGHTBOX / MODAL PREVIEW DO LIVRO INTERATIVO
         ============================================== -->
    <div id="book-modal" class="fixed inset-0 bg-dark/90 backdrop-blur-md z-50 flex-col items-center justify-center p-4 md:p-6 transition-all duration-300 hidden">
        <div class="relative w-full max-w-[340px] md:max-w-[700px] flex flex-col items-center">
            
            <!-- Close Header -->
            <div class="w-full flex justify-between items-center mb-4 text-offwhite">
                <div class="flex items-center space-x-2">
                    <i data-lucide="book-open" class="w-4 h-4 text-primary"></i>
                    <span class="text-[10px] md:text-xs uppercase tracking-widest font-medium text-offwhite/80">Preview Interativo</span>
                </div>
                <button id="book-close-btn" class="p-1.5 rounded-full hover:bg-white/10 text-offwhite/80 hover:text-offwhite transition-all" title="Fechar Preview" aria-label="Fechar preview">
                    <i data-lucide="x" class="w-5 h-5"></i>
                </button>
            </div>

            <!-- Open Book Spread state -->
            <div class="relative w-[290px] h-[400px] md:w-[660px] md:h-[440px] bg-[#FAF6F0] shadow-2xl border border-primary/15 rounded-sm flex overflow-hidden">
                <!-- Soft inner page depth shadow -->
                <div class="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/[0.02] via-transparent to-black/[0.03]"></div>
                
                <!-- Spine divider -->
                <div class="absolute left-1/2 top-0 -translate-x-1/2 w-8 h-full book-spine-divider z-20 hidden md:block"></div>

                <!-- Left Page (Desktop / Mobile Switchable) -->
                <div id="left-page" class="w-full md:w-1/2 flex flex-col h-full bg-[#FAF6F0] page-shadow-left border-r border-primary/5 relative z-10 p-5 md:p-7 select-text overflow-y-auto">
                    <!-- Dynamic Left Content -->
                </div>

                <!-- Right Page (Desktop / Mobile Switchable) -->
                <div id="right-page" class="w-full md:w-1/2 flex flex-col h-full bg-[#FAF6F0] page-shadow-right relative z-10 p-5 md:p-7 select-text overflow-y-auto">
                    <!-- Dynamic flipping layer animation -->
                    <div id="flipping-overlay" class="absolute inset-0 bg-[#EFEAE2] z-30 opacity-0 pointer-events-none transition-all duration-300"></div>
                    <!-- Dynamic Right Content -->
                </div>
            </div>

            <!-- Control Navigation Buttons -->
            <div class="mt-6 flex items-center justify-center space-x-6 text-offwhite">
                <button id="prev-page-btn" class="p-2.5 rounded-full border border-white/20 bg-white/5 text-offwhite transition-all disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white/10 active:scale-95 hover:text-accent" aria-label="Página anterior">
                    <i data-lucide="chevron-left" class="w-5 h-5"></i>
                </button>

                <!-- Page number indicator -->
                <span id="page-indicator" class="text-xs uppercase tracking-[0.2em] font-sans font-medium text-offwhite/60">
                    Pág. 1 de 6
                </span>

                <button id="next-page-btn" class="p-2.5 rounded-full border border-white/20 bg-white/5 text-offwhite transition-all disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white/10 active:scale-95 hover:text-accent" aria-label="Próxima página">
                    <i data-lucide="chevron-right" class="w-5 h-5"></i>
                </button>

                <button id="reset-page-btn" class="p-2.5 rounded-full border border-white/20 bg-white/5 text-offwhite hover:bg-white/10 hover:text-accent transition-all active:scale-95" title="Voltar ao início" aria-label="Voltar ao início">
                    <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
                </button>
            </div>

            <!-- Helper label -->
            <p class="text-[10px] tracking-wider uppercase text-offwhite/40 mt-3 font-sans text-center">
                Toque nas setas para folhear &bull; Clique fora ou Esc para fechar
            </p>

        </div>
    </div>


    <!-- ==============================================
         LUCIDE ICONS & JAVASCRIPT LOGIC
         ============================================== -->
    <script src="https://unpkg.com/lucide@latest"></script>
    <script>
        // Inicializa os ícones do Lucide
        lucide.createIcons();

        // ----------------------------------------------
        // 1. MOBILE MENU DRAWER
        // ----------------------------------------------
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-nav-link');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const isHidden = mobileMenu.classList.contains('hidden');
            mobileMenuBtn.innerHTML = isHidden ? '<i data-lucide="menu" class="w-5 h-5"></i>' : '<i data-lucide="x" class="w-5 h-5"></i>';
            lucide.createIcons();
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.innerHTML = '<i data-lucide="menu" class="w-5 h-5"></i>';
                lucide.createIcons();
            });
        });

        // ----------------------------------------------
        // 2. SCROLL ANIMATION (Intersection Observer)
        // ----------------------------------------------
        const animatedSections = document.querySelectorAll('.fade-in-section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, {
            threshold: 0.05,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedSections.forEach(section => observer.observe(section));

        // ----------------------------------------------
        // 3. FAQ ACCORDION LOGIC
        // ----------------------------------------------
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const btn = item.querySelector('.faq-btn');
            const content = item.querySelector('.faq-content');
            const icon = item.querySelector('.faq-icon');

            btn.addEventListener('click', () => {
                const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

                // Fecha todas as outras FAQs para ficar idêntico ao React
                faqItems.forEach(otherItem => {
                    const otherContent = otherItem.querySelector('.faq-content');
                    const otherIcon = otherItem.querySelector('.faq-icon');
                    otherContent.style.maxHeight = null;
                    otherContent.classList.add('opacity-0');
                    otherIcon.textContent = '+';
                });

                if (!isOpen) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    content.classList.remove('opacity-0');
                    icon.textContent = '—';
                } else {
                    content.style.maxHeight = null;
                    content.classList.add('opacity-0');
                    icon.textContent = '+';
                }
            });
        });

        // ----------------------------------------------
        // 4. INTERACTIVE BOOK SPREAD PREVIEW
        // ----------------------------------------------
        // Dados das páginas do e-book
        const bookPages = [
            // Spread 0 (Pág. 0 e 1)
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
            // Spread 1 (Pág. 2 e 3)
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
            // Spread 2 (Pág. 4 e 5)
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

        let currentPage = 0;
        const totalPages = 6;
        let isDesktop = window.innerWidth >= 768;

        const bookTrigger = document.getElementById('book-trigger');
        const bookModal = document.getElementById('book-modal');
        const bookCloseBtn = document.getElementById('book-close-btn');
        const prevPageBtn = document.getElementById('prev-page-btn');
        const nextPageBtn = document.getElementById('next-page-btn');
        const resetPageBtn = document.getElementById('reset-page-btn');
        const pageIndicator = document.getElementById('page-indicator');
        const leftPage = document.getElementById('left-page');
        const rightPage = document.getElementById('right-page');
        const flippingOverlay = document.getElementById('flipping-overlay');

        // Monitor de largura para comportamento responsivo das páginas
        window.addEventListener('resize', () => {
            const currentIsDesktop = window.innerWidth >= 768;
            if (currentIsDesktop !== isDesktop) {
                isDesktop = currentIsDesktop;
                if (isDesktop) {
                    // Alinha sempre para spread duplo par no desktop
                    currentPage = Math.floor(currentPage / 2) * 2;
                }
                renderBookState();
            }
        });

        // Abre o modal
        bookTrigger.addEventListener('click', () => {
            bookModal.classList.remove('hidden');
            bookModal.classList.add('flex');
            document.body.style.overflow = 'hidden';
            renderBookState();
        });

        // Fecha o modal ao clicar em fechar ou fora
        const closeModal = () => {
            bookModal.classList.remove('flex');
            bookModal.classList.add('hidden');
            document.body.style.overflow = '';
        };

        bookCloseBtn.addEventListener('click', closeModal);
        bookModal.addEventListener('click', (e) => {
            if (e.target === bookModal) {
                closeModal();
            }
        });

        // Atalho de teclado Esc para fechar o modal
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !bookModal.classList.contains('hidden')) {
                closeModal();
            }
        });

        // Controles de página
        nextPageBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const increment = isDesktop ? 2 : 1;
            if (currentPage + increment < totalPages) {
                triggerFlipAnimation('next');
                setTimeout(() => {
                    currentPage += increment;
                    if (isDesktop) {
                        currentPage = Math.floor(currentPage / 2) * 2;
                    }
                    renderBookState();
                }, 150);
            }
        });

        prevPageBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const decrement = isDesktop ? 2 : 1;
            if (currentPage - decrement >= 0) {
                triggerFlipAnimation('prev');
                setTimeout(() => {
                    currentPage -= decrement;
                    if (isDesktop) {
                        currentPage = Math.floor(currentPage / 2) * 2;
                    }
                    renderBookState();
                }, 150);
            }
        });

        resetPageBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentPage = 0;
            renderBookState();
        });

        // Efeito visual de foleamento das páginas
        function triggerFlipAnimation(dir) {
            flippingOverlay.style.opacity = '0.35';
            flippingOverlay.style.transform = dir === 'next' ? 'scaleX(0.5) translateX(-5%)' : 'scaleX(0.5) translateX(5%)';
            setTimeout(() => {
                flippingOverlay.style.opacity = '0';
                flippingOverlay.style.transform = 'none';
            }, 300);
        }

        // Renderizador de página com base no tipo de página
        function getPageHTML(pageData) {
            if (!pageData) return '';

            if (pageData.type === 'intro-cover') {
                return `
                    <div class="flex flex-col justify-between h-full text-left">
                        <div class="space-y-3">
                            <span class="text-[9px] tracking-widest text-primary font-semibold uppercase block border-b border-primary/10 pb-2">
                                ${pageData.subtitle}
                            </span>
                            <h3 class="font-serif text-lg md:text-2xl text-dark font-medium leading-tight">
                                ${pageData.title}
                            </h3>
                            <p class="text-xs text-dark/70 leading-relaxed font-light font-sans pt-1">
                                ${pageData.content}
                            </p>
                        </div>
                        <div class="border-t border-primary/10 pt-4 mt-4">
                            <p class="font-serif italic text-xs md:text-sm text-dark/65 leading-relaxed font-light">
                                ${pageData.quote}
                            </p>
                        </div>
                    </div>
                `;
            }

            if (pageData.type === 'editorial') {
                return `
                    <div class="flex flex-col justify-between h-full text-left">
                        <div class="space-y-3">
                            <span class="text-[9px] tracking-[0.2em] text-primary font-semibold uppercase block">
                                ${pageData.chapter}
                            </span>
                            <h3 class="font-serif text-lg md:text-xl text-dark font-medium leading-snug">
                                ${pageData.title}
                            </h3>
                            <p class="text-xs text-dark/75 leading-relaxed font-light font-sans pt-1">
                                ${pageData.content}
                            </p>
                        </div>
                        <div class="flex justify-between items-center text-[10px] font-mono text-dark/40 border-t border-primary/5 pt-3 mt-3">
                            <span>Seu Bebê Emocional</span>
                            <span>${pageData.page}</span>
                        </div>
                    </div>
                `;
            }

            if (pageData.type === 'practical') {
                const bulletsHTML = pageData.bullets.map(b => `
                    <li class="flex items-start gap-1.5">
                        <span class="text-accent text-[12px] leading-none shrink-0">•</span>
                        <span>${b}</span>
                    </li>
                `).join('');

                return `
                    <div class="flex flex-col justify-between h-full text-left">
                        <div class="space-y-3">
                            <span class="text-[9px] tracking-[0.2em] text-accent font-semibold uppercase block">
                                ${pageData.tag}
                            </span>
                            <h3 class="font-serif text-lg md:text-xl text-dark font-medium leading-snug">
                                ${pageData.title}
                            </h3>
                            <p class="text-xs text-dark/75 leading-relaxed font-light font-sans">
                                ${pageData.content}
                            </p>
                            <ul class="space-y-2 text-[11px] text-dark/80 font-sans font-light mt-1 pl-1">
                                ${bulletsHTML}
                            </ul>
                        </div>
                        <div class="flex justify-between items-center text-[10px] font-mono text-dark/40 border-t border-primary/5 pt-3 mt-3">
                            <span>Guia de Psicologia Corporal</span>
                            <span>${pageData.page}</span>
                        </div>
                    </div>
                `;
            }

            if (pageData.type === 'author-note') {
                return `
                    <div class="flex flex-col justify-between h-full text-left">
                        <div class="space-y-3">
                            <div class="flex items-center gap-3">
                                <img src="assets/images/tati-hero.jpg" alt="Tatiana Lessa" class="w-10 h-10 rounded-full object-cover border border-primary/20 grayscale">
                                <div class="text-left">
                                    <h4 class="text-xs font-bold text-dark">${pageData.signature}</h4>
                                    <p class="text-[9px] text-dark/50 leading-none">${pageData.cref}</p>
                                </div>
                            </div>
                            <h3 class="font-serif text-lg md:text-xl text-dark font-medium leading-snug pt-1">
                                ${pageData.title}
                            </h3>
                            <p class="text-xs text-dark/75 leading-relaxed font-light font-sans">
                                ${pageData.content}
                            </p>
                        </div>
                        <div class="flex justify-between items-center text-[10px] font-mono text-dark/40 border-t border-primary/5 pt-3 mt-3">
                            <span>Agradecimentos</span>
                            <span>${pageData.page}</span>
                        </div>
                    </div>
                `;
            }

            return '';
        }

        // Renderiza o estado do livro (Páginas esquerda, direita, botões, etc.)
        function renderBookState() {
            const leftIndex = Math.floor(currentPage / 2) * 2;
            const rightIndex = leftIndex + 1;
            
            const spreadData = bookPages[leftIndex / 2];

            if (isDesktop) {
                // Modo Desktop - Spread Completo de 2 páginas
                leftPage.classList.remove('hidden');
                leftPage.classList.add('flex');
                rightPage.classList.remove('hidden');
                rightPage.classList.add('flex');
                
                leftPage.innerHTML = getPageHTML(spreadData.left);
                rightPage.innerHTML = getPageHTML(spreadData.right);

                pageIndicator.textContent = `Pág. ${leftIndex + 1} - ${rightIndex + 1} de ${totalPages}`;
                
                prevPageBtn.disabled = currentPage === 0;
                nextPageBtn.disabled = currentPage >= 4;
            } else {
                // Modo Mobile - Exibe apenas 1 página por vez
                if (currentPage % 2 === 0) {
                    leftPage.classList.remove('hidden');
                    leftPage.classList.add('flex');
                    rightPage.classList.add('hidden');
                    leftPage.innerHTML = getPageHTML(spreadData.left);
                } else {
                    leftPage.classList.add('hidden');
                    rightPage.classList.remove('hidden');
                    rightPage.classList.add('flex');
                    rightPage.innerHTML = getPageHTML(spreadData.right);
                }

                pageIndicator.textContent = `Pág. ${currentPage + 1} de ${totalPages}`;

                prevPageBtn.disabled = currentPage === 0;
                nextPageBtn.disabled = currentPage >= 5;
            }
        }
    </script>

</body>
</html>
