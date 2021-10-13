window.onload=function(){
        var leftBtn = document.querySelector("#leftBtn");
        var rightBtn = document.querySelector("#rightBtn");
        var imgList = document.querySelector(".img-list");
        var banner_left = document.querySelector("#banner_left");
        var cirList = document.querySelector(".cir-list");
        var cirLis = document.querySelectorAll(".cir-list li");
        var width =560;
        var time = 1000;
        var idx = 0;
        var lock = true;

        rightBtn.onclick = function () {
            if (!lock) {
                return;
            }
            lock = false;
            idx++;
            animate(imgList, { left: -idx * width }, time, function () {
                if (idx === cirLis.length) {
                    idx = 0;
                    imgList.style.left = 0;
                }
                lock = true;
            })
            changeColor();
           
        }


        leftBtn.onclick = function () {
            if (!lock) {
                return;
            }
            lock = false;
            idx--;
            if (idx < 0) {
                idx = cirLis.length;
                imgList.style.left = -idx * width + "px";
                idx--;
            }
            animate(imgList, { left: -idx * width }, time, function () {
                lock = true;
            })
            changeColor();
        }
        for (var i = 0; i < cirLis.length; i++) {
            (function (m) {
                cirLis[m].onclick = function () {
                    if (!lock) {
                        return;
                    }
                    lock = false;
                    idx = m;
                    animate(imgList, { left: -idx * width }, time, function () {
                        lock = true;
                    });
                    changeColor();
                }
            })(i)
        }

        function changeColor() {
            for (var i = 0; i < cirLis.length; i++) {
                cirLis[i].className = "";
            }
            cirLis[idx === cirLis.length ? 0 : idx].className = "active";
        }


        // 自动轮播
        // 让代码自动执行 => 定时器
        var timer = setInterval(function () {
            rightBtn.onclick();
        }, 1000)


        // 给banner添加mouseenter
        banner_left.onmouseenter = function () {
            cirList.style.display = "flex";
            leftBtn.style.display = "block";
            rightBtn.style.display = "block";
            clearInterval(timer);
        }

        banner_left.onmouseleave = function () {
            timer = setInterval(function () {
                rightBtn.onclick();
            }, 1000)
        }




    // 获取li元素们
    var lis = document.querySelectorAll(".img-list2 li");
    // 获取左右按钮
    var leftbtn = document.querySelector("#leftbtn");
    var rightbtn = document.querySelector("#rightbtn");
    var banner_right = document.querySelector(".banner_right");
    var time2=1000;
    // 定义信号量
    var idx2 = 0;

    // 定义锁
    var lock2 = true;

    // 点击事件
    rightbtn.onclick = function () {
        if (lock2 === false) {return;}
        lock2 = false;


        // 原图淡出(淡出：透明度逐渐变为0)
        animate(lis[idx2], { opacity: 0 }, time2);
        // 更改信号量
        idx2++;
        if (idx2 >= lis.length) {
            idx2 = 0;
        }
        // 新图淡入(淡入 透明度逐渐变为1)
        animate(lis[idx2], { opacity: 1 },time2, function() {
            lock2 = true;
        });
    }


    leftbtn.onclick = function () {
        if (lock2 === false) {
            return;
        }
        lock2 = false;
        // 原图淡出(淡出：透明度逐渐变为0)
        animate(lis[idx2], { opacity: 0 }, time2);
        // 更改信号量
        idx2--;
        if (idx2 < 0) {
            idx2 = lis.length - 1;
        }
        // 新图淡入(淡入 透明度逐渐变为1)
        animate(lis[idx2], { opacity: 1 }, time2, function() {
            lock2 = true;
        });
    }

    var timer = setInterval(function () {
        rightbtn.onclick();
    }, 1000)



    //给banner添加mouseenter
    banner_right.onmouseenter = function () {
        leftbtn.style.display="block"
        rightbtn.style.display="block"
        clearInterval(timer);
    }

    banner_right.onmouseleave = function () {
        leftbtn.style.display="none"
        rightbtn.style.display="none"
        timer = setInterval(function () {
            rightbtn.onclick();
        }, 1000)
    }
}
