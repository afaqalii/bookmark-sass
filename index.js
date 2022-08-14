const Humburger = document.querySelector('.menu')
const OpenMenu = document.querySelector('.nav-link')

Humburger.addEventListener('click',()=> {
     OpenMenu.classList.toggle('active')
})

let tl = gsap.timeline({defaults:{ease:'power2.out'}})

tl.from('.landing-img', {xPercent:150})
tl.from('.landing-content', {yPercent:150})
tl.from('nav', {opacity:0})
tl.from('.features', {yPercent:150})
