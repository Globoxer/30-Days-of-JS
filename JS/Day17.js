const colorInput = document.getElementById("color")

colorInput.addEventListener("input", () =>{
    const colorCode = document.getElementById("color").value
    document.getElementsByTagName("body")[0].style.backgroundColor = colorCode
    document.getElementsByTagName("label")[0].style.backgroundColor = colorCode
    console.log("The color you picked: " + colorCode)
})

//Doesn't work. Color Picker will always appear in the top left corner :/

/* let colorPickerInputs = document.querySelectorAll('input[type="color"]')
if (colorPickerInputs){
    colorPickerInputs[0].setAttribute("style", "position: absolute; top: 50px; left: 50px;")
} */