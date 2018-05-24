// VARIABLES

var countries = ['spain', 'venezuela', 'italy', 'portugal','colombia', 'canada'];
var randomCountry = Math.floor(Math.random() * countries.length);
var choosenCountry = countries[randomCountry];
var rightCountry = [];
var wrongCountry = [];
var guessLeft = 9;
var underscore = [];


var docRightCountry = document.getElementsByClassName('rightCountry');
var docUnderscore = document.getElementsByClassName('underscore');
var docWrongCountry = document.getElementsByClassName('wrongCountry');

console.log(choosenCountry);

// GENERATE ANY UNDERSCORES AS LETTERS THE WORD HAVE
var generateUnderscore = () => {
    for (var i = 0; i< choosenCountry.length; i++){
        underscore.push('_');
    }
    return underscore; 
}

console.log(generateUnderscore());

document.addEventListener('keypress', (event) => {
    var keyword = String.fromCharCode(event.keyCode);
    if (choosenCountry.indexOf(keyword) > -1) {
        rightCountry.push(keyword);
        underscore [choosenCountry.indexOf(keyword)] = keyword;
        docUnderscore[0].innerHTML = underscore.join(' ');
        docRightCountry[0].innerHTML = rightCountry;

        if (underscore.join(' ') == choosenCountry) {
            alert('YOU WIN');
        }
    } 
    else {
        wrongCountry.push(keyword);
        docWrongCountry[0].innerHTML = wrongCountry;
        guessLeft --;
    }    
});
