


$(function () {
   $("#news .sign").hover(function () {
       $(this).css({
           fontSize: 25
        });
   },function () {
       $(this).css({
           fontSize: 20
       });
   });

   var aImg = document.getElementsByClassName("work-img");
   for(var i = 0; i<aImg.length;i++){
       aImg[i].src = "img/work ("+(i+1)+").jpg";
   }

   var aContent = document.getElementsByClassName("content");
    for(var i = 0; i<aContent.length;i++){
        // 给index.html设置url，所以路径是相对于html文件的
        aContent[i].style.background = "url(img/content ("+(i+1)+").jpg)";
        aContent[i].style.left = i*100+"px";
    }
});

