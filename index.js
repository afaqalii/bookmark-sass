const Humburger = document.querySelector('.menu')
const OpenMenu = document.querySelector('.nav-link')

Humburger.addEventListener('click',()=> {
     OpenMenu.classList.toggle('active')
})
gsap.registerPlugin(ScrollTrigger)

gsap.from('.features,.features-items',{
     scrollTrigger: {
          trigger:'.features,.features-items',
          start:"-200% bottom",
          toggleActions:"restart",
     },
     xPercent:-150
})
gsap.from('.features-detail',{
     scrollTrigger: {
         trigger:".features-detail",
         start:'5% bottom',
         toggleActions:'restart'        
     },
     xPercent:-150
})
gsap.from('.downlaod-section-content',{
     scrollTrigger: {
         trigger:".downlaod-section-content",
         start:'5% bottom',
         toggleActions:'restart'        
     },
     xPercent:-150
})
gsap.from('.download-section-cards',{
     scrollTrigger: {
         trigger:".download-section-cards",
         start:'5% bottom',
         toggleActions:'restart'        
     },
     xPercent:-150
})
gsap.from('.faqs',{
     scrollTrigger: {
         trigger:".faqs",
         start:'5% bottom',
         toggleActions:'restart'        
     },
     xPercent:-150
})
gsap.from('.faqs-content',{
     scrollTrigger: {
         trigger:".faqs-content",
         start:'5% bottom',
         toggleActions:'restart'        
     },
     xPercent:-150
})

let tl = gsap.timeline({defaults:{ease:'power2.out'}})

tl.from('.landing-img', {xPercent:150})
tl.from('.landing-content', {yPercent:150})
tl.from('nav', {opacity:0})
tl.from('.features', {yPercent:150})
