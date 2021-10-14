$(window).load(function () {
    $.ajax({
        url: '../json/discount.json',
        success: function (res) {
            $(res).each((index, item) => {
                let node = `
        <li>
            <section class="img">
                <a href="./d${index + 1}.html">
                    <img src="${item.pic}" alt="d1">
                </a>
                </section>
                <section class="title">
                    <a href="./d${index + 1}.html">${item.title}</a>
                </section>
                <section class="ac">
                    <a href="./d${index + 1}.html">${item.sm_title}</a>
                </section>
                <section class="ad">
                    <p>￥${item.price}</p>
                    <a class="button" href="./d${index + 1}.html">立即抢购</a>
            </section>
        </li>
                    
                    `
                   
                $(".dis_ul").append(node);
            })
        }
    })
})


