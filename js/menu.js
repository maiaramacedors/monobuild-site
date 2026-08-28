const botaoHamburguer = document.getElementById('botaoHamburguer');
const iconeHamburguer = document.getElementById('iconeHamburguer');
const menuMobile = document.getElementById('menuMobile');

let menuAberto = false;

function alternarMenu() {
  menuAberto = !menuAberto;
  menuMobile.classList.toggle('aberto', menuAberto);

  // Troca o ícone de hambúrguer (☰) para X, e vice-versa
  if (menuAberto) {
    iconeHamburguer.innerHTML = `
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    `;
  } else {
    iconeHamburguer.innerHTML = `
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 6l16 0" />
      <path d="M4 12l16 0" />
      <path d="M4 18l16 0" />
    `;
  }
}

botaoHamburguer.addEventListener('click', alternarMenu);

// Fecha o menu automaticamente ao clicar em qualquer link dele
const linksMenuMobile = document.querySelectorAll('.menu-mobile-link, .menu-mobile-whatsapp');
linksMenuMobile.forEach(link => {
  link.addEventListener('click', () => {
    if (menuAberto) alternarMenu();
  });
});
