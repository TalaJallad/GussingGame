'use strict';
var userName = prompt("What is your name?")
alert("Welcome " + userName)
alert("let's start the quiz!")

var totalScore = 0

function questOne() {
    console.log('alaa')
    var statementOne = prompt("I graduated university in 2017. (yes/no)")
    if (statementOne.toLowerCase() === "no") {
        console.log("You are correct!")
        alert("You are correct!");
        totalScore++;
    } else if (statementOne.toLowerCase() === "yes") {
        console.log("You are incorrect :(")
        alert("You are incorrect :(")
    } else {
        alert("Invalid Entry")
    }
}
questOne();



var statementTwo = prompt("I enjoy watching movies. (yes/no)")
console.log(statementTwo);
function questTwo() {
    if (statementTwo.toLowerCase() === "yes") {
        //console.log ("You are correct!")
        alert("You are correct!");
        totalScore++;
    } else {
        //console.log ("You are incorrect :(")
        alert("You are incorrect :(")
    }
}
questTwo();


var statementThree = prompt("I want to work as a software developer. (yes/no)")
console.log(statementThree)
function questThree() {
    if (statementThree.toLowerCase() === "yes") {
        //console.log ("You are correct!")
        alert("You are correct!");
        totalScore++;
    } else if (statementThree.toLowerCase() === "no") {
        //console.log ("You are incorrect :(")
        alert("You are incorrect :(")
    } else {
        alert("Invalid Entry")
    }
}
questThree();



var statementFour = prompt("I am 20 year old. (yes/no)")
console.log(statementFour)
function questFour() {
    if (statementFour.toLowerCase() === "no") {
        //console.log ("You are correct!")
        alert("You are correct!");
        totalScore++;
    } else {
        //console.log ("You are incorrect :(")
        alert("You are incorrect :(")
    }
}
questFour();


var statementFive = prompt(" I have been a team leader.(yes/no)")
console.log(statementFive);
function questFive() {
    if (statementFive.toLowerCase() === "yes") {
        //console.log ("You are correct!")
        alert("You are correct!");
        totalScore++;
    } else {
        //console.log ("You are incorrect :(")
        alert("You are incorrect :(")
    }
}
questFive();


var statementSix = prompt("Guess how many movies I have watched! You have 4 guesses! (Enter a number)");
console.log(statementSix);
function questSix() {
    for (var i = 1; i < 4; i++) {
        if (statementSix === "70") {
            // console.log('You are correct')
            alert("You are correct!");
            totalScore++;
            break;
        } else {
            if (statementSix < 70) {
                // console.log('too low')
                alert("too low")
            } else if (statementSix > 70) {
                // console.log('You are correct')
                alert("too high")
            }
            statementSix = prompt("Guess how many movies I have watched! (Enter a number)");
            console.log(statementSix);
        }
    } if (i === 4) {
        alert("Sorry you ran out of guesses. The correct answer is 70!");
    }
}
questSix();
var correct = false;
var myFriends = ["mary", "farah", "suzan", "taima", "noor"]
function questSeven() {
    for (var i = 0; i < 5; i++) {
        var statementSeven = prompt("Guess one of my friends' name!").toLowerCase();
        console.log(statementSeven);
        for (let index = 0; index < myFriends.length; index++) {
            if (statementSeven === myFriends[index]) {
                // console.log('You are correct')
                alert("You are correct!");
                totalScore++;
              correct = true;
                break;
            
            } 
            //else {
            //     alert("You are incorrect.")
            // }
        }
if(correct === true){
    break;
}
    }



}

questSeven();

alert("These were all the possible answers: Mary, Farah, Suzan, Taima, Noor")
alert("Your total score is: " + totalScore + "/7")
alert("Thank you for taking the quiz " + userName + "!")

