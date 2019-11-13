alert('Ciao! ci servono alcuni dati per creare una password impeccabileI clicca OK per continuare')
var nome = prompt('Per favore inserisci il tuo nome');
var cognome = prompt('Ora inserisci il tuo cognome');
var colorePreferito = prompt("Qual'è il tuo colore preferito?");
var password = ((nome + cognome + colorePreferito) + Math.random());
document.getElementById('password').innerHTML = password;
document.getElementById('contenitore').setAttribute('class','visibile');
