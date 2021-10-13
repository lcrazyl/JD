$(window).load(function () {

    $(".QR_code").mouseenter(function(){
        $(".QR_code").stop(true).animate({left:"-80px"},500);
        $(".QR_code img").eq(1).css("display","block")
    })
    
    $(".QR_code").mouseleave(function(){
        $(".QR_code").stop(true).animate({left:"0"},500);
        $(".QR_code img").eq(1).css("display","none")
    })
})