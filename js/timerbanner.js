let ulDom = document.querySelector("#limit .timebanner .img-list");
let rightBtn = document.querySelector("#limit .timebanner #rightBtn");
let leftBtn = document.querySelector("#limit .timebanner #leftBtn");
var timeBanner = document.querySelector("#limit .timebanner")
let timeLock = true;
var timeIdx = 0;
rightBtn.onclick = function() {
    if(!timeLock){
        return;
    }
    timeLock = false;
    timeIdx++;
    animate(ulDom,{left:-800*timeIdx},1000,function() {
        if(timeIdx === 2) {
            timeIdx = 0;
            ulDom.style.left = 0;
        }
        timeLock = true;
    })
}
leftBtn.onclick = function() {
    if(!timeLock){
        return;
    }
    timeLock = false;
    timeIdx--;
    if(timeIdx<0){
        timeIdx = 2;
        ulDom.style.left =-1600 + "px";
        timeIdx--;
    }
    animate(ulDom,{left:-timeIdx * 800},1000,function() {
        timeLock = true;
    })
}
timeBanner.onmouseenter = function() {
    leftBtn.style.display = "block"
    rightBtn.style.display = "block"
}
timeBanner.onmouseleave = function() {
    leftBtn.style.display = "none"
    rightBtn.style.display = "none"
}