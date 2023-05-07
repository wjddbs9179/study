const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db.js');
app.use(express.json());
app.use(express.urlencoded({extended : false}));


app.get('/car',(req,res)=>{
    var page=1;
    if(req.query.hasOwnProperty('page')){
        page = req.query.page;
    }
    
    console.log('/car');
    
    db.query(`select * from car limit ${(page-1)*10},10`,(err,data)=>{
        if(!err){
            console.log(data);
            res.send(data);
        }else{
            console.log(err);
            res.send(err);
        }
    })
})

app.get('/car/:car_model',(req,res)=>{
    console.log('/car/:car_model');
    
    db.query(`select * from car where car_model like '%${req.params.car_model}%'`,(err,data)=>{
        if(!err){
            console.log(data);
            res.send(data);
        }else{
            console.log(err);
            res.send(err);
        }
    })
})

app.post('/car',(req,res)=>{
    console.log('/car (post)');

    db.query(`insert into car values('${req.body.car_model}','${req.body.car_make}','${req.body.car_model_year}','${req.body.car_vin}','${req.body.color}')`,(err, data)=>{
        if(!err){
            res.send(req.body);
        }else{
            res.send(err);
        }
    })
})

app.put('/car',(req,res)=>{
    console.log('/car (put)');

    db.query(`update car set car_make='${req.body.car_make}', car_model_year='${req.body.car_model_year}', car_vin='${req.body.car_vin}', color='${req.body.color}' where car_model='${req.body.car_model}'`, (err,data)=>{
        if(!err){
            res.send(req.body);
        }else{
            res.send(err);
        }
    })
})

app.delete('/car',(req,res)=>{
    console.log('/car (delete)');

    db.query(`delete from car where car_model='${req.body.car_model}'`,(err,data)=>{
        if(!err){
            res.send(req.body);
        }else{
            res.send(err);
        }
    })
})


app.listen(PORT,()=>{
    console.log(`Server On : http://localhost:${PORT}`);
})