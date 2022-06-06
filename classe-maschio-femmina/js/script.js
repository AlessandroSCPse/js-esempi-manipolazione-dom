// Il software deve chiedere all’utente 
// il suo nome e il sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>”, 
// il colore del nome deve essere azzurro 
// o rosa a seconda del sesso inserito

// MODO 1
// Chiediamo all'utente nome e sesso
const userName = prompt('Dimmi il tuo nome');
const userGender = prompt('Dimmi il tuo sesso');

const pageTitle = document.querySelector('h1');

// Popoliamo il testo dell'h1
pageTitle.innerHTML = `Ciao <span class="${userGender}">${userName}</span>`;

// MODO 2
// const pageTitle = document.querySelector('h1 > span');
// // Popoliamo il testo dell'h1
// pageTitle.innerHTML = userName;

// // Se l'utente ha scritto 'maschio' aggiungo la classe lightblue
// // altrimenti se l'utente ha scritto 'femmina' aggiungo la classe pink
// if(userGender === 'maschio') {
//     pageTitle.classList.add('lightblue');
// } else if (userGender === 'femmina') {
//     pageTitle.classList.add('pink');
// }