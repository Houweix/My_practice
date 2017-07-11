/**
 * @function        JS获取元素
 * @param selector 要选择的元素，前面加‘#’ ‘.’
 * @param context  要选择元素的范围
 * @return {*}      选择到的元素（统一为数组，ID使用取数组的0号元素
 */

function $(selector, context) {
    context = context || document;      //如果传范围，就使用这个范围 不传使用document
    switch(selector.charAt(0)){
        case '#': //id
            return [document.getElementById(selector.substring(1))];
            break;
        case '.': //class
            return context.getElementsByClassName(selector.substring(1));
            break;
        default: //tag
            return context.getElementsByTagName(selector);
            break;
    }
}



/**
 * @function 返回指定的元素的下一个元素兄弟，解决了IE的不支持nextElementSibling问题
 * @param elem当前元素
 * @return 指定的元素的下一个兄弟元素
 */
function next(elem) {
    do{     //至少找一次下一个兄弟
        elem = elem && elem.nextSibling;
    }while(elem && elem.nodeType != 1);     //当为空或者节点为1（元素节点）跳出循环
    return elem;
}



/**
 * @function 返回指定的元素的前一个元素兄弟
 * @param elem
 * @return 指定的元素的前一个元素兄弟
 */
function prev(elem) {
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
    return elem && elem.nodeType == 1 ? elem : next(elem);
}



/**
 * 查找指定元素的最后一个孩子节点
 * @param elem
 */
function last(elem) {
    elem = elem.lastChild;
    return elem && elem.nodeType == 1 ? elem : prev(elem);
}



/**
 * 在给定的当前元素的前面插入一个新元素
 * @param elem
 */
function before(elem, newNode) {
    elem.parentNode.insertBefore(newNode, elem);
}



//        before(oH1, oSpan);
/**
 * 在给定的当前元素的后面面插入一个新元素
 * @param elem
 * @param newNode
 */
function after(elem, newNode) {
    if(elem.nextSibling){
        before(elem.nextSibling, newNode);
    }else{
        elem.parentNode.appendChild(newNode);
    }
}



/**
 * 删除给定的元素
 * @param elem
 */
function remove(elem) {
    elem.parentNode.removeChild(elem);
}



/**
 * @param elem 当前元素
 * @return {Array} 返回当前元素的元素节点
 */
function siblings(elem) {
    var arr = [];
    var elements = elem.parentNode.children;
    for(var i=0; i<elements.length; i++){
        if(elements[i] != elem){
            arr.push(elements[i]);
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
            newObj[p] = arguments.callee(obj[p]);   //等价于cloneObj（）
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
function extend(target, obj) {
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
    return str.replace(/^\s+|\s+$/g, '');
}




/**
 * 查找包含有className的元素
 * @param className
 * @param context
 * @return {Array}
 */
function getByClass(className, context) {
    context = context || document;
    var result = [];
    var arr = context.getElementsByTagName('*');         //'*' 找所有标签
    var re = new RegExp("\\b"+className+"\\b");         //字符串中\需要转义字符
    for(var i=0; i<arr.length; i++){
        if(re.test(arr[i].className)){      //指定范围内有满足正则条件的classname，添加到数组中
            result.push(arr[i]);
        }
    }
    return result;
}