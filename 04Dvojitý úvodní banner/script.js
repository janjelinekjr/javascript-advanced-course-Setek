// vybrani prvku
const containerSlider = document.querySelector(".container-slider")
const leftSlider = document.querySelector(".left-slider")
const rightSlider = document.querySelector(".right-slider")
const arrowUp = document.querySelector(".arrow-up")
const arrowDown = document.querySelector(".arrow-down")
// pocet prvku (divu/obrazku) v prave strane
const slidesLength = rightSlider.querySelectorAll("div").length
let slideNumber = 0
// posouvani leve strany pridavanim vetsi hodnoty vh top
leftSlider.style.top = `-${(slidesLength -1) * 100}vh`

// listener pro klikani na šipky
arrowUp.addEventListener("click", function(event){
    changeSlide("up")
})

arrowDown.addEventListener("click", function(event){
    changeSlide("down")
})

// funkce pro slide
let changeSlide = (direction) => {
    const sliderHeight = containerSlider.clientHeight

    if(direction === "up"){
        slideNumber++
        if(slideNumber > slidesLength -1){
            slideNumber = 0
        }
    } else if(direction === "down"){
        slideNumber--
        if(slideNumber < 0){
            slideNumber = slidesLength - 1
        }
    }

    rightSlider.style.transform = `translateY(-${sliderHeight * slideNumber}px)`
    leftSlider.style.transform = `translateY(${slideNumber * sliderHeight}px)`
}
