const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db.js');
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.get('/',(req,res)=>{
    console.log('root');
})

app.get('/person',(req,res)=>{
    console.log('/person');
    db.query("select * from person",(err,data)=>{
        if(!err){
            console.log(data);
            res.send(data);
        }else{
            console.log(err);
            res.send(err);
        }
    })
})

app.get('/person/:name',(req,res)=>{
    console.log('/person/:name');

    db.query(`select * from person where name='${req.params.name}'`,(err,data)=>{
        if(!err){
            console.log(data);
            res.send(data);
        }else{
            console.log(err);
            res.send(err);
        }
    })
})

app.post('/person',(req,res)=>{
    console.log('/person (post)');

    db.query(`insert into person values('${req.body.name}',${req.body.age},${req.body.height})`,(err,data)=>{
        if(!err){
            console.log(data);
            res.send(req.body);
        }else{
            res.send(err);
        }
    })
})

app.put('/person',(req,res)=>{
    console.log('/person (put)');

    db.query(`update person set age=${req.body.age},height=${req.body.height} where name='${req.body.name}'`,(err,data)=>{
        if(!err){
            res.send(req.body);
        }else{
            res.send(err);
        }
    })
})

app.delete('/person',(req,res)=>{
    console.log('/person (delete)');
    console.log(req.query.name);

    db.query(`delete from person where name='${req.query.name}'`,(err, data)=>{
        if(!err){
            console.log(req.query);
            res.send(req.query)
        }else{
            console.log(err);
            res.send(err);
        }
    })
})

app.listen(PORT,()=>{
    console.log(`Server on : localhost:${PORT}`);
})