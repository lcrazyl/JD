$(window).load(function () {

    let timer = null;
    timer = setInterval(() => {
        $(".dis_time span").html("");
        let date = new Date(2021, 10, 13, 18, 0, 0);
        let date1 = new Date();

        let s = date - date1;

        let second = parseInt(s / 1000);
        let min = parseInt(second / 60);
        let hour = parseInt(min / 60);
        // let str = "距结束还有"+hour % 24 + ":" + min % 60 + ":" + second % 60;

        if (s <= 0) {
            $("body").css("opacity","0.4");
            $("body").css("pointer-events", "none");
            clearInterval(timer);
        }
        $(".dis_time span").eq(0).html(hour%24);
        $(".dis_time span").eq(1).html(min%24);
        $(".dis_time span").eq(2).html(second%24);
    }, 1000)
})