import './App.css';
import axios from 'axios';

function App() {
  const getCarList=async()=>{
    const result = await axios.get('/car');
    console.log(JSON.stringify(result.data));
  }
  const getCarByModel=async()=>{
    var model = document.getElementById("model").value;
    const result = await axios.get(`/car/${model}`);
    console.log(`result = ${JSON.stringify(result.data)}`)
  }
  const regCar=async()=>{
    var regModel = document.getElementById("regModel").value;
    var regMake = document.getElementById("regMake").value;
    var regYear = document.getElementById("regYear").value;
    var regVin = document.getElementById("regVin").value;
    var regColor = document.getElementById("regColor").value;
    const data = {
      model : regModel,
      make : regMake,
      year : regYear,
      vin : regVin,
      color : regColor
    }
    const result = await axios.post(`/car`,data);
    console.log(`result = ${JSON.stringify(result.data)}`);
  }

  const updateCar=async()=>{
    var updateModel = document.getElementById("updateModel").value;
    var updateMake = document.getElementById("updateMake").value;
    var updateYear = document.getElementById("updateYear").value;
    var updateVin = document.getElementById("updateVin").value;
    var updateColor = document.getElementById("updateColor").value;
    const data = {
      model : updateModel,
      make : updateMake,
      year : updateYear,
      vin : updateVin,
      color : updateColor
    }
    const result = await axios.put(`/car`,data);
    console.log(`result = ${JSON.stringify(result.data)}`);
  }
  const deleteCar = async()=>{
    var deleteModel = document.getElementById("deleteModel").value;
    const result = await axios.delete(`/car?model=${deleteModel}`);
    console.log(JSON.stringify(result.data));
  }

  return (
    <div className="App">
      <h1>Car CRUD</h1>
      <button onClick={getCarList}>모두조회</button>
      <hr/>
      <input type="text" id="model"></input>
      <button onClick={getCarByModel}>조건조회(모델명)</button>
      <hr/>
      <h3>모델명</h3>
      <input type="text" id="regModel"></input>
      <h3>제조사</h3>
      <input type="text" id="regMake"></input>
      <h3>제조년도</h3>
      <input type="text" id="regYear"></input>
      <h3>Vin Code</h3>
      <input type="text" id="regVin"></input>
      <h3>색상</h3>
      <input type="text" id="regColor"></input>
      <button onClick={regCar}>등록</button>
      <hr/>
      <h3>수정할 모델</h3>
      <input type="text" id="updateModel"></input>
      <h3>제조사</h3>
      <input type="text" id="updateMake"></input>
      <h3>제조년도</h3>
      <input type="text" id="updateYear"></input>
      <h3>Vin Code</h3>
      <input type="text" id="updateVin"></input>
      <h3>색상</h3>
      <input type="text" id="updateColor"></input>
      <button onClick={updateCar}>수정</button>
      <hr/>
      <h3>삭제할 모델</h3>
      <input type="text" id="deleteModel"></input>
      <button onClick={deleteCar}>삭제</button>
      <hr/>
    </div>
  );
}

export default App;
