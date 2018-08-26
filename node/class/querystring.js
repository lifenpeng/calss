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