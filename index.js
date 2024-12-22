const form = document.getElementById('form');
const Name = document.getElementById('fullName');
const cardNo = document.getElementById('cardNumber');
const month = document.getElementById('month');
const year = document.getElementById('year');
const cvc = document.getElementById('CVC');
const right = document.querySelector('.right');

const nameError = document.getElementById('nameError');
const numberError = document.getElementById('numberError');
const monthError = document.getElementById('monthError');
const yearError = document.getElementById('yearError');
const cvcError = document.getElementById('cvcError');

const cardTextNo = document.getElementById('cardTextNo');
const cardTextName = document.getElementById('cardTextName');
const monthValue = document.getElementById('monthValue');
const yearValue = document.getElementById('yearValue');
const cvcValue = document.getElementById('cvcValue');

const end = document.querySelector('.end');

function formatCardNumber(number) {
    return number.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let errors = false

    nameError.innerText = '';
    numberError.innerText = '';
    monthError.innerText = '';
    yearError.innerText = '';
    cvcError.innerText = '';

    if (Name.value.trim() === ''){
        errors = true;
        nameError.innerText = 'Cant be blank'
        Name.classList.add('incorrect')
    }
    if (cardNo.value.trim() === ''){
        errors = true;
        numberError.innerText = 'Cant be blank'
        cardNo.classList.add('incorrect')
    } else if (cardNo.value.trim().length < 16) {
        errors = true;
        numberError.innerText = 'Card number must be at least 16 digits';
        cardNo.classList.add('incorrect');
    } else if (cardNo.value.trim().length > 16) {
        errors = true;
        numberError.innerText = 'Card number must not be greater than 16 digits';
        cardNo.classList.add('incorrect');
    }
    if (month.value.trim() === ''){
        errors = true;
        monthError.innerText = 'Cant be blank'
        month.classList.add('incorrect')
    }
    if (month.value > 12){
        errors = true;
        monthError.innerText = 'Month not valid'
        month.classList.add('incorrect')
    }
    if (year.value.trim() === ''){
        errors = true;
        yearError.innerText = 'Cant be blank'
        Name.classList.add('incorrect')
    }
    if (year.value < 2024){
        errors = true;
        yearError.innerText = 'Year not valid'
        year.classList.add('incorrect')
    }
    if (cvc.value.trim() === ''){
        errors = true;
        cvcError.innerText = 'Cant be blank'
        cvc.classList.add('incorrect')
    }


    if(!errors){
        right.classList.add('hidden');
        const formattedCardNumber = formatCardNumber(cardNo.value);
        cardTextNo.textContent = formattedCardNumber;
        cardTextName.textContent = Name.value;
        console.log('Form submitted successfully');
        monthValue.textContent = month.value;
        yearValue.textContent = year.value;
        cvcValue.textContent = cvc.value;
        end.classList.remove('hidden');
    }
})
