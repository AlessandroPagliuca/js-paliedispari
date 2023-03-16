/* 
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma


*/

//prendiamo il tag del bottone  
const btnWord = document.getElementById('btnWord');
// aggiungiamo l'evento click al bottone
btnWord.addEventListener('click', wordValue);

// creiamo una variabile per prendere la parola in input
let wordUser;

//Inizio della funzione per prenderci la parola inserita dall'utente
function wordValue(e){
    e.preventDefault();
    wordUser = document.getElementById('word').value;
    console.log(wordUser);

    
    //convertiamo la parola in minuscolo e rimuove gli spazi bianchi
    wordUser = wordUser.toLowerCase();
    console.log(wordUser)
        
    //convertiamo la parola in un array di caratteri e inverte l'array
    let reversedWord = wordUser.split("").reverse().join("");
    console.log(reversedWord);

    //confrontiamo la parola originale con la versione invertita
    if (wordUser === reversedWord) {
        const text = document.querySelector('h3').innerHTML = 'La parola de te inserita è palindroma';
        console.log(true);

    } else {
        const text = document.querySelector('h3').innerHTML = 'La parola de te inserita NON è palindroma';
        console.log(false);

    }

}


  