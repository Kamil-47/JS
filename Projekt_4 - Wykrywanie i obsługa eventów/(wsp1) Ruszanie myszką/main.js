const h1 = document.querySelector("h1");

// document.body.addEventListener("mousemove", function (e) {
//   h1.textContent = `${e.clientX}, ${e.clientY}`;
//    h1.textContent = `${e.pageX}, ${e.pageY}`;
//    h1.textContent = `${e.screenX}, ${e.screenY}`;

//   document.body.style.backgroundColor = `rgb(${e.clientX}, ${e.clientY}, 100)`;
// });

document.body.addEventListener("mousemove", function (e) {
  const x = e.clientX + 1;
  const y = e.clientY + 1;
  const width = window.innerWidth;
  const height = window.innerHeight;
  h1.textContent = `${x}, ${y}`;

  const red = (x / width) * 100;
  const green = (y / height) * 100;
  const blue = ((x / width) * 100 + (y / height) * 100) / 2;

  document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;
});
