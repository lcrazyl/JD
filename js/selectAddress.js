

$(window).load(function () {
    // 选择位置
    $(".address_all").click(function (event) {
        if (event.target.className == "y") {
            $(".jt").html($(event.target).html())
        }
        return false;
    })

    let divArray = [];
    for (let i = 0; i < 18; i++) {
        $div = $(`<div class='allItem'>
        <div class='left'>
        <div class='top'></div>
        <div class='content'></div>
        </div>
        </div>`);
        $("body").append($div);
        divArray.push($div);
    }
    console.log(divArray[0])
    $(".cate_menu ul li").mouseenter(function () {

    })

});








