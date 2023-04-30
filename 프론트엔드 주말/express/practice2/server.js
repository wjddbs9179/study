//생성
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000

//json parser 등록
//req.body = undefined 문제 해결
app.use(express.json());
app.use(express.urlencoded({extended : false}));

let movieList=[
    {id:1,title:'슈퍼마리오',rating:8.4},
    {id:2,title:'존윅',rating:9.2},
    {id:3,title:'드림',rating:8.1}
]//길이가 3인 JSON 배열

app.get('/movies',(req, res)=>{//콜백으로 화살표 함수 설정
    console.log('movies Response');
    res.send(movieList);
})

//http://localhost:4000/movies/2
app.get('/movies/:id',(req, res)=>{//콜백으로 화살표 함수 설정
    console.log(req.params)
    console.log(req.params.id);
    console.log('movies Response');
    var movieId = parseInt(req.params.id);

    for(var i=0;i<movieList.length;i++){
        if(movieId===movieList[i].id){
            res.send(movieList[i]);
        }
    }
    res.send('cant find');
})

app.post('/movies',(req,res)=>{
    console.log('/movies (post)');
    movieList.push(req.body);
    res.send(movieList);
})

app.put('/movies',(req,res)=>{
    var movie = req.body;
    console.log(movie);
    for(var i = 0; i <movieList.length;i++){
        if(movieList[i].id===movie.id){
            movieList[i].title = movie.title;
            movieList[i].rating = movie.rating;
            res.send(movieList[i]);
        }
    }
    res.send('cannot find movie');
})

app.delete('/movies/:id',(req,res)=>{
    var movieId = parseInt(req.params.id);

    for(var i = 0 ; i < movieList.length ; i++){
        if(movieId===movieList[i].id){
            movieList.splice(i,1);
            res.send(movieList);
        }
    }
    res.send('cannot find movie');
})

//시작후 대기상태
app.listen(PORT,()=>{
    console.log(`Server On:http://localhost:${PORT}`);
})