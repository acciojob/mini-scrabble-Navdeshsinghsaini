//your code here
let evaluatedText = document.getElementById("evaluatedText");
let letterCount = document.getElementById("letterCount");

evaluatedText.addEventListener("input",calculate); 
 
function calculate() {
    let word = evaluatedText.value;
    let wordLength = word.length;
    letterCount.innerHTML = wordLength;
}
