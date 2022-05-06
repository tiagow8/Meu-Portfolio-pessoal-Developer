alert('O site está em Desenvolvimento, há varias funções indisponíveis! Dúvidas: wermeierederson@gmail.com');

//script alteracao de cores dark/light//

const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('light')
})

//script alteracao de cores dark/light//

//script abre e fecha menu mobile//
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const listMenu = document.getElementById('menu-list'); //seleciona o container do menu//
    listMenu.classList.toggle('menu__list--active'); //adiciona a classe de abertura do menu//

    const headerMobile = document.getElementById('header-mobile'); //seleciona o header//
    headerMobile.classList.toggle('header-mobile--active'); //aumenta o header para o menu caber//

}
btnMobile.addEventListener('click', toggleMenu);
//script abre e fecha menu mobile//

/*==================== REMOVE MENU MOBILE LISTA====================*/
const navLink = document.querySelectorAll('.menu__links');

function linkAction() {
  const navMenu = document.getElementById('menu-list');
  // remova o menu clicando em cada link
  navMenu.classList.toggle('menu__list--active');
}
navLink.forEach(menu => menu.addEventListener('click', linkAction));

/*==================== DIMINUI HEADER PARA TAMANHO NORMAL====================*/

const navLink2 = document.querySelectorAll('.menu__links');

function linkAction2() {
  const navMenu = document.getElementById('header-mobile');
  // remova o menu clicando em cada link
  navMenu.classList.toggle('header-mobile--active');
}
navLink2.forEach(menu => menu.addEventListener('click', linkAction2));