

$(window).load(function () {
    // 选择位置
    $(".address_all").click(function (event) {
        if (event.target.className == "y") {
            $(".jt").html($(event.target).html())
        }
        return false;
    })


    $(".cate_menu ul li").mouseenter(function (e) {
        let idx = $(e.target).index();
        $(".allItem").css("display", "none");
        $(".allItem").eq(idx).css("display", "block");
    })

    $(".cate_menu ul li").mouseleave(function () {
        $(".allItem").css("display", "none");
    })


    // 创建元素
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
    // 每个li中的.content的p元素数量
    let contentNum = [9, 8, 9, 11, 6, 10, 9, 10, 10, 10, 12, 10, 9, 13, 10, 7, 13, 12];
    // 每个li中的.top的p元素数量
    let tiitleNum = [6, 5, 5, 6, 5, 7, 8, 7, 6, 5, 5, 6, 6, 5, 6, 2, 7, 5];

    // 创建.top下的p元素
    for (let i = 0; i < $(".allItem").length; i++) {
        for (let j = 0; j < tiitleNum[i]; j++) {
            $topP = $("<p></p>");
            $(".allItem .top").eq(i).append($topP);
        }
    }


    // 创建.content下的p元素
    for (let i = 0; i < contentNum.length; i++) {
        for (let j = 0; j < contentNum[i]; j++) {
            $p = $("<p></p>");
            $(".allItem .content").eq(i).append($p);
        }
    }





    let data0 = {
        title: [
            "家电馆 ",
            "家电专卖店 ",
            "家电服务 ",
            "企业采购 ",
            "商用电器 ",
            "高价回收 "
        ],
        con: {
            0: [
                "<a href='#'>电视 > </a>",
                "<a href='#'>全面屏</a>",
                "<a href='#'>电视教 </a>",
                "<a href='#'>电视OLE </a>",
                "<a href='#'>电视智慧 </a>",
                "<a href='#'>4K超清电视</a>",
                "<a href='#'>55英寸</a>",
                "<a href='#'>65英寸</a>",
                "<a href='#'>电视配件</a>"
            ],
            1: [
                "<a href='#'>空调 > </a>",
                "<a href='#'>空调挂机</a>",
                "<a href='#'>空调柜机</a>",
                "<a href='#'>中央空调</a>",
                "<a href='#'>变频空调</a>",
                "<a href='#'>一级能效</a>",
                "<a href='#'>移动空调</a>",
                "<a href='#'>以旧换新</a>"
            ],
            2: [
                "<a href='#'>洗衣机 > </a>",
                "<a href='#'>滚筒洗衣机</a>",
                "<a href='#'>洗烘一体机</a>",
                "<a href='#'>波轮洗衣机</a>",
                "<a href='#'>迷你洗衣机</a>",
                "<a href='#'>烘干机</a>",
                "<a href='#'>洗衣机配件</a>"
            ],
            3: [
                "<a href='#'>冰箱 > </a>",
                "<a href='#'>多门</a>",
                "<a href='#'>对开门</a>",
                "<a href='#'>三门</a>",
                "<a href='#'>双门冷柜/冰吧</a>",
                "<a href='#'>酒柜</a>",
                "<a href='#'>冰箱配件</a>"
            ],
            4: [
                "<a href='#'>厨房大电 > </a>",
                "<a href='#'>油烟机</a>",
                "<a href='#'>燃气灶</a>",
                "<a href='#'>烟灶套装</a>",
                "<a href='#'>集成灶</a>",
                "<a href='#'>消毒柜</a>",
                "<a href='#'>洗碗机</a>",
                "<a href='#'>电热水器</a>",
                "<a href='#'>燃气热水器</a>",
                "<a href='#'>太阳能热水器</a>",
                "<a href='#'>嵌入式厨电</a>",
                "<a href='#'>烟机灶具配件</a>"
            ],
            5: [
                "<a href='#'>厨房小电 > </a>",
                "<a href='#'>破壁机</a>",
                "<a href='#'>咖啡机</a>",
                "<a href='#'>榨汁机</a>",
                "<a href='#'>电炖锅</a>",
                "<a href='#'>果蔬净化清洗机</a>",
                "<a href='#'>三明治机/早餐机</a>",
                "<a href='#'>电烤箱</a>",
                "<a href='#'>厨师机/和面机</a>",
                "<a href='#'>料理机</a>",
                "<a href='#'>电饼铛</a>",
                "<a href='#'>电水壶/热水瓶</a>",
                "<a href='#'>面包机</a>",
                "<a href='#'>电火锅</a>",
                "<a href='#'>空气炸锅</a>",
                "<a href='#'>养生壶</a>",
                "<a href='#'>电磁炉</a>",
                "<a href='#'>电饭煲</a>",
                "<a href='#'>电压力锅</a>",
                "<a href='#'>微波炉</a>",
                "<a href='#'>面条机</a>",
                "<a href='#'>电陶炉</a>",
                "<a href='#'>电烧烤炉</a>",
                "<a href='#'>煮蛋器</a>",
                "<a href='#'>电热饭盒</a>",
                "<a href='#'>豆浆机</a>"
            ],
            6: [
                "<a href='#'>生活电器 > </a>",
                "<a href='#'>电风扇</a>",
                "<a href='#'>冷风扇</a>",
                "<a href='#'>空气净化器</a>",
                "<a href='#'>净水器</a>",
                "<a href='#'>饮水机</a>",
                "<a href='#'>茶吧机</a>",
                "<a href='#'>加湿器</a>",
                "<a href='#'>吸尘器</a>",
                "<a href='#'>扫地机器人</a>",
                "<a href='#'>洗地机</a>",
                "<a href='#'>蒸汽/电动拖把</a>",
                "<a href='#'>除螨仪</a>",
                "<a href='#'>擦地/擦窗机器人</a>",
                "<a href='#'>挂烫机/熨斗</a>",
                "<a href='#'>干衣机</a>",
                "<a href='#'>除湿机</a>",
                "<a href='#'>电话机</a>",
                "<a href='#'>取暖器</a>",
                "<a href='#'>毛球修剪器</a>",
                "<a href='#'>生活电器配件</a>"
            ],
            7: [
                "<a href='#'>个护健康 > </a>",
                "<a href='#'>剃须刀</a>",
                "<a href='#'>电动牙刷</a>",
                "<a href='#'>冲牙器</a>",
                "<a href='#'>电吹风</a>",
                "<a href='#'>卷/直发器</a>",
                "<a href='#'>理发器</a>",
                "<a href='#'>美容仪</a>",
                "<a href='#'>剃/脱毛器</a>",
                "<a href='#'>洁面仪</a>",
                "<a href='#'>按摩器</a>",
                "<a href='#'>按摩椅</a>",
                "<a href='#'>足浴盆</a>",
                "<a href='#'>足疗机</a>",
                "<a href='#'>电动牙刷头</a>",
                "<a href='#'>健康秤"
            ],
            8: [
                "<a href='#'>视听影音 > </a>",
                "<a href='#'>家庭影院</a>",
                "<a href='#'>KTV音响</a>",
                "<a href='#'>迷你音响</a>",
                "<a href='#'>DVD功放</a>",
                "<a href='#'>回音壁</a>",
                "<a href='#'>麦克风</a>"
            ]
        }
    }

    let data1 = {
        title: [
            "手机频道",
            "网上营业厅",
            "配件频道",
            "智能数码",
            "影像Club"
        ],
        con: {
            0: [
                "<a href='#'>手机通讯 > </a>",
                "<a href='#'>手机</a>",
                "<a href='#'>游戏手机</a>",
                "<a href='#'>5G手机</a>",
                "<a href='#'>拍照手机</a>",
                "<a href='#'>全面屏手机</a>",
                "<a href='#'>老人机</a>",
                "<a href='#'>对讲机</a>",
                "<a href='#'>以旧换新</a>",
                "<a href='#'>手机维修</a>"
            ],
            1: [
                "<a href='#'>运营商 > </a>",
                "<a href='#'>合约机</a>",
                "<a href='#'>手机卡</a>",
                "<a href='#'>宽带</a>",
                "<a href='#'>充话费/流量</a>",
                "<a href='#'>中国电信</a>",
                "<a href='#'>中国移动</a>",
                "<a href='#'>中国联通</a>",
                "<a href='#'>京东通信</a>",
                "<a href='#'>挑靓号</a>",
            ],
            2: [
                "<a href='#'>手机配件 > </a>",
                "<a href='#'>手机壳</a>",
                "<a href='#'>贴膜</a>",
                "<a href='#'>手机存储卡</a>",
                "<a href='#'>数据线</a>",
                "<a href='#'>充电器</a>",
                "<a href='#'>手机</a>",
                "<a href='#'>耳机</a>",
                "<a href='#'>创意配件</a>",
                "<a href='#'>手机饰品</a>",
                "<a href='#'>手机电池</a>",
                "<a href='#'>苹果周边</a>",
                "<a href='#'>移动电源</a>",
                "<a href='#'>蓝牙耳机</a>",
                "<a href='#'>手机支架</a>",
                "<a href='#'>拍照配件</a>",
            ],
            3: [
                "<a href='#'>摄像摄影 > </a>",
                "<a href='#'>数码相机</a>",
                "<a href='#'>微单相机</a>",
                "<a href='#'>单反相机</a>",
                "<a href='#'>拍立得</a>",
                "<a href='#'>运动相机</a>",
                "<a href='#'>摄像机</a>",
                "<a href='#'>镜头</a>",
                "<a href='#'>户外器材</a>",
                "<a href='#'>影棚器材</a>",
                "<a href='#'>冲印服务</a>",
                "<a href='#'>数码相框</a>",
            ],
            4: [
                "<a href='#'>数码配件 > </a>",
                "<a href='#'>存储卡</a>",
                "<a href='#'>三脚架/云台</a>",
                "<a href='#'>相机包</a>",
                "<a href='#'>滤镜</a>",
                "<a href='#'>闪光灯/手柄</a>",
                "<a href='#'>相机清洁/贴膜</a>",
                "<a href='#'>机身附件",
                "<a href='#'>镜头附件</a>",
                "<a href='#'>读卡器</a>",
                "<a href='#'>支架</a>",
                "<a href='#'>电池/充电器</a>",
            ],
            5: [
                "<a href='#'>影音娱乐 > </a>",
                "<a href='#'>耳机/耳麦</a>",
                "<a href='#'>音箱/音响</a>",
                "<a href='#'>智能音箱</a>",
                "<a href='#'>收音机</a>",
                "<a href='#'>麦克风</a>",
                "<a href='#'>MP3/MP4</a>",
                "<a href='#'>专业音频</a>",
                "<a href='#'>音频线</a>",


            ],
            6: [
                "<a href='#'>智能设备 > <a/>",
                "<a href='#'>智能手表</a>",
                "<a href='#'>智能手环</a>",
                "<a href='#'>监控摄像</a>",
                "<a href='#'>体感车</a>",
                "<a href='#'>智能眼镜</a>",
                "<a href='#'>智能家居</a>",
                "<a href='#'>健康监测</a>",
                "<a href='#'>无人机</a>",
                "<a href='#'>智能机器人</a>",
                "<a href='#'>智能配饰</a>",
                "<a href='#'>运动跟踪器</a>",
            ],
            7: [
                "<a href='#'>电子教育 > </a>",
                "<a href='#'>学生平板</a>",
                "<a href='#'>点读机/笔</a>",
                "<a href='#'>早教益智</a>",
                "<a href='#'>录音笔</a>",
                "<a href='#'>电纸书</a>",
                "<a href='#'>电子词典</a>",
                "<a href='#'>复读机</a>",
                "<a href='#'>翻译机</a>",
            ]

        }

    }

    let data2 = {
        title: [

            "电脑办公",
            "企业采购",
            "GAME+",
            "装机大师",
            "企业租赁",

        ],
        con: {
            0: [
                "<a href='#'>电脑整机 ></a>",
                "<a href='#'>笔记本</a>",
                "<a href='#'>游戏本</a>",
                "<a href='#'>平板电脑</a>",
                "<a href='#'>台式机</a>",
                "<a href='#'>一体机</a>",
                "<a href='#'>服务器/工作站</a>",
            ],
            1: [
                "<a href='#'>电脑配件 > </a>",
                "<a href='#'>显示器 </a>",
                "<a href='#'>CPU主板 </a>",
                "<a href='#'>显卡 </a>",
                "<a href='#'>硬盘 </a>",
                "<a href='#'>内存 </a>",
                "<a href='#'>机箱 </a>",
                "<a href='#'>电源 </a>",
                "<a href='#'>散热器 </a>",
                "<a href='#'>显示器 </a>",
                "<a href='#'>支架 </a>",
                "<a href='#'>刻录机/光驱声卡/扩展卡 </a>",
                "<a href='#'>装机配件 </a>",
                "<a href='#'>SSD固态硬盘 </a>",
                "<a href='#'>组装电脑 </a>",
                "<a href='#'>USB分线器 </a>",
                "<a href='#'>主板 </a>",
                "<a href='#'>CPU套装 </a>",

            ],
            2: [
                "<a href='#'>外设产品 ></a>",
                "<a href='#'>鼠标</a>",
                "<a href='#'>键盘</a>",
                "<a href='#'>键鼠套装</a>",
                "<a href='#'>网络仪表仪器</a>",
                "<a href='#'>U盘</a>",
                "<a href='#'>移动固态硬盘</a>",
                "<a href='#'>移动硬盘</a>",
                "<a href='#'>鼠标垫</a>",
                "<a href='#'>摄像头</a>",
                "<a href='#'>线缆</a>",
                "<a href='#'>手写板</a>",
                "<a href='#'>硬盘盒</a>",
                "<a href='#'>电脑工具</a>",
                "<a href='#'>电脑清洁</a>",
                "<a href='#'>UPS电源插座</a>",
                "<a href='#'>平板电脑配件</a>",
                "<a href='#'>笔记本配件</a>",

            ],
            3: [
                "<a href='#'>游戏设备 ></a>",
                "<a href='#'>游戏机</a>",
                "<a href='#'>游戏耳机</a>",
                "<a href='#'>手柄/方向盘</a>",
                "<a href='#'>游戏软件</a>",
                "<a href='#'>游戏周边</a>",

            ],
            4: [
                "<a href='#'>网络产品 ></a>",
                "<a href='#'>路由器</a>",
                "<a href='#'>网络机顶盒</a>",
                "<a href='#'>交换机</a>",
                "<a href='#'>网络存储</a>",
                "<a href='#'>网卡</a>",
                "<a href='#'>5G/4G上网</a>",
                "<a href='#'>网线</a>",
                "<a href='#'>网络配件</a>",

            ],
            5: [
                "<a href='#'>办公设备 ></a>",
                "<a href='#'>投影机</a>",
                "<a href='#'>投影配件</a>",
                "<a href='#'>打印机</a>",
                "<a href='#'>传真设备</a>",
                "<a href='#'>验钞/点钞机</a>",
                "<a href='#'>扫描设备</a>",
                "<a href='#'>复合机</a>",
                "<a href='#'>碎纸机</a>",
                "<a href='#'>考勤门禁</a>",
                "<a href='#'>收银机</a>",
                "<a href='#'>会议音频</a>",
                "<a href='#'>视频保险柜</a>",
                "<a href='#'>装订/封装机</a>",
                "<a href='#'>安防监控</a>",
                "<a href='#'>白板</a>",

            ],
            6: [
                "<a href='#'>文具 ></a>",
                "<a href='#'>笔类</a>",
                "<a href='#'>本册/便签</a>",
                "<a href='#'>办公文具</a>",
                "<a href='#'>文件收纳</a>",
                "<a href='#'>学生文具</a>",
                "<a href='#'>计算器</a>",
                "<a href='#'>画具画材</a>",
                "<a href='#'>财会用品</a>",
                "<a href='#'>文房四宝</a>",
            ],
            7: [
                "<a href='#'>耗材 ></a>",
                "<a href='#'>硒鼓/墨粉</a>",
                "<a href='#'>墨盒</a>",
                "<a href='#'>色带</a>",
                "<a href='#'>纸类</a>",
                "<a href='#'>刻录光盘</a>",
            ],
            8: [
                "<a href='#'>服务产品 ></a>",
                "<a href='#'>延保服务</a>",
                "<a href='#'>上门安装</a>",
                "<a href='#'>维修保养</a>",
                "<a href='#'>电脑软件</a>",
            ],

        }
    }

    let data3 = {
        title: [
            "家装城",
            "居家日用",
            "精品家具",
            "家装建材",
            "国际厨具",
            "装修服务",
        ],
        con: {
            0: [
                "<a href='#'>厨具 > </a>",
                "<a href='#'>水具酒具</a>",
                "<a href='#'>烹饪锅具</a>",
                "<a href='#'>炒锅碗碟套装</a>",
                "<a href='#'>厨房配件</a>",
                "<a href='#'>刀剪菜板</a>",
                "<a href='#'>锅具套装</a>",
                "<a href='#'>茶具</a>",
                "<a href='#'>咖啡具</a>",
                "<a href='#'>保温杯</a>",
                "<a href='#'>厨房置物架</a>",
            ],
            1: [
                "<a href='#'>家纺 > </a>",
                "<a href='#'>四件套</a>",
                "<a href='#'>枕芯</a>",
                "<a href='#'>毛巾浴巾</a>",
                "<a href='#'>地毯</a>",
                "<a href='#'>地垫</a>",
                "<a href='#'>床垫/床褥</a>",
                "<a href='#'>毯子</a>",
                "<a href='#'>抱枕</a>",
                "<a href='#'>靠垫</a>",
                "<a href='#'>窗帘/窗纱</a>",
                "<a href='#'>床单/床笠</a>",
                "<a href='#'>被套</a>",
                "<a href='#'>枕巾</a>",
                "<a href='#'>枕套</a>",
                "<a href='#'>沙发垫套</a>",
                "<a href='#'>坐垫</a>",
                "<a href='#'>桌布/罩件</a>",
                "<a href='#'>蚕丝被</a>",
                "<a href='#'>乳胶枕</a>",
                "<a href='#'>蚊帐凉席</a>",
                "<a href='#'>夏被</a>",

            ],
            2: [
                "<a href='#'>生活日用 > </a>",
                "<a href='#'>收纳用品</a>",
                "<a href='#'>雨伞</a>",
                "<a href='#'>雨具</a>",
                "<a href='#'>净化除味</a>",
                "<a href='#'>浴室用品</a>",
                "<a href='#'>洗晒/熨烫</a>",
                "<a href='#'>缝纫/针织用品</a>",
                "<a href='#'>保暖防护</a>",

            ],
            3: [
                "<a href='#'>家装软饰 > </a>",
                "<a href='#'>装饰字画</a>",
                "<a href='#'>装饰摆件</a>",
                "<a href='#'>手工/十字绣</a>",
                "<a href='#'>相框/照片墙</a>",
                "<a href='#'>墙贴/装饰贴</a>",
                "<a href='#'>花瓶</a>",
                "<a href='#'>花艺</a>",
                "<a href='#'>香薰</a>",
                "<a href='#'>蜡烛</a>",
                "<a href='#'>节庆饰品</a>",
                "<a href='#'>钟饰</a>",
                "<a href='#'>帘艺隔断</a>",
                "<a href='#'>创意家居</a>",
                "<a href='#'>3D立体墙</a>",
                "<a href='#'>贴玻璃贴纸</a>",
                "<a href='#'>电视背景墙</a>",
                "<a href='#'>电表箱装饰画</a>",

            ],
            4: [
                "<a href='#'>灯具 > </a>",
                "<a href='#'>吸顶灯</a>",
                "<a href='#'>吊灯</a>",
                "<a href='#'>台灯筒灯</a>",
                "<a href='#'>射灯</a>",
                "<a href='#'>庭院灯</a>",
                "<a href='#'>装饰灯</a>",
                "<a href='#'>LED灯</a>",
                "<a href='#'>氛围照明</a>",
                "<a href='#'>落地灯</a>",
                "<a href='#'>应急灯/手电</a>",
                "<a href='#'>节能灯</a>",

            ],
            5: [
                "<a href='#'>家具 > </a>",
                "<a href='#'>客厅</a>",
                "<a href='#'>卧室</a>",
                "<a href='#'>餐厅</a>",
                "<a href='#'>书房</a>",
                "<a href='#'>儿童</a>",
                "<a href='#'>储物</a>",
                "<a href='#'>办公家具</a>",
                "<a href='#'>阳台户外</a>",
                "<a href='#'>电脑桌</a>",
                "<a href='#'>电视柜</a>",
                "<a href='#'>茶几</a>",
                "<a href='#'>办公柜</a>",
                "<a href='#'>进口/原创沙发床</a>",
                "<a href='#'>床垫</a>",
                "<a href='#'>餐桌</a>",
                "<a href='#'>衣柜</a>",
                "<a href='#'>书架</a>",
                "<a href='#'>鞋柜</a>",
                "<a href='#'>置物架</a>",
                "<a href='#'>电脑椅</a>",
                "<a href='#'>晾衣架</a>",
                "<a href='#'>儿童床</a>",
                "<a href='#'>儿童桌椅</a>",
                "<a href='#'>红木</a>",

            ],
            6: [
                "<a href='#'>全屋定制 > </a>",
                "<a href='#'>定制衣柜</a>",
                "<a href='#'>榻榻米</a>",
                "<a href='#'>橱柜门</a>",
                "<a href='#'>室内门</a>",
                "<a href='#'>防盗门</a>",
                "<a href='#'>窗淋</a>",
                "<a href='#'>浴房</a>",
                "<a href='#'>壁挂炉</a>",
                "<a href='#'>散热器</a>",

            ],
            7: [
                "<a href='#'>建筑材料 > </a>",
                "<a href='#'>油漆涂料</a>",
                "<a href='#'>涂刷辅料</a>",
                "<a href='#'>瓷砖</a>",
                "<a href='#'>地板</a>",
                "<a href='#'>壁纸</a>",
                "<a href='#'>强化地板</a>",
                "<a href='#'>美缝剂</a>",
                "<a href='#'>防水涂料</a>",
                "<a href='#'>木材/板材</a>",

            ],
            8: [
                "<a href='#'>厨房卫浴 > </a>",
                "<a href='#'>水槽</a>",
                "<a href='#'>龙头淋浴</a>",
                "<a href='#'>花洒</a>",
                "<a href='#'>马桶</a>",
                "<a href='#'>智能马桶</a>",
                "<a href='#'>智能马桶盖</a>",
                "<a href='#'>厨卫挂件</a>",
                "<a href='#'>浴室柜</a>",
                "<a href='#'>浴霸</a>",
                "<a href='#'>集成吊顶</a>",
                "<a href='#'>垃圾处理器</a>",
                "<a href='#'>厨卫配件</a>",

            ],
            9: [
                "<a href='#'>五金电工 > </a>",
                "<a href='#'>指纹锁</a>",
                "<a href='#'>电动工具</a>",
                "<a href='#'>手动工具</a>",
                "<a href='#'>测量工具</a>",
                "<a href='#'>工具箱</a>",
                "<a href='#'>开关插座</a>",
                "<a href='#'>配电箱/断路器</a>",
                "<a href='#'>机械锁</a>",
                "<a href='#'>拉手</a>",

            ],
            10: [
                "<a href='#'>装修设计 > </a>",
                "<a href='#'>全包装修</a>",
                "<a href='#'>半包装修</a>",
                "<a href='#'>家装设计</a>",
                "<a href='#'>高端设计</a>",
                "<a href='#'>局部装修</a>",
                "<a href='#'>安装服务</a>",
                "<a href='#'>装修公司</a>",
                "<a href='#'>旧房翻新</a>",

            ],

        }
    }
    let data4 = {
        title: [
            "男装",
            "女装",
            "内衣",
            "童装",
            "童鞋",
            "服饰",
            "企业购",
        ],
        con:{
            0: [
                "<a href='#'>女装 > </a>",
                "<a href='#'>当季热卖</a>",
                "<a href='#'>新品推荐</a>",
                "<a href='#'>商场同款</a>",
                "<a href='#'>时尚套装</a>",
                "<a href='#'>连衣裙</a>",
                "<a href='#'>半身裙</a>",
                "<a href='#'>T恤衬衫</a>",
                "<a href='#'>休闲裤</a>",
                "<a href='#'>牛仔裤</a>",
                "<a href='#'>短外套</a>",
                "<a href='#'>卫衣</a>",
                "<a href='#'>小西装</a>",
                "<a href='#'>风衣</a>",
                "<a href='#'>针织衫</a>",
                "<a href='#'>雪纺衫</a>",
                "<a href='#'>大码女装</a>",
                "<a href='#'>中老年女装</a>",
                "<a href='#'>短裤</a>",
                "<a href='#'>正装裤</a>",
                "<a href='#'>马甲</a>",
                "<a href='#'>吊带/背心</a>",
                "<a href='#'>打底衫</a>",
                "<a href='#'>旗袍/汉服</a>",
                "<a href='#'>礼服</a>",
                "<a href='#'>婚纱</a>",
                "<a href='#'>毛衣</a>",
                "<a href='#'>羊绒衫</a>",
                "<a href='#'>羽绒服</a>",
                "<a href='#'>毛呢大衣</a>",
                "<a href='#'>棉服</a>",
                "<a href='#'>皮草</a>",
                "<a href='#'>仿皮皮衣</a>",
                "<a href='#'>真皮皮衣</a>",
                "<a href='#'>打底裤</a>",
                "<a href='#'>加绒裤</a>",
                "<a href='#'>设计师/潮牌</a>",
            ],

            1: [
                "<a href='#'>男装 > </a>",
                "<a href='#'>当季热卖</a>",
                "<a href='#'>新品推荐</a>",
                "<a href='#'>T恤</a>",
                "<a href='#'>牛仔裤</a>",
                "<a href='#'>休闲裤</a>",
                "<a href='#'>衬衫</a>",
                "<a href='#'>短裤</a>",
                "<a href='#'>POLO衫</a>",
                "<a href='#'>羽绒服</a>",
                "<a href='#'>棉服</a>",
                "<a href='#'>真皮皮衣</a>",
                "<a href='#'>夹克</a>",
                "<a href='#'>卫衣</a>",
                "<a href='#'>毛呢大衣</a>",
                "<a href='#'>大码男装</a>",
                "<a href='#'>西服套装</a>",
                "<a href='#'>仿皮皮衣</a>",
                "<a href='#'>风衣</a>",
                "<a href='#'>针织衫</a>",
                "<a href='#'>马甲/背心</a>",
                "<a href='#'>羊毛衫</a>",
                "<a href='#'>羊绒衫西服</a>",
                "<a href='#'>西裤</a>",
                "<a href='#'>卫裤/运动裤</a>",
                "<a href='#'>工装</a>",
                "<a href='#'>设计师/潮牌</a>",
                "<a href='#'>唐装/中山装</a>",
                "<a href='#'>中老年男装</a>",
                "<a href='#'>加绒裤</a>",

            ],
            2: [
                "<a href='#'>内衣 > </a>",
                "<a href='#'>文胸</a>",
                "<a href='#'>睡衣/家居服</a>",
                "<a href='#'>男士内裤</a>",
                "<a href='#'>女士内裤</a>",
                "<a href='#'>吊带/背心</a>",
                "<a href='#'>文胸套装</a>",
                "<a href='#'>情侣睡衣</a>",
                "<a href='#'>塑身美体</a>",
                "<a href='#'>少女文胸</a>",
                "<a href='#'>休闲棉袜</a>",
                "<a href='#'>商务男袜</a>",
                "<a href='#'>连裤袜/丝袜</a>",
                "<a href='#'>美腿袜</a>",
                "<a href='#'>打底裤袜</a>",
                "<a href='#'>抹胸</a>",
                "<a href='#'>内衣配件</a>",
                "<a href='#'>大码内衣</a>",
                "<a href='#'>打底衫</a>",
                "<a href='#'>泳衣</a>",
                "<a href='#'>秋衣</a>",
                "<a href='#'>秋裤</a>",
                "<a href='#'>保暖内衣</a>",

            ],
            3: [
                "<a href='#'>配饰 > </a>",
                "<a href='#'>女士围巾/披肩</a>",
                "<a href='#'>光学镜架/镜片</a>",
                "<a href='#'>毛线帽</a>",
                "<a href='#'>真皮手套</a>",
                "<a href='#'>毛线手套</a>",
                "<a href='#'>男士丝巾/围巾</a>",
                "<a href='#'>棒球帽</a>",
                "<a href='#'>太阳镜</a>",
                "<a href='#'>防辐射眼镜</a>",
                "<a href='#'>老花镜</a>",
                "<a href='#'>贝雷帽</a>",
                "<a href='#'>礼帽围巾/手套/帽子套装</a>",
                "<a href='#'>领带/领结/领带</a>",
                "<a href='#'>夹鸭舌帽</a>",
                "<a href='#'>口罩耳罩/耳包</a>",
                "<a href='#'>毛线/布面料遮阳帽</a>",
                "<a href='#'>遮阳伞/雨伞</a>",
                "<a href='#'>袖扣</a>",
                "<a href='#'>钥匙扣</a>",
                "<a href='#'>游泳镜</a>",
                "<a href='#'>男士腰带/礼盒</a>",
                "<a href='#'>女士腰带/礼盒</a>",

            ],
            4: [
                "<a href='#'>童装 > </a>",
                "<a href='#'>套装</a>",
                "<a href='#'>卫衣</a>",
                "<a href='#'>裤子</a>",
                "<a href='#'>外套/大衣</a>",
                "<a href='#'>毛衣/针织衫</a>",
                "<a href='#'>衬衫</a>",
                "<a href='#'>户外/运动服</a>",
                "<a href='#'>T恤</a>",
                "<a href='#'>裙子</a>",
                "<a href='#'>亲子装</a>",
                "<a href='#'>礼服/演出服</a>",
                "<a href='#'>羽绒服</a>",
                "<a href='#'>棉服</a>",
                "<a href='#'>内衣裤配饰</a>",
                "<a href='#'>家居服</a>",
                "<a href='#'>马甲</a>",
                "<a href='#'>袜子</a>",
                "<a href='#'>民族服装</a>",
                "<a href='#'>婴儿礼盒</a>",
                "<a href='#'>连体衣/爬服</a>",

            ],
            5: [
                "<a href='#'>童鞋 > </a>",
                "<a href='#'>运动鞋</a>",
                "<a href='#'>靴子</a>",
                "<a href='#'>帆布鞋</a>",
                "<a href='#'>皮鞋</a>",
                "<a href='#'>棉鞋</a>",
                "<a href='#'>凉鞋</a>",
                "<a href='#'>拖鞋</a>",

            ],

        }
}
    $(".allItem .top").eq(0).html(`
    <p> ${data0.title[0]}> </p>
    <p> ${data0.title[1]}> </p>
    <p> ${data0.title[2]}> </p>
    <p> ${data0.title[3]}> </p>
    <p> ${data0.title[4]}> </p>
    <p> ${data0.title[5]}> </p>
    `)

    $(".allItem .top").eq(1).html(`
    <p> ${data1.title[0]}> </p>
    <p> ${data1.title[1]}> </p>
    <p> ${data1.title[2]}> </p>
    <p> ${data1.title[3]}> </p>
    <p> ${data1.title[4]}> </p>
    `)

    $(".allItem .top").eq(2).html(`
    <p> ${data2.title[0]}> </p>
    <p> ${data2.title[1]}> </p>
    <p> ${data2.title[2]}> </p>
    <p> ${data2.title[3]}> </p>
    `)
    $(".allItem .top").eq(3).html(`
    <p> ${data0.title[0]}> </p>
    <p> ${data0.title[1]}> </p>
    <p> ${data0.title[2]}> </p>
    <p> ${data0.title[3]}> </p>
    <p> ${data0.title[4]}> </p>
    <p> ${data0.title[5]}> </p>
    `)
    $(".allItem .top").eq(4).html(`
    <p> ${data1.title[0]}> </p>
    <p> ${data1.title[1]}> </p>
    <p> ${data1.title[2]}> </p>
    <p> ${data1.title[3]}> </p>
    <p> ${data1.title[4]}> </p>
    <p> ${data1.title[5]}> </p>
    <p> ${data1.title[6]}> </p>
    `)

    $(".allItem .top").eq(5).html(`
    <p> ${data2.title[0]}> </p>
    <p> ${data2.title[1]}> </p>
    <p> ${data2.title[2]}> </p>
    <p> ${data2.title[3]}> </p>
    <p> ${data2.title[4]}> </p>
    <p> ${data2.title[5]}> </p>
    <p> ${data2.title[6]}> </p>
    `)
    $(".allItem .top").eq(6).html(`
    <p> ${data3.title[0]}> </p>
    <p> ${data3.title[1]}> </p>
    <p> ${data3.title[2]}> </p>
    <p> ${data3.title[3]}> </p>
    <p> ${data3.title[4]}> </p>
    <p> ${data3.title[5]}> </p>
    <p> ${data3.title[6]}> </p>
    `)
    $(".allItem .top").eq(7).html(`
    <p> ${data4.title[0]}> </p>
    <p> ${data4.title[1]}> </p>
    <p> ${data4.title[2]}> </p>
    <p> ${data4.title[3]}> </p>
    <p> ${data4.title[4]}> </p>
    <p> ${data4.title[5]}> </p>
    <p> ${data4.title[6]}> </p>
    `)
    $(".allItem .top").eq(8).html(`
    <p> ${data0.title[0]}> </p>
    <p> ${data0.title[1]}> </p>
    <p> ${data0.title[2]}> </p>
    <p> ${data0.title[3]}> </p>
    <p> ${data0.title[4]}> </p>
    <p> ${data0.title[5]}> </p>
    <p> ${data0.title[6]}> </p>
    `)
    $(".allItem .top").eq(9).html(`
    <p> ${data1.title[0]}> </p>
    <p> ${data1.title[1]}> </p>
    <p> ${data1.title[2]}> </p>
    <p> ${data1.title[3]}> </p>
    <p> ${data1.title[4]}> </p>
    <p> ${data1.title[5]}> </p>
    <p> ${data1.title[6]}> </p>
    `)
    $(".allItem .top").eq(10).html(`
    <p> ${data2.title[0]}> </p>
    <p> ${data2.title[1]}> </p>
    <p> ${data2.title[2]}> </p>
    <p> ${data2.title[3]}> </p>
    <p> ${data2.title[4]}> </p>
    <p> ${data2.title[5]}> </p>
    <p> ${data2.title[6]}> </p>
    `)
    $(".allItem .top").eq(11).html(`
    <p> ${data3.title[0]}> </p>
    <p> ${data3.title[1]}> </p>
    <p> ${data3.title[2]}> </p>
    <p> ${data3.title[3]}> </p>
    <p> ${data3.title[4]}> </p>
    <p> ${data3.title[5]}> </p>
    <p> ${data3.title[6]}> </p>
    `)
    $(".allItem .top").eq(12).html(`
    <p> ${data4.title[0]}> </p>
    <p> ${data4.title[1]}> </p>
    <p> ${data4.title[2]}> </p>
    <p> ${data4.title[3]}> </p>
    <p> ${data4.title[4]}> </p>
    <p> ${data4.title[5]}> </p>
    <p> ${data4.title[6]}> </p>
    `)

    $(".allItem .top").eq(13).html(`
    <p> ${data0.title[0]}> </p>
    <p> ${data0.title[1]}> </p>
    <p> ${data0.title[2]}> </p>
    <p> ${data0.title[3]}> </p>
    <p> ${data0.title[4]}> </p>
    <p> ${data0.title[5]}> </p>
    <p> ${data0.title[6]}> </p>
    `)
    $(".allItem .top").eq(14).html(`
    <p> ${data1.title[0]}> </p>
    <p> ${data1.title[1]}> </p>
    <p> ${data1.title[2]}> </p>
    <p> ${data1.title[3]}> </p>
    <p> ${data1.title[4]}> </p>
    <p> ${data1.title[5]}> </p>
    <p> ${data1.title[6]}> </p>
    `)
    $(".allItem .top").eq(15).html(`
    <p> ${data2.title[0]}> </p>
    <p> ${data2.title[1]}> </p>
    <p> ${data2.title[2]}> </p>
    <p> ${data2.title[3]}> </p>
    <p> ${data2.title[4]}> </p>
    <p> ${data2.title[5]}> </p>
    <p> ${data2.title[6]}> </p>
    `)
    $(".allItem .top").eq(16).html(`
    <p> ${data3.title[0]}> </p>
    <p> ${data3.title[1]}> </p>
    <p> ${data3.title[2]}> </p>
    <p> ${data3.title[3]}> </p>
    <p> ${data3.title[4]}> </p>
    <p> ${data3.title[5]}> </p>
    <p> ${data3.title[6]}> </p>
    `)
    $(".allItem .top").eq(17).html(`
    <p> ${data4.title[0]}> </p>
    <p> ${data4.title[1]}> </p>
    <p> ${data4.title[2]}> </p>
    <p> ${data4.title[3]}> </p>
    <p> ${data4.title[4]}> </p>
    <p> ${data4.title[5]}> </p>
    <p> ${data4.title[6]}> </p>
    `)
    // 添加content下的a元素
    for (let i = 0; i < contentNum[0]; i++) {
    for (let j in data0.con[i]) {
        $(".allItem .content").eq(0).children().eq(i).append(data0.con[i][j]);
    }
}

for (let i = 0; i < contentNum[1]; i++) {
    for (let j in data1.con[i]) {
        $(".allItem .content").eq(1).children().eq(i).append(data1.con[i][j]);
    }
}

for (let i = 0; i < contentNum[2]; i++) {
    for (let j in data2.con[i]) {
        $(".allItem .content").eq(2).children().eq(i).append(data2.con[i][j]);
    }
}
for (let i = 0; i < contentNum[3]; i++) {
    for (let j in data4.con[i]) {
        $(".allItem .content").eq(3).children().eq(i).append(data3.con[i][j]);
    }
}

for (let i = 0; i < contentNum[4]; i++) {
    for (let j in data4.con[i]) {
        $(".allItem .content").eq(4).children().eq(i).append(data4.con[i][j]);
    }
}
for (let i = 0; i < contentNum[5]; i++) {
    for (let j in data0.con[i]) {
        $(".allItem .content").eq(5).children().eq(i).append(data0.con[i][j]);
    }
}
for (let i = 0; i < contentNum[6]; i++) {
    for (let j in data1.con[i]) {
        $(".allItem .content").eq(6).children().eq(i).append(data1.con[i][j]);
    }
}
for (let i = 0; i < contentNum[7]; i++) {
    for (let j in data2.con[i]) {
        $(".allItem .content").eq(7).children().eq(i).append(data2.con[i][j]);
    }
}
for (let i = 0; i < contentNum[8]; i++) {
    for (let j in data0.con[i]) {
        $(".allItem .content").eq(8).children().eq(i).append(data0.con[i][j]);
    }
}
for (let i = 0; i < contentNum[7]; i++) {
    for (let j in data4.con[i]) {
        $(".allItem .content").eq(9).children().eq(i).append(data4.con[i][j]);
    }
}
for (let i = 0; i < contentNum[9]; i++) {
    for (let j in data1.con[i]) {
        $(".allItem .content").eq(10).children().eq(i).append(data1.con[i][j]);
    }
}
for (let i = 0; i < contentNum[11]; i++) {
    for (let j in data2.con[i]) {
        $(".allItem .content").eq(11).children().eq(i).append(data2.con[i][j]);
    }
}
for (let i = 0; i < contentNum[12]; i++) {
    for (let j in data0.con[i]) {
        $(".allItem .content").eq(12).children().eq(i).append(data0.con[i][j]);
    }
}
for (let i = 0; i < contentNum[13]; i++) {
    for (let j in data4.con[i]) {
        $(".allItem .content").eq(13).children().eq(i).append(data4.con[i][j]);
    }
}
for (let i = 0; i < contentNum[14]; i++) {
    for (let j in data1.con[i]) {
        $(".allItem .content").eq(14).children().eq(i).append(data1.con[i][j]);
    }
}
for (let i = 0; i < contentNum[15]; i++) {
    for (let j in data2.con[i]) {
        $(".allItem .content").eq(15).children().eq(i).append(data2.con[i][j]);
    }
}
for (let i = 0; i < contentNum[16]; i++) {
    for (let j in data0.con[i]) {
        $(".allItem .content").eq(16).children().eq(i).append(data0.con[i][j]);
    }
}
for (let i = 0; i < contentNum[17]; i++) {
    for (let j in data4.con[i]) {
        $(".allItem .content").eq(17).children().eq(i).append(data4.con[i][j]);
    }
}
});








