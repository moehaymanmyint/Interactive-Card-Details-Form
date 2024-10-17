let cardName = document.querySelector(".name");
let cardNumber = document.querySelector(".number");
let cardMonth = document.querySelector(".month");
let cardYear = document.querySelector(".year");

let name = document.querySelector("#name-input");
let number = document.querySelector("#number-input");
let year = document.querySelector("#year-input");
let month = document.querySelector("#month-input");

let nameError = document.querySelector("#name-error");
let numberError = document.querySelector("#number-error");
let monthError = document.querySelector("#month-error");
let yearError = document.querySelector("#year-error");

function getData(event){
    event.preventDefault();
    cardName.innerHTML = name.value;
    cardNumber.innerHTML = number.value;
    cardMonth.innerHTML = month.value;
    cardYear.innerHTML = year.value;
}

let confirmBtn = document.querySelector(".confirm-btn");
confirmBtn.addEventListener("click", getData);

