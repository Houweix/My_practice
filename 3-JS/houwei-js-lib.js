/**
 * @function        JS获取元素
 * @param selector 要选择的元素，前面加‘#’ ‘.’
 * @param context  要选择元素的范围
 * @return {*}      选择到的元素（统一为数组，ID使用取数组的0号元素
 */
//前期不完善$函数，完善的$函数见myJQuery.js函数
function $(selector, context) {
    context = context || document;      //如果传范围，就使用这个范围 不传使用document
    switch(selector.charAt(0)){
        case '#': //id
            return [document.getElementById(selector.substring(1))];
            break;
        case '.': //class
            return getByClass(selector.substring(1),context);
            break;
        default: //tag
            return context.getElementsByTagName(selector);
            break;
    }
}


/**
 * 查找包含有className的元素
 * @param className
 * @param context
 * @return {Array}
 */
function getByClass(className, context) {
    context = context || document;
    var result = [];                //新建一个数组，用来存满足classname的元素
    var arr = context.getElementsByTagName('*');         //'*' 找所有标签
    //这里复习正则表达式中\b的用法
    var re = new RegExp("\\b"+className+"\\b");         //字符串中\需要转义字符
    for(var i=0; i<arr.length; i++){
        if(re.test(arr[i].className)){      //指定范围内有满足正则条件的classname，添加到数组中
            result.push(arr[i]);
        }
    }
    return result;
}


/**
 * @function 返回指定的元素的下一个元素兄弟，解决了IE的不支持nextElementSibling问题
 * @param elem当前元素
 * @return 指定的元素的下一个兄弟元素
 */
function next(elem) {
    do{     //至少找一次下一个兄弟
        elem = elem && elem.nextSibling;     //&elem代表防止出现空指针.nextSibling的情况
    }while(elem && elem.nodeType != 1);     //当为空或者节点为1（元素节点）跳出循环
    return elem;
}



/**
 * @function 返回指定的元素的前一个元素兄弟
 * @param elem
 * @return 指定的元素的前一个元素兄弟
 */
function prev(elem) {       //思路同next函数
    do{
        //为了防止当前元素的前一个为空 elem && ...
        elem = elem && elem.previousSibling;
    }while(elem && elem.nodeType != 1);
    return elem;
}



/**
 * @function 查找指定元素的第一个孩子节点
 * @param elem
 */
function first(elem) {
    elem = elem.firstChild;
    //三目运算符？：表示：如果elem的第一个孩子节点类型为1→返回elem
    //                  否则说明是其他节点，调用next函数找下一个兄弟
    return elem && elem.nodeType == 1 ? elem : next(elem);
}



/**
 * 查找指定元素的最后一个孩子节点
 * @param elem
 */
function last(elem) {
    elem = elem.lastChild;  //先找elem的最后一个孩子节点（有可能不是元素节点）
    //三目运算符判断：如果elem是元素节点，直接返回
    //              否则elem是其他节点，调用prev函数找前一个是元素节点的孩子节点
    return elem && elem.nodeType == 1 ? elem : prev(elem);
}



/**
 * 在给定的当前元素的前面插入一个新元素
 * @param elem
 */
function before(elem, newNode) {
    //insertBefore函数必须是父元素下调用
    elem.parentNode.insertBefore(newNode, elem);
}



/**
 * 在给定的当前元素的后面面插入一个新元素
 * @param elem
 * @param newNode
 */
function after(elem, newNode) {
    if(elem.nextSibling){   //如果当前元素有下一个兄弟节点
        before(elem.nextSibling, newNode);  //则插入到当前元素的前面
    }else{
        elem.parentNode.appendChild(newNode);   //当前节点没有下一个兄弟节点，则直接在父亲的尾部插入节点
    }
}



/**
 * 删除给定的元素
 * @param elem
 */
function remove(elem) {
    //同insertBefore（），只能在父节点下操作，不能自己删自己
    elem.parentNode.removeChild(elem);
}



/**
 * @param elem 当前元素
 * @return {Array} 返回当前元素的所有元素节点
 */
function siblings(elem) {
    var arr = [];
    var elements = elem.parentNode.children;    //先找到父亲节点下的所有孩子
    for(var i=0; i<elements.length; i++){   //循环扫描，排除自己外的所有孩子放在Element数组中
        if(elements[i] != elem){
            arr.push(elements[i]);      //加入数组
        }
    }
    return arr;
}

/**
 * @function 深复制一个对象（两个存储空间）
 * @param obj
 * @return {{}}
 */
function cloneObj(obj) {
    //用于存储复制后的对象
    var newObj = {};
    //遍历复制obj各个属性，for（ in ）
    for(var p in obj){
        //当对象的属性是对象时，递归调用复制函数
        if(typeof obj[p] === 'object'){
            //对调用复制函数复制‘对象属性’给新对象的属性
            newObj[p] = arguments.callee(obj[p]);   //等价于cloneObj（），但会提高性能
        }else{      ////基本属性直接复制
            newObj[p] = obj[p];
        }
    }
    return newObj;
}



/**
 * @param target 被合并的目标对象
 * @param obj 要合并的对象
 * @return 返回合并的新的对象
 */
function extend(target, obj) {      //基本同clone函数
    for(var p in obj){
        if(typeof obj[p] === 'object'){
            target[p] = cloneObj(obj[p]);
        }else{
            target[p] = obj[p];
        }
    }
    return target;
}


/**
 * 去除字符串首尾空格
 * @param str
 * @return {string}
 */
function trim(str) {
    //复习正则表达式^(开头)  +（1个或多个） \s空白字符
    //复习string的replace函数
    return str.replace(/^\s+|\s+$/g, '');
}


/***
 * @function 获取当前元素样式
 * @param elem 要获取样式的元素
 * @param 要获取哪个样式
 * @return *
 */
function getStyle(elem, attr) {
    //能力检测
    if(elem.currentStyle){  //IE可以用
        return elem.currentStyle[attr];     //注意属性是变量用[]
    }else if(elem.getComputedStyle){    //标准浏览器firefox和chrome
        return elem.getComputedStyle[attr];
    }else{
        return elem.style[attr];
    }
}

/**
 *
 * @function 获取属性的值或设置属性的值
 * @param elem
 * @param attr
 * @param value
 * @return {*}
 */
function css(elem, attr, value) {
    if(value){//如果给value传了值,直接设置属性
        for(var p in attr){             //遍历该对象
            switch(p){
                case 'width':
                case 'height':
                case 'padding':
                case 'paddingLeft':
                case 'paddingRight':
                case 'paddingTop':
                case 'paddingBottom':
                    //如果是%就不变，负数变成0   parseInt全转换成没有单位的，最后在统一拼接单位‘px’
                    //复习正则表达式的test、exec函数
                    value = /\%/.test(attr[p])?attr[p]:Math.max(parseInt(attr[p]), 0) + 'px';
                    break;
                case 'left':
                case 'top':
                case 'bottom':
                case 'right':
                case 'margin':
                case 'marginLeft':
                case 'marginRight':
                case 'marginTop':
                case 'marginBottom':
                    value = /\%/.test(attr[p])?attr[p]:parseInt(attr[p]) + 'px';
                    break;
                default:        //其他没有px单位的属性
                    value = attr[p];
            }
            elem.style[p] = value;
        }

    }else{    //没设置值就获取
        if(typeof attr === 'string'){       //属性是一个普通字符串（常规属性）
            return getStyle(elem, attr);
        }
    }
}


/**
 *
 * @function 兼容多种浏览器的绑定事件
 * @param elem  要绑定事件的元素
 * @param type  绑定事件的类型
 * @param fn    事件处理函数
 */
function addEvent(elem, type, fn) {
    if(elem.addEventListener){//标准
        //注意addEventListener的参数（事件类型（不加on），fn事件处理函数，事件冒泡）
        elem.addEventListener(type, fn, false);
    }else if(elem.attachEvent){     //IE浏览器
        elem[type+fn] = function () {   //通过自定义属性解决绑定和解除不是同一个函数的问题
            fn.call(elem);         //this绑定成了window IE的bug
        };
        elem.attachEvent('on'+type, elem[type+fn]);
    }else{
        elem['on' + type] = fn;
    }
}

/**
 * @function 移除绑定事件
 * @param elem 要解除绑定事件的元素
 * @param type  解除那个事件
 * @param fn    解除事件函数
 */
function removeEvent(elem, type, fn) {
    if(elem.removeEventListener){   //标准浏览器
        elem.removeEventListener(type, fn, false);

    }else if(elem.detachEvent){     //IE浏览器
        elem.detachEvent('on'+type, elem[type+fn]);     //解决覆盖问题
    }else{
        elem['on' + type] = null;
    }
}