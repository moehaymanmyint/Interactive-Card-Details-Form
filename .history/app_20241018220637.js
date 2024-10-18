let cardName = document.querySelector(".name");
let cardNumber = document.querySelector(".number");
let cardDate = document.querySelector(".date");
let cardCNV = document.querySelector(".cnv");

let name = document.querySelector("#name-input");
let number = document.querySelector("#number-input");
let year = document.querySelector("#year-input");
let month = document.querySelector("#month-input");
let cnv = document.querySelector("#cnv-input")

let nameError = document.querySelector(".name-error");
let numberError = document.querySelector(".number-error");
let dateError = document.querySelector(".date-error");
let cnvError = document.querySelector(".cnv-error");

function getData(event) {
    event.preventDefault();
    let validAll = true;
    nameError.style.display = "none";
    numberError.style.display = "none";
    dateError.style.display = "none";
    cnvError.style.display = "none";

    // Validate name
    if (name.value.trim() === "") {
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
    }else if(month.value < 1 || month.value > 12 || isNaN(Number(month.value)) || isNaN(Number(year.value))){
        dateError.style.display = "inline";
        dateError.innerHTML = "Enter correct Date*";
        validAll = false;
    }else if(year.value > currentYear){
        dateError.style.display = "inline";
        dateError.innerHTML = "Enter correct Year*"
        validAll = false;
    }

    // Validate CNV
    if(cnv.value === ""){
        cnvError.style.display = "inline";
        validAll = false;
    } else if (isNaN(Number(cnv.value))) {
        cnvError.style.display = "inline";
        cnvError.innerHTML = "Enter a number";
        validAll = false;
    }

    if (validAll) { 
        cardName.innerHTML = name.value;
        formatNumber = ""
        for(let i = 0; i < number.value.length; i++){
            if (i % 4 === 0) {
                formatNumber += ' ';
            }
            formatNumber += number.value[i];
        }
        cardNumber.innerHTML = formatNumber;

        if(month.value.length < 2){
            cardDate.innerHTML = "0" + month.value + "/" + year.value;
        } else {
            cardDate.innerHTML = month.value + "/" + year.value;
        }
        
        cardCNV.innerHTML = cnv.value;
    }
}

let confirmBtn = document.querySelector(".confirm-btn");
confirmBtn.addEventListener("click", getData);

