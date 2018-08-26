const fs = require('fs');

fs.writeFile('./log.txt','2018.8.19',function(err){
  if(err){
    console.log('写入失败');
  }else{
    console.log('写入成功!');
  }
})

fs.readFile('./log.txt',{encoding:'utf-8'},function(err,data){
  if(err){
    console.log("读取失败");
  }else{
    console.log(data);
  }
})

//读取目录下所有文件 打印到终端
//方法后 带有Sync 表示同步方法
const path = require('path');
function readAllFile(base){
   try{
      let files = fs.readdirSync(base);
      files.forEach((file)=>{
         //获取当前文件信息
         let stat = fs.statSync(path.join(base,file))
         if(stat.isFile()){
           console.log(file);
         }else{
           readAllFile(path.join(base,file));
         }
      })
   }catch(err){
      console.log(err);
   }
   
}

readAllFile("./");