$(window).load(function () {
    function render() {
        let cook = $.cookie("goods");
        if (cook === null) {
            $(".car_tbody").html('<tr><td><h1>还不去购物？<a href="../html/discount.html">点我赶紧去</a></h1></td></tr>')
        }
        if (cook) {
            let c = JSON.parse(cook);
            if (c.length == 0) {
                $(".car_tbody").html('<tr><td><h1>还不去购物？<a href="../html/discount.html">点我赶紧去</a></h1></td></tr>')
            }
            $(c).each((index, item) => {
                let node = `
                <tr> 
                    <td>
                        <img src=${item.img} alt="">
                        <span class='name'>${item.name}</span>
                    </td>
                    <td>${item.price}</td>
    
                    <td>
                        <input type="number" min="1" value=${item.num} class='num'>
                    </td>
                    <td>
                        <span>${item.price * item.num}</span>
                    </td>
                    <td>
                        <a  class='del'>删除</a>
                    </td>
                </tr>
                
                `
                $(".car_tbody").append(node);
            })
        }
    }

    function renderAllPrice() {
        let cook = $.cookie("goods");
        if (cook) {
            let c = JSON.parse(cook);
            let sum = 0;
            let allNum = 0;
            $(c).each((index, item) => {
                sum += item.price * item.num;
                allNum += item.num;
            })
            $("tfoot a").html(sum);
            $(".shop_tip a").html(parseInt(allNum));
        }
    }

    function changeNum() {
        $(".car_tbody").on('click', ".num", function (e) {
            let name = $(this).closest("tr").find(".name").text();
            let num =parseInt($(this).closest("tr").find(".num").val());

            let cook = $.cookie("goods");
            if (cook) {
                let c = JSON.parse(cook);
                $(c).each((index, item) => {
                    if (item.name === name) {
                        console.log(item.name)
                        if (item.num != num) {
                            console.log(item.num)
                            item.num = num;
                        }

                    }
                })

                $.cookie("goods", JSON.stringify(c), {
                    raw: true,
                    expires: 2
                })
            }

            $(".car_tbody").html('');
            render();
            renderAllPrice();
        })
    }

    function deleteGoods() {
        $(".car_tbody").on('click', '.del', function () {
            // console.log($(this));
            let name = $(this).closest("tr").find(".name").text();
            let cook = $.cookie("goods");
            if (cook) {
                let c = JSON.parse(cook);
                c.pop($(this));

                $.cookie("goods", JSON.stringify(c), {
                    raw: true,
                    expires: 2
                })
            }
            $(".car_tbody").html('');
            render();
            renderAllPrice();
            changeNum();
        })
    }

    render();
    renderAllPrice();
    changeNum()
    deleteGoods();
})