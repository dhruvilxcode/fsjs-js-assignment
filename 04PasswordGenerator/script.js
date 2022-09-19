const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const result = document.getElementById("result");

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    const password = result.innerText;

    // copy to clipboard using navigator api
    navigator.clipboard.writeText(password);
})

generateEl.addEventListener('click', () => {
    const length = lengthEl.value;
    const isLower = lowercaseEl.checked;
    const isUpper = uppercaseEl.checked;
    const isNumber = numbersEl.checked;
    const isSymbols = symbolsEl.checked;

    const pass = generatePassword(isLower, isUpper, isNumber, isSymbols, length);

    result.innerText = pass;
})

function generatePassword(lower, upper, number, symbol, length) {
    let tempPass="";
    let i = 0;
    if (length === 0 || (!lower && !upper && !number && !symbol)) {
        return tempPass;
    } 
    while( i < length ) {
        if(lower) {
            tempPass += randomFunc.lower();
            i++;
        }
        if(upper) {
            tempPass += randomFunc.upper();
            i++;
        }
        if(number) {
            tempPass += randomFunc.number();
            i++;
        }
        if(symbol) {
            tempPass += randomFunc.symbol();
            i++;
        }
    }
    return tempPass;
}

function getRandomLower() {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    return lower[Math.floor(Math.random() * lower.length)];
}

function getRandomUpper() {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return upper[Math.floor(Math.random() * upper.length)];
}

function getRandomNumber() {
    const numbers = "0123456789";
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRandomSymbol() {
    const symbols = "-+,.;'[]=()*#@!";
    return symbols[Math.floor(Math.random() * symbols.length)];
}