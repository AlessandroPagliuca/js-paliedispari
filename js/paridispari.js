/* 
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer 
(usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari 
(usando una funzione)
Dichiariamo chi ha vinto.
*/

// selezione del btn a cui aggiungere l'evento
let btnParDisp = document.getElementById('btnParDisp');
btnParDisp.addEventListener('click', numberSelected);

// Inizio della funzione da aggiungere all'evento del btn 
function numberSelected(){
    // Otteniamo la scelta dell'utente dalla select
    let selectedUser = document.getElementById("select").value;
    console.log(selectedUser,' select user');
  
    // Otteniamo il numero inserito dall'utente dalla casella di input
    let numUser = parseInt(document.getElementById("numUser").value);
    console.log(numUser,'utente');
  
    // Generiamo un numero casuale per il computer
    let numComputer = Math.floor(Math.random() * 5) + 1;
    console.log(numComputer,'computer');
  
    // Sommiamo i due numeri
    let somma = numUser + numComputer;
    console.log(somma, 'somma di entrambi');
  
    // Stabiliamo se la somma è pari o dispari
    function isPar(num) {
        console.log(num);
      return num % 2 === 0;
    }
    let result = isPar(somma) ? "pari" : "dispari";
    console.log(result, '"Verifica se pari o dispari"');
  
    // Dichiariamo chi ha vinto
    if ((result === "pari" && selectedUser === "pari") || (result === "dispari" && selectedUser === "dispari")) {
      document.getElementById("result").innerText = "Hai vinto!";
      console.log('HAI VINTO');
    } else {
      document.getElementById("result").innerText = "Hai perso!";
      console.log('HAI PERSO');

    }
  }
 