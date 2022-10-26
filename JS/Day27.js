var snekTable = document.querySelector(".snekTable")
var boxes = document.getElementsByClassName("box")
var modul = document.querySelector(".modul")
var start = document.querySelector(".start")

var table = {
    rowsCols: 21,
    boxes: 21*21
}

var snek = {
    direction: "right",
    position: [[6,10], [7,10], [8,10], [9,10], [10,10]],
    interval: 200,
    food: 0,
    score: 0,
    final: 0,
    time: 0,
    canTurn: 0,
    init: function(){
        snek.direction = "right"
        snek.position = [[6,10], [7,10], [8,10], [9,10], [10,10]]
        snek.interval = 200
        snek.food = 0
        snek.score = 0
        snek.time = 0
        snek.canTurn = 0
        snekTable.innerHTML = ""
        tableCreation()
    }
}

snek.init()

start.addEventListener("click", startsnek)

document.addEventListener("keydown", function(e){
    if (e.keyCode === 13 && snek.time === 0){
        startsnek()
    }
})

function startsnek(){
    modul.classList.add("hidden")
    snek.time = 1
    rendersnek()
    randomFood()
    setInt = setInterval(function(){
        move()
    }, snek.interval)
}

function stopp(){
    clearInterval(setInt)
    snek.final = snek.score
    start.querySelector("span").innerHTML = snek.final + " Points!"
    setTimeout(function(){
        start.querySelector("span").innerHTML = "Play snek"
    }, 1500)
    snek.init()
    modul.classList.remove("hidden")
}

function move(){
    hitFood()
    hitBorder()
    hitsnek()
    updatePositions()
    rendersnek()
    document.addEventListener("keydown", turn)
    snek.canTurn = 1
}

function updatePositions(){
    boxes[snek.position[0][0] + snek.position[0][1] * table.rowsCols].classList.remove("snek")
    snek.position.shift()
    var head = snek.position[snek.position.length -1]
    switch (snek.direction){
        case "left":
            snek.position.push([head[0] - 1, head[1]]);
            break;
        case "up":
            snek.position.push([head[0], head[1] - 1]);
            break;
        case "right":
            snek.position.push([head[0] + 1, head[1]]);
            break;
        case "down":
            snek.position.push([head[0], head[1] + 1]);
            break;
        default:
            console.log("no direction!")
    }
}

function hitBorder(){
    var headPos = snek.position.length-1
    if (((snek.position[headPos][0] === table.rowsCols-1) && (snek.direction === "right")) ||
        ((snek.position[headPos][0] === 0) && (snek.direction === "left")) ||
        ((snek.position[headPos][1] === table.rowsCols-1) && (snek.direction === "down")) ||
        ((snek.position[headPos][1] === 0) && (snek.direction === "up"))) 
        {
            stopp()
        }
}

function hitsnek(){
    var headPos = snek.position.length-1
    for (var i = 0; i<headPos; i++) {
        if (snek.position[headPos].toString() === snek.position[i].toString()) {
            stopp()
        }
    }
}

function hitFood(){
    var head = snek.position[snek.position.length - 1]
    var tail = snek.position[0]
    if (head.toString() === foodPos.toString()) {
        boxes[random].classList.remove("food")
        snek.position.unshift(tail)
        randomFood()
        snek.food++
        snek.score += snek.food
        scoreElt.innerHTML = snek.score + " pts"
        clearInterval(setInt)
        snek.interval = snek.interval - snek.interval/40;
        setInt = setInterval(function() {
            move()
        }, snek.interval)
    }
}

function randomFood(){
    var randomX = Math.floor(Math.random() * table.rowsCols)
    var randomY = Math.floor(Math.random() * table.rowsCols)
    random = randomX + randomY *table.rowsCols
    while (boxes[random].classList.contains("snek")){
        randomX = Math.floor(Math.random() * table.rowsCols)
        randomY = Math.floor(Math.random() * table.rowsCols)
        random = randomX + randomY * table.rowsCols
    }
    boxes[random].classList.add("food")
    foodPos = [randomX, randomY]
}

function rendersnek(){
    for (var i = 0; i<snek.position.length; i++){
        boxes[snek.position[i][0] + snek.position[i][1] * table.rowsCols].classList.add("snek")
    }
}

function turn(e){
    if (snek.canTurn) {
        switch (e.keyCode) {
            case 13:
                break;
            case 37:
                if (snek.direction === "right") return
                snek.direction = "left"
                break;
            case 38:
                if (snek.direction === "down") return
                snek.direction = "up"
                break;
            case 39:
                if (snek.direction === "left") return
                snek.direction = "right"
                break;
            case 40:
                if (snek.direction === "up") return
                snek.direction = "down"
                break;
            default:
                console.log("wrong key")
        }
        snek.canTurn = 0
    }
}

