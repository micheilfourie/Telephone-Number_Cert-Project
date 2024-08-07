const userInput = document.querySelector('#user-input');
const checkBtn = document.querySelector('#check-btn');
const clearBtn = document.querySelector('#clear-btn');
const resultsDiv = document.querySelector('#results-div');

checkBtn.onclick = check;
clearBtn.onclick = clear;

function check() {
    let number = userInput.value;

    if (number == "") {
        alert("Please provide a phone number");
    } else if (checkPhoneNumber(number)) {
        resultsDiv.innerHTML = "Valid US number: " + number;
    } else {
        resultsDiv.innerHTML = "Invalid US number: " + number;
    }
}

function clear() {
    resultsDiv.innerHTML = "";
}

function checkPhoneNumber(number) {
    const phoneRegex = /^(1[\s-]?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

    if (phoneRegex.test(number)) {
        return true
    } else {
        return false
    }
}