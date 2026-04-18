import React from "react";
import {Link} from 'react-router-dom'
function Home(props){
    return(
        <div>
            <Link to="/">HOME</Link>
            <Link to="/Contact">Contact us</Link>
        </div>
    )
}
export default Home;