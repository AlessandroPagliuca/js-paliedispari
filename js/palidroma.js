/* 
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma


*/

//prendiamo il tag del bottone  
const btnWord = document.getElementById('btnWord');

btnWord.addEventListener('click', wordValue);
//Inizio della funzione per prenderci la parola inserita dall'utente
function wordValue(e){
    e.preventDefault();
    const wordUser = document.getElementById('word').value;
    console.log(wordUser);
}
