
//Chiediamo all'utente tre domande tramite prompt
const nome = prompt("Inserisci il tuo nome:");
const cognome = prompt("Inserisci il tuo cognome:");
const colore = prompt("Inserisci il tuo colore preferito:");

//Generiamo una password con cio' che ha inserito nelle tre domande e aggiungiamo 21
const password = `${nome + cognome + colore}21`;

//stampa il risultato in console e a video
console.log(`${nome + cognome + colore}21`);
document.getElementById('psw').innerText = `La tua password è: ${password}`; 
