/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 // Declare a new variable called `game` that's not set to anything
 let game;
 const startGameButton = document.getElementById('btn__reset');
 // When Start Game button is clicked, start the game.
 startGameButton.addEventListener('click',(e) =>{
     game = new Game();
     game.startGame();

 });


 const qwerty = document.getElementById('qwerty');
 // Add listener for mouse clicks on displayed game keyboard
 qwerty.addEventListener('click', (e)=>{
  if(e.target.tagName === 'BUTTON'){
      game.handleInteraction(e.target);
  }

 });

 //add event listener for keydown event so that pressing a physical keyboard button results in the handleInteraction()
 // method being called for the associated onscreen keyboard button

 const keyboard = qwerty.querySelectorAll('.key');
 document.addEventListener('keydown', (e) => {
            for (let i = 0; i < keyboard.length; i ++){
             if (e.key.toLowerCase() === keyboard[i].textContent && keyboard[i].disabled === false){
                 game.handleInteraction(keyboard[i]);
         }
     }
 });
