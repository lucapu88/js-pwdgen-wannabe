var nome = prompt('perfavore inserisci il tuo nome');
var cognome = prompt('ora inserisci il tuo cognome');
var colorePreferito = prompt("Qual'è il tuo colore preferito?")
var password = ((nome + cognome + colorePreferito) + 88)
document.getElementById('password').innerHTML = password;
