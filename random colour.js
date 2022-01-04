

const btn = document.querySelector("#change")
console.log(btn)
const body = document.querySelector(".random")
const currentculor= document.querySelector(".box")
function randomColorGenerator(){
    const red= Math.floor(Math.random()*256)
    const green= Math.floor(Math.random()*256)
    const blue= Math.floor(Math.random()*256)
    const randomColour=`rgb(${red}, ${green} ,${blue})`
    return randomColour
}

btn.addEventListener("click",()=>{
    const randomColour  = randomColorGenerator();
    body.style.background =randomColour;
    currentculor.textContent=randomColour

})



