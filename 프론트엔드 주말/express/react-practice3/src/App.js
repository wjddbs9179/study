import './App.css';
import axios from 'axios';

function App() {
  const getBookList=async()=>{
    const result = await axios.get('/book');
    console.log(JSON.stringify(result.data));
  }

  const getBookByTitle=async()=>{
    var title = document.getElementById('title').value;
    const result = await axios.get(`/book/${title}`)
    console.log(JSON.stringify(result.data));
  }

  const regBook=async()=>{
    var title = document.getElementById("regTitle").value;
    var author = document.getElementById("regAuthor").value;
    var genre = document.getElementById("regGenre").value;
    var price = document.getElementById("regPrice").value;
    const data = {
      title : title,
      author : author,
      genre : genre,
      price : price
    }

    const result = await axios.post(`/book`,data);
    console.log(JSON.stringify(result.data));
  }

  const updateBook=async()=>{
    var title = document.getElementById("updateTitle").value;
    var author = document.getElementById("updateAuthor").value;
    var genre = document.getElementById("updateGenre").value;
    var price = document.getElementById("updatePrice").value;
    const data = {
      title : title,
      author : author,
      genre : genre,
      price : price
    }

    const result = await axios.put(`/book`,data);
    console.log(JSON.stringify(result.data));
  }

  const deleteBook=async()=>{
    var title = document.getElementById("deleteTitle").value;
    const result = await axios.delete(`/book?title=${title}`);
    console.log(JSON.stringify(result.data));
  }

  return (
    <div className="App">
      <h1>Book CRUD</h1>
      <button onClick={getBookList}>모두조회</button>
      <hr/>
      <input type="text" id="title"></input>
      <button onClick={getBookByTitle}>조건조회(제목)</button>
      <hr/>
      <h3>제목</h3>
      <input type="text" id="regTitle"></input>
      <h3>저자</h3>
      <input type="text" id="regAuthor"></input>
      <h3>장르</h3>
      <input type="text" id="regGenre"></input>
      <h3>가격</h3>
      <input type="number" id="regPrice"></input>
      <button onClick={regBook}>등록</button>
      <hr/>
      <h3>수정할 책 제목</h3>
      <input type="text" id="updateTitle"></input>
      <h3>저자</h3>
      <input type="text" id="updateAuthor"></input>
      <h3>장르</h3>
      <input type="text" id="updateGenre"></input>
      <h3>가격</h3>
      <input type="number" id="updatePrice"></input>
      <button onClick={updateBook}>등록</button>
      <hr/>
      <h3>삭제할 책 제목</h3>
      <input type="text" id="deleteTitle"></input>
      <button onClick={deleteBook}>삭제</button>
      <hr/>
    </div>
  );
}

export default App;
