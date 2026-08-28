// Faz um carrossel rolar automaticamente, item por item, voltando ao início ao chegar no fim.
// Se o container não tiver overflow (ex: desktop, onde tudo aparece no grid),
// scrollBy simplesmente não faz nada - então é seguro chamar isso sempre.
function iniciarCarrosselAutomatico(idDoTrack, intervaloMs) {
  const track = document.getElementById(idDoTrack);
  if (!track) return;

  setInterval(() => {
    if (track.scrollWidth <= track.clientWidth) return;

    const primeiroItem = track.children[0];
    const larguraItem = primeiroItem.getBoundingClientRect().width + 24;

    const chegouNoFim =
      track.scrollLeft + track.clientWidth >= track.scrollWidth - 10;

    if (chegouNoFim) {
      track.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: larguraItem, behavior: 'smooth' });
    }
  }, intervaloMs);
}

iniciarCarrosselAutomatico('servicosCarrosselTrack', 4000);
iniciarCarrosselAutomatico('sistemasCarrosselTrack', 5000);
iniciarCarrosselAutomatico('processoCarrosselTrack', 4500);

// SETAS DO CARROSSEL DE SERVIÇOS
const servicosTrack = document.getElementById('servicosCarrosselTrack');
const servicosSetaEsquerda = document.getElementById('servicosSetaEsquerda');
const servicosSetaDireita = document.getElementById('servicosSetaDireita');

if (servicosTrack && servicosSetaEsquerda && servicosSetaDireita) {
  servicosSetaDireita.addEventListener('click', () => {
    const largura =
      servicosTrack.children[0].getBoundingClientRect().width + 24;
    servicosTrack.scrollBy({ left: largura, behavior: 'smooth' });
  });

  servicosSetaEsquerda.addEventListener('click', () => {
    const largura =
      servicosTrack.children[0].getBoundingClientRect().width + 24;
    servicosTrack.scrollBy({ left: -largura, behavior: 'smooth' });
  });
}

// CARROSSEL DO HERO COM BOLINHAS
const heroTrack = document.getElementById('heroCarrosselTrack');
const heroDots = document.querySelectorAll('.hero-dot');

if (heroTrack && heroDots.length > 0) {
  // Clique numa bolinha leva direto pra aquela foto
  heroDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const indice = parseInt(dot.dataset.index);
      const largura = heroTrack.clientWidth;
      heroTrack.scrollTo({ left: largura * indice, behavior: 'smooth' });
    });
  });

  // Ao rolar/arrastar manualmente, atualiza qual bolinha fica destacada
  heroTrack.addEventListener('scroll', () => {
    const indiceAtual = Math.round(heroTrack.scrollLeft / heroTrack.clientWidth);
    heroDots.forEach((dot, i) => {
      dot.classList.toggle('ativo', i === indiceAtual);
    });
  });

  // Avança automaticamente a cada 5 segundos
  setInterval(() => {
    const larguraItem = heroTrack.clientWidth;
    const indiceAtual = Math.round(heroTrack.scrollLeft / larguraItem);
    const proximoIndice = (indiceAtual + 1) % heroDots.length;
    heroTrack.scrollTo({ left: larguraItem * proximoIndice, behavior: 'smooth' });
  }, 5000);
}


