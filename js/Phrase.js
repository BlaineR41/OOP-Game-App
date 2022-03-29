/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 // declare Phrase class
 class Phrase{
     // The Phrase class cosntructor method should receive one parameter: `phrase`
     constructor(phrase){
         // This is the actual phrase the Phrase objects is representing.
         // it should be converted to all lower case.
         this.phrase = phrase.toLowerCase();

     };

     // This method adds letter placeholders to the display when the game starts.

     addPhraseToDisplay() {
         const ul = document.querySelector('#phrase ul');
         const selectedPhrase = this.phrase.split('');
         for(let i = 0; i < selectedPhrase.length; i++){
             const list = document.createElement('li');
             list.textContent = selectedPhrase[i];
             ul.appendChild(list);

             if(selectedPhrase[i] === ' ' ){
                 list.className = 'space';
             } else {
                 list.className = 'letter';
             }
         }

     };

     // Check to see if the letter selected by the player matches a letter in the selected phrase
     // letter is a string
     checkLetter(letter){
         return this.phrase.includes(letter);
     };

     // When the player correctly guesses a letter, the empty box is replaced with matched letter
     showMatchedLetter(letter){
        const selectedLetter = document.querySelectorAll('#phrase li');

         for( let i = 0; i < selectedLetter.length; i++){
             if(selectedLetter[i].textContent === letter){
                 selectedLetter[i].classList.add('show');
             }
         }

     };
 }
