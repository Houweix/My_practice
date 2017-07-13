/**
 * Created by houwei on 2017/6/18.
 */

(function () {  //函数的立即调用

    //得到小图片对象
    var oSmallPic = document.getElementById("samll-pic");
    var aSmallImgs = oSmallPic.getElementsByTagName("img");

    //得到大图片对象
    var oBigPic = document.getElementById("big-pic");
    var oBigImg = oBigPic.getElementsByTagName("img")[0];

    var oLeft = document.getElementById("left");
    var oRight = document.getElementById("right");

    //用于存储当前的下标
    var nowIndex = 0;
    for(var i = 0;i<aSmallImgs.length; i++){
        aSmallImgs[i].index = i;    //自定义属性

        //为每个小图片绑定点击事件
        aSmallImgs[i].onclick = function () {
            nowIndex = this.index;  //当前点击的下标赋值给nowIndex记住

        };
    }

    //为左右箭头绑定点击事件
    oLeft.onclick = oRight.onclick =  function () {

        if(this == oRight){  //当点击的时右边的箭头
            nowIndex++; //有效下标0 1 2 3

        }  else{        //当点击的时左边的箭头

        }




    };





})();
