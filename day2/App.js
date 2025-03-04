
import './App.css';
import First from './component/first/first';
import Second from './component/second/second';
import Third from './component/third/third';
import Login from './component/login/login';
import Calc from './component/calc/calc';

function App() {
  return (
    <div className="App">
      <First /><br/>
      <Second /><br/>
      <Third /><br/>
      <Login/><br/>
      <Calc />
    </div>
  );
}

export default App;
