const express = require('express');

const app = express();

const PORT = process.env.PORT || 4000;

app.get('/car',(req,res)=>{
    console.log("car Response!");
})

app.get('/car1/:model',(req,res)=>{
    console.log(req.params);
    console.log(req.params.model);
    console.log("car model Response!");

    //req-request, res-response
    res.send(`car1 response : ${req.params.model}`);
    //response send - 응답을 클라이언트에 다시 전송해준다.
})

app.get('/car2/:model&:price',(req,res)=>{
    console.log(req.params);
    console.log(req.params.model);
    console.log(req.params.price);
    console.log("car model and price Response!");

    res.send(`car2 response : { model : ${req.params.model}, price : ${req.params.price} }`);

})

app.get('/car3/:model&:price&:fuel',(req,res)=>{
    console.log(req.params);
    console.log(req.params.model);
    console.log(req.params.price);
    console.log(req.params.fuel);
    console.log("car model and price and fuel Response!");

    res.send(`car3 response : { model : ${req.params.model}, price : ${req.params.price}, fuel : ${req.params.fuel} }`);
})

app.listen(PORT,()=>{
    console.log(`Server On : http://localhost:${PORT}`);
})