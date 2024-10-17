let cardName = document.querySelector(".name");
let cardNumber = document.querySelector(".number");
let cardMonth = document.querySelector(".month");
let cardYear = document.querySelector(".year");

let name = document.querySelector("#name-input");
let number = document.querySelector("#number-input");
let year = document.querySelector("#year-input");
let month = document.querySelector("#month-input");

function getData(event) {
    event.preventDefault(); // Prevent form submission and page reload
    cardName.textContent = name.value;   // Use textContent for plain text
    cardNumber.textContent = number.value;
    cardMonth.textContent = month.value;
    cardYear.textContent = year.value;
}

let confirmBtn = document.querySelector(".confirm-btn");
confirmBtn.addEventListener("click", getData);
