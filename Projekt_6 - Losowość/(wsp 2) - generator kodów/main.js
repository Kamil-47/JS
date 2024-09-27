// określ zmienne na:
// - znaki z których ma losować
// - btn i sekcję żeby dodać w niej kody
// - ilość kodów i z ilu znaków mają być
// nasłuchiwanie na przycisk

// funckja:
// - pętla

const chars = "ABCDEFGHIJK0123456789";

const btn = document.querySelector("button");
const section = document.querySelector("section");

const codesNumber = 1000;
const charsNumber = 10;

const codesGenerator = () => {
  for (let i = 0; i < codesNumber; i++) {
    let code = "";
    for (let i = 0; i < charsNumber; i++) {
      const index = Math.floor(Math.random() * 20);
      code += chars[index];
    }
    const div = document.createElement("div");
    div.textContent = code;
    section.appendChild(div);
  }
};

btn.addEventListener("click", codesGenerator);
