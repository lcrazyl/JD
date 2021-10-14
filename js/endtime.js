
    var hoursDom = document.querySelector("#hours")
    var minutesDom = document.querySelector("#minutes")
    var secondsDom = document.querySelector("#seconds")
    var sh = setInterval(function () {
        var d = new Date();
        var d1 = new Date(2021, 10, 13, 18, 0, 0);
        var num = d1 - d;
        var seconds = parseInt(num / 1000);
        var minutes = parseInt(seconds / 60);
        var hours = parseInt(minutes / 60);
        hoursDom.innerHTML =hours%24;
        minutesDom.innerHTML = minutes%60;
        secondsDom.innerHTML = seconds%60;
        var clear = num / 1000;
        if((hours%24) > 0 && (hours%24) < 10) {
            hoursDom.innerHTML ="0"+hours%24;
        } else if(hours%24 === 0) {
            hoursDom.innerHTML ="00";
        }
        if((minutes%60) > 0 && (minutes%60) < 10) {
            minutesDom.innerHTML = "0"+minutes%60;
        } else if(minutes%60 === 0 ){
            minutesDom.innerHTML = "00";
        }
        if((seconds%60) > 0 && (seconds%60) < 10){
            secondsDom.innerHTML = "0"+seconds%60;
        } else if(seconds%60 === 0){
            secondsDom.innerHTML = "00";
        }
        if(clear <= 0) {
            alert("秒杀结束");
            clearInterval(sh)
        }
    }, 1000)
    
