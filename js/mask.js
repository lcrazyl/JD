$(window).load(function () {
    $(".top").mouseenter(function () {
        $(".bigImg").show();
        $(".mask").show();
        $(document).mousemove(function (e) {
            let l = e.pageX - $(".smallImg").offset().left - 50;
            let t = e.pageY - $(".smallImg").offset().top - 50;
            if (l < 0) { l = 0 }
            if (t < 0) { t = 0 }
            if (l>=$(".smallImg").innerWidth()-$(".mask").innerWidth()) {
                l = $(".smallImg").innerWidth()-$(".mask").innerWidth()
            }   
            
            if (t>=$(".smallImg").innerHeight()-$(".mask").innerHeight()-100) {
                t = $(".smallImg").innerHeight()-$(".mask").innerHeight()-100
            }
            $(".mask").css("left", l);
            $(".mask").css("top", t);
            $(".b").css({
                left: -l,
                top: -t
            })
        })
    });
    $(".top").mouseleave(function () {
        // $(document).off(mousemove);
        // $(".bigImg").hide();
        $(".bigImg").css("display","none");
        $(".mask").hide();

        // alert(1)
      
    })
})