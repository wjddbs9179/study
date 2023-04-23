const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/add/:num1&:num2",(req,res)=>{
    var num1 = parseInt(req.params.num1);
    var num2 = parseInt(req.params.num2);

    res.send(`${num1} + ${num2} = ${num1+num2}`);
})
app.get("/sub/:num1&:num2",(req,res)=>{
    var num1 = parseInt(req.params.num1);
    var num2 = parseInt(req.params.num2);

    res.send(`${num1} - ${num2} = ${num1-num2}`);
})
app.get("/mul/:num1&:num2",(req,res)=>{
    var num1 = parseInt(req.params.num1);
    var num2 = parseInt(req.params.num2);

    res.send(`${num1} x ${num2} = ${num1*num2}`);
})
app.get("/div/:num1&:num2",(req,res)=>{
    var num1 = parseInt(req.params.num1);
    var num2 = parseInt(req.params.num2);

    res.send(`${num1} ÷ ${num2} = ${num1/num2}`);
})



app.listen(PORT,()=>{
    console.log(`Server On : http://localhost:${PORT}`);
})