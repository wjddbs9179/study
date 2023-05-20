const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db.js');
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.get('/',(req,res)=>{
    console.log('root');
})

app.get('/book',(req,res)=>{
    console.log('/book');

    db.query(`select * from book`,(err,data)=>{
        if(!err){
            res.send(data);
        }else{
            res.send(err);
        }
    })
})

app.get('/book/:title',(req,res)=>{
    console.log('/book/:title');

    db.query(`select * from book where book_title='${req.params.title}'`,(err,data)=>{
        if(!err){
            res.send(data);
        }else{
            res.send(err);
        }
    })
})

app.post('/book',(req,res)=>{
    console.log('/book (post)');

    db.query(`insert into book values('${req.body.title}','${req.body.author}','${req.body.genre}',${req.body.price})`,(err,data)=>{
        if(!err){
            res.send(req.body);
        }else{
            res.send(err);
        }
    })
})

app.put('/book',(req,res)=>{
    console.log('/book (put)');

    db.query(`update book set author='${req.body.author}', genre='${req.body.genre}',price=${req.body.price} where book_title='${req.body.title}'`,(err,data)=>{
        if(!err){
            res.send(req.body);
        }else{
            res.send(err);
        }
    })
})

app.delete('/book',(req,res)=>{
    console.log('/book (delete)');

    db.query(`delete from book where book_title='${req.query.title}'`,(err,data)=>{
        if(!err){
            res.send(req.query);
        }else{
            res.send(err);
        }
    })
})
app.listen(PORT,()=>{
    console.log(`Server On : localhost:${PORT}`);
})