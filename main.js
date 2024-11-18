
const form = document.getElementById('registration-form');
const ageInput = document.getElementById('age');
const earlyRegistrationInput = document.getElementById('early-registration');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  let raceNumber = Math.floor(Math.random() * 1000);
  const registeredEarly = earlyRegistrationInput.checked; 
  const runnerAge = parseInt(ageInput.value); 

  let resultMessage = '';

  
  if (runnerAge > 18 && registeredEarly) {
    raceNumber += 1000;
    resultMessage = `Your race number is ${raceNumber}. You will race at 9:30 am.`;
  }
  else if (runnerAge > 18 && !registeredEarly) {
    resultMessage = `Your race number is ${raceNumber}. You will race at 11:00 am.`;
  }
  else if (runnerAge < 18) {
    resultMessage = `Your race number is ${raceNumber}. You will race at 12:30 pm.`;
  }
  else {
    resultMessage = "Please see the registration desk.";
  }

 
  resultDiv.innerHTML = `<p>${resultMessage}</p>`;
  resultDiv.style.display = 'block'; 
});
