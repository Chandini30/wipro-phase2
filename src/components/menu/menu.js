import { Link } from "react-router-dom";

const Menu = () => {
    return(
        <div>
            <h1>Menu Page <br/></h1> 
            <Link to="/first">First</Link><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/second">Second</Link><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/third">Third</Link><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/four">Four</Link><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/five">Five</Link><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/buttonex">Button Example</Link><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/counter">Counter</Link>
            
        </div>
    )
}

export default Menu;