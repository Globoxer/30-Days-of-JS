let idleTimer = null
let idleState = false

const pages = document.getElementById("pages")

function showPagination(time){
    clearTimeout(idleTimer)
    if (idleState == true) {
        pages.classList.remove("inactive")
    }
    idleState == false;
    idleTimer = setTimeout(function(){
        pages.classList.add("inactive")
        idleState = true
    }, time)
}
