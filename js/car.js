$(window).load(function () {
    $("button").click(function (event) {
            console.log($(event.target).parents($(".right .title")));
    })
})