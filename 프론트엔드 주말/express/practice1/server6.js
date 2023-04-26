const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({extended : false}));

let movieList = [
    {id:1,name:'슈퍼 마리오 브라더스',price:7000,director:"야론 호바스"},
    {id:2,name:'드림',price:8000,director:'이병헌'},
    {id:3,name:'존윅4',price:9000,director:'채드 스타헬스키'}
]

app.get('/movie/:id',(req,res)=>{
    for(var i=0;i<movieList.length;i++){
        if(movieList[i].id==req.params.id){
            console.log(movieList);
            res.send(movieList[i]);
        }
    }
    console.log(movieList);
    res.send('not found movie');
})

app.post('/movie',(req,res)=>{
    movieList.push(req.body);
    console.log(movieList);
    res.send(req.body);
})

app.put('/movie',(req,res)=>{
    for(var i=0;i<movieList.length;i++){
        if(movieList[i].id===req.body.id){
            movieList[i].price=req.body.price;
            console.log(movieList);
            res.send(movieList[i]);
        }
    }
    console.log(movieList);
    res.send("not found movie");
})

app.delete('movie',(req,res)=>{
    for(var i=0;i<movieList.length;i++){
        if(movieList[i].id===req.body.id){
            movieList.splice(i,1);
            i--;
            console.log(movieList);
            res.send(movieList);
        }
    }
    console.log(movieList);
    res.send("not found movie");
})


app.listen(PORT,()=>{
    console.log(`Server On : http://localhost:${PORT}`);
})