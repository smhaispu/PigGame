/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores,roundScore,activePlayer,gamePlaying,lastValue;

init();

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
    let dice = Math.floor(Math.random()*6) + 1;
    
    //Display Image for the Random Number.
    
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    //Change the player.
    if(dice=== 6 && lastValue === 6 ){
        scores[activePlayer]= 0;
        roundScore =0;
        document.getElementById('current-'+activePlayer).textContent = '0';
        document.getElementById('score-'+activePlayer).textContent = '0';
        nextPlayer();
       }
        else if(dice !== 1)
        {
            roundScore += dice;
            document.getElementById('current-'+activePlayer).textContent = roundScore;
            // document.querySelector('#current-0').textContent = roundScore;
        }
    else{
        //NextPlayer
        nextPlayer();
        }
        
        lastValue = dice;
    
    }
   //Generate A random Number


});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
       //Add Current score to global score
    scores[activePlayer] += roundScore;
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
        //Get Input Final Score Value.
        var Input = document.querySelector('.final-score').value;
        var winningScore;
        //Check if the Input value is valid.
        if(Input){
            winningScore = Input;
            //console.log(winningScore + Input);
        }
        else {
            winningScore = 100;
        }

    //Declare the Winner as Score reaches 100.
    if(scores[activePlayer] >= winningScore)
      {
         // console.log(winningScore);
         document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
         document.querySelector('.dice').style.display = 'none';
         document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
         document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
         gamePlaying =false;    
      }
    else{
    //Change the Activeplayer
        nextPlayer();
    }
          
    }
   
});
document.querySelector('.btn-new').addEventListener('click', init);
function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer =0; //0 or 1 for player1 or player2
    gamePlaying= true;
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';   
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
};


function nextPlayer(){
        activePlayer === 0 ? activePlayer = 1:activePlayer =0;
        roundScore =0;
        document.querySelector('#current-0').textContent = '0';
        document.querySelector('#current-1').textContent = '0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';     
    
    
};





