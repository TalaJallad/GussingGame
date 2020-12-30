'use strict';
var username = prompt("What is your name?")
alert("Welcome " + username)

alert("let's start the quiz!")

var totalScore = 0

var statement1 = prompt("I graduated university in 2017. (yes/no)")
function ques1() {

    if (statement1.toLowerCase() === "yes") {
        //console.log ("You are correct!")
        alert("You are correct!");
        totalScore++
    } else if (statement1.toLowerCase() === "no") {
        //console.log ("You are incorrect :(")
        alert("You are incorrect :(")
    } else {
        alert("Invalid Entry")
    }
}


var statement2 = prompt("I enjoy watching movies. (yes/no)")
function ques2() {
    if (statement2.toLowerCase() === "yes") {
        //console.log ("You are correct!")
        alert("You are correct!");
        totalScore++
    } else {
        //console.log ("You are incorrect :(")
        alert("You are incorrect :(")
    }
}

var statement3 = prompt("I want to work as a software developer. (yes/no)")
 function ques3() {
if (statement3.toLowerCase() === "yes") {
    //console.log ("You are correct!")
    alert("You are correct!");
    totalScore++
} else if (statement3.toLowerCase() === "no") {
    //console.log ("You are incorrect :(")
    alert("You are incorrect :(")
} else {
    alert("Invalid Entry")
}
}


var statement4 = prompt("I am 20 year old. (yes/no)")
function ques4 () {
if (statement4.toLowerCase() === "no") {
    //console.log ("You are correct!")
    alert("You are correct!");
    totalScore++
} else {
    //console.log ("You are incorrect :(")
    alert("You are incorrect :(")
}
}

var statement5 = prompt(" I have been a team leader.(yes/no)")
function ques5() {
if (statement5.toLowerCase() === "yes") {
    //console.log ("You are correct!")
    alert("You are correct!");
    totalScore++
} else {
    //console.log ("You are incorrect :(")
    alert("You are incorrect :(")
}
}

var statement6 = prompt("Guess how many movies I have watched! You have 4 guesses! (Enter a number)");
console.log(statement6)
function ques6 () {
for (var i = 1; i < 4; i++) {
    if (statement6 === "70") {
        alert("You are correct!");
        totalScore++;
        break;
    } else {
        if (statement6 < 70) {
            alert("too low")
        } else if (statement6 > 70) {
            alert("too high")
        }
        statement6 = prompt("Guess how many movies I have watched! (Enter a number)");
        console.log(statement6);
    }
}
}

if (i == 4) {
    alert("Sorry you ran out of guesses. The correct answer is 70!");
}

var myFriends = ["mary", "farah", "suzan", "taima", "noor"]
var statement7 = prompt("Guess one of my friends' name!")

for (var i = 1; i < 6; i++) {
    console.log(statement7)
    if (statement7.toLowerCase() == myFriends[0]) {
        alert("You are correct!");
        totalScore++;
        break;
    } else if (statement7.toLowerCase() == myFriends[1]) {
        alert("You are correct!");
        totalScore++;
        break;
    } else if (statement7.toLowerCase() == myFriends[2]) {
        alert("You are correct!");
        totalScore++;
        break;
    } else if (statement7.toLowerCase() == myFriends[3]) {
        alert("You are correct!");
        totalScore++;
        break;
    } else if (statement7.toLowerCase() == myFriends[4]) {
        alert("You are correct!");
        totalScore++;
        break;
    } else {
        alert("Incorrect");
        statement7 = prompt("Guess one of my friends' name!");
    }
}

if (i == 6) {
    alert("You ran out of guesses!");
}

alert("These were all the possible answers: Mary, Farah, Suzan, Taima, Noor")

alert("Your total score is: " + totalScore + "/7")

alert("Thank you for taking the quiz " + username + "!")


ques1();
ques2();
ques3();
ques4();
ques5();
ques6();

