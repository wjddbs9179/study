const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

let dataList=[
    {contents:'cnn news!'},
    {contents:'my hello world!'},
    {contents:'your hello game'}
]


app.get('/',(req,res)=>{
    console.log("root response!");
})

app.get('/search.naver',(req,res)=>{
    console.log(req.query);
    console.log(req.query.query)
    const query = req.query.query;
    for(var i=0 ; i<dataList.length;i++){
        if(dataList[i].contents.includes(query)){
            console.log(dataList[i].contents);
        }
    }
})

app.listen(PORT,()=>{
    console.log(`Server On : http://localhost:${PORT}`);
})