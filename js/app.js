'use strict';
alert('hello and welcome to my website ');
var name = prompt('what is your name ? ');
alert('hello ' + name + ' let us play guessing game ');
console.log(name);
alert('your answer must be y/n or yes/no');

//FIRST 5 QUESTIONS
var score = 0;
var myQues = [`Is my age more than 20 ?`, ` Is my favorite color nevy?`, `Do i like programming?`, `Do i like watching movies ?`,`do i like arabic food ?`];
function question(userAnswer) {
    for (var i = 0; i < myQues.length; i++) {
        userAnswer = prompt(myQues[i]);
        userAnswer.toLowerCase();
        if (userAnswer === 'y' || userAnswer === 'yes') {
            alert('Your answer  is correct');
            score++;
            console.log(score);
        } else if (userAnswer === 'n' || userAnswer === 'no') {
            alert('Your answer is wrong');
        } else {
            alert('You only can answer using y/n, yes/no. Now you will be taken to the next question');
        }
    }
}

question(myQues);

alert('let us play another game');//QUESTION 6
alert('guess in number the correct answer , you have four opportunities to get the correct answer');
var numericAns;
for (var i = 3; i >= 0; i--) {
    numericAns = prompt('which month i was born in ?');

    if (numericAns == 4) {
        alert('your answer correct');
        score++;
        console.log(score);
        break;
    }
    else if (numericAns > 4) {
        alert('very high you  have ' + i + 'chance now');

    }
    else alert('very low you have ' + i + 'chance now');
    console.log(numericAns);

}

console.log(score);
alert('the next game you have to guess the name of things that i will ask you about');//QUESTION7
var cars = ['ford', 'mercides', 'bmw'];
var stringAns;
for (var j = 5; j >= 0; j--) {

    stringAns = prompt('guess the name of one of my favourite cars');
    for (var t = 0 ; t< cars.length ; t++) {
        if (stringAns===cars[t]) {
            alert('your answer correct');
            score++;
            j=-1;
            break;
        }
        else 
        {
            alert('your answer not correct , you have ' + j + 'chance now');
            
        }
    }
}
alert('correct answer is ' + cars);
alert('your score is ' + score + '/7');
