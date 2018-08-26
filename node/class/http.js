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

const option = {
  protocol:'http:',
  hostname:'www.google.com',
  port:'80',
  path:'/',
  method:'post'
}

const client  = http.request(option,(res)=>{
    res.on('data',()=>{
      
    })
    res.on('end',()=>{

    })
})

client.write('name=junjun&&age=21');
client.end();