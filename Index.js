let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let startBtn = document.getElementById('start');
let int = null;
startBtn.addEventListener('click', ()=>
    {
        if(int!==null){
            clearInterval(int);
        }
        int = setInterval(displayTimer,10);
    }
);

function displayTimer(){
    milliseconds += 10;
    if(milliseconds == 1000){
        seconds += 1;
        milliseconds = 0;
    }
    console.log(seconds);
    timerRef.innerText = seconds;
}