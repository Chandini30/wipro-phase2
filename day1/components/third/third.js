import { useState } from "react";

const Third = () => {
    const[firstname]=useState('chandini')
    const[lastname]=useState('bandaru')
    const[company]=useState('N/A')

return(
    <div>
        <p>
        First Name : {firstname} <br/>
        Last Name : {lastname} <br/>
        Company : {company}
        </p>
    </div>
)

}
export default Third;