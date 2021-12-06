var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/minion.json"
console.log(url);

function clickHandler() {
    outputDiv.innerText = " " + txtInput.value; // didnt understand innerText
};

btnTranslate.addEventListener("click", clickHandler)