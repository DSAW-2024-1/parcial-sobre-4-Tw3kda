const form = document.querySelector("form");
const card_1 = document.querySelector(".content");
const card_2 = document.querySelector(".response");
const emailInput = document.getElementsByClassName("field")[0];
document.querySelector(".boton2").addEventListener("click", comeBack);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  card_1.classList.add("hide");
  card_2.classList.remove("hide");
  changeEmail();
});

function changeEmail() {
  const submittedEmailElement = document.querySelector(".submitted-email");
  submittedEmailElement.innerText = emailInput.value;
}
function comeBack(e) {
    e.preventDefault();
    card_1.classList.remove("hide");
    card_2.classList.add("hide");
    
  }