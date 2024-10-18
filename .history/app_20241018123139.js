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

    // Validate month and year 
    let current = new Date();
    let currentYear = current.getFullYear()
    if (month.value === "" || year.value === "") {
        dateError.style.display = "inline";
        validAll = false;
    }else if(month.value < 1 || month.value > 12){
        dateError.style.display = "inline";
        dateError.innerHTML = "Enter correct Date*";
        validAll = false;
    }else if(year.value > currentYear){
        dateError.style.display = "inline";
        dateError.innerHTML = "Enter correct Year*"
        validAll = false;
    }

    if (validAll) { 
        cardName.innerHTML = name.value;
        formatNumber = ""
        for(let i = 0; i < number.value.length; i++){
            if(i % 4 === 0){
                formatNumber += number.value[i] + " ";
            }
        }
        cardNumber.innerHTML = formatNumber;
        cardDate.innerHTML = month.value + "/" + year.value;

        
    }
}

    

let confirmBtn = document.querySelector(".confirm-btn");
confirmBtn.addEventListener("click", getData);

