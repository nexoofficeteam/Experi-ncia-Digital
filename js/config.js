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
  whatsappNumber: "554599867857",
  whatsappMessage: "Olá! Conheci a NEXO pelo Instagram e o site e gostaria de saber mais sobre os projetos.",

  // Link do Instagram da NEXO. Troque aqui.
  instagramUrl: "https://www.instagram.com/nexo_teams/",

  // ------------------------------------------------------------
  // NEXO — TEXTOS PRINCIPAIS
  // Altere aqui os textos que aparecem no hero e nas seções.
  // ------------------------------------------------------------
  textos: {
    marca: "NEXO",
    // Palavra opcional que aparece em BRANCO ao lado do "NEXO" (que fica
    // sempre em azul) no título grande do hero. Deixe "" para não mostrar
    // nada. Exemplo: "office team" -> aparece "NEXO office team".
    heroSufixo: "office team",
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
  // NEXO — EQUIPE (cards de contato no CTA final)
  // Para ADICIONAR alguém: copie um bloco { ... } inteiro, cole
  // abaixo do último e edite os campos.
  // Para REMOVER: apague o bloco. Se a lista ficar vazia (equipe: []),
  // o CTA final volta a mostrar um único botão "Falar com a NEXO".
  // ------------------------------------------------------------
  equipe: [
    {
      nome: "Eduardo",
      cargo: "Dev",
      linha: "Vamos construir o próximo nível juntos.",
      foto: "images/edu.png", // TODO: images/eduardo.png
      whatsappNumero: "554599848171", // TODO: confirmar número direto do Eduardo
      whatsappMensagem: "Olá, Eduardo! Conheci a NEXO pelo Instagram e o site e gostaria de saber mais sobre os projetos.",
    },
    {
      nome: "João",
      cargo: "Consultor administrativo",
      linha: "Vamos construir o próximo nível juntos.",
      foto: "images/joao.png", // TODO: images/joao.png
      whatsappNumero: "554599867857", // TODO: número direto do João
      whatsappMensagem: "Olá, João! Conheci a NEXO pelo Instagram e o site e gostaria de saber mais sobre os projetos.",
    },
  ],

  // ------------------------------------------------------------
  // NEXO — DADOS DOS PROJETOS
  // Para ADICIONAR um projeto: copie um bloco { ... } inteiro,
  // cole abaixo do último e edite os campos.
  // Para REMOVER um projeto: apague o bloco correspondente.
  // Para TROCAR A IMAGEM: troque o valor de "imagem" pelo caminho
  // do novo arquivo (ex: "images/nome-do-arquivo.png").
  // Enquanto não houver imagem real, o site mostra um espaço
  // reservado com o monograma do projeto.
  // ------------------------------------------------------------
  projetos: [
    {
      nome: "Sweet Donuts",
      categoria: "Confeitaria",
      descricao: "Site institucional com catálogo e pedidos direto pelo WhatsApp.",
      imagem: "images/sweetdonuts.png",
      url: "https://nexoofficeteam.github.io/SweetDonuts/",
    },
    {
      nome: "Atlas Media",
      categoria: "Video Maker",
      descricao: "Site institucional com portfólio e feedbacks.",
      imagem: "images/atlas.png",
      url: "https://demo-atlasmedia.netlify.app/",
    },
    {
      nome: "Dunkel Hamburgueria",
      categoria: "Hamburgueria",
      descricao: "Site breve com fotos e cardápio para pedido organizado.",
      imagem: "images/dunkel.png",
      url: "https://dunkel.lovable.app/",
    },
    {
      nome: "Essencia Relax Spa",
      categoria: "SPA",
      descricao: "Site institucional, fotos, feedbacks e agenda online.",
      imagem: "images/spa.png",
      url: "https://eduardopoltronieri260-del.github.io/SPA/",
    },
    {
      nome: "AURA",
      categoria: "Confecção",
      descricao: "Site com loja digital (como: Shopee, Shein).",
      imagem: "images/aura.png",
      url: "https://vogue-studio-flow.lovable.app/",
    },
  ],
};