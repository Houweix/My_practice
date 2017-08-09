$(function () {
    var $menu = $("#menu");
    var $sideBar = $("#side-bar");
    var $mask = $("#mask");

    //点击菜单按钮时
    $menu.on("click",function () {

        open();


    });

    function open() {
        $sideBar.stop().animate({
            width: 270
        },500);

        $mask.stop().fadeIn(200).on("click",function () {
            close();
        });

    }

    function close() {
        $mask.stop().fadeOut(200);

        $sideBar.stop().animate({
            width: 0
        },500);


    }

    window.onscroll = function () {
        close();
    };

    $("#side-bar li").on("click",function () {
        $("ul",this).stop().slideToggle();
    });

    window.onmousemove = function (e) {
        if(e.clientX < 80 ){
            open();
        }
    };

});