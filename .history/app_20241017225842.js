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
    // Clear previous error messages
    nameError.textContent = "";
    numberError.textContent = "";
    dateError.textContent = "";

    let valid = true;

    // Validate name
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name must be filled.";
        valid = false;
    }

    // Validate card number
    if (numberInput.value.trim() === "" || numberInput.value.length !== 16) {
        numberError.textContent = "Number must be filled and must be 16 digits.";
        valid = false;
    }

    // Validate month and year
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);
    const currentYear = new Date().getFullYear() % 100; // last two digits of the year
    const currentMonth = new Date().getMonth() + 1; // month is 0-based

    if (month < 1 || month > 12 || year < currentYear || (year === currentYear && month < currentMonth)) {
        dateError.textContent = "Please enter a valid expiration date.";
        valid = false;
    }

    // If all validations pass, update the card details
    if (valid) {
        cardName.innerHTML = nameInput.value;
        cardNumber.innerHTML = numberInput.value;
        cardMonth.innerHTML = monthInput.value;
        cardYear.innerHTML = yearInput.value;
    }
}

let confirmBtn = document.querySelector(".confirm-btn");
confirmBtn.addEventListener("click", getData);

