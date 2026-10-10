let ms = 0;
let sec = 0;
let min = 0;
let hr = 0;

let timer = null;

const display = document.querySelector(".timer");
const lapList = document.querySelector(".lap-history");

function updateDisplay(){
    let h = hr.toString().padStart(2,'0');
    let m = min.toString().padStart(2,'0');
    let s = sec.toString().padStart(2,'0');
    let milli = ms.toString().padStart(2,'0');
    display.innerHTML = `${h}:${m}:${s}:${milli}`;
}

function stopwatch(){
    ms++;
    if(ms==100){
        ms=0;
        sec++;
    }
    if(sec==60){
        sec=0;
        min++;
    }
    if(min==60){
        min=0;
        hr++;
    }
    updateDisplay();
}

document.querySelector(".start").onclick = function(){
    if(timer!==null) return;
    timer=setInterval(stopwatch,10);
}

document.querySelector(".pause").onclick = function(){
    clearInterval(timer);
    timer=null;
}

document.querySelector(".reset").onclick = function(){
    clearInterval(timer);
    timer=null;
    hr=0;
    min=0;
    sec=0;
    ms=0;
    updateDisplay();
    lapList.innerHTML="";
}

document.querySelector(".lap").onclick = function(){
    if(timer===null) return;
    const h6=document.createElement("h3");
    h6.innerHTML=display.innerHTML;
    h6.classList.add("lap-info")
    lapList.appendChild(h6);
}