// ============================================================
// NEXO — CONFIGURAÇÕES PRINCIPAIS
// Este é o único arquivo que você precisa abrir para alterar
// WhatsApp, Instagram, textos principais e projetos do portfólio.
// ============================================================

const NEXO_CONFIG = {

  // ------------------------------------------------------------
  // NEXO — CONTATO
  // Troque o número do WhatsApp aqui. Formato: código do país +
  // DDD + número, só dígitos (ex: 55 45 99999-9999 -> "5545999999999")
  // ------------------------------------------------------------
  whatsappNumber: "554599867857", // TODO: substituir pelo número real da NEXO
  whatsappMessage: "Olá! Conheci a NEXO pelo Instagram e o site e gostaria de saber mais sobre os projetos.",

  // Link do Instagram da NEXO. Troque aqui.
  instagramUrl: "https://www.instagram.com/nexo_teams/?hl=en#", // TODO: substituir pelo @ real

  // ------------------------------------------------------------
  // NEXO — TEXTOS PRINCIPAIS
  // Altere aqui os textos que aparecem no hero e nas seções.
  // ------------------------------------------------------------
  textos: {
    marca: "NEXO office team",
    heroHeadline: "Cada negócio é um ponto. Nós criamos a conexão.",
    heroSubtexto: "Somos uma agência de tecnologia. Criamos sites, sistemas e experiências digitais para empresas que querem ser levadas a sério.",
    ctaProjetos: "Ver projetos",
    ctaWhatsapp: "Falar com a NEXO",
    portfolioEyebrow: "Portfólio",
    portfolioTitulo: "Projetos selecionados.",
    posicionamento: "Não criamos apenas sites. Criamos experiências digitais para empresas que querem ser levadas a sério.",
    ctaFinalTitulo: "Seu próximo projeto pode começar aqui.",
    ctaFinalSubtexto: "Conte pra gente o que você precisa. A conversa começa no WhatsApp.",
    ctaFinalBotao: "Falar com a NEXO",
  },

  // ------------------------------------------------------------
  // NEXO — DADOS DOS PROJETOS
  // Para ADICIONAR um projeto: copie um bloco { ... } inteiro,
  // cole abaixo do último e edite os campos.
  // Para REMOVER um projeto: apague o bloco correspondente.
  // Para TROCAR A IMAGEM: troque o valor de "imagem" pelo caminho
  // do novo arquivo (ex: "assets/projetos/nome-do-arquivo.jpg").
  // Enquanto não houver imagem real, o site mostra um espaço
  // reservado com o monograma do projeto.
  // ------------------------------------------------------------
  projetos: [
    {
      nome: "Sweet Donuts",
      categoria: "Confeitaria",
      descricao: "Site institucional com catálogo e pedidos direto pelo WhatsApp.",
      imagem: "images/sweetdonuts.png", // TODO: assets/projetos/sweetdonuts.png
      url: "https://nexoofficeteam.github.io/SweetDonuts/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAaeFmKLtoy1BuNMzp-t-rDJGxOmeGQmhjh6-JLHUzsazixqj3zbAuVioFTZa7Q_aem_0sYyP_aOokKjYr6FjptGqQ", // TODO: link do site quando estiver no ar
    },
    {
      nome: "Atlas Media",
      categoria: "Video Maker", // TODO: definir categoria real
      descricao: "Descrição breve do projeto.", // TODO: descrever o projeto
      imagem: "images/atlas.png", // TODO: assets/projetos/atlas-media.jpg
      url: "https://demo-atlasmedia.netlify.app/", // TODO: link do site quando estiver no ar
    },
    {
      nome: "Dunkel Hamburgueria",
      categoria: "Hamburgueria", // TODO: definir categoria real
      descricao: "Descrição breve do projeto.", // TODO: descrever o projeto
      imagem: "images/dunkel.png", // TODO: assets/projetos/dunkel-hamburgueria.jpg
      url: "https://dunkel.lovable.app/", // TODO: link do site quando estiver no ar
    },
    {
      nome: "Essencia Relax Spa",
      categoria: "SPA", // TODO: definir categoria real
      descricao: "Descrição breve do projeto.", // TODO: descrever o projeto
      imagem: "images/spa.png", // TODO: assets/projetos/dunkel-hamburgueria.jpg
      url: "https://eduardopoltronieri260-del.github.io/SPA/", // TODO: link do site quando estiver no ar
    },
    {
      nome: "AURA",
      categoria: "Confecção", // TODO: definir categoria real
      descricao: "Descrição breve do projeto.", // TODO: descrever o projeto
      imagem: "images/aura.png", // TODO: assets/projetos/dunkel-hamburgueria.jpg
      url: "https://vogue-studio-flow.lovable.app/", // TODO: link do site quando estiver no ar
    },
  ],
};
