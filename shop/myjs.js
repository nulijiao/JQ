(function()
   {
 function next(elem)
 {
     do{
         elem=elem&&elem.nextSibling;
         //先排除了不存在的情况，如果不存在就会产生elem=null返回了。
     }while(elem.nodeType!=1&&elem)
     return elem;
 }
       function previous(elem)
       {
           do{
               elem=elem.previousSibling&&elem;
           }while(elem.nodeType!=1&&elem)
           return elem;
       }
       function first(elem)
       {

               elem=elem.firstChild;

           if(elem.nodeType!=1&&elem)
               next(elem);
           else
               return elem;//或者利用三目运算符
           return  elem.nodeType==1&&elem?elem:next(elem);

       }
       function Last(elem)
       {

           elem=elem.lastChild;

           if(elem.nodeType!=1&&elem)
               previous(elem);
           else
               return elem;//或者利用三目运算符
           return  elem.nodeType==1&&elem?elem:previous(elem);

       }
       function getid(sid) {
           return [document.getElementById('sid')];
       }
       function getclas(sid,context) {
           context=document||context;//防止没有传入上下文，那就默认为document
           return [context.getElementsByClassName('sid')];

       }
function  getag(sid,context) {
    context=document||context;//防止没有传入上下文，那就默认为document
    return [context.getElementsByTagName('sid')];
}
//目的减少用户记忆负担，使得用户都知道返回一个数组类型了
function $(selector,context) //selector=#xx||.xx||xx看选择器
{
     context=document||context;
     if(selector.charAt(0)=='#')
         getid(selector);
    if(selector.charAt(0)=='.')
        getclas(selector,context);
             else
                 getclas(selector,context);

}
    // function clonen() {
    //
    // }
    var re=new RegExp('字符串');
// 或者 var re=/zifuchuan/;两种方式设置正则表达式对象，正则表达式默认拼配贪婪的，/c[3,4]/匹配ccccnm则会匹配有大于3小于4的c则会多拼配cccc
})();/**
 /\bc/表示匹配吃在左侧为边界，正则表达式在汉字的时候有点误差
 /匹配字符串/i 忽略大小写/匹配字符串/g全局找到所有拼配字符串
 结尾是$
 * Created by jiaoge on 2017/7/10.
 */
   //在任何语言中不存在与内存中就是null(不存在)但是存在于内存中没有初始化就会产生一个undefined
//需求多次绑定防止同一个时间不同方法体被覆盖，所以引用了addeventlistener有三个参数是事件类型例如'onclick'，时间函数|时间函数引用名字，false表示事件捕获true表示事件冒泡在火狐IE8以上
//ie8以下是attachevent(事件类型，事件函数);因为浏览器不同需要解决兼容性问题。
//所以利用元素.某个属性名是否成立，例如测试attachevent函数则可以有对象为ali能力测试如下if(ali.attachevent){}表达了是否可以使用这个属性，所以可以知道某些函数不加括号时候不是调用，可以当做属性来使用。（变量在一定程度上可以代表对象的某个属性名字）变量都是对象[变量名]，只有属性才可以用对象.属性名
//在js里万物皆对象就是一切都派生于对相关可以自由添加属性，所以在传递的函数中，有同样的参数又不想设置一个局部变量传递某个值，就可以将共有的参数添加一个属性传过去。
//在ie中