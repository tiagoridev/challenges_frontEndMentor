// let teste = document.querySelector('#container-resume')
// console.log(teste)
const btnOpen = document.querySelector('#btn-menu-open')
const btnClose = document.querySelector('#btn-menu-close')
const closeMenu = document.querySelector('#menu-mobile')
const openMenu = document.querySelector('.active')

btnOpen.addEventListener('click', () =>{
    openMenu.classList.remove('active');
    // closeMenu.style.animation = 'openMenu .3s reverse';

})

btnClose.addEventListener('click', () =>{
    openMenu.classList.add('active');    
})

/*Pegar o botão de abrir menu e apenas trocar o icone de fechar
Não colocar 2 botões e sim alternar img entre eles e comando.*/