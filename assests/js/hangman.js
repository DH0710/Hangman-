let guessWord = [
    "wolverine",
    "marvel",
    "spiderman",
    "gambit",
    "apocolypse",
    "storm",
    "rogue",
    "iceman",
    "avengers",
    "xmen",
    "eternals",
    "deadpool"
]

let answer = "";
let maxWrong = 3;
let mistakes = 0;
let guessed = [];

function randomWord() {
    answer = guessWord[Math.floor(Math.random() * guessWord.length)];
}

function generateButtons() {
    let buttonsHTML = "abcdefghijklmnopqrstuvwxyz".split("").map(letter =>
        `
        <button
         class="btn btn-lg btn-primary m-2"
         id= ` + letter + `
         onClick="handleGuess("` + letter + `")"
         >

        `+ letter + `
         </button>

         `).join("");

    document.getElementById("keyboard").innerHTML = buttonsHTML;
}

generateButtons();
randomWord();