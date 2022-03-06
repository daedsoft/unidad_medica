const mobileMenu = document.querySelector('.mobile-menu')
const mobileMenuBody = document.querySelector('.nav-bar-mobile__body')

mobileMenu.addEventListener('click', () => {
    mobileMenuBody.classList.toggle('hidden')
})

// scrollAnim uso:
ScrollReveal().reveal('.nav-bar', {
    origin: 'top',    
    interval: 50,
    duration: 1000,
    distance: '150%'
})

ScrollReveal().reveal('.service-card', {
    origin: 'bottom',    
    interval: 50,
    duration: 2000,
    distance: '550%'
})

ScrollReveal().reveal('.vendors', {
    origin: 'bottom',    
    interval: 50,
    duration: 2000,
    distance: '50%'
})

ScrollReveal().reveal('.us-img', {
    origin: 'bottom',    
    interval: 50,
    duration: 2000,
    distance: '550%'
})

ScrollReveal().reveal('.us-profile', {
    origin: 'bottom',    
    interval: 50,
    duration: 2000,
    distance: '50%'
})

ScrollReveal().reveal('.rounded-img', {
    origin: 'bottom',    
    interval: 50,
    duration: 2000,
    distance: '25%'
})

ScrollReveal().reveal('.card-corp', {
    origin: 'bottom',    
    interval: 50,
    duration: 2000,
    distance: '100%'
})

ScrollReveal().reveal('.post', {
    origin: 'bottom',    
    interval: 50,
    duration: 2000,
    distance: '100%'
})

ScrollReveal().reveal('.contact', {
    origin: 'bottom',    
    interval: 50,
    duration: 2000,
    distance: '40%'
})

ScrollReveal().reveal('.form-web', {
    origin: 'bottom',    
    interval: 50,
    duration: 2000,
    distance: '40%'
})