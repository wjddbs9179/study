const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(express.urlencoded({extended : false}));

let carList=[
    {carName:'그랜저',carDetailName:'IG 3.0 익스클루시브',rank:'스페셜',
    provider:'현대',carNum:'233조7254',displacement:2999,produceYear:2017,color:'검정색',
    distanceDriven:102445,transmission:'오토',fuel:'가솔린',carType:'대형차',
    seizure:'없음',drivingSystem:'2륜',seater:5,reportNumber:2021107792},

    {carName:'그랜저',carDetailName:'IG 3.0 익스클루시브',rank:'세부등급 없음',
    provider:'현대',carNum:'36러2496',displacement:2999,produceYear:2018,color:'검정색',
    distanceDriven:54438,transmission:'오토',fuel:'가솔린',carType:'대형차',
    seizure:'없음',drivingSystem:'2륜',seater:5,reportNumber:2021076604},

    {carName:'그랜저',carDetailName:'IG 3.0 익스클루시브',rank:'스페셜',
    provider:'현대',carNum:'54나3188',displacement:2359,produceYear:2018,color:'쥐색',
    distanceDriven:87438,transmission:'오토',fuel:'가솔린+전기',carType:'대형차',
    seizure:'없음',drivingSystem:'2륜',seater:5,reportNumber:20211010730},

    {carName:'그랜저',carDetailName:'IG 3.0 익스클루시브',rank:'스페셜',
    provider:'현대',carNum:'31수8255',displacement:2359,produceYear:2019,color:'쥐색',
    distanceDriven:30795,transmission:'오토',fuel:'가솔린+전기',carType:'대형차',
    seizure:'없음',drivingSystem:'2륜',seater:5,reportNumber:20211476086},

    {carName:'그랜저',carDetailName:'IG 3.0 하이브리드',rank:'프리미엄',
    provider:'현대',carNum:'07부1351',displacement:2359,produceYear:2018,color:'검정색',
    distanceDriven:42044,transmission:'오토',fuel:'가솔린+전기',carType:'대형차',
    seizure:'없음',drivingSystem:'2륜',seater:5,reportNumber:214754},

    {carName:'그랜저',carDetailName:'IG 3.0 익스클루시브',rank:'스페셜',
    provider:'현대',carNum:'31수8255',displacement:2359,produceYear:2019,color:'흰색',
    distanceDriven:32154,transmission:'오토',fuel:'가솔린+전기',carType:'대형차',
    seizure:'없음',drivingSystem:'2륜',seater:5,reportNumber:2021265523},

    {carName:'그랜저',carDetailName:'IG 3.0 익스클루시브',rank:'스페셜',
    provider:'현대',carNum:'51가8501',displacement:2359,produceYear:2018,color:'흰색',
    distanceDriven:30211,transmission:'오토',fuel:'가솔린+전기',carType:'대형차',
    seizure:'없음',drivingSystem:'2륜',seater:5,reportNumber:222621000490},

    {carName:'그랜저',carDetailName:'IG 3.0 익스클루시브',rank:'스페셜',
    provider:'현대',carNum:'31버8323',displacement:2359,produceYear:2018,color:'쥐색',
    distanceDriven:73856,transmission:'오토',fuel:'가솔린+전기',carType:'대형차',
    seizure:'없음',drivingSystem:'2륜',seater:5,reportNumber:2021093791},

    {carName:'그랜저',carDetailName:'IG 3.0 익스클루시브',rank:'스페셜',
    provider:'현대',carNum:'62가3754',displacement:2359,produceYear:2018,color:'쥐색',
    distanceDriven:81356,transmission:'오토',fuel:'가솔린+전기',carType:'대형차',
    seizure:'없음',drivingSystem:'2륜',seater:5,reportNumber:20211461610},

    {carName:'그랜저',carDetailName:'IG 하이브리드 익스클루시브',rank:'세부등급 없음',
    provider:'현대',carNum:'63두7283',displacement:2359,produceYear:2018,color:'쥐색',
    distanceDriven:89172,transmission:'오토',fuel:'가솔린+전기',carType:'대형차',
    seizure:'없음',drivingSystem:'2륜',seater:5,reportNumber:20221003712},

    {carName:'그랜저',carDetailName:'IG 하이브리드 익스클루시브',rank:'세부등급 없음',
    provider:'현대',carNum:'145두3058',displacement:2359,produceYear:2018,color:'검정색',
    distanceDriven:124785,transmission:'오토',fuel:'가솔린+전기',carType:'대형차',
    seizure:'없음',drivingSystem:'2륜',seater:5,reportNumber:2021151072},

    {carName:'아반떼',carDetailName:'N 2.0',rank:'터보',
    provider:'현대',carNum:'351두9496',displacement:1998,produceYear:2022,color:'검정색',
    distanceDriven:11584,transmission:'오토',fuel:'가솔린',carType:'준중형차',
    seizure:'없음',drivingSystem:'2륜',seater:5,reportNumber:2021129679},

    {carName:'아반떼',carDetailName:'N 2.0',rank:'터보',
    provider:'현대',carNum:'384머3176',displacement:1998,produceYear:2022,color:'하늘색',
    distanceDriven:3561,transmission:'오토',fuel:'가솔린',carType:'준중형차',
    seizure:'없음',drivingSystem:'2륜',seater:5,reportNumber:20221000359},

    {carName:'아반떼',carDetailName:'(CN7) 가솔린 1.6',rank:'인스퍼레이션',
    provider:'현대',carNum:'259너1184',displacement:1598,produceYear:2021,color:'쥐색',
    distanceDriven:11507,transmission:'오토',fuel:'가솔린',carType:'준중형차',
    seizure:'없음',drivingSystem:'2륜',seater:5,reportNumber:2022002956},

    {carName:'아반떼',carDetailName:'(CN7) 가솔린 1.6',rank:'모던',
    provider:'현대',carNum:'124너5365',displacement:1598,produceYear:2021,color:'흰색',
    distanceDriven:10877,transmission:'오토',fuel:'가솔린',carType:'준중형차',
    seizure:'없음',drivingSystem:'2륜',seater:5,reportNumber:2021081966},

    {carName:'아반떼',carDetailName:'(CN7) 가솔린 1.6',rank:'인스퍼레이션',
    provider:'현대',carNum:'162고8802',displacement:1598,produceYear:2021,color:'흰색',
    distanceDriven:40886,transmission:'오토',fuel:'가솔린',carType:'준중형차',
    seizure:'없음',drivingSystem:'2륜',seater:5,reportNumber:2021261258},

    {carName:'모닝',carDetailName:'어반 가솔린 1.0',rank:'스탠다드',
    provider:'기아',carNum:'139러9483',displacement:998,produceYear:2021,color:'흰색',
    distanceDriven:15253,transmission:'오토',fuel:'가솔린',carType:'경차',
    seizure:'없음',drivingSystem:'2륜',seater:5,reportNumber:20211020088},

    {carName:'모닝',carDetailName:'어반 가솔린 1.0',rank:'시그니쳐',
    provider:'기아',carNum:'248너1978',displacement:998,produceYear:2021,color:'진주색',
    distanceDriven:3424,transmission:'오토',fuel:'가솔린',carType:'경차',
    seizure:'없음',drivingSystem:'2륜',seater:5,reportNumber:211782},

    {carName:'모닝',carDetailName:'어반 가솔린 1.0',rank:'프레스티지',
    provider:'기아',carNum:'284서2586',displacement:998,produceYear:2021,color:'진주색',
    distanceDriven:10444,transmission:'오토',fuel:'가솔린',carType:'경차',
    seizure:'없음',drivingSystem:'2륜',seater:5,reportNumber:2021067320},

    {carName:'쏘나타',carDetailName:'하이브리드 2.0',rank:'프리미엄',
    provider:'현대',carNum:'14모7456',displacement:1999,produceYear:2014,color:'흰색',
    distanceDriven:60557,transmission:'오토',fuel:'가솔린+전기',carType:'중형차',
    seizure:'없음',drivingSystem:'2륜',seater:5,reportNumber:20221000129},

    {carName:'쏘나타',carDetailName:'하이브리드 2.0',rank:'프리미어',
    provider:'현대',carNum:'67우4866',displacement:1999,produceYear:2012,color:'흰색',
    distanceDriven:131307,transmission:'오토',fuel:'가솔린+전기',carType:'중형차',
    seizure:'없음',drivingSystem:'2륜',seater:5,reportNumber:212621039235},

    {carName:'쏘나타',carDetailName:'하이브리드',rank:'로열',
    provider:'현대',carNum:'60마8397',displacement:1999,produceYear:2012,color:'은회색',
    distanceDriven:116718,transmission:'오토',fuel:'가솔린+전기',carType:'중형차',
    seizure:'없음',drivingSystem:'2륜',seater:5,reportNumber:20211469408},

    {carName:'쏘나타',carDetailName:'하이브리드 2.0',rank:'스마트',
    provider:'현대',carNum:'64루8997',displacement:1999,produceYear:2012,color:'흰색',
    distanceDriven:131992,transmission:'오토',fuel:'가솔린+전기',carType:'중형차',
    seizure:'없음',drivingSystem:'2륜',seater:5,reportNumber:2021138783},

    {carName:'스파크',carDetailName:'LT',rank:'기본형',
    provider:'쉐보레(GM대우)',carNum:'24무5613',displacement:995,produceYear:2013,color:'은색',
    distanceDriven:46137,transmission:'오토',fuel:'가솔린',carType:'경차',
    seizure:'없음',drivingSystem:'2륜',seater:5,reportNumber:2021255900},

    {carName:'스파크',carDetailName:'더 뉴 스파크',rank:'프리미어',
    provider:'쉐보레(GM대우)',carNum:'104오5521',displacement:999,produceYear:2020,color:'검정색',
    distanceDriven:15750,transmission:'오토',fuel:'가솔린',carType:'경차',
    seizure:'없음',drivingSystem:'2륜',seater:5,reportNumber:2021137145},

    {carName:'스파크',carDetailName:'스파크 S',rank:'LT',
    provider:'쉐보레(GM대우)',carNum:'13로7864',displacement:995,produceYear:2014,color:'흰색',
    distanceDriven:89534,transmission:'오토',fuel:'가솔린',carType:'경차',
    seizure:'없음',drivingSystem:'2륜',seater:5,reportNumber:20211494065},

    {carName:'스파크',carDetailName:'더 넥스트 스파크 에코',rank:'LTZ',
    provider:'쉐보레(GM대우)',carNum:'49고0575',displacement:999,produceYear:2017,color:'청색',
    distanceDriven:20672,transmission:'오토',fuel:'가솔린',carType:'경차',
    seizure:'없음',drivingSystem:'2륜',seater:5,reportNumber:212621036984},
    ]
//http://localhost:4000/car/2
//http통신으로 내 컴퓨터 4000번 포트에 /car/2이런 요청을 보내서
//아이디 2번인 차량정보 달라
//http://localhost:4000/car/id=2&name=kim
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
// app.get('/car/search',(req,res)=>{
//     let provider = req.query.provider;
//     let start = 0;
//     if(req.query.start!=null&&req.query.start!=""){
//         start = parseInt(req.query.start);
//     }
//     let end = 210000000;
//     if(req.query.end!=null&&req.query.end!=""){
//         end = parseInt(req.query.end);
//     }
//     let word = "";
//     if(req.query.word!=null&&req.query.word!=""){
//         word = req.query.word;
//     }

//     let findByWordAndPrice = [];

//     if(provider!=null && provider!=""){
//         for(let i = 0 ; i < carList.length ; i++){
//             if(carList[i].provider===provider&&carList[i].price>=start&&carList[i].price<=end){
//                 if(carList[i].model.includes(word)){
//                     findByWordAndPrice.push(carList[i]);
//                 }
//             }
//         }
//     }else{
//         for(let i = 0 ; i < carList.length ; i++){
//             if(carList[i].price>=start&&carList[i].price<=end){
//                 if(carList[i].model.includes(word)){
//                     findByWordAndPrice.push(carList[i]);
//                 }
//             }
//         }
//     }

//     res.send(findByWordAndPrice);
// })

app.get('/car/search',(req,res)=>{
    let color = "";
    if(req.query.hasOwnProperty('color')){
        color=req.query.color;
    }
    let carName = "";
    if(req.query.hasOwnProperty('carName')){
        carName = req.query.carName;
    }
    let provider = "";
    if(req.query.hasOwnProperty('provider')){
        provider = req.query.provider;
    }
    let distanceDriven = 2100000000;
    if(req.query.hasOwnProperty('distanceDriven')){
        distanceDriven = parseInt(req.query.distanceDriven);
    }

    let filteredList = carList.filter(
        (data)=>(data.color.includes(color)
        &&data.carName.includes(carName)
        &&data.provider.includes(provider)
        &&data.distanceDriven<=distanceDriven)
    );
    
    res.send(filteredList);
})

app.post('/car',(req,res)=>{
    console.log('/car (post)');
    let car = req.body;
    carList.push(car);
    res.send(carList);
})

app.put('/car',(req,res)=>{
    console.log('/car (put)');
    let car = req.body;

    for(let i = 0 ; i < carList.length ; i++){
        if(carList[i].carNum===car.carNum){
            carList[i].carName=car.carName;
            carList[i].carDetailName=car.carDetailName;
            carList[i].color=car.color;
        }
    }

    res.send(carList);
})

app.delete('/car',(req,res)=>{
    console.log('/car (delete)');
    let carNum = req.body.carNum;
    for(let i = 0 ; i <carList.length;i++){
        if(carList[i].carNum===carNum){
            carList.splice(i,1);
        }
    }
    res.send(carList);
})
//시작 후 대기상태
app.listen(PORT, ()=>{
    console.log(`Server On : http://localhost:${PORT}`)
})