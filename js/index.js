$(window).load(function () {
    $(".advertis .small").mouseenter(function () {
        // $(".advertis").css("zIndex",100);
        // $(".advertis .big").css("zIndex",100);
        $(".advertis ul").show();
        $(".big ul").stop(true,true).animate({
            "left":0
        }, 1000);
    })


    $(".advertis .small").mouseleave(function () {
        $(".advertis ul").hide();
        $(".big ul").stop(true,true).animate({
            "left": -790
        }, 1000);
    })
})