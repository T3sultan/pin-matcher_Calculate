function getPin() {

    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin
}



//calculator
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('input');
    if (isNaN(number)) {
        if(number == 'C'){

            calcInput.value='';
        }
    }
    else {   
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number
        calcInput.value = newNumber
    }

});

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const input=document.getElementById('input').value;
    const success=   document.getElementById('pinSuccess');
    const fail=document.getElementById('pinError');


    if(pin == input){
      success.style.display='block';
      fail.style.display='none'

    }
    else{
        success.style.display='none';
        fail.style.display='block'
    }
}