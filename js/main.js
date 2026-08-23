// ============================================================
// NEXO — CONTATO (montagem do link do WhatsApp)
// Usa sempre NEXO_CONFIG.whatsappNumber — nunca escreva o número
// direto em outro lugar do código.
// ============================================================
function nexoLinkWhatsapp(mensagem) {
  const numero = NEXO_CONFIG.whatsappNumber;
  const texto = encodeURIComponent(mensagem || NEXO_CONFIG.whatsappMessage);
  return `https://wa.me/${numero}?text=${texto}`;
}

// ============================================================
// NEXO — TEXTOS E LINKS (injeta o conteúdo de config.js no HTML)
// ============================================================
function nexoAplicarTextos() {
  const t = NEXO_CONFIG.textos;

  document.querySelectorAll('[data-nexo="marca"]').forEach(el => el.textContent = t.marca);
  document.querySelectorAll('[data-nexo="hero-headline"]').forEach(el => el.textContent = t.heroHeadline);
  document.querySelectorAll('[data-nexo="hero-subtexto"]').forEach(el => el.textContent = t.heroSubtexto);
  document.querySelectorAll('[data-nexo="cta-projetos"]').forEach(el => el.textContent = t.ctaProjetos);
  document.querySelectorAll('[data-nexo="portfolio-eyebrow"]').forEach(el => el.textContent = t.portfolioEyebrow);
  document.querySelectorAll('[data-nexo="portfolio-titulo"]').forEach(el => el.textContent = t.portfolioTitulo);
  document.querySelectorAll('[data-nexo="posicionamento"]').forEach(el => el.textContent = t.posicionamento);
  document.querySelectorAll('[data-nexo="cta-final-titulo"]').forEach(el => el.textContent = t.ctaFinalTitulo);
  document.querySelectorAll('[data-nexo="cta-final-subtexto"]').forEach(el => el.textContent = t.ctaFinalSubtexto);
  document.querySelectorAll('[data-nexo="cta-final-botao"]').forEach(el => el.textContent = t.ctaFinalBotao);

  document.querySelectorAll('[data-nexo="whatsapp-link"]').forEach(el => {
    el.href = nexoLinkWhatsapp();
  });
  document.querySelectorAll('[data-nexo="instagram-link"]').forEach(el => {
    el.href = NEXO_CONFIG.instagramUrl;
  });

  const anoEl = document.querySelector('[data-nexo="ano"]');
  if (anoEl) anoEl.textContent = new Date().getFullYear();
}

// ============================================================
// NEXO — PORTFÓLIO (renderiza os cards a partir de config.js)
// ============================================================
function nexoIniciais(nome) {
  return nome
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(p => p[0].toUpperCase())
    .join('');
}

function nexoRenderizarProjetos() {
  const grade = document.querySelector('[data-nexo="grade-projetos"]');
  if (!grade) return;

  grade.innerHTML = NEXO_CONFIG.projetos.map((projeto) => {
    const temImagem = Boolean(projeto.imagem);
    const temUrl = Boolean(projeto.url);

    const capa = temImagem
      ? `<img src="${projeto.imagem}" alt="Capa do projeto ${projeto.nome}" loading="lazy" width="640" height="480">`
      : `<span class="card-projeto-monograma" aria-hidden="true">${nexoIniciais(projeto.nome)}</span>`;

    const link = temUrl
      ? `<a class="card-projeto-link" href="${projeto.url}" target="_blank" rel="noopener">
           Ver projeto
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10"/></svg>
         </a>`
      : `<span class="card-projeto-link desabilitado">Em breve</span>`;

    return `
      <article class="card-projeto">
        <div class="card-projeto-capa">${capa}</div>
        <div class="card-projeto-corpo">
          <p class="card-projeto-categoria">${projeto.categoria}</p>
          <h3 class="card-projeto-nome">${projeto.nome}</h3>
          <p class="card-projeto-desc">${projeto.descricao}</p>
          ${link}
        </div>
      </article>`;
  }).join('');

  nexoObservarCards();
}

// ============================================================
// NEXO — REVEAL DOS PROJETOS AO ROLAR A PÁGINA
// ============================================================
function nexoObservarCards() {
  const cards = document.querySelectorAll('.card-projeto');
  if (!('IntersectionObserver' in window)) {
    cards.forEach(c => c.classList.add('em-vista'));
    return;
  }
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada, indice) => {
      if (entrada.isIntersecting) {
        setTimeout(() => entrada.target.classList.add('em-vista'), indice * 80);
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.15 });
  cards.forEach(c => observador.observe(c));
}

// ============================================================
// NEXO — REDE DE NÓS DO HERO (assinatura visual)
// ============================================================
function nexoMontarRedeHero() {
  const svg = document.querySelector('[data-nexo="hero-rede"]');
  if (!svg) return;

  // pontos em coordenadas relativas (viewBox 0 0 400 400)
  const nos = [
    { x: 60, y: 90 }, { x: 210, y: 40 }, { x: 340, y: 120 },
    { x: 90, y: 230 }, { x: 300, y: 260 }, { x: 190, y: 340 },
  ];
  const conexoes = [[0, 1], [1, 2], [0, 3], [1, 4], [3, 5], [4, 5]];

  const ns = 'http://www.w3.org/2000/svg';
  conexoes.forEach(([a, b], i) => {
    const linha = document.createElementNS(ns, 'line');
    linha.setAttribute('x1', nos[a].x);
    linha.setAttribute('y1', nos[a].y);
    linha.setAttribute('x2', nos[b].x);
    linha.setAttribute('y2', nos[b].y);
    linha.style.animationDelay = `${0.3 + i * 0.15}s`;
    svg.appendChild(linha);
  });
  nos.forEach((no, i) => {
    const circulo = document.createElementNS(ns, 'circle');
    circulo.setAttribute('cx', no.x);
    circulo.setAttribute('cy', no.y);
    circulo.setAttribute('r', 3.5);
    circulo.style.setProperty('--atraso', `${1 + i * 0.12}s`);
    svg.appendChild(circulo);
  });
}

// ============================================================
// NEXO — INICIALIZAÇÃO
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  nexoAplicarTextos();
  nexoRenderizarProjetos();
  nexoMontarRedeHero();
});
