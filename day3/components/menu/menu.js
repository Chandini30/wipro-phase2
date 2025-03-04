import { Link } from "react-router-dom";

const Menu = () => {
    return(
        <div>
            <h1>Menu Page <br/></h1> 
            <Link to="/employeeinsert">EmployeeInsert</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/employeesearch">EmployeeSearch</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/employeeshow">EmployeeShow</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/usersearch">UserSearch</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/usershow">UserShow</Link>
           
            
        </div>
    )
}

export default Menu;