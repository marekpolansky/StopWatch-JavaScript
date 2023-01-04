let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let interval = null;
let pomocna = '0';
let pomocnami = '0';
let pomocnam = '0';
let pomocnah = '0';

startBtn.addEventListener('click', ()=>
    {
        if(interval!==null){
            clearInterval(interval);
        }
        interval = setInterval(displayTimer,10);
        console.log(interval);
    }
);

stopBtn.addEventListener('click', ()=>
    {
        /*stopping timer*/
        clearInterval(interval);
    }
);

resetBtn.addEventListener('click', ()=>
    {
        clearInterval(interval);
        [milliseconds,seconds,minutes,hours] = [0,0,0,0];
        displayTimer();
    }
);

function displayTimer(){
    milliseconds += 10;
    
    if(milliseconds == 1000){
        seconds += 1;
        milliseconds = 0;
    }
    if (seconds == 60){
        minutes += 1;
        seconds = 0;
    }
    if (minutes == 60){
        hours += 1;
        minutes = 0;
    }
    
    if (seconds > 9){
        pomocna = '';
    }
    if (minutes > 9){
        pomocnam = '';
    }
    if (hours > 9){
        pomocnah = '';
    }
    if (milliseconds > 99){
        pomocnami = '';
    }
    if (milliseconds == 0){
        pomocnami = '0';
    }
    if (seconds == 0){
        pomocna = '0';
    }
    if (minutes == 0){
        pomocnam = '0';
    }
    if (hours == 0){
        pomocnah = '0';
    }
    console.log(pomocnami);

    
    timerRef.innerText = pomocnah + hours + ' : ' + pomocnam + minutes + ' : ' + pomocna + seconds + ' : ' + pomocnami + milliseconds / 10;
}