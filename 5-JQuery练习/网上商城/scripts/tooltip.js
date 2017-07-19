/**
 * @function 给指定的元素添加自定义悬浮提醒窗
 * @param selector
 */
function tooltip(selector){
    $(selector).hover(function (e) {
        //自定属性，解决默认的title属性会出现对话框的问题
        //有title属性就用title，没有用html内容
        this.tip = $(this).attr("title") ? $(this).attr("title"):$(this).html();

        if($(".tip").length == 0){  //没有悬浮窗的时候
            //新建一个悬浮窗div，设置内容为title或者html内容
            var $tooltip = $("<div class = 'tip'></div>").html(this.tip);
            $tooltip.appendTo($("body"));

        }else{//如果有了悬浮穿就不创建，直接修改内容
            $(".tip").html(this.tip);
        }

        $(".tip").offset({
            top: e.pageY + 10,
            left: e.pageX + 10
        });

        $(this).removeAttr("title");    //移除默认的title属性，干掉默认的悬浮窗

    },function () {
            $(this).attr("title", this.tip);
            $(".tip").remove();
        }).on("mousemove", function(e){
            $(".tip").offset({
                top: e.pageY + 10,
                left: e.pageX + 10
        });
    });

}