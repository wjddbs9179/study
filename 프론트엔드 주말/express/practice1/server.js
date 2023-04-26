const express= require('express');
//express모듈을 가져와서 express변수에 할당

const app = express()
//express프레임워크로 서버 생성

const PORT = process.env.PORT || 4000;
//프로세스 내부 환경변수 포트 - 이건 설정 안되어있어서...
//오른쪽은 4000
//포트 번호 설정
//포트번호 4000번 하겠다.

app.get('/',(req,res)=>{
    console.log('root response!');
})
//arrow fuction이고, 콜백함수로 설정
// '/' - 루트 요청 받으면 저 콜백함수가 실행된다.

app.get('/hello',(req,res)=>{
    console.log('hello response!');
})

app.get('/person',(req,res)=>{
    console.log('person response!');
})

//http://localhost:4000/person1/이민호
app.get('/person1/:name',(req,res)=>{
    console.log(req.params)//request parameters
    console.log(req.params.name);
    console.log('person name response!')
})
//http://localhost:4000/person2/이민호&20
app.get('/person2/:name&:age',(req,res)=>{
    console.log(req.params)//request parameters
    // {name:'이민호',age:'20'}
    console.log(req.params.name); //'이민호'
    console.log(req.params.age); // '20'
    console.log('person name response!')
})

app.get('/person3/:name&:age&:height',(req,res)=>{
    console.log(req.params)//request parameters
    console.log(req.params.name);
    console.log(req.params.age);
    console.log(req.params.height);
    console.log('person name response!')
})

app.listen(PORT,()=>{
    console.log(`Server On: http://localhost:${PORT}`);
});
//listen은 서버 대기 상태 진입
//``<-O ''<-X
//``-백틱 backtick