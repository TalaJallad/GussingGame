'use strict';
var userName = prompt("What is your name?")
alert("Welcome " + userName)

alert("let's start the quiz!")

var totalScore = 0

var statementOne = prompt("I graduated university in 2017. (yes/no)")
function questOne() {

    if (statementOne.toLowerCase() === "yes") {
        //console.log ("You are correct!")
        alert("You are correct!");
        totalScore++
    } else if (statementOne.toLowerCase() === "no") {
        //console.log ("You are incorrect :(")
        alert("You are incorrect :(")
    } else {
        alert("Invalid Entry")
    }
}


var statementTwo = prompt("I enjoy watching movies. (yes/no)")
function questTwo() {
    if (statementTwo.toLowerCase() === "yes") {
        //console.log ("You are correct!")
        alert("You are correct!");
        totalScore++
    } else {
        //console.log ("You are incorrect :(")
        alert("You are incorrect :(")
    }
}

var statementThree = prompt("I want to work as a software developer. (yes/no)")
function questThree() {
    if (statementThree.toLowerCase() === "yes") {
        //console.log ("You are correct!")
        alert("You are correct!");
        totalScore++
    } else if (statementThree.toLowerCase() === "no") {
        //console.log ("You are incorrect :(")
        alert("You are incorrect :(")
    } else {
        alert("Invalid Entry")
    }
}


var statementFour = prompt("I am 20 year old. (yes/no)")
function questFour() {
    if (statementFour.toLowerCase() === "no") {
        //console.log ("You are correct!")
        alert("You are correct!");
        totalScore++
    } else {
        //console.log ("You are incorrect :(")
        alert("You are incorrect :(")
    }
}

var statementFive = prompt(" I have been a team leader.(yes/no)")
function questFive() {
    if (statementFive.toLowerCase() === "yes") {
        //console.log ("You are correct!")
        alert("You are correct!");
        totalScore++
    } else {
        //console.log ("You are incorrect :(")
        alert("You are incorrect :(")
    }
}

var statementSix = prompt("Guess how many movies I have watched! You have 4 guesses! (Enter a number)");
console.log(statementSix)
function questSix() {
    for (var i = 1; i < 4; i++) {
        if (statementSix === "70") {
            alert("You are correct!");
            totalScore++;
            break;
        } else {
            if (statementSix < 70) {
                alert("too low")
            } else if (statementSix > 70) {
                alert("too high")
            }
            statementSix = prompt("Guess how many movies I have watched! (Enter a number)");
            console.log(statementSix);
        }
    }
}

if (i == 4) {
    alert("Sorry you ran out of guesses. The correct answer is 70!");
}

var myFriends = ["mary", "farah", "suzan", "taima", "noor"]
function questSeven() {
for (var i = 0; i < 6; i++) {
    var statementSeven = prompt("Guess one of my friends' name!")
    for (let index = 0; index < myFriends.length; index++) {
       if (statementSeven === myFriends[index]) {
           alert("You are correct!");
           totalScore++;
           break;
       } else {
           alert("You are incorrect.")
       }
    }
        
    }



}

alert("These were all the possible answers: Mary, Farah, Suzan, Taima, Noor")

alert("Your total score is: " + totalScore + "/7")

alert("Thank you for taking the quiz " + userName + "!")


quesOne();
questTwo();
questThree();
questFour();
questFive();
questSix();
questSeven();

