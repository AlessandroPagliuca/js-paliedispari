/* 
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer 
(usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari 
(usando una funzione)
Dichiariamo chi ha vinto.
*/

// selection of the btn to add the event to
let btnParDisp = document.getElementById('btnParDisp');
btnParDisp.addEventListener('click', numberSelected);

// Start of the function to add to the btn event 
function numberSelected(){
    //user choice received by select
    let selectedUser = document.getElementById("select").value;
    console.log(selectedUser,' select user');
  
    //number entered by the user in input
    let numUser = parseInt(document.getElementById("numUser").value);
    console.log(numUser,'user');
  
    // We generate a random number for the computer
    let numComputer = Math.floor(Math.random() * 5) + 1;
    console.log(numComputer,'computer');
  
    // Sum (numUser, numComputer)
    let sum = numUser + numComputer;
    console.log(sum, 'sum of both');
  
    // We determine whether the sum is even or odd
    function isPar(num) {
        console.log(num,'"Check if even or odd"');
      return num % 2 === 0;
    }
    let result = isPar(sum) ? "even" : "odd";
    console.log(result);
  
    // We declare who won
    if ((result === "even" && selectedUser === "even") || (result === "odd" && selectedUser === "odd")) {
      document.getElementById("result").innerText = "You won!";
      console.log('You won');
    } else {
      document.getElementById("result").innerText = "You lost!";
      console.log('You lost');

    }
  }
 