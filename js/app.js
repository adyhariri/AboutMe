'use strict';
alert('hello and welcome to my website ');
var name = prompt('what is your name ? ');
alert('hello '+ name +' let us play guessing game ');
console.log(name);
alert('your answer must be y/n or yes/no');
var score = 0;
var ans = prompt('is my age more than 20 ?').toLowerCase();
if (ans == 'y' || ans == 'yes') {
    alert('you are correct');
    score ++;
    console.log(score);
}
else
    alert('your answer wrong');
console.log(ans);
ans = prompt('am i from syria ?').toLowerCase();
if (ans == 'y' || ans == 'yes')
{
    alert('you are correct');
    score ++;
    console.log(score);
}
else
    alert('your answer wrong')
console.log(ans);
ans = prompt('is my favorite color nevy ?').toLowerCase();
if (ans == 'y' || ans == 'yes') 
{
    alert('you are correct');
    score ++ ;
    console.log(score);
}
else
    alert('your answer wrong')
console.log(ans);
ans = prompt('do i like cooking ?').toLowerCase();
if (ans == 'n' || ans == 'no') 
{
    alert('you are correct');
    score ++;
    console.log(score);
}
else
    alert('your answer wrong')
console.log(ans);
ans = prompt('can i drive a car ?').toLowerCase();
if (ans == 'n' || ans == 'no') 
{
    alert('you are correct');
    score ++ ;
    console.log(score);
}
else
    alert('your answer wrong');
console.log(ans);
alert('let us play another game');
alert('guess in number the correct answer , you have four opportunities to get the correct answer');
var numericAns;
for (var i = 3; i >= 0; i--) 
{
    numericAns = prompt('which month i was born in ?');

    if (numericAns == 4)
     {
        alert('your answer correct');
        score++;
        console.log(score);
        break;
    }
    else if (numericAns > 4) 
    {
        alert('very high you  have ' + i + 'chance now');

    }
    else alert('very low you have ' + i + 'chance now');
    console.log(numericAns);

}
/*
for (var i = 3; i >= 0; i--) 
{
    numericAns = prompt('which year i`/ve graduated in ?');

    if (numericAns == 2019) 
    {
        alert('your answer correct');
        score++;
        console.log(score);
        break;
    }
    else if (numericAns > 2019) 
    {
        alert('very high you  have ' + i + 'chance now');

    }
    else alert('very low you have ' + i + 'chance now');
    console.log(numericAns);
}
for (var i = 3; i >= 0; i--) 
{
    numericAns = prompt('how much brothers i have ?');

    if (numericAns == 4) 
    {
        alert('your answer correct');
        score++;
        console.log(score);
        break;
    }
    else if (numericAns > 4) 
    {
        alert('very high you  have ' + i + 'chance now');

    }
    else alert('very low you have ' + i + 'chance now');
    console.log(numericAns);
}
for (var i = 3; i >= 0; i--) 
{
    numericAns = prompt('how many countries i lived in ?');

    if (numericAns == 3) 
    {
        alert('your answer correct');
        score++;
        console.log(score);
        break;
    }
    else if (numericAns > 3) 
    {
        alert('very high you  have ' + i + 'chance now');

    }
    else alert('very low you have ' + i + 'chance now');
    console.log(numericAns);
}
for (var i = 3; i >= 0; i--) 
{
    numericAns = prompt('how many cats i have ?');

    if (numericAns == 0) 
    {
        alert('your answer correct');
        score++;
        console.log(score);
        break;
    }
    else if (numericAns > 0) 
    {
        alert('very high you  have ' + i + 'chance now');

    }
    else alert('very low you have ' + i + 'chance now');
    console.log(numericAns);
}
for (var i = 3; i >= 0; i--) 
{
    numericAns = prompt('how much i have fingers in 1 hand ?');

    if (numericAns == 5) 
    {
        alert('your answer correct');
        score++;
        console.log(score);
        break;
    }
    else if (numericAns > 5) 
    {
        alert('very high you  have ' + i + 'chance now');

    }
    else alert('very low you have ' + i + 'chance now');
    console.log(numericAns);
}
alert('your score for this games '+score+'/ 6');
*/
console.log(score);
alert('the next game you have to guess the name of things that i will ask you about');
var cars = ['ford','mercides','bmw'];
var stringAns ;
for (var j = 5; j >= 0; j--) 
{
    stringAns = prompt('guess the name of one of my favourite cars');
    if (stringAns == 'ford'||stringAns=='mercides'||stringAns=='bmw') 
    {
        alert('your answer correct');
        score++;
        console.log(score);
        break;
    }
    else alert('your answer not correct , you have '+j+'chance now');
    console.log(stringAns);
}
alert('correct answer is '+cars);
alert('your score is '+score+'/7');
console.log(score);

