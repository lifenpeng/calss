//自定义事件
const EventEmitter = require('events');

let  event = new EventEmitter();

event.on('code',()=>{
   console.log('code');
})
//调用自定义事件
event.emit('code');