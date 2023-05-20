import './App.css';
import axios from 'axios';

function App() {
  const getPersonList=async()=>{
    const result = await axios.get('/person');
    console.log(`result = ${JSON.stringify(result.data)}`)
  }
  const getPersonByName=async()=>{
    var name = document.getElementById("name").value;
    const result = await axios.get(`/person/${name}`)
    console.log(`result = ${JSON.stringify(result.data)}`)
  }
  const regPerson = async()=>{
    var regName = document.getElementById("regName").value;
    var regAge = document.getElementById("regAge").value;
    var regHeight = document.getElementById("regHeight").value;
    const data ={
      name : regName,
      age : regAge,
      height : regHeight
    }
    try{
      const result = await axios.post('/person',data);
      console.log(JSON.stringify(result.data));
    }catch(error){
      console.log(error);
    }
  }
  const updatePerson = async()=>{
    var updateName = document.getElementById("updateName").value;
    var updateAge = document.getElementById("updateAge").value;
    var updateHeight = document.getElementById("updateHeight").value;
    const data={
      name : updateName,
      age : updateAge,
      height : updateHeight
    }
    try{
      const result = await axios.put('/person',data);
      console.log(JSON.stringify(result.data));
    }catch(error){
      console.log(error);
    }
  }
  const deletePerson = async()=>{
    var deleteName = document.getElementById("deleteName").value;
    try{
      const result = await axios.delete(`/person?name=${deleteName}`);
      console.log(JSON.stringify(result.data));
    }catch(error){
      console.log(error);
    }
  }
  return (
    <div className="App">
      <h1>리액트-DBMS 연동 CRUD</h1>
      <button onClick={getPersonList}>모두조회</button>
      <hr/>
      <input type="text" id="name"></input>
      <button onClick={getPersonByName}>조건조회(이름)</button>
      <hr/>
      <h3>이름</h3> <p><input type="text" id="regName"></input></p>
      <h3>나이</h3> <p><input type="number" id="regAge"></input></p>
      <h3>키</h3> <p><input type="number" id="regHeight"></input></p>
      <button onClick={regPerson}>등록</button>
      <hr/>
      <h3>수정 할 사람 이름</h3> <p><input type="text" id="updateName"></input></p>
      <h3>나이</h3> <p><input type="number" id="updateAge"></input></p>
      <h3>키</h3> <p><input type="number" id="updateHeight"></input></p>
      <button onClick={updatePerson}>수정</button>
      <hr/>
      <h3>삭제 할 사람 이름</h3><p><input type="text" id="deleteName"></input></p>
      <button onClick={deletePerson}>삭제</button>
    </div>
  );
}

export default App;
