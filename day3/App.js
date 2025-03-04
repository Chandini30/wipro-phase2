import UserShow from './components/usershow/usershow';
import './App.css';
import EmployeeShow from './components/employeeshow/employeeshow';
import UserSearch from './components/usersearch/usersearch';
import EmployeeSearch from './components/employeesearch/employeesearch';
import EmployeeInsert from './components/employeeinsert/employeeinsert';
import Menu from './components/menu/menu';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Login from './components/login/login';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/EmployeeShow" element={< EmployeeShow />} />
        <Route path="/UserSearch" element={< UserSearch/>} />
        <Route path="/EmployeeSearch" element={< EmployeeSearch/>} /> 
        <Route path="/EmployeeInsert" element={<EmployeeInsert/>} />
        <Route path="/UserShow" element={<UserShow/>} /> 
        <Route path="/menu" element={<Menu />} />
        
       
       
       
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
