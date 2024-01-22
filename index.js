// Seleciona os itens clicado
var menuItem = document.querySelectorAll('.item-menu')

// Expandir o menu

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function () {
    menuSide.classList.toggle('expandir')
})

document.addEventListener('click', function (event) {
    if (!event.target.matches('.menu-lateral, .menu-lateral *')) {
        menuSide.classList.remove('expandir');
    }
});


function selectLink() {
    menuItem.forEach((item) =>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item) =>
    item.addEventListener('click', selectLink)
)




