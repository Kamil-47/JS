//! Projekt 5 - Zadanie dla Ciebie
// Sprawdź czy wpisane w input hasło pasuje do któregoś z haseł w tablicy. Jeśli tak, wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedynczym elemencie typu string)

const input = document.querySelector("input");
const passwords = ["jedEN", "DwA"];
const messages = ["super!", "działa!"];
const div = document.querySelector(".message");

//* ROZWIĄZANIE 1
// const showMessage = (e) => {
//   div.textContent = "";
//   const text = e.target.value;

//   passwords.forEach((passwords, index) => {
//     if (text.toLowerCase() === passwords.toLowerCase()) {
//       div.textContent = messages[index];
//     }
//   });
// };
//* //////////////////////////////////////////

//* ROZWIĄZANIE 2
// passwords.forEach((password, index) => {
//   passwords[index] = password.toLowerCase();
// });

// const showMessage = (e) => {
//   div.textContent = "";
//   const text = e.target.value.toLowerCase();

//   passwords.forEach((passwords, index) => {
//     if (text === passwords) {
//       div.textContent = messages[index];
//     }
//   });
// };
//* //////////////////////////////////////////

input.addEventListener("input", showMessage);
