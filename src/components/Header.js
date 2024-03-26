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
        <div className="flex justify-between shadow-sm">
            <div id="logo-container">
                <img className="w-48"
                 src = {LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Status : {onlineStatus === 'true' ? '🟢' : "🔴"}</li>
                    <li className="px-4">
                        <Link to= "/"> Home </Link>
                    </li>
                    <li className="px-4">
                    <Link to="/About"> About Us</Link>
                    </li>
                    <li className="px-4">
                    <Link to="/Contact"> Contact Us</Link>
                    </li>
                    <li className="px-4">Cart</li>
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