let cardNumber = document.querySelector('.number_in_card')
let inputCardNumber = document.querySelector('.input_number')

let cardName = document.querySelector('.name_in_card')
let inputCardName = document.querySelector('.input_name')

let cardMonth = document.querySelector('.exp_month')
let inputCardMonth = document.querySelector('.input_month')

let cardYear = document.querySelector('.exp_year')
let inputCardYear = document.querySelector('.input_year')

let cardCVC = document.querySelector('.cvc_number')
let inputCardCVC = document.querySelector('.input_cvc')

const allVar = [inputCardNumber, inputCardName, inputCardMonth, inputCardYear, inputCardCVC]

allVar.map(item => {
item.addEventListener('input', function(){
    if(item.className === 'input_number') {
       cardNumber.textContent = inputCardNumber.value 
    } else if (item.className === 'input_name') {
      cardName.textContent = inputCardName.value
    } else if (item.className === 'box input_month') {
      cardMonth.textContent = inputCardMonth.value 
    } else if (item.className === 'box input_year') {
      cardYear.textContent = inputCardYear.value 
    } else if (item.className ===  'input_cvc') {
     cardCVC.textContent = inputCardCVC.value 
    }
})})