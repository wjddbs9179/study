import './App.css';
import axios from 'axios';

function App() {
  const getPersonData=async()=>{
    //XMLHttpRequest - 순수 자바스크립트
    //$.get,$.post,$.ajax - jquery
    //axios - React
    const result = await axios.get('/person');
    //브라우저 : http://localhost:4001/person

    console.log(`result = ${JSON.stringify(result.data)}`);
    //$.ajax({method:'get'})
  }
  const getPersonDataByName=async()=>{
    var name = document.getElementById("name").value;
    const result = await axios.get('/person/'+name);
    console.log(JSON.stringify(result.data));
  }
  const RegistryPersonData=async()=>{
    const data = {
      name : document.getElementById("regName").value,
      age : document.getElementById("regAge").value,
      height : document.getElementById("regHeight").value
      }
      try{
        const result = await axios.post('/person',data)
        console.log(JSON.stringify(result));
      }catch(error){
        console.log(error);
      }
  }
  return (
    <div className="App">
      <h1>React-Express-MySQL</h1>
      <button onClick={getPersonData}>모두조회</button>
      <hr/>
      <input type='text' id="name"></input>
      <button onClick={getPersonDataByName}>조건조회</button>
      <hr/>
      이름 <input type="text" id="regName"></input><br/>
      나이 <input type="number" id="regAge"></input><br/>
      키 <input type="number" id="regHeight"></input>
      <button onClick={RegistryPersonData}>등록</button>
      <hr/>
    </div>
  );
}

export default App;