/*
var brothers = ['ahmad','muhammed','abdullah','hamza'];
for (var j = 5; j >= 0; j--) 
{
    stringAns = prompt('guess one of  my brothers name');
    if (stringAns == 'ahmad'||stringAns=='muhammed'||stringAns=='abdullah'||stringAns=='hamza') 
    {
        alert('your answer correct');
        score++;
        console.log(score);
        break;
    }
    else alert('your answer not correct , you have '+j+'chance now');
    console.log(stringAns);
}
alert('correct answer is '+brothers);
var colors = ['navy','blue','black'];
for (var j = 5; j >= 0; j--) 
{
    stringAns = prompt('guess the name of one of my favourite colors');
    if (stringAns == 'navy'||stringAns=='blue'||stringAns=='black') 
    {
        alert('your answer correct');
        score++;
        console.log(score);
        break;
    }
    else alert('your answer not correct , you have '+j+'chance now');
    console.log(stringAns);
}
alert('correct answer is '+colors);
var favFemaleNames = ['sham','yafa','aseel','lujain'];
for (var j = 5; j >= 0; j--) 
{
    stringAns = prompt('guess one of  my favourite female  name');
    if (stringAns == 'sham'||stringAns=='yafa'||stringAns=='aseel'||stringAns=='lujain') 
    {
        alert('your answer correct');
        score++;
        console.log(score);
        break;
    }
    else alert('your answer not correct , you have '+j+'chance now');
    console.log(stringAns);
}
alert('correct answer is '+favFemaleNames);
var favMaleNames = ['hamza','hazim','kinan','ali'];
for (var j = 5; j >= 0; j--) 
{
    stringAns = prompt('guess one of  my favourite male  name');
    if (stringAns == 'hamza'||stringAns=='hazim'||stringAns=='kinan'||stringAns=='ali') 
    {
        alert('your answer correct');
        score++;
        console.log(score);
        break;
    }
    else alert('your answer not correct , you have '+j+'chance now');
    console.log(stringAns);
}
alert('correct answer is '+favMaleNames);
var favCountry = ['morroco','italy','france','Austria'];
for (var j = 5; j >= 0; j--) 
{
    stringAns = prompt('guess one of  my favourite country  name');
    if (stringAns == 'morroco'||stringAns=='italy'||stringAns=='france'||stringAns=='Austria') 
    {
        alert('your answer correct');
        score++;
        console.log(score);
        break;
    }
    else alert('your answer not correct , you have '+j+'chance now');
    console.log(stringAns);
}
alert('correct answer is '+favCountry);
var favCity = ['damascus','venice','amman','daraa'];
for (var j = 5; j >= 0; j--) 
{
    stringAns = prompt('guess one of  my favourite city  name');
    if (stringAns == 'damascus'||stringAns=='venice'||stringAns=='amman'||stringAns=='daraa') 
    {
        alert('your answer correct');
        score++;
        console.log(score);
        break;
    }
    else alert('your answer not correct , you have '+j+'chance now');
    console.log(stringAns);
}
alert('correct answer is '+favCity);
alert('your score is '+score+'/7');
console.log(score); */