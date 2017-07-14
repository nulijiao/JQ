(
    function ()
{ var oProduct=document.getElementById('product');
   var aBt=oProduct.getElementsByTagName('button');
    var aNum=oProduct.getElementsByTagName('input');
    var bAh3=oProduct.getElementsByTagName('h3');
    var cArnum=document.getElementById('num1');
    var cArnum1=document.getElementById('num2');
    var ClearCart=document.getElementById("clear-cart");
    var aDiv=oProduct.getElementsByTagName("div");
    var aInfo=[];
    var aBuy=[];
    var a=0;
    var aH3=[];//声明为数组才能用push方法只有此形式
    for(var i=0;i<aDiv.length;i++)
    {
        if(aDiv[i].className=="product-info")
        {
            aInfo.push(aDiv[i]);
        }
        if(aDiv[i].className=="buy-it")
        {
            aBuy.push(aDiv[i]);
        }
    }
    for(var i=0;i<aInfo.length;i++)
    {    aInfo[i].index=i;
         aInfo[i].flag=false;
         console.log(1);
        aInfo[i].onmouseover=function ()
        {


           aBuy[this.index].style.display="block";
        }

    }
    for(var i=0;i<aInfo.length;i++)
    {    aInfo[i].index=i;
        aInfo[i].flag=false;
        console.log(1);
        aInfo[i].onmouseout=function ()
        {


            aBuy[this.index].style.display="none";
        }

    }
    for(var i=0;i<bAh3.length;i++)
    {
        if(bAh3[i].className=="money")
        {
            // console.log(1);
             aH3.push(bAh3[i]);
        // 数组的push方法
        }
    }
   for(var i=0;i<aBt.length;i++)
   {
       aBt[i].index=i;
       aBt[i].onclick=function ()
       {
           cArnum1.innerHTML= parseInt(aNum[this.index].value)+parseInt(cArnum1.innerHTML);
          a+=parseFloat(aNum[this.index].value*136.00);
           cArnum.innerHTML=a;
           // console.log( cArnum1.innerHTML);
       }


   }

    ClearCart.onclick=function ()
    { cArnum1.innerHTML="0";
        cArnum.innerHTML="0.00";}

})();
