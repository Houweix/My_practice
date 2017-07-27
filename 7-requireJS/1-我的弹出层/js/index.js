
// js文件的配置，相当于给jquery-1.11.2起了一个名字为jquery
requirejs.config({
    paths: {
        jquery: 'jquery-1.11.2'
    }
});

//require函数第二个参数function中是第一个参数引用文件的返回值
require(["jquery","dialog"],function ($,Dialog) {

    $("#btn").on("click",function () {

        var settings = {
            width:400,
            height:300,
            title : "弹出层1",
            content : "login.html"

        }

        var dialog = new Dialog(settings);
        dialog.open();


    });
});



