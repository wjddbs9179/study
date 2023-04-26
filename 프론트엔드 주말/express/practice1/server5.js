const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000

app.use(express.json());
app.use(express.urlencoded({extended : false}));

let personList=[
    {id:1,name:"kim",age:20,height:176.6},
    {id:2,name:"lee",age:21,height:162.4},
    {id:3,name:"park",age:22,height:178.7}
]


app.get('/person',(req, res)=>{
    console.log('person response!');
    console.log(personList)//서버 내부 콘솔 출력
    res.send(personList)//응답 (화면에 전달)
})

app.get('/person/:id',(req,res)=>{
    console.log('person response!')
    const id = req.params.id;
    for(var i=0; i<personList.length;i++){
        if(personList[i].id==id){
            res.send(personList[i]);
        }
    }
    res.send("not found person");
})
//app.get('/person',콜백)
app.post('/person',(req,res)=>{
    console.log('post request accept!');
    console.log(req.body)
    //undefined -> {id:4, name:'choi', age:23, height:167.5}
    personList.push(req.body);
    console.log("추가 완료!");
    //이건 배열에 뒤에 항목 하나 추가!
    //나중엔 배열말고 DB에 insert SQL문 실행해서 DB에 추가!
    console.log(personList);
    res.send('post request accept!');
})

app.put('/person',(req,res)=>{
    console.log('put person');

    for(var i = 0;i<personList.length;i++){
        if(personList[i].id===req.body.id){
            personList[i].name=req.body.name;
            personList[i].age=req.body.age;
            personList[i].height=req.body.height;
            console.log("수정완료!");
        }
    }
    console.log(personList);
    res.send(personList);
})

app.delete('/person',(req,res)=>{
    console.log('delete person');
    for(var i =0;i<personList.length;i++){
        if(personList[i].id===req.body.id){
            personList.splice(i,1);
            i--;
            console.log("삭제완료!");
        }
    }
    console.log(personList);
    res.send(personList);
})



app.listen(PORT,()=>{
    console.log(`Server On: http://localhost:${PORT}`);
})