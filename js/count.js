$(window).load(function () {

    let timer = null;
    timer = setInterval(() => {
        $(".time p").html("");
        let date = new Date(2021, 9, 13, 22, 15, 0);
        let date1 = new Date();

        let s = date - date1;

        let second = parseInt(s / 1000);
        let min = parseInt(second / 60);
        let hour = parseInt(min / 60);
        let str = "距结束还有"+hour % 24 + ":" + min % 60 + ":" + second % 60;

        if (s <= 0) {
            $("body").css("opacity","0.4");
            $("body").css("pointer-events", "none");
            clearInterval(timer);
        }
        $(".time p").html(str);
    }, 1000)


})