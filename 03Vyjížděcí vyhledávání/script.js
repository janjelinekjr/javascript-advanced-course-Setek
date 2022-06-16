const input = document.querySelector(".input")
const divSearch = document.querySelector(".search")
const button = document.querySelector(".btn")

button.addEventListener("click", function(event){
    divSearch.classList.toggle("active")
    // focus() zajistí možnost hned psat po kliknutí
    input.focus()
})