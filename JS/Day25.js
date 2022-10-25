document.body.style.cursor = "none"

let cursor = document.createElement("div")
cursor.classList.add("cursor")
document.body.appendChild(cursor)

let follow = document.createElement("div")
follow.classList.add("follow")
document.body.appendChild(follow)

function move(obj, event) {
    obj.style = ""
    obj.style.top = event.clientY + "px"
    obj.style.left = event.clientX + "px"
}

if (cursor) {
    window.addEventListener("mousemove", function(event){
        let e = event
        let t = e.target
        let f = follow
        let c = cursor

        if (t.tagName == "A") {
            c.style.backgroundColor = "transparent"

            f.style.top = t.offsetTop + "px"
            f.style.left = t.offsetLeft + "px"
            f.style.width = t.offsetWidth + "px"
            f.style.height = t.offsetHeight + "px"

            f.classList.add("on-focus")
        } else {
            move(c, e)
            move(f, e)
            f.classList.remove("on-focus")
        }
    })
}