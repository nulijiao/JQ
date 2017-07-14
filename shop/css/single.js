/**
 * 立即调用没有名字只能调用一次，内联元素脱离文档流以后发现有可以设置宽高了，这也是一种设置内联元素宽高的好方式轮播放大镜功能的写Created by jiaoge on 2017/6/18.
 如果直接写的function不对应鼠标键盘事件的时候他的this对象是window*/
(function () {
    var oSingleone=document.getElementById("single");
    var oBag=document.getElementById("need");
var oSingle=document.getElementById("single-pic");
var oDrag=document.getElementById("drag");
    var timer;
    var aDiv=oSingleone.getElementsByTagName("div");
    var changeDiv=[];
    var nowIndex=0;
    var oBig=document.getElementById("big");
    var aSmall=document.getElementById("small");
    var bigImg=oBig.getElementsByTagName("img")[0];
    var oLeft=document.getElementById("left");
        var oRight=document.getElementById("right");
    var asImg=aSmall.getElementsByTagName("img")
        //利用变幻的小图片的src属性给大图，大图只有一个，但是利用tagname得到的是一个数组只要第一个则必须有[0],
        for(var i=0;i<asImg.length;i++)
        {asImg[i].index=i;
            asImg[i].onclick=function ()
            {
                // bigImg.src=this.src;
                nowIndex=this.index;
                change(this.index);
                // this.className="selected";

                // change(nowIndex);

            }
        //
        }
        for(var i=0;i<aDiv.length;i++)
        {
            if(aDiv[i].className=="changeDiv")
                changeDiv.push(aDiv[i]);


        }
        function change(index)
        {nowIndex=index;
            for(var i=0;i<asImg.length;i++)
            {

                asImg[i].className=" ";
            }
            bigImg.src=asImg[index].src;
            asImg[index].className="selected";
                if(nowIndex==0)
                {
                    aSmall.style.left =0;
                }
                 //疑问在于为什么在点击第二个小图片时候为啥不能
                 else {
                     aSmall.style.left = -(asImg[0].offsetWidth + 10) + "px";
                    //回调函数也作为一个参数，满足某条件时候调用

                     // timer=setInterval(function () {
                     //
                     //     aSmall.style.left = -(asImg[0].offsetWidth + 1)+"px";
                     //
                     // },500);
                     // if(asImg.offsetLeft==-(asImg[0].offsetWidth + 10))
                     // {
                     //     clearInterval(timer);
                     // }
                 }
                 // 如果不写aSmall[0].offsetWidth而写了                     aSmall.style.left = -(aSmall.offsetWidth + 10) + "px";是整体的宽度
        }
        //                     aSmall.style.left = -(aSmall[0].offsetWidth + 10) + "px";


    //*里面出现this是window的对象
 oRight.onclick=oLeft.onclick=function () {
     if(this===oRight)
     {
         nowIndex++;
         if(nowIndex==asImg.length)
         {


             nowIndex=0;

         }

     }

         else
     {
         nowIndex--;
         if(nowIndex==-1)
         {
             nowIndex=asImg.length-1;

         }

     }
     change(nowIndex);
 }
//小图片移动规则：
    //0:不移
    //1:移动一个
    //2：移动一个
    //3：移动一个
//放大镜开始
    var startLeft;
    var startTop;
    oBig.onmouseover=function (e) {
        e=e||event;
       oDrag.style.display="block";

console.log("onmouseover");
           changeDiv[nowIndex].style.display="block";
         startLeft=e.clientX-104.5-oDrag.offsetLeft;
         startTop=e.clientY-650-oDrag.offsetTop;
    }
    oBig.onmouseout = function(){
        // console.log("oSmall.onmouseout");
        oDrag.style.display = "none";
        changeDiv[nowIndex].style.display = "none";
    };
    oBig.onmousemove = function(e){
        e = e || window.event;
//         var x = e.clientX-104.5;//鼠标相对于视口的位置
//         var y = e.clientY-650;
//         var t = oDrag.offsetTop;//相对于视口的位置
//         var l = oDrag.offsetLeft;
//         // startLeft=e.clientX-104.5-oDrag.offsetLeft;
//         // startTop=e.clientY-650-oDrag.offsetTop;
// var left1=x - l -oDrag.offsetWidth/2;
// var top1=y-t-oDrag.offsetHeight/2;
        // startLeft=e.clientX-104.5-oDrag.offsetLeft;
        // startTop=e.clientY-650-oDrag.offsetTop;
        // startLeft=e.clientX-104.5-oDrag.offsetLeft;
        // startTop=e.clientY-650-oDrag.offsetTop;
        // var left = (e.clientX - oDrag.offsetWidth / 2);
        //疑问在于问什么改变了鼠标相对于drag改变了位置但是在计算的时候还是初始的，造成移动时候鼠标不在上面但是修改哪个初始的变量放在onmove函数里就不能走了，但是鼠标有的时候不在小块上，这个偏差怎么解决 var top = (e.clientY - oDrag.offsetHeight / 2);
        //判断drag的边界范围,待解决鼠标不在小块上的问题和为什么变量写在onmouve里面不能正常实现效果？问老师。。。
        //脱离文档流的元素是不会挤走原来位置上的元素，只是遮盖住一点而已。这就是脱离了文档流的好处吧，不占地方。不会挤走。
        console.log("onmousemove");
        var left=(e.clientX-104.5-startLeft-(oDrag.offsetWidth/2));
        var top=(e.clientY-650-startTop-(oDrag.offsetHeight/2));
        console.log( 1);
        console.log(startLeft);
        console.log( 2);
        console.log( startTop);

        if(left <= 7){
            left = 7;
        }
        if(top <= 7){
            top = 7;
        }
        var maxX = oBig.offsetWidth - oDrag.offsetWidth-14;
        if(left >= maxX){
            left = maxX;
        }
        var maxY = oBig.offsetHeight - oDrag.offsetHeight-14;
        if(top >= maxY){
            top = maxY;
        }
        oDrag.style.left = left + "px";
        oDrag.style.top = top + "px";


        //改变大图的位置,我也明白了设置 left=(e.clientX-104.5-startLeft-(oDrag.offsetWidth/2))是为了通过定位drag实现好像鼠标在小块中心。
        var scaleX = left / maxX;
//          这是比例系数因为小块的位置与bigdiv图片的位置是相对成比例的，就是一个向左一个向右，方向相反
        var scaleY = top / maxY;
        //
        // oBigImg.style.left = -scaleX * (oBigImg.offsetWidth - oBig.offsetWidth) + "px";
        // oBigImg.style.top = -scaleY * (oBigImg.offsetHeight - oBig.offsetHeight) + "px";
    var oCimg=changeDiv[nowIndex].getElementsByTagName("img")[0];
         oCimg.style.left = -scaleX * (oCimg.offsetWidth - changeDiv[nowIndex].offsetWidth) + "px";
        oCimg.style.top = -scaleY * (oCimg.offsetHeight - changeDiv[nowIndex].offsetHeight) + "px";
    }


})();