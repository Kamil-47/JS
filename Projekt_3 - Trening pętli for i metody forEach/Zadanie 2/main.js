let size = 10;
let orderElement = 1;

const init = () => {
  const btn = document.createElement("button");
  btn.textContent = "Dodaj 10 elementów";
  document.body.appendChild(btn);
  btn.style.fontSize = "28px";

  // CZYSZCZENIE
  const btnReset = document.createElement("button");
  btnReset.textContent = "WYCZYŚĆ";
  btnReset.style.fontSize = "28px";
  btnReset.addEventListener("click", cleanList);
  document.body.appendChild(btnReset);

  const list = document.createElement("ul");
  list.style.listStyle = "none";
  document.body.appendChild(list);

  btn.addEventListener("click", createLiElements);
};

const createLiElements = () => {
  for (let i = 0; i < 10; i++) {
    const li = document.createElement("li");
    li.textContent = `Element nr ${orderElement++}`;
    li.style.fontSize = `${size++}px`;
    document.querySelector("ul").appendChild(li);
  }
};

const cleanList = () => {
  document.querySelector("ul").textContent = "";
  size = 10;
  orderElement = 1;
};

init();
