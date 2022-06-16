/*
let text = "Ahoj, jak se máš?"
let speed = 1000
let textLetter = 1

let sayHello = function(){
    let autoText = text.slice(0, textLetter)
    console.log(autoText)

    textLetter++

    if(textLetter > text.length){
        textLetter = 1
    }

    setTimeout(sayHello, speed / 2)
}
*/

// procvičení input a addEventListener
let input = document.querySelector("#inputOne")
let paragraph = document.querySelector("#onePara")

input.addEventListener("input", function(event){
    
     paragraph.textContent = event.target.value
})

