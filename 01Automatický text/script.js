const heading = document.querySelector("#text")
const speedInput = document.querySelector("#speed")
const text = "Automatický text stránky"

let idLetter = 1
// speed zde není ve skutečnosti rychlost ale zpoždění v milisekundách
let speed = 500 / speedInput.value

let printText = function(){
    heading.innerText = text.slice(0, idLetter)
    idLetter++

    // vyresetuje idLetter na 1 a text se opakuje
    if(idLetter > text.length){
        idLetter = 1
    }

    // spustí funkci printText se zpozdenim speed v milisekundách
    setTimeout(printText, speed)
}

printText()

speedInput.addEventListener("input", function(event){
    speed = 500 / event.target.value
})
