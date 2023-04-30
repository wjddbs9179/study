const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(express.urlencoded({extended : false}));

let carList= [
    {id:1,model:'소나타',price:2300,provider:'현대'},
    {id:2,model:'뉴 아반떼',price:2100,provider:'현대'},
    {id:3,model:'아반떼',price:2100,provider:'현대'},
    {id:4,model:'모닝',price:1000,provider:'기아'},
    {id:5,model:'혼다 스포츠',price:2300,provider:'혼다'},
    {id:6,model:'bmw',price:2300,provider:'bmw그룹'},
    {id:7,model:'벤츠',price:2300,provider:'다임러ag'},
    {id:8,model:'페라리',price:2300,provider:'페라리'},
    {id:9,model:'롤스로이스',price:2300,provider:'롤스로이스'},
    {id:10,model:'재규어',price:2300,provider:'재규어'}
]

app.get('/car',(req,res)=>{
    let id = req.query.id;
    if(id===""){
        res.send(carList);
    }
    id=parseInt(id);
    for(let i = 0 ; i < carList.length ; i++){
        if(id===carList[i].id){
            res.send(carList[i]);
        }
    }
    res.send('not found car');
})

//http://localhost:4000/search?provider=현대
//http://localhost:4000/search?provider=현대&price=3000
//http://localhost:4000/search?provider=현대&start=3000&end=5000
//http://localhost:4000/search?provider=현대&start=3000&end=5000&word=아반떼
app.get('/car/search',(req,res)=>{
    let provider = req.query.provider;
    let start = 0;
    if(req.query.start!=null&&req.query.start!=""){
        start = parseInt(req.query.start);
    }
    let end = 210000000;
    if(req.query.end!=null&&req.query.end!=""){
        end = parseInt(req.query.end);
    }
    let word = "";
    if(req.query.word!=null){
        word = req.query.word;
    }

    let findByWordAndPrice = [];
   
    for(let i = 0 ; i < carList.length ; i++){
        if(carList[i].provider===provider&&carList[i].price>=start&&carList[i].price<=end){
            if(carList[i].model.includes(word)){
                findByWordAndPrice.push(carList[i]);
            }
        }
    }

    res.send(findByWordAndPrice);
})

app.get('/car/provider/:provider',(req,res)=>{
    let provider = req.params.provider;
    let findByProvider = [];
    for(let i = 0 ; i < carList.length ; i++){
        if(provider === carList[i].provider){
            findByProvider.push(carList[i])
        }
    }
    res.send(findByProvider);
})

app.post('/car',(req,res)=>{
    let car = req.body;
    carList.push(car);
})
//시작 후 대기상태
app.listen(PORT, ()=>{
    console.log(`Server On : http://localhost:${PORT}`)
})