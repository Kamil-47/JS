const input = document.getElementById("pass");
const passwords = ["user", "wiosna"];
const div = document.querySelector(".message");
const messages = ["wyjechałam na zawsze", "piękna pora roku"];

// e.target.value - to co się wpisuje

input.addEventListener("input", (e) => {
  div.textContent = "";
  const text = e.target.value;
  //   console.log(e.target.value);

  passwords.forEach((passwords, index) => {
    if (text === passwords) {
      div.textContent = messages[index];
      e.target.value = "";
    }
  });
});

input.addEventListener("focus", (e) => {
  e.target.classList.add("active");
});

input.addEventListener("blur", (e) => {
  e.target.classList.remove("active");
});

//   if (e.target.value === password) {
//     div.textContent = message;
//     e.target.value = "";
//   } else {
//     div.textContent = "";
//   }
