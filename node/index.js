const path = require('path');
console.log(path);
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

const qs = require('querystring');
const obj = {
  name:'junjun',
  age:21
}

console.log(qs.stringify(obj,'~'));
console.log(qs.parse("name=junjun~age=21","~",":"))

//特殊字符转码  防止sql注入
console.log(qs.escape("name=junjun&age=18"));
console.log(qs.unescape('name%3Djunjun%26age%3D18'))

//创建服务器实例
const http = require('http');

//启动服务器
let server = http.createServer((req,res)=>{
    console.log(req.url);
    //请求路径
    if(req.url=='/index'){
        //设置请求头
        res.writeHead(200,{
          'Content-Type':"text/html;charset=utf-8"
        });

        res.write('<h1>hello node.js</h1>');
    }
    res.end();//通知客户端 响应数据完成
});

server.listen(8888,(err)=>{
   err?console.log(err):console.log('启动成功！');
})