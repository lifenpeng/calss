const path = require('path');
//console.log(path);
//app.set('view',path.join(__dirname,'view'))
console.log('footer',path.join('/foot','footer')) //相对路劲
console.log('footer',path.join('/foot/bar','..'))
console.log('footer',path.join('/foot/bar','../mz','/footer'))

//join 返回相对路径
//resolve 返回绝对路劲
//使用方式一致

console.log('footer',path.resolve('foot/bar','/mz','/footer'))

//将路径转换成对象形式显示
let path_obj = path.parse('c/rooot/user/login.msg');
console.log(path_obj);

//将对象路劲转换成普通形式
let path_format = path.format(path_obj);
console.log(path_format);

const url = require('path');

let url_msg = url.parse('http://www.google.com/?id=1&&admin=root#pagr');
console.log(url_msg);