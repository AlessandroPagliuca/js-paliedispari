/* 
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer 
(usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari 
(usando una funzione)
Dichiariamo chi ha vinto.
*/


//DA QUI PARTONO TUTTE LE VARIABILI E FUNZIONI DELL'UTENTE

//variabili numero scelto dall'utente
let numberUser;

//variabile del btn con rispettivo evento 
let btnPardisp = document.getElementById('btnPardisp');

btnPardisp.addEventListener('click', numberSelectedUser);

function numberSelectedUser(){
    numberUser = document.getElementById('numberUser').value;
    console.log(numberUser);

    //variabili e function della select pari dispari scleta dall'utente
    let optionUser = document.getElementById('pariDisp');
    optionUser.addEventListener('change', parDisp);

    function parDisp(){
        const result = optionUser.value;
        console.log(result);
    }
}






//DA QUI PARTONO TUTTE LE VARIABILI E FUNZIONI DEL COMPUTER

//generiamo un numero random da 1 a 5 per il computer
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

let numPc = getRandomInt(1, 6);
console.log(numPc);

/*
SOMMIAMO i due numeri stabilendo se la somma dei due numeri
è pari o dispari  e dichiariamo chi ha vinto
*/ 
function pariDispari(num1, num2){
    const somma = num1 + num2;
    if(somma % 2 === 0){
        const text = document.querySelector('h3').innerHTML = 'Hai vinto';
        console.log(text);
        return true;
    }
    const text = document.querySelector('h3').innerHTML = 'Hai  perso';
    console.log(text);
    return false
}

let result = pariDispari(numberSelectedUser, numPc)