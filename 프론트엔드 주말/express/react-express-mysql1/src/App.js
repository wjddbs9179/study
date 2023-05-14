import './App.css';
import Header from './components/Header.js';
import Slide from './components/Slide.js';
import Contents from './components/Contents.js';
import Footer from './components/Footer.js';

//함수형 컴포넌트 App
function App() {
  return (
    <div id="wrap">
      <Header/>
      <Slide/>
      <Contents/>
      <Footer/>
    </div>
  );
}

export default App;
