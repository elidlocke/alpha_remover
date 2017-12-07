
//global vars
var rNum;
var gNum;
var bNum;
var alphaNum;

var rgbIn = document.querySelectorAll(".rgbInput");
var alhpaIn = document.querySelector("#alphaInput");
var transparentSquare = document.querySelector("#transparentColor");
var opaqueSquare = document.querySelector("#opaqueColor");
var allInputs = document.querySelectorAll(".input");
var opaqueTitle = document.querySelector("#opaqueTitle");
var opaqueLabels = document.querySelectorAll(".outputRGBLabel");
var rgbOut = document.querySelectorAll(".rgbOutput");
var errors = document.querySelector("#errorHandling");

init();

function init(){
    //get the input from the RGB Fields
    getRgbInput();
    //get the input from the alpha Field
    getAlphaInput();
    //convert the RGBA value to RGB

    //write the output to the RGB values

    //display the RGBA colours
    colorSquares();
}

function getRgbInput(){
    for (var i = 0; i < rgbIn.length; i++){
        if (i === 0){
            rgbIn[i].addEventListener("change",function(){
                rNum = Math.round(Number(this.value));
            });
        }
        else if (i === 1){
            rgbIn[i].addEventListener("change",function(){
                gNum = Math.round(Number(this.value));
            });
        }
        else if (i === 2){
            rgbIn[i].addEventListener("change",function(){
                bNum = Math.round(Number(this.value));
            });
        }
    }
}

function getAlphaInput(){
    alhpaIn.addEventListener("change",function(){
        alphaNum = Number(this.value);
        alphaNum = Math.round(alphaNum*Math.pow(10,2))/Math.pow(10,2);
    })
}

function colorSquares(){
    for (var i = 0; i < allInputs.length; i++){
        allInputs[i].addEventListener("change",updateOutput);
    }
}

function updateOutput(){
    var color = "rgba(" + rNum
    + ", " + gNum + ", " + bNum + ", " + alphaNum + ")";
    if (rNum != undefined && gNum != undefined
        && bNum != undefined && alphaNum != undefined){
        validateInput();
        transparentSquare.style.backgroundColor = color;
        var outRgbNums = colorOpaque(rNum, gNum, bNum, alphaNum);
        console.log(outRgbNums);
        printNums(outRgbNums);
    }

}

function validateInput(){
    if (isNaN(rNum) || isNaN(gNum)
        || isNaN(bNum) || isNaN(alphaNum)){
        errors.textContent = "input must be a number";        
    }
    else if (rNum > 255 || gNum > 255 || bNum > 255) {
        errors.textContent = "rgb value must be 255 or less";
    }
    else if (rNum < 0 || gNum < 0 || bNum < 0) {
        errors.textContent = "rgb value must be 0 or greater";
    }
    else if (alphaNum < 0 || alphaNum > 1) {
        errors.textContent = "alpha must be between 0 and 1";
    }
    else {
        errors.textContent = "";
    }
}

/* composting formula */
function colorOpaque(r, g, b, alpha){
    var opaqueR = Math.round(alpha * r + (1 - alpha) * 255);
    var opaqueG = Math.round(alpha * g + (1 - alpha) * 255);
    var opaqueB = Math.round(alpha * b + (1 - alpha) * 255);
    var opaqueC = "rgb(" + opaqueR
    + ", " + opaqueG + ", " + opaqueB + ")";
    console.log(opaqueC);
    opaqueSquare.style.backgroundColor = opaqueC;
    return ([opaqueR, opaqueG, opaqueB]);
}

function printNums(rgbNums){
    opaqueTitle.classList.remove("outputTitleDisabled");
    for (var i = 0; i < rgbNums.length; i++){
        rgbOut[i].value = rgbNums[i];
        opaqueLabels[i].classList.remove("outputLabelDisabled");
    }
}

/*
function rgbToHex(r,g,b)
{
    var hexCombined = decimalToHex(r) + decimalToHex(g) + 
    decimalToHex(b);
    return hexCombined;
}

function decimalToHex(value) { 
  var hex = Number(value).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};
*/