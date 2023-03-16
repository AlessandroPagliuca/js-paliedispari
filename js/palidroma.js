/* 
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma


*/

//prendiamo il tag del bottone  
let wordUser;
const btnWord = document.getElementById('btnWord');

btnWord.addEventListener('click', wordValue);
//Inizio della funzione per prenderci la parola inserita dall'utente
function wordValue(e){
    e.preventDefault();
    wordUser = document.getElementById('word').value;
    console.log(wordUser);

    
    // converte la parola in minuscolo e rimuove gli spazi bianchi
    wordUser = wordUser.toLowerCase();
    console.log(wordUser)
        
    // converte la parola in un array di caratteri e inverte l'array
    let reversedWord = wordUser.split("").reverse().join("");
    console.log(reversedWord);

    // confronta la parola originale con la versione invertita
    if (wordUser === reversedWord) {
        console.log(true);
        return true;

    } else {
        console.log(false)
        return false;

    }
}



  