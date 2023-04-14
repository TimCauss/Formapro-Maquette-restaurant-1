//on déclare notre formulaire dans une constante afin de pouvoir l'appeller
const form = document.querySelector("form");
const input = document.querySelector("input");

//on récupère
const inputName = document.querySelector('input[id="name"]');
const inputFirstName = document.querySelector('input[id="fname"]');
const inputMail = document.querySelector('input[id="mail"]');
const inputMessage = document.querySelector('input[id="msg"]');

let namePlaceholder = document.querySelector('input[placeholder="Nom"]');
let FirstNamePlaceholder = document.querySelector(
  'input[placeholder="Prénom"]'
);
let mailPlaceholder = document.querySelector(
  'input[placeholder="monAdresseMail@gmail.com"]'
);
let messagePlaceholder = document.querySelector(
  'input[placeholder="Votre message/demande de réservation"]'
);

//on déclare des variable afin d'y stocker les données du formulaire
let name = "";
let firstName = "";
let mail = "";
let message = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputName.value == "" || inputName.value == null) {
    namePlaceholder.classList.add("inputFalse");
  }
  if (inputFirstName.value == "" || inputFirstName.value == null) {
    console.log(inputFirstName.value);
    FirstNamePlaceholder.classList.add("inputFalse");
  }
  if (inputMail.value == "" || inputMail.value == null) {
    mailPlaceholder.classList.add("inputFalse");
  }
  if (inputMessage.value == "" || inputMessage.value == null) {
    messagePlaceholder.classList.add("inputFalse");
  }
});
