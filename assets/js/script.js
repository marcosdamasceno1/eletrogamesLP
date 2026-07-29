/* =========================================================================
   ELETROGAMES - COMPORTAMENTOS DO SITE

   Este arquivo cuida de tudo que se mexe. Ele e opcional: se falhar ou for
   bloqueado, o site continua legivel, navegavel e com todos os links
   funcionando. Nenhum conteudo depende dele para aparecer.

   INDICE
   01. Menu do celular
   02. Sombra no cabecalho ao rolar
   03. Barra de progresso da leitura
   04. Revelacao dos blocos ao rolar
   05. Contador do numero 28
   06. Efeitos de ponteiro (ima, inclinacao, holofote)
   07. Ano do rodape
   ========================================================================= */

(function () {
  'use strict';

  var reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ponteiroFino = window.matchMedia('(pointer: fine)').matches;


  /* =======================================================================
     01. MENU DO CELULAR
     O botao hamburguer abre e fecha a lista de links. Fecha com a tecla Esc
     e ao clicar em qualquer link.
     ======================================================================= */
  var botaoMenu = document.querySelector('[data-menu-botao]');
  var menuCelular = document.querySelector('[data-menu-celular]');

  if (botaoMenu && menuCelular) {
    var alternarMenu = function (abrir) {
      botaoMenu.setAttribute('aria-expanded', String(abrir));
      botaoMenu.setAttribute('aria-label', abrir ? 'Fechar menu' : 'Abrir menu');
      menuCelular.classList.toggle('aberto', abrir);
      document.body.style.overflow = abrir ? 'hidden' : '';
    };

    botaoMenu.addEventListener('click', function () {
      alternarMenu(botaoMenu.getAttribute('aria-expanded') !== 'true');
    });

    document.addEventListener('keydown', function (evento) {
      if (evento.key === 'Escape') alternarMenu(false);
    });

    menuCelular.addEventListener('click', function (evento) {
      if (evento.target.closest('a')) alternarMenu(false);
    });
  }


  /* =======================================================================
     02. SOMBRA NO CABECALHO AO ROLAR
     ======================================================================= */
  var cabecalho = document.querySelector('[data-cabecalho]');
  var barraProgresso = document.querySelector('[data-progresso]');

  var aoRolar = function () {
    if (cabecalho) {
      cabecalho.classList.toggle('rolou', window.scrollY > 12);
    }

    /* 03. BARRA DE PROGRESSO: quanto da pagina ja foi lido */
    if (barraProgresso) {
      var altura = document.documentElement.scrollHeight - window.innerHeight;
      var lido = altura > 0 ? window.scrollY / altura : 0;
      barraProgresso.style.transform = 'scaleX(' + lido + ')';
    }
  };

  /* Um unico ouvinte de rolagem para a pagina inteira, limitado a um quadro
     por vez, para nao travar a rolagem no celular. */
  var aguardandoQuadro = false;
  window.addEventListener('scroll', function () {
    if (aguardandoQuadro) return;
    aguardandoQuadro = true;
    requestAnimationFrame(function () {
      aoRolar();
      aguardandoQuadro = false;
    });
  }, { passive: true });
  aoRolar();


  /* =======================================================================
     04. REVELACAO DOS BLOCOS AO ROLAR
     Cada elemento com data-revelar aparece quando entra na tela. O atraso
     de cada um vem do proprio HTML, pelo estilo --atraso.
     ======================================================================= */
  var blocos = document.querySelectorAll('[data-revelar]');

  if (!('IntersectionObserver' in window) || reduzirMovimento) {
    /* Navegador antigo ou movimento reduzido: mostra tudo de uma vez */
    blocos.forEach(function (bloco) {
      bloco.classList.add('visivel');
    });
  } else {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        entrada.target.classList.add('visivel');
        observador.unobserve(entrada.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });

    blocos.forEach(function (bloco) {
      observador.observe(bloco);
    });
  }


  /* =======================================================================
     05. CONTADOR DO NUMERO 28
     Sobe de zero ate o valor quando entra na tela. Roda uma vez so.
     ======================================================================= */
  var contador = document.querySelector('[data-contador]');

  if (contador && !reduzirMovimento && 'IntersectionObserver' in window) {
    var destino = parseInt(contador.getAttribute('data-contador'), 10);
    var duracao = 1100;

    var observadorContador = new IntersectionObserver(function (entradas) {
      if (!entradas[0].isIntersecting) return;
      observadorContador.disconnect();

      var inicio = performance.now();
      var passo = function (agora) {
        var t = Math.min((agora - inicio) / duracao, 1);
        /* desacelera no fim, como um mostrador assentando */
        contador.textContent = String(Math.round(destino * (1 - Math.pow(1 - t, 3))));
        if (t < 1) requestAnimationFrame(passo);
      };
      requestAnimationFrame(passo);
    }, { threshold: 0.5 });

    observadorContador.observe(contador);
  }


  /* =======================================================================
     06. EFEITOS DE PONTEIRO
     So entram em mouse (nunca no toque) e nunca com movimento reduzido.
     Um unico ouvinte cuida dos tres efeitos.
     ======================================================================= */
  if (ponteiroFino && !reduzirMovimento) {
    var imaAtual = null;
    var cartaoAtual = null;

    window.addEventListener('pointermove', function (evento) {
      var alvo = evento.target;

      /* --- Ima: o botao persegue o ponteiro de leve --- */
      var ima = alvo.closest ? alvo.closest('[data-ima]') : null;
      if (imaAtual && imaAtual !== ima) {
        imaAtual.classList.remove('puxando');
        imaAtual.style.removeProperty('--desloc-x');
        imaAtual.style.removeProperty('--desloc-y');
      }
      imaAtual = ima;
      if (ima) {
        var caixaIma = ima.getBoundingClientRect();
        var forca = parseFloat(ima.getAttribute('data-ima')) || 0.2;
        ima.classList.add('puxando');
        ima.style.setProperty('--desloc-x', (evento.clientX - (caixaIma.left + caixaIma.width / 2)) * forca + 'px');
        ima.style.setProperty('--desloc-y', (evento.clientY - (caixaIma.top + caixaIma.height / 2)) * forca + 'px');
      }

      /* --- Holofote: a moldura acende onde o ponteiro esta --- */
      var holofote = alvo.closest ? alvo.closest('[data-holofote]') : null;
      if (holofote) {
        var caixaLuz = holofote.getBoundingClientRect();
        holofote.style.setProperty('--pos-x', (evento.clientX - caixaLuz.left) + 'px');
        holofote.style.setProperty('--pos-y', (evento.clientY - caixaLuz.top) + 'px');
      }

      /* --- Inclinacao do cartao --- */
      var cartao = alvo.closest ? alvo.closest('[data-inclinar]') : null;
      if (cartaoAtual && cartaoAtual !== cartao) {
        cartaoAtual.classList.remove('inclinando');
        cartaoAtual.style.removeProperty('--giro-x');
        cartaoAtual.style.removeProperty('--giro-y');
      }
      cartaoAtual = cartao;
      if (cartao) {
        var caixaCartao = cartao.getBoundingClientRect();
        var px = (evento.clientX - caixaCartao.left) / caixaCartao.width - 0.5;
        var py = (evento.clientY - caixaCartao.top) / caixaCartao.height - 0.5;
        cartao.classList.add('inclinando');
        cartao.style.setProperty('--giro-y', px * 7 + 'deg');
        cartao.style.setProperty('--giro-x', -py * 7 + 'deg');
      }
    }, { passive: true });
  }


  /* =======================================================================
     07. ANO DO RODAPE
     Evita que o aviso de direitos autorais fique desatualizado sozinho.
     ======================================================================= */
  var ano = document.querySelector('[data-ano]');
  if (ano) {
    ano.textContent = String(new Date().getFullYear());
  }
})();
