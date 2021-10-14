

$(window).load(function () {
    $("button").on("click", function (e) {
        let goodsName = $(".title").text();
        let goodsPrice = parseFloat($(".price p a").text());
        let goodsPic = $(".top img").attr("src");
        let num = parseInt($(".buy input").val());

        let isData = $.cookie("goods") === null ? false : true;

        if (!isData) {
            let coo = $.cookie("goods", JSON.stringify([{ "img": goodsPic, "name": goodsName, "num": num, "price": goodsPrice }]), {
                raw: true,
                expires: 2
            });
        } else {
            let cook = $.cookie("goods");
            let cookp = JSON.parse(cook);
            console.log(cookp);
            let same = false;
            $(cookp).each((index, item) => {
                if (item.name == goodsName) {
                    item.num += num;
                    same = true;
                    return;
                }
            })

            if (!same) {
                cookp.push({ "img": goodsPic, "name": goodsName, "num": num, "price": goodsPrice })
            }
            $.cookie("goods", JSON.stringify(cookp), {
                raw: true,
                expires: 2
            })
        }

      


    })

   
})