const express = require('express');

const app = express();

app.listen(8888)

app.get('/index',(req,res)=>{
    res.send('hello');
})
