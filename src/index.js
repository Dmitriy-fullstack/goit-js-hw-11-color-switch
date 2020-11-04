const startEl = document.querySelector('.start');
const stopEl = document.querySelector('.stop');
let bodyColor = null;
let interval = null;
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
     
  
startEl.addEventListener('click', onStartClick);
stopEl.addEventListener('click', onStopClick);

function setRandomColor (){
    bodyColor = colors[randomIntegerFromInterval(0,  colors.length - 1)];
    document.body.style.background = bodyColor;
}

function onStartClick(){
    if (startEl.disabled) {return}
    startEl.disabled = true;
    interval = setInterval(() => setRandomColor(), 1000);
      
}

function onStopClick(){
    startEl.disabled = false;
    clearInterval(interval);
}


