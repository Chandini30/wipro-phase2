import { useState } from "react";
import axios from "axios";

const EmployeeInsert = () => {

    const [data, setData] = useState({
        empno : 0, 
        name : '',
        salary : 0
    })

    const handleChange = event => {
        setData({
            ...data,[event.target.name] : event.target.value  
        })
    }

    const addEmploy = () => {
        axios.post("http://localhost:1113/addemploy",{
          empno : data.empno,
          name : data.name,
          salary : data.salary
        }).then(resp => {
        //   alert(resp.data);
          console.log(resp.data);
          alert("Added");
        })
      }
    

    return(
        <div>
            <label>Employ Number : </label>
            <input type="number" name="empno" 
                value={data.empno} onChange={handleChange} /> <br/><br/>
            <label>Employ Name : </label>
            <input type="text" name="name" 
                value={data.name} onChange={handleChange} /> <br/><br/> 
            <label>Salary </label>
            <input type="number" name="salary" 
                value={data.salary} onChange={handleChange} /> <br/><br/> 
            <input type="button" value="Add Employ" onClick={addEmploy} /> 
         </div>
    )
}

export default EmployeeInsert;