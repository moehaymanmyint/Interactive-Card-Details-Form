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

    let validAll = true;

    // Validate CardHolder Name (not empty)
    if (nameInput.value.trim() === "") {
        nameError.style.display = "inline";
        isValid = false;
    } else {
        nameError.style.display = "none";
    }

    // Validate Card Number (must be 16 digits and numbers only)
    if (numberInput.value.length !== 16 || isNaN(Number(numberInput.value))) {
        numberError.style.display = "inline";
        numberError.innerHTML = "Enter a valid 16-digit number";
        isValid = false;
    } else {
        numberError.style.display = "none";
    }

    // Validate Expiration Date (Month: 01-12, Year: 4 digits)
    const month = Number(monthInput.value);
    const year = Number(yearInput.value);

    if (month < 1 || month > 12 || yearInput.value.length !== 4 || isNaN(month) || isNaN(year)) {
        dateError.style.display = "inline";
        dateError.innerHTML = "Enter a valid date";
        isValid = false;
    } else {
        dateError.style.display = "none";
    }

    // Validate CVC (must be 3 digits)
    if (cvcInput.value.length !== 3 || isNaN(Number(cvcInput.value))) {
        alert("Enter a valid 3-digit CVC");
        isValid = false;
    }

    // If the form is valid, you can proceed to submit it
    if (isValid) {
        // Submit the form or process the input values further
        alert("Form is valid and ready for submission");
    }
    
    
    cardNumber.innerHTML = number.value;
    cardMonth.innerHTML = month.value;
    cardYear.innerHTML = year.value;
}

let confirmBtn = document.querySelector(".confirm-btn");
confirmBtn.addEventListener("click", getData);

