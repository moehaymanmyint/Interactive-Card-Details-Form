let cardName = document.querySelector(".name");
let cardNumber = document.querySelector(".number");
let cardMonth = document.querySelector(".month");
let cardYear = document.querySelector(".year");

let name = document.querySelector("#name-input");
let number = document.querySelector("#number-input");
let year = document.querySelector("#year-input");
let month = document.querySelector("#month-input");

let nameError = document.querySelector(".name-error");
let numberError = document.querySelector(".number-error");
let dateError = document.querySelector(".date-error");

function getData(event){
    event.preventDefault();
    cardName.innerHTML = name.value;

    if(number.length.value === 16){
        cardNumber.innerHTML = number.value;
    }else{
        numberError.innerHTML = "Required"
    }
    
    cardMonth.innerHTML = month.value;
    cardYear.innerHTML = year.value;
}

let confirmBtn = document.querySelector(".confirm-btn");
confirmBtn.addEventListener("click", getData);

