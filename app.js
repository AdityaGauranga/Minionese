var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

function clickHandler() {
    outputDiv.innerText = "sdfhksjdfhsf " + txtInput.value; // didnt understand innerText
};

btnTranslate.addEventListener("click", clickHandler)