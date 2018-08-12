function code(obj){
    const data = {'name':'junjun','age':'21'};
    return obj(data);
}

function solo(){
    console.log('test');
}

let main = {
    'code':code
}

//module.exports.code = code;

module.exports= main;

//模块测试时用  避免测试需要运行整个项目 单独运行模块 判断模块是否被引用加载 单独做测试时用
if(!module.parent){
  //测试代码
  solo();
}