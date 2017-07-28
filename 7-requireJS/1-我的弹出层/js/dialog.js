//配置require.js文件
requirejs.config({
    paths: {
        jquery: 'jquery-1.11.2'
    }
});


define(["jquery"],function ($) {

    //定义弹出层类
    function Dialog(settings) {
        //对于类，属性定义在类内，方法用prototype在类外定义
        this.defaulstSettings = {
            width:500,
            height:400,
            title:"弹出层",
            content:""
        };
        //将自定义的设置与默认设置合并，然后用默认设置去设置弹出层
        $.extend(this.defaulstSettings, settings);

        //将各个属性设置成jquery对象，方便后续的操作
        this.$container = $('<div class="dialog-container"></div>');
        this.$mask = $('<div class="dialog-mask"></div>');
        this.$box = $('<div class="dialog-box"></div>');
        this.$title = $('<div class="dialog-title"></div>');
        this.$item = $('<div class="dialog-title-item"></div>');
        this.$close = $('<div class="dialog-title-close">[X]</div>');
        this.$content = $('<div class="dialog-content"></div>');
    }


    //“打开”方法
    //方法中的this都是指的是实例化对象
    Dialog.prototype.open = function () {
        //注意append的主体始终是$container，最后追加到dom中（body）
        this.$container.append(this.$mask).append(this.$box).appendTo(document.body);

        this.$box.append(this.$title).append(this.$content);
        this.$title.append(this.$item).append(this.$close);

        //设置css样式
        this.$box.css({
            width: this.defaulstSettings.width,
             height:this.defaulstSettings.height
        });
        //设置标题内容
        this.$item.html(this.defaulstSettings.title);

        //判断传入的是代码段（html文件）还是字符串
        if(this.defaulstSettings.content.indexOf(".html") != -1){
            //代码段
            $(this.$content.load(this.defaulstSettings.content));
        }else{
            //字符串
            $(this.$content.html(this.defaulstSettings.content));
        }//if-else

        this.$close.on("click",function () {
            //this.$container.remove();
           this.close();
        //将this指向为该类的实例化对象，因为要remove整个容器，bind只修改，不会立即调用
        }.bind(this));

    };//open

    //关闭方法
    Dialog.prototype.close = function(){
        this.$container.remove();
    };

    return Dialog;

}); //define
