alert('Ciao! ci servono alcuni dati per creare una password impeccabile')
var nome = prompt('perfavore inserisci il tuo nome');
var cognome = prompt('ora inserisci il tuo cognome');
var colorePreferito = prompt("Qual'è il tuo colore preferito?");
var password = ((nome + cognome + colorePreferito) + Math.random());
document.getElementById('password').innerHTML = password;
