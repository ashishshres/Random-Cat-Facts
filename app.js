let button = document.querySelector("button");
let fact = document.querySelector("p");

let url = "https://catfact.ninja/fact";

async function getFacts() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    fact.innerHTML = data.fact;
  } catch (err) {
    alert(err);
  }
}

button.addEventListener("click", getFacts);
