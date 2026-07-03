========================================================================
           GUIA DE INSTALAÇÃO - TATIANA LESSA "SEU BEBÊ EMOCIONAL"
                            VERSÃO EM PHP STANDALONE
========================================================================

Esta pasta contém a versão completa, otimizada e portável do site, adaptada de React/Vite para PHP Puro (HTML5 + CSS3 via Tailwind CDN + JavaScript Vanilla + PHP).

Ela foi desenvolvida para rodar em absolutamente qualquer hospedagem de sites que suporte PHP (a partir da versão 7.0), incluindo:
- Hostgator, Locaweb, KingHost, cPanel tradicional, Apache, Nginx, Vercel, etc.

------------------------------------------------------------------------
ESTRUTURA DE ARQUIVOS INCLUÍDA:
------------------------------------------------------------------------
/php-version/
  |-- index.php            (Arquivo principal com todo o conteúdo e interatividade)
  |-- README.txt           (Este guia de instruções)
  |-- assets/
        |-- images/        (Todas as imagens de depoimentos, livro e autora copiadas)

------------------------------------------------------------------------
VANTAGENS DESTA VERSÃO EM PHP:
------------------------------------------------------------------------
1. Independência de Build: Não requer "npm run build" ou compilação. Basta enviar e rodar.
2. Customização Direta: Você pode alterar o preço, o link da Hotmart, nome da autora ou o CRP diretamente no topo do arquivo "index.php" nas variáveis de configuração em PHP.
3. Imagens Integradas: As imagens estão configuradas com caminhos relativos robustos ("assets/images/..."), garantindo que funcionem em qualquer subdiretório ou domínio raiz.
4. Preview do Livro 100% Funcional: O flipbook interativo em 3D com lightbox, controle de páginas responsivo (duplo no computador, simples no celular) foi portado com perfeição para JavaScript Vanilla, garantindo que funcione sem necessidade de bibliotecas pesadas de terceiros.

------------------------------------------------------------------------
COMO INSTALAR NO SEU SERVIDOR (cPanel / Hostgator / Locaweb):
------------------------------------------------------------------------
1. Acesse o Gerenciador de Arquivos do seu painel de hospedagem (geralmente cPanel).
2. Vá até a pasta pública de destino (geralmente "public_html").
3. Compacte esta pasta "php-version" como um arquivo ZIP ("php-version.zip").
4. Faça o upload do arquivo ZIP para a sua hospedagem.
5. Extraia o conteúdo diretamente na pasta desejada (se deseja que seja a página inicial do seu domínio, coloque os arquivos de "php-version" diretamente na raiz da pasta "public_html", para que o "index.php" fique exatamente em "public_html/index.php").
6. Pronto! Acesse seu domínio no navegador (ex: www.seusite.com.br) e a página estará ativa e perfeitamente operacional.

------------------------------------------------------------------------
COMO RE-CONFIGURAR O PRODUTO (Preço, Link, etc.):
------------------------------------------------------------------------
Abra o arquivo "index.php" com qualquer editor de texto. Logo nas primeiras linhas (linhas 8 a 13), você verá este bloco de código:

  // CONFIGURAÇÃO GERAL
  $hotmartLink = "https://pay.hotmart.com/U100464781R";
  $precoDe = "97,00";
  $precoPor = "47,00";
  $authorName = "Tatiana Lessa";
  $authorCref = "Psicóloga Corporal • CRP 06/76796";

Basta alterar os valores entre aspas para atualizar instantaneamente o site inteiro!

========================================================================
Desejamos muito sucesso com o lançamento do seu E-book!
Desenvolvido com carinho e precisão artesanal.
========================================================================
