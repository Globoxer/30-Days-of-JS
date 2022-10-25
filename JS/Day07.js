var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue, resultTypeValue;

//listener
input.addEventListener("keyup", myResult)
inputType.addEventListener("change", myResult)
resultType.addEventListener("change", myResult)

inputTypeValue = inputType.value
resultTypeValue = resultType.value

function myResult(){
    inputTypeValue = inputType.value
    resultTypeValue = resultType.value

    //Meter is Input Unit
    if(inputTypeValue === "meter" && resultTypeValue === "kilometer"){
        result.value = Number(input.value) * 0.001;
    }
    else if(inputTypeValue === "meter" && resultTypeValue === "centimeter"){
        result.value = Number(input.value) * 100;
    }
    else if(inputTypeValue === "meter" && resultTypeValue === "meter"){
        result.value = input.value;
    }
    else if(inputTypeValue === "meter" && resultTypeValue === "inch"){
        result.value = Number(input.value) * 39.3701;
    }
    else if(inputTypeValue === "meter" && resultTypeValue === "foot"){
        result.value = Number(input.value) * 3.28084;
    }
    else if(inputTypeValue === "meter" && resultTypeValue === "mile"){
        result.value = Number(input.value) * 0.000621371;
    }

    //Kilometer is Input Unit
    if(inputTypeValue === "kilometer" && resultTypeValue === "meter"){
        result.value = Number(input.value) * 1000;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue === "centimeter"){
        result.value = Number(input.value) * 100000;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue === "metkilometerer"){
        result.value = input.value;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue === "inch"){
        result.value = Number(input.value) * 39370.1;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue === "foot"){
        result.value = Number(input.value) * 3280.84;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue === "mile"){
        result.value = Number(input.value) * 0.621371;
    }

    //Centimeter is Input Unit
    if(inputTypeValue === "centimeter" && resultTypeValue === "kilometer"){
        result.value = Number(input.value) * 0.00001;
    }
    else if(inputTypeValue === "centimeter" && resultTypeValue === "meter"){
        result.value = Number(input.value) * 0.01;
    }
    else if(inputTypeValue === "centimeter" && resultTypeValue === "centimeter"){
        result.value = input.value;
    }
    else if(inputTypeValue === "centimeter" && resultTypeValue === "inch"){
        result.value = Number(input.value) * 0.393701;
    }
    else if(inputTypeValue === "centimeter" && resultTypeValue === "foot"){
        result.value = Number(input.value) * 0.0328084;
    }
    else if(inputTypeValue === "centimeter" && resultTypeValue === "mile"){
        result.value = Number(input.value) * 0.00000621371;
    }

    //Inch is Input Unit
    if(inputTypeValue === "inch" && resultTypeValue === "kilometer"){
        result.value = Number(input.value) * 0.0000254;
    }
    else if(inputTypeValue === "inch" && resultTypeValue === "meter"){
        result.value = Number(input.value) * 0.0254;
    }
    else if(inputTypeValue === "inch" && resultTypeValue === "centimeter"){
        result.value = Number(input.value) * 2.54;
    }
    else if(inputTypeValue === "inch" && resultTypeValue === "mile"){
        result.value = Number(input.value) * 0.0000157828;
    }
    else if(inputTypeValue === "inch" && resultTypeValue === "foot"){
        result.value = Number(input.value) * 0.0833333;
    }
    else if(inputTypeValue === "inch" && resultTypeValue === "inch"){
        result.value = input.value;
    }

    //Foot is Input Unit
    if(inputTypeValue === "foot" && resultTypeValue === "kilometer"){
        result.value = Number(input.value) * 0.0003049;
    }
    else if(inputTypeValue === "foot" && resultTypeValue === "meter"){
        result.value = Number(input.value) * 0.3049;
    }
    else if(inputTypeValue === "foot" && resultTypeValue === "centimeter"){
        result.value = Number(input.value) * 30.48;
    }
    else if(inputTypeValue === "foot" && resultTypeValue === "mile"){
        result.value = Number(input.value) * 0.000189394;
    }
    else if(inputTypeValue === "foot" && resultTypeValue === "inch"){
        result.value = Number(input.value) * 12;
    }
    else if(inputTypeValue === "foot" && resultTypeValue === "foot"){
        result.value = input.value;
    }

    //Mile is Input Unit
    if(inputTypeValue === "mile" && resultTypeValue === "kilometer"){
        result.value = Number(input.value) * 1.60934;
    }
    else if(inputTypeValue === "mile" && resultTypeValue === "meter"){
        result.value = Number(input.value) * 1609.34;
    }
    else if(inputTypeValue === "mile" && resultTypeValue === "centimeter"){
        result.value = Number(inpumilet.value) * 160934;
    }
    else if(inputTypeValue === "mile" && resultTypeValue === "foot"){
        result.value = Number(input.value) * 5280;
    }
    else if(inputTypeValue === "mile" && resultTypeValue === "inch"){
        result.value = Number(input.value) * 63360;
    }
    else if(inputTypeValue === "mile" && resultTypeValue === "mile"){
        result.value = input.value;
    }
}