const Name = prompt("Inserisci il tuo nome");
console.log(Name);

const LastName = prompt("Inserisci il tuo cognome");
console.log(LastName);

const Color = prompt("Inserisci il tuo colore preferito");
console.log(Color);

const Password = Name + LastName + Color + "21";
console.log(Password);

document.getElementById("password").innerHTML = Password;

document.write(`Congratulazioni ${Name} ${LastName}!! Ora puoi utilizzare la tua nuova SICURISSIMA password`);