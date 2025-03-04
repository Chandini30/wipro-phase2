import {  useState } from "react"
import axios from "axios";

const EmployeeSearch = () => {
    const[employResult, SetEmployResult] = useState({})
    const[empno,SetEmpNo] = useState(0) 

    const handleChange = event => {
        SetEmpNo(event.target.value)
        // alert(empno);
    }

    const show = () => {
        // alert(userId)
        let eid = parseInt(empno);
        axios.get("http://localhost:1113/searchemploy/"+eid).then(
            (response) => {
                SetEmployResult(response.data)
            }  
          )
      
    }
    return(
        <div>
            <label>
                Employ No : </label>
            <input type="number" name="empno" 
                value={empno} onChange={handleChange} /> <br/>
            <input type="button" value="Show" onClick={show} />
            <hr/>
            Employ No : <b>{employResult.empno}</b> <br/>
            Employ Name : <b>{employResult.name}</b> <br/>
            salary : <b>{employResult.salary}</b> <br/>
           
        </div>
    )
}

export default EmployeeSearch;