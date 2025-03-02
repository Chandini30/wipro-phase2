
import './App.css';
import First from './components/first/first';
import Third from './components/third/third';
import Second from './components/second/second';
import Four from './components/four/four';
import Five from './components/five/five';
import ButtonEx from './components/buttonex/buttonex';
import Counter from './components/counter/counter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/menu/menu';
import Login from './components/login/login';


function App() {
  return (
    <div className="App">
    <h1>Welcome <br/></h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/first" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} /> 
        <Route path="/four" element={<Four FirstName="Ajay" LastName="Kandagatla"/>} />
        <Route path="/five" element={<Five />} /> 
        <Route path="/buttonex" element={<ButtonEx />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/menu" element={<Menu />} />
       
       
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
