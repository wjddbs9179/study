const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db.js');
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.get('/',(req,res)=>{
    console.log('root');
})

app.get('/car',(req,res)=>{
    console.log('/car');
    db.query("select * from car",(err,data)=>{
        if(!err){
            console.log(data);
            res.send(data);
        }else{
            console.log(err);
            res.send(err);
        }
    })
})

app.get('/car/:model',(req,res)=>{
    console.log('/car/:model');

    db.query(`select * from car where car_model='${req.params.model}'`,(err,data)=>{
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
    console.log('car (post)');

    db.query(`insert into car values('${req.body.model}','${req.body.make}','${req.body.year}','${req.body.vin}','${req.body.color}')`,(err,data)=>{
        if(!err){
            console.log(data);
            res.send(req.body);
        }else{
            console.log(err);
            res.send(err);
        }
    })
})

app.put('/car',(req,res)=>{
    console.log('/car (put)');

    db.query(`update car set car_make='${req.body.make}', car_model_year='${req.body.year}',car_vin='${req.body.vin}',color='${req.body.color}' where car_model='${req.body.model}'`,(err,data)=>{
        if(!err){
            console.log(data);
            res.send(req.body);
        }else{
            console.log(err);
            res.send(err);
        }
    })
})

app.delete('/car',(req,res)=>{
    console.log('/car (delete)');
    db.query(`delete from car where car_model='${req.query.model}'`,(err,data)=>{
        if(!err){
            console.log(req.query);
            res.send(req.query);
        }else{
            console.log(err);
            res.send(err);
        }
    })
})



app.listen(PORT,()=>{
    console.log(`Server On : localhost:${PORT}`);
})
