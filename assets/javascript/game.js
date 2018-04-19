var selectableWords = [
        "Nirvana",
        "Smashing Pumkins",
        "Weezer",
        "Foo Fighters",
        "Green Day",
        "Red Hot Chili Peppers",
        "Metallica",
        "Rage Against the Machine",
        "Blink-182",
        "Backstreet Boys",
        "The Offspring",
        "Beastie Boys",
        "Spice Girls",
        "Goo Goo Dolls",
        "Dave Matthews Band",
        "Matchbox Twenty",
        "Third Eye Blind",
        "Stone Temple Pilots",
        "Hootie and the Blowfish",
        "Tupac Shakur",
        "Dr Dre",
        "Mariah Carey",
        "Jay Z",
        "Mary J Blige",
        "Alanis Morissette",
        "Missy Elliot",
        "Sheryl Crow",
        "Blues Traveler",
    ];

const maxTries = 10;            // Maximum number of tries player has

var guessedLetters = [];        // Stores the letters the user guessed
var currentWordIndex;           // Index of the current word in the array
var guessingWord = [];          // This will be the word we actually build to match the current word
var remainingGuesses = 0;       // How many tries the player has left
var gameStarted = false;        // Flag to tell if the game has started
var hasFinished = false;        // Flag for 'press any key to try again'     
var wins = 0;                   // How many wins has the player racked up

// Reset our game-level variables
function resetGame() {
    remainingGuesses = maxTries;
    gameStarted = false;

    // Use Math.floor to round the random number down to the nearest whole.
    currentWordIndex = Math.floor(Math.random() * (selectableWords.length));

    // Clear out arrays
    guessedLetters = [];
    guessingWord = [];

    // Make sure the hangman image is cleared
    document.getElementById("hangmanImage").src = "";

    // Build the guessing word and clear it out
    for (var i = 0; i < selectableWords[currentWordIndex].length; i++) {
        guessingWord.push("_");
    }
    // Hide game over and win images/text
    document.getElementById("pressKeyTryAgain").style.cssText= "display: none";
    document.getElementById("gameover-image").style.cssText = "display: none";
    document.getElementById("youwin-image").style.cssText = "display: none";

    // Show display
    updateDisplay();
};

//  Updates the display on the HTML Page
function updateDisplay() {

    document.getElementById("totalWins").innerText = wins;
    document.getElementById("currentWord").innerText = "";
    for (var i = 0; i < guessingWord.length; i++) {
        document.getElementById("currentWord").innerText += guessingWord[i];
    }
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("guessedLetters").innerText = guessedLetters;
    if(remainingGuesses <= 0) {
        document.getElementById("gameover-image").style.cssText = "display: block";
        document.getElementById("pressKeyTryAgain").style.cssText = "display:block";
        hasFinished = true;
    }
};