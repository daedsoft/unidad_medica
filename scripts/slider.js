try {
    const slides = document.querySelectorAll('.slider__item')
    const sliderIndicators = document.querySelector('.slider-indicator')
    let sliderIndicatorItem    
    let currentSlide = 0
    slides[currentSlide].style.opacity = '1'

    // *****************************************************************************
    // creación dinamica de los indicadores:
    for (let i = 0; i < slides.length; i++){
        sliderIndicatorItem = document.createElement('div')
        sliderIndicatorItem.classList.add('slider-indicator__item')
        sliderIndicators.appendChild(sliderIndicatorItem)
    }   
    // setea como 'activo' al primer indicador:
    const sliderIndicartorItems = document.querySelectorAll('.slider-indicator__item')
    sliderIndicartorItems[currentSlide].classList.add('indicator-active')

    // *****************************************************************************
    // clicks botones de desplazamiento
    const btnLeft = document.querySelector('.slider-btn__left')
    btnLeft.addEventListener('click', () => {
        if (currentSlide > 0){
            resetSlides()            
            currentSlide -= 1
            slides[currentSlide].style.opacity = '1'            
            
            resetIndicators()            
            sliderIndicartorItems[currentSlide].classList.add('indicator-active')
        }        
    })
    btnLeft.addEventListener('mouseenter', () => {clearInterval(interval)})

    const btnRight = document.querySelector('.slider-btn__right')
    btnRight.addEventListener('click', () => {
        if (currentSlide < slides.length - 1){
            resetSlides()            
            currentSlide += 1
            slides[currentSlide].style.opacity = '1' 
            
            resetIndicators()
            sliderIndicartorItems[currentSlide].classList.add('indicator-active')
        }        
    })
    btnRight.addEventListener('mouseenter', () => {clearInterval(interval)})

    // *****************************************************************************
    // click en los indicadores
    for (let j = 0; j < sliderIndicartorItems.length; j++){
        sliderIndicartorItems[j].addEventListener('click', () => {
            resetSlides()
            slides[j].style.opacity = '1'
            resetIndicators()
            sliderIndicartorItems[j].classList.add('indicator-active')
        })
    }

    // *****************************************************************************
    // resetadores: 
    const resetSlides = () => {
        for (let x = 0; x < slides.length; x++){
            slides[x].style.opacity = '0'
        }
    }
    const resetIndicators = () => {        
        for (let s = 0; s < sliderIndicartorItems.length; s++){
            sliderIndicartorItems[s].classList.remove('indicator-active')
        }
    }

    // *****************************************************************************
    // slider automatico:
    let pos = currentSlide
    let interval
    let speed = 2000
    const autoSlider = () => {
        resetSlides()
        slides[pos].style.opacity = '1'
        resetIndicators()
        sliderIndicartorItems[pos].classList.add('indicator-active')
        
        pos += 1
        if (pos == slides.length){
            pos = 0            
        }
        currentSlide = pos - 1
    }    
    interval = setInterval(autoSlider, speed)

    // *****************************************************************************
    // detiene o reactiva la reproducción automática con el hover:
    for (let i = 0; i < slides.length; i++){
        slides[i].addEventListener('mouseenter', () => {
            clearInterval(interval)
        })
        slides[i].addEventListener('mouseleave', () => {
            interval = setInterval(autoSlider, speed)
        })
    }    

} catch (error) {
    console.log(error)
}