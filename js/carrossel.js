// CARROSSEL DO HERO
const heroTrack = document.getElementById('heroCarrosselTrack');
const heroSetaEsquerda = document.getElementById('heroSetaEsquerda');
const heroSetaDireita = document.getElementById('heroSetaDireita');

heroSetaDireita.addEventListener('click', () => {
  const largura = heroTrack.clientWidth;
  heroTrack.scrollBy({ left: largura, behavior: 'smooth' });
});

heroSetaEsquerda.addEventListener('click', () => {
  const largura = heroTrack.clientWidth;
  heroTrack.scrollBy({ left: -largura, behavior: 'smooth' });
});
