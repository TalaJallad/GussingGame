'use strict';
var username = prompt ("What is your name?")
alert ("Welcome "+username)

alert ("let's start the quiz!")

var statement1= prompt ("I graduated university in 2017. (yes/no)")
if (statement1.toLowerCase() === "yes") {
    //console.log ("You are correct!")
    alert ("You are correct!")
} else {
    //console.log ("You are incorrect :(")
    alert ("You are incorrect :(")
}
var statement2 = prompt ("I enjoy watching movies. (yes/no)") 
if (statement2.toLowerCase() === "yes") {
    //console.log ("You are correct!")
    alert ("You are correct!")
} else {
    //console.log ("You are incorrect :(")
    alert ("You are incorrect :(")
}
var statement3 = prompt ("I want to work as a software developer. (yes/no)")
if (statement3.toLowerCase() === "yes") {
    //console.log ("You are correct!")
    alert ("You are correct!")
} else {
    //console.log ("You are incorrect :(")
    alert ("You are incorrect :(")
}
var statement4 = prompt ("I am 20 year old. (yes/no)")
if (statement4.toLowerCase() === "no") {
    //console.log ("You are correct!")
    alert ("You are correct!")
} else {
    //console.log ("You are incorrect :(")
    alert ("You are incorrect :(")
}
var statement5 = prompt (" I have been a team leader.(yes/no)")
if (statement5.toLowerCase() === "yes") {
    //console.log ("You are correct!")
    alert ("You are correct!")
} else {
    //console.log ("You are incorrect :(")
    alert ("You are incorrect :(")
}

var statement6 = prompt ("Guess how many movies I have watched! (Enter a number)");
console.log(statement6)
for (var i=1; i<4; i++) {
        if (statement6 === "70") {
            alert ("You are correct!");
            i=4
        } else {
            statement6 = prompt ("Guess how many movies I have watched! (Enter a number)");
    console.log (statement6);
        }
} 

if (i=4 && statement6 !== "70") {
    alert ("Sorry you ran out of guesses. The correct answer is 70!");
}



alert ("Thank you for doing the quiz "+username+"!")



