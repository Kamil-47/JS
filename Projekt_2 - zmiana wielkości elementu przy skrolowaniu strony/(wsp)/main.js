const square = document.createElement("div");
document.body.appendChild(square);

let grow = true; // flaga

let size = 10; // wielkość kwadratu
square.style.width = size + "px";
// 100 + "px" -> "100" + "px" -> "100px"
square.style.height = size + "px";

// maksymalna wielkość kwadratu
// window.innerWidth * 0.5

window.addEventListener("scroll", function () {
  //   if (size >= window.innerWidth / 2) {
  //     grow = false;
  //   } else if (size == 0) {
  //     grow = true;
  //   }

  //   if (grow == true) {
  //     size += 5;
  //     square.style.width = size + "px";
  //     square.style.height = size + "px";
  //   } else {
  //     size -= 5;
  //     square.style.width = size + "px";
  //     square.style.height = size + "px";
  //   }

  if (size >= window.innerWidth / 2) {
    grow = !grow;
  } else if (size == 0) {
    grow = !grow;
  }

  if (grow) {
    // true, bo 'grow' jest true
    size += 5;
    square.style.width = size + "px";
    square.style.height = size + "px";
  } else {
    size -= 5;
    square.style.width = size + "px";
    square.style.height = size + "px";
  }
});
