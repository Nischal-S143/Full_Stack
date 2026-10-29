let randomNumber = Math.floor(Math.random() * 7) + 1;
let attempts = 0;
function checkNumber() {
    let guess = document.getElementById("userInput").value;
    let resultText = document.getElementById("result");
    if (guess === "" || guess < 1 || guess > 7) {
        resultText.innerHTML = "numbers between 1 to 7";
        resultText.style.color = "orange";
        return; 
    }
    attempts++;
    if (guess == randomNumber) {
        resultText.innerHTML = `correct in  ${attempts} attempts.`;
        resultText.style.color = "green";
    } 
    else if (guess > randomNumber) {
        resultText.innerHTML = "guessed Number is high";
        resultText.style.color = "red";
    } 
    else if (guess < randomNumber) {
        resultText.innerHTML = "guessed nuber is low try new number";
        resultText.style.color = "blue";
    }
}