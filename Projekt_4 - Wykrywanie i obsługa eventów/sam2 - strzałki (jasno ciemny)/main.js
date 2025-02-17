/* Gotowy projekt - sprzawdz działanie strzałek i zrób podobnie. http://websamuraj.pl/examples/js/projekt4-zad2/ */

let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
  console.log(e.keyCode, e.which);
  // 38 - strzałka do góry
  // 40 - strzałka w dół
  // wciśnięcie klawisza strzałki do góry, ma zmieniać kolor (stopniowo) na biały czyli rgb(255,255,255). Wciśnięcie klawisza strzałki w dół, ma zmienić kolor stopniowo na czarny (docelowo rgb(0,0,0))
  //tutaj twój kod:

  // //? wersja 1 - instrukcja if:
  // if (e.keyCode === 38) {
  //   if (red < 255) {
  //     red += 5;
  //     green += 5;
  //     blue += 5;
  //   }
  // } else if (e.keyCode === 40) {
  //   if (red >= 0) {
  //     red -= 5;
  //     green -= 5;
  //     blue -= 5;
  //   }
  // }
  //? ////////////////////////////////

  //? wersja 2 - instrukcja switch:
  const keyNumber = e.keyCode;
  switch (keyNumber) {
    case 38:
      document.body.style.backgroundColor = `rgb(${red < 255 ? ++red : red}, ${
        green < 255 ? ++green : green
      }, ${blue < 255 ? ++blue : blue})`;
      break;
    case 40:
      document.body.style.backgroundColor = `rgb(${red > 0 ? --red : red}, ${
        green > 0 ? --green : green
      }, ${blue > 0 ? --blue : blue})`;
      break;
  }
  console.log(red);
};

window.addEventListener("keydown", changeColor);
