/**
 * Created by houwei on 2017/7/18.
 */
$(function(){
    //搜索框
    $("#inputSearch").on("focus",function () {  //获取焦点
        if(this.value == this.defaultValue){
            this.value = "";        //要输入
        }
    }).on("blur",function () {  //失去焦点
        if(this.value == ""){    //如果输入为空,设置为默认值
            this.value = this.defaultValue;
        }
    });

    //导航菜单
    $("#nav li").hover(function(){
        //hover的使用，第一个function是mouseenter，第二个是mouseleave
        $(this).find(".jnNav").stop().slideToggle();
    }, function(){
        $(this).find(".jnNav").stop().slideToggle();
    });


    //hot
    $(".promoted").append("<span class='hot'></span>");

    //轮播图

    //调整图片的层级
    var $imgs = $("#JS_imgWrap img");
    $imgs.each(function (index,elem) {
        $(elem).css({
            //逆序改变zIndex的大小
            zIndex: $imgs.length - index
        });
    });


    //切换（轮播图）
    var nowIndex = 0;
    var $menus = $("#menu a");
    $menus.on("mouseover", function(){
        nowIndex = $(this).index();
        changeImg();
    });
    setInterval(function(){
        nowIndex++;
        if(nowIndex == $imgs.length){
            nowIndex = 0;
        }
        changeImg();
    }, 1000);

    function changeImg(){
        $menus.eq(nowIndex).addClass("chos").siblings().removeClass("chos");
        $imgs.eq(nowIndex).stop().fadeIn().siblings().stop().fadeOut();
    }



    //tooltip-自定义悬停窗
    tooltip("#jnNoticeInfo li a");
    tooltip(".jnCatainfo a");



    //品牌活动-动画切换
    $("#jnBrandTab li").on("click", function(){
        $(this).addClass("chos").siblings().removeClass("chos");
        $("#jnBrandList").animate({     //
            //切换的距离注意  - 四个li的距离
            left: -$("#jnBrandList li").innerWidth() * 4 * $(this).index()
        }, 1000);
    });





    //换肤
    //自动加载
    if($.cookie("skin")){
        var skin = $.cookie("skin");
        changeSkin(skin);
    }

    //点击时
    $("#skin li").on("click",function () {
        var skin = $(this).attr("id");
        //存入cookie中
        $.cookie("skin",skin,{expires:10});
        changeSkin(skin);
    })

    /**
     * @function 切换皮肤
     * @param skin
     */
    function changeSkin(skin) {
        //切换href
        $("#cssfile").attr("href", "styles/skin/" + skin + ".css");
        //切换li的selected状态
        $("#" + skin).addClass("selected").siblings().removeClass("selected");
    }

});