function tableCreation(){
    if (snekTable.innerHTML === ""){
        for (var i = 0; i<table.boxes; i++){
            var divElt = document.createElement("div")
            divElt.classList.add("box")
            snekTable.appendChild(divElt)
        }
        var statusElt = document.createElement("div")
        statusElt.classList.add("status")
        snekTable.appendChild(statusElt)
        scoreElt = document.createElement("span")
        scoreElt.classList.add("score")
        scoreElt.innerHTML = snek.score + " pts"
        statusElt.appendChild(scoreElt)
    }
}

//touch Controls - WIP

// $("document").ready(function(){
//     $("body")
//         .swipeDetector()
//         .on("swipeLeft.sd swipeRight.sd swipeUp.sd swipeDown.sd", function(event){
//             if(event.type === "swipeLeft"){
//                 if(snek.direction== "right") return
//                 snek.direction = "left"
//             } else if(event.type === "swipeRight"){
//                 if(snek.direction== "left") return
//                 snek.direction = "right"
//             } else if (event.type === "swipeUp"){
//                 if(snek.direction== "down") return
//                 snek.direction = "up"
//             } else if (event.type === "swipeDown"){
//                 if(snek.direction== "up") return
//                 snek.direction = "down"
//             }
//             snek.canTurn = 0
//         })
// })

// (function($) {
//     $.fn.swipeDetector = function(options) {
//         States: 0 - no swipe, 1 - swipe started, 2 - swipe released
//         var swipeState = 0;
//         Coordinates when swipe started
//         var startX = 0;
//         var startY = 0;
//         Distance of swipe
//         var pixelOffsetX = 0;
//         var pixelOffsetY = 0;
//         Target element which should detect swipes.
//         var swipeTarget = this;
//         var defaultSettings = {
//         Amount of pixels, when swipe don't count.
//         swipeThreshold: 30,
//         Flag that indicates that plugin should react only on touch events.
//         Not on mouse events too.
//         useOnlyTouch: true
//     };

//     Initializer
//     (function init() {
//         options = $.extend(defaultSettings, options);
//         Support touch and mouse as well.
//         swipeTarget.on("mousedown touchstart", swipeStart);
//         $("html").on("mouseup touchend", swipeEnd);
//         $("html").on("mousemove touchmove", swiping);
//     })();

//     function swipeStart(event) {
//         if (options.useOnlyTouch && !event.originalEvent.touches) return;

//         if (event.originalEvent.touches) event = event.originalEvent.touches[0];

//         if (swipeState === 0) {
//             swipeState = 1;
//             startX = event.clientX;
//             startY = event.clientY;
//         }
//     }

//     function swipeEnd(event) {
//         if (swipeState === 2) {
//             swipeState = 0;

//             if (
//                 Math.abs(pixelOffsetX) > Math.abs(pixelOffsetY) &&
//                 Math.abs(pixelOffsetX) > options.swipeThreshold
//                 ) {
//             Horizontal Swipe
//                     if (pixelOffsetX < 0) {
//                         swipeTarget.trigger($.Event("swipeLeft.sd"));
//                     } else {
//                         swipeTarget.trigger($.Event("swipeRight.sd"));
//                     }
//                 } else if (Math.abs(pixelOffsetY) > options.swipeThreshold) {
//             Vertical swipe
//                     if (pixelOffsetY < 0) {
//                         swipeTarget.trigger($.Event("swipeUp.sd"));
//                     } else {
//                         swipeTarget.trigger($.Event("swipeDown.sd"));
//                     }
//                 }
//         }
//     }

//     function swiping(event) {
//         If swipe don't occuring, do nothing.
//         if (swipeState !== 1) return;

//         if (event.originalEvent.touches) {
//             event = event.originalEvent.touches[0];
//         }

//         var swipeOffsetX = event.clientX - startX;
//         var swipeOffsetY = event.clientY - startY;

//         if (
//             Math.abs(swipeOffsetX) > options.swipeThreshold ||
//             Math.abs(swipeOffsetY) > options.swipeThreshold
//             ) {
//                 swipeState = 2;
//                 pixelOffsetX = swipeOffsetX;
//                 pixelOffsetY = swipeOffsetY;
//             }
//     }

//     return swipeTarget; // Return element available for chaining.
//     };
// })(jQuery);

// function preventDefault(e){e.preventDefault();}
// function disableScroll(){document.body.addEventListener('touchmove', preventDefault, {passive: false})}
// function enableScroll(){document.body.removeEventListener('touchmove', preventDefault, {passive: false})}
// disableScroll()