import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// creating Header
const Header = () =>{

    const [btn , changeBtn] = useState("Login")

    console.log("heading rendering");

    // when no dependency array is there , use effect is called every time the component renders.
    // when empty dependecny is there .. use effect is called only once , when the component loads.
    // when we pass any dependency the use effect is called whenever the dependency changes.
    useEffect ( ()=> {
        console.log("use Effect is called..");
    } ,[btn] )

    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div id="logo-container">
                <img className="logo"
                 src = {LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Status : {onlineStatus === 'true' ? '🟢' : "🔴"}</li>
                    <li>
                        <Link to= "/"> Home </Link>
                    </li>
                    <li>
                    <Link to="/About"> About Us</Link>
                    </li>
                    <li>
                    <Link to="/Contact"> Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="Login-btn" onClick={
                        () => {  
                            btn === "Login" ? changeBtn("LogOut") : changeBtn("Login") ;
                        }
                    }> {btn}</button>
                </ul>

            </div>
        </div>
    )
}

// we need to export the file to import it somewhere
export default Header;