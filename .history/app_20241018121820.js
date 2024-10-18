let cardName = document.querySelector(".name");
let cardNumber = document.querySelector(".number");
let cardDate = document.querySelector(".date");

let name = document.querySelector("#name-input");
let number = document.querySelector("#number-input");
let year = document.querySelector("#year-input");
let month = document.querySelector("#month-input");

let nameError = document.querySelector(".name-error");
let numberError = document.querySelector(".number-error");
let dateError = document.querySelector(".date-error");

function getData(event) {
    event.preventDefault();
    let validAll = true;
    nameError.style.display = "none";
    numberError.style.display = "none";
    dateError.style.display = "none";

    // Validate name
    if (name.value === "") {
        nameError.style.display = "inline";
        validAll = false;
    }

    // Validate card number
    if (number.value === "") {
        numberError.style.display = "inline";
        validAll = false;
    } else if (isNaN(Number(number.value)) || number.value.length !== 16) {
        numberError.style.display = "inline";
        numberError.innerHTML = "Enter a valid 16-digit number";
        validAll = false;
    }

    // Validate month and year (additional validation can be added here)
    if (month.value === "" || year.value === "") {
        dateError.style.display = "inline";
        validAll = false;
    }else if(month.value > 12){
        dateError.style.display = "inline";
        dateError.innerHTML = "Enter correct date";
        validAll = false;
    }

    // If all inputs are valid, update the card display
    if (validAll) {
        
        cardName.innerHTML = name.value;
        cardNumber.innerHTML = number.value;
        cardDate.innerHTML = month.value + "/" + year.value;
    }
}

    

let confirmBtn = document.querySelector(".confirm-btn");
confirmBtn.addEventListener("click", getData);

