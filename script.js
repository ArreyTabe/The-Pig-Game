


var scores, roundScore, activePlayer, dice;

roundScore = 0;
scores = [0, 0];
activePlayer = 1; //0 is for first player 1 for second player.



document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function () {
    //#1 random number
    dice = Math.floor(Math.random() * 6) + 1;

    //#2 display the result.
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';


    //#3 update the roundscore if only the random number is != 1.


})



//console.log(dice);

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

