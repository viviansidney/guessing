function guessNumber() {
    var randomNum = Math.floor(Math.random() * 51);
    // output for the console for debugging
    console.log(randomNum);
    //declaring a variable
    var guess;
    guess = prompt("Please enter a number between 0 and 50");
    //console.log("Your guess is: " + guess);

    if (guess < randomNum) {
        window.alert("Your guess is too low");
    }else if (guess > randomNum) {
        window.alert("Your guess is too high");
    }else if (guess == randomNum) {
        window.alert("You guessed it right!");
    }else {
        window.alert("Error")
    }
}
object.addEventListener("onclick", guessNumber);