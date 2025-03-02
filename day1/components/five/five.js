import { useState } from "react";
const Five = () =>{
    const [firstName,setFirstName]=useState('')
    const update = () =>{
        setFirstName  ("sujatha")
    }
    return(
        <div>
            firstName is:{firstName}
            <br/>
            <input type="button" value="change" onClick={update}/>
        </div>

    )

}
export default Five;