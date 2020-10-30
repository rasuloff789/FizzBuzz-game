var writingForm = document.querySelector('.writing-wrapper');
var writingPlaceForNumber = writingForm.querySelector('.number-writing-place');
var submitWrittenNumber = writingForm.querySelector('.submit-written');
var resultText = document.querySelector('.result-text');
var minustext = writingForm.querySelector('.minus-text');



writingForm.addEventListener('submit' , function(evt){
  evt.preventDefault();
  
  var writtenNumber = parseFloat(writingPlaceForNumber.value.trim() , 10);
  
  if (isNaN(writtenNumber)){
    minustext.classList.remove('d-none');
    minustext.classList.add('d-block');
    resultText.textContent = "";
    resultText.classList.add('d-none');
    resultText.classList.remove('d-block');
    return;
  }
  
  if( writtenNumber % 3 === 0 && writtenNumber % 5 === 0 ){
    resultText.textContent = "FizzBuzz";
    resultText.classList.remove('d-none');
    resultText.classList.add('d-block');
    minustext.classList.add('d-none');
    minustext.classList.remove('d-block');
    return;
  }
  
  if( writtenNumber % 3 === 0){
    resultText.textContent = "Fizz";
    resultText.classList.remove('d-none');
    resultText.classList.add('d-block');
    minustext.classList.add('d-none');
    minustext.classList.remove('d-block');
    return;
  }
  
  
  if( writtenNumber % 5 === 0){
    resultText.textContent = "Buzz";
    resultText.classList.remove('d-none');
    resultText.classList.add('d-block');
    minustext.classList.add('d-none');
    minustext.classList.remove('d-block');
    return;
  }
  
  
  if( writtenNumber % 3 != 0 || writtenNumber % 5 != 0 ){
    minustext.classList.add('d-none');
    minustext.classList.remove('d-block');
    resultText.textContent = "Algoritmda ko'rsatilmagan sonlarga bo'linmaydi";
    resultText.classList.remove('d-none');
    resultText.classList.add('d-block');
  }
  
})