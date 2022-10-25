function sliderValue(){
    var x = document.getElementById("slider").value
    console.log(x)
    document.documentElement.style.setProperty('--rotationSpeed', x)
}


let idleTimer = null
let idleState = false
const slider = document.getElementById("slide-container")

function showSlider(time){
    clearTimeout(idleTimer)
    if (idleState == true) {
        slider.classList.remove("inactive")
    }
    idleState == false;
    idleTimer = setTimeout(function(){
        slider.classList.add("inactive")
        idleState = true
    }, time)
}