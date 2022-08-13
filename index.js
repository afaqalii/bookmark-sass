const Humburger = document.querySelector('.menu')
const OpenMenu = document.querySelector('.nav-link')

Humburger.addEventListener('click',()=> {
     OpenMenu.classList.toggle('active')
})