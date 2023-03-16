/* 
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer 
(usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari 
(usando una funzione)
Dichiariamo chi ha vinto.
*/

//generiamo un numero random da 1 a 5 per il computer
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  //sommiamo i due numeri stabilendo se la somma dei due numeri
  // è pari o dispari  e dichiariamo chi ha vinto
  function pariDispari(num1, num2){
    const somma = num1 + num2;
    if(somma % 2 === 0){
        return true;
    }
    return false
  }