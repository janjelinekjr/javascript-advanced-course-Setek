const slides = document.querySelectorAll(".slide")

slides.forEach(function(oneSlide){
    oneSlide.addEventListener("click", function(event){
        deleteClassActive()
        oneSlide.classList.add("active")
    })
})

let deleteClassActive = () => {
    slides.forEach(function(mySlide){
        mySlide.classList.remove("active")
    })
}