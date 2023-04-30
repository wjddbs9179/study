const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(express.urlencoded({extended : false}));


var boardList=[
    {no:1, title:'시스템 장애신고 전화번호 070-8823-6974입니다.', contents:'글1 내용',date: '2022-09-01' },
    {no:2, title:'2018년 시민안전테마파크 예약일정 공지사항', contents:'글2 내용',date: '2022-10-01' },
    {no:3, title:'통합예약시스템 정상운영 안내', contents:'글3 내용',date: '2022-11-01' },
    {no:4, title:'대구문화예술회관 시설대관(공연장,전시실)관련 안내', contents:'글4 내용',date: '2022-12-01' },
    {no:5, title:'체육시설사용허가신청 관련 서식', contents:'글5 내용',date: '2023-01-01' },
    {no:6, title:'통합예약시스템 서비스 개시 "옥의 티를 찾아주세요"', contents:'글6 내용',date: '2023-02-01' },
    {no:7, title:'파계 오토 캠핑장 이용중단안내(13일~15일).', contents:'글7 내용',date: '2023-03-01' },
    {no:8, title:'동부여성문화회관 제2기 교육생 모집', contents:'글8 내용',date: '2023-04-01' },
    {no:9, title:'팔공산 파계오토캠핑장 예약시 주의사항 안내', contents:'글9 내용',date: '2023-05-01' },
    {no:10, title:'동부여성문화회관 야간 심리상담실 운영(화,목).', contents:'글10 내용',date: '2023-06-01' }
];

app.get('/boardList',(req, res)=>{
    res.send(boardList);
})

app.get('/board',(req, res)=>{
    if(req.query.hasOwnProperty('no')){
        let no = parseInt(req.query.no);
        let noFilterBoardList =  boardList.filter((data)=>(data.no===no));
        res.send(noFilterBoardList);
    }
    res.send('no is not number');
})

app.post('/board',(req,res)=>{
    let board = req.body;
    boardList.push(board);
    res.send(boardList);
})

app.put('/board',(req,res)=>{
    let board = req.body;
    for(let i = 0 ; i < boardList.length ; i++){
        if(board.no===boardList[i].no){
            boardList[i] = board;
        }
    }
    res.send(boardList);
})

app.delete('/board',(req,res)=>{
    let no = req.body.no;
    for(let i = 0 ; i < boardList.length ; i++){
        if(no===boardList[i].no){
            boardList.splice(i,1);
        }
    }
    res.send(boardList);
})

app.get('/board/search',(req,res)=>{
    let title = "";
    if(req.query.hasOwnProperty('title')){
        title = req.query.title;
    }
    let contents = "";
    if(req.query.hasOwnProperty('contents')){
        contents = req.query.contents;
    }
    let filterList = boardList.filter((data)=>(
        data.title.includes(title)&&
        data.contents.includes(contents)
    ));
    res.send(filterList);
})


app.listen(PORT,()=>{
    console.log(`Server On : http://localhost:${PORT}`);
})
