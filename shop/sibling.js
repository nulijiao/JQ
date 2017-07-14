/**
 * Created by jiaoge on 2017/7/10.
 */
var a=[];

function sibling (elem)//方法一
{
    var elemTag=elem;
    while(elem!=elemTag.parentNode)
    {elem=elemTag.previousElementSibling;
        a.push(elem);
    }
    while(elem!=elemTag.parentNode)
    {
        elem=elemTag.nextElementSibling;
        a.push(elem);
    }
    return a;


}
function sibling1(elem)//方法二
{
    var elemTag=elem.parentNode;
    var elemTag1=elemTag.children;
   // a.push(elemTag.childNodes);//push没有放进去一点个
   // node.children,返回的是一个多个孩子,虽然不是规定的语法但是不会有兼容性问题同时找到的还是都是元素结点
   for(var i=0;i<elemTag1.length;i++)
   {
       if(elemTag1[i]!=elem)
       {
           a.push(elemTag1[i]);
       }
   }
   for(var node in elemTag.childNodes)
   {
       if(node.nodeType=="2"&&node!=elem)
       a.push(node);
   }

   return a;
}
/*
获取子元素：
获取兄弟：
获取父亲：
 */
//插入一个孩子
//创建元素
var s=document.createElement('div');//创建一个div标签
//appendChild();//加入孩子在后面
//removechild();//删除孩子
//
//
var oDiv=document.getElementById("dd");
function remv(elem) {
    var t=elem.parentNode.children;

}
//首先关于一个元素的插入与移走都是要利用当前元素的父元素来执行的
//insertafter在某一个元素后面插入,都是利用父元素调用方法来操作子元素
//insertbefore在某一个元素前面插入,都是利用父元素来执行插入操作的
//还有replaceChild
function  before(elem,nowNode) //在当前元素的兄弟元素前面插入一个新元素
{
    var parent=elem.parentNode;
    var d=elem.nextElementSibling;
    if(!d)
    {parent.appendChild(nowNode);}
    else
    {
        parent.insertBefore(nowNode,d);
    }

}
/*
类库总结
* */