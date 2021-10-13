// 定义一个动画函数 
function animate(dom, cssObj, duration, callback) {
    // 获取元素现在的cssObj中的属性值
    var computedStyle = getComputedStyle(dom);
    // 定义一个起点对象 里面放的是起点值  cssObj中放的是终点值
    var nowObj = {};
    for (var i in cssObj) {
        nowObj[i] = parseInt(computedStyle[i]);
    }
    // 定义单次时间
    var interval = 20;
    // 定义步数 
    var allStep = duration / interval;
    // 定义单次步数
    var step = 0;

    // 开启定时器
    var timer = setInterval(function () {
        // 步数+1
        step++;
        // 改变元素的样式
        for (var i in cssObj) {
          if (i === "opacity") {
            dom.style[i] = nowObj[i] + step * (cssObj[i] - nowObj[i]) / allStep;
          } else {
            dom.style[i] = nowObj[i] + step * (cssObj[i] - nowObj[i]) / allStep + "px";
          }
        }

        // 如果已经走了的步数 大于等于了应当走的步数 就停止
        if (step >= allStep) {
            clearInterval(timer);
            callback && callback();
        }

    }, interval);

}

