// <!-- Projekt docelowy:
// https://websamuraj.pl/examples/js/projekt6-zad1/ -->
// <!-- Stwórz tablicę przechowującą możliwości z dwoma wartościami domyślnymi (np. walcz, przemyśl to jeszcze raz) -->
// <!-- Przycisk dodaj: dodaje możliwości do tablicy -- aktualna zawartość tablicy po dodaniu wyświetla się w konsoli -->
// <!-- Przycisk reset: usuwa możliwości (tablica staje się pusta) -->
// <!-- Przycisk pokaż radę - losuje z tablicy możliwość -->
// <!-- Przycisk pokaż możliwości - pokazuje w alercie zawartość tablicy -->

const possibilities = ["idź za głosem serca", "obmyśl lepszy plan"];

const addPossibility = (e) => {
  e.preventDefault();
  const input = document.querySelector("input");
  const newPossibility = input.value;
  if (input.value.length) {
    possibilities.push(newPossibility);
    input.value = "";
    console.log(possibilities);
  }
};
document.querySelector("button").addEventListener("click", addPossibility);

const cleanPossibilities = (e) => {
  e.preventDefault();
  possibilities.splice(0);
};
document.querySelector(".clean").addEventListener("click", cleanPossibilities);

const div = document.querySelector("h1");
const showAdvice = () => {
  const indexPossibilites = Math.floor(Math.random() * possibilities.length);
  div.textContent = `${possibilities[indexPossibilites]}`;
};
document.querySelector(".showAdvice").addEventListener("click", showAdvice);

const showOptions = () => {
  alert(possibilities.join(", "));
};
document.querySelector(".showOptions").addEventListener("click", showOptions);
