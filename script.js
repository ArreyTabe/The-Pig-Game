


var scores, roundScore, activePlayer, dice;

init();


document.querySelector('.btn-roll').addEventListener('click', function () {
    //#1 random number
    dice = Math.floor(Math.random() * 6) + 1;

    //#2 display the result.
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';


    //#3 update the roundscore if only the random number is != 1.
    if (dice !== 1) {
        //add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //next player
        nextPlayer();

    }

})


document.querySelector('.btn-hold').addEventListener('click', function () {

    //add current score to global score
    scores[activePlayer] += roundScore;

    // update the UI
    document.getElementById('score-' + activePlayer).innerHTML = scores[activePlayer];


    //check if player won the game
    if (scores[activePlayer] >= 10) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

    } else {
        //nextPlayer
        nextPlayer();
    }
})

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none';

}


document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    roundScore = 0;
    scores = [0, 0];
    activePlayer = 0;

    document.querySelector('.dice').style.display = 'none';

    //set all scores to zero
    document.getElementById('score-0').innerHTML = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').innerHTML = '0';
    document.getElementById('current-1').innerHTML = '0';

    document.getElementById('name-0').textContent = 'player 1';
    document.getElementById('name-1').textContent = 'player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');



}



//console.log(dice);

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

