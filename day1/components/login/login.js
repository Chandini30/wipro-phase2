import { useState } from "react";
import {useNavigate} from "react-router-dom"


const Login = () => {

    const [data, setData] = useState({
        userName : '',
        passCode : ''
    })
    const navigate = useNavigate();
    const handleChange = event => {
        setData({
            ...data,[event.target.name] : event.target.value  
        })
    }

    const handleSubmit = () => {
        // alert(data.userName);
        // alert(data.passCode);
        if (data.userName === "Wipro" && data.passCode === "Wipro") {
            navigate("/menu");
            //alert("Correct Credentials...");
            
        } else {
            alert("Invalid Credentials...");
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    User Name : </label>
                    <input type="text" name="userName" onChange={handleChange}
                        value={data.userName} /> <br/><br/>
                <label>Password</label> 
                    <input type="password" name="passCode" onChange={handleChange}
                        value={data.passCode} /> <br/><br/>
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login;