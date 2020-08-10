

//Starting Function
function initHoroscopeFunc() {
document.querySelector('.know-destiny-btn').addEventListener('click', timer);
}

//Timer Function
function timer() {
window.setInterval(startCount, 200);
this.innerHTML = 'Get Prediction!';
this.addEventListener('click', showPrediction);
this.removeEventListener('click', timer);
}

//Start Counting
function startCount() {
document.querySelector('.timer').innerHTML = getRandomArbitrary(1, 8);
}

//Show Prediction and Stop Timer
function showPrediction() {
  let obj = predictionObj();
  let number = document.querySelector('.timer').innerHTML;
  for(let key in obj) {
  if(key == number) {
  document.querySelector('.result').classList.remove('d-none');
  document.querySelector('.result').innerHTML = obj[key];
  document.querySelector('.col').removeChild(document.querySelector('.know-destiny-btn'));
  }
  }
  window.clearInterval(1);
}



//Secondary Functions

//Getting random number in range
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//Predictions are stored here
function predictionObj() {
let prediction = {
1 : 'Today it\'s up to you to create the peacefulness you long for.',
2 : 'If you refuse to accept anything but the best, you very often get it.',
3 : 'Change can hurt, but it leads a path to something better.',
4 : 'People are naturally attracted to you.',
5 : 'A chance meeting opens new doors to success and friendship.',
6 : 'Be on the lookout for coming events; They cast their shadows beforehand.',
7 : 'The man or woman you desire feels the same about you.',
}
return prediction;
}
