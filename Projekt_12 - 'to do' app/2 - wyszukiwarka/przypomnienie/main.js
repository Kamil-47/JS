// FILTER (I PRZYPOMNIENIE MAP)

//* Filter
// const arr = [34, 219, 109, 2934, 12, 10, 29];
// const oddNumbers = arr.filter((number) => number % 2);
// const evenNumbers = arr.filter((number) => !(number % 2));
// const numbersBiggerThen100 = arr.filter((number) => number > 100);

//* Map
// const double = arr.map((number) => number * 2);
// const people = arr.map((number) => number + " osób");

//* forEach
// arr.forEach((number, index) => (arr[index] = number * 2));
//! /////////////////////////////////////////

//* Search
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const liElements = document.querySelector("li");

const searchTask = (e) => {
  const searchText = e.target.value.toLowerCase();
  let tasks = [...liElements];
  tasks = tasks.filter((li) =>
    li.textContent.toLowerCase().includes(searchText)
  );
  ul.textContent = "";
  tasks.forEach((li) => ul.appendChild(li));
};

input.addEventListener("input", searchTask);
