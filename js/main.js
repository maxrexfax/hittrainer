"use strict";
let myTmr;
var isWorking = true;
async function sleep(msec) {
    return new Promise(resolve => setTimeout(resolve, msec));
}

function startCycles() {	
	isWorking = true;
    let cyclesF = document.getElementById('cycles').value;
    console.log('Повторов=' + cyclesF);
    document.body.style.background = "lightpink";
    setTarget(cyclesF);
}

function setTarget(c) {
    if (isWorking && c > 0) {
        c--;
        let pause = Math.floor((Math.random() * 5) + 2);
        let item = Math.floor((Math.random() * 4) + 1);
        console.log('Cycles=' + c + '  Pause=' + pause + '   item' + item);
        sleepWork(pause, item, c);
    } else {
        finish();
    }
}

function finish() {
    document.body.style.background = "white";
    hideBtnStop();
}

function hideBtnStop() {
    let stopBtn = document.getElementById("emerg_stop");
    stopBtn.style.display='none';
}

async function sleepWork(p, item, c) {
        p *= 1000;
        await sleep(p);
    if(isWorking){
        document.getElementById(item).style.background = "red";
        await sleep(300);
        document.getElementById(item).style.background = "rgba(255, 255, 255, 0.8)";
        setTarget(c);
    }
}

function countdown() {
    document.getElementById("emerg_stop").style.display = "block";
    showFunction();
    let secs = 6;
    document.getElementById("countdownp").innerText = secs;
    myTmr = setInterval(function() {
        secs--;
        document.getElementById("countdownp").innerText = secs;
        if (secs == 0) {
            hidePopUp();
            startCycles();
        }
    }, 1000);
}

function hidePopUp() {
    myStopFunction();
    hideFunction();
}

function stopPopUp() {
    myStopFunction();
    hideFunction();
    hideBtnStop();
}

function stopWork(){
    isWorking = false;
    document.getElementById("emerg_stop").style.display = "none";
    finish();
}

function myStopFunction() {
    clearInterval(myTmr);
}

function showFunction() {
    let divShadow = document.getElementById("back_shadow");
    let div_popup = document.getElementById("div_popup");
    divShadow.style.display = "block";
    divShadow.style.opacity = 0.6;
    div_popup.style.display = "block";
    div_popup.style.opacity = 1;
}

function hideFunction() {
    let divShadow = document.getElementById("back_shadow");
    let div_popup = document.getElementById("div_popup");
    divShadow.style.opacity = 0;
    divShadow.style.display = "none";
    div_popup.style.opacity = 0;
    div_popup.style.display = "none";
    let stopBtn = document.getElementById("emerg_stop");
    stopBtn.style.display=='none';
}
