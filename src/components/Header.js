import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
// creating Header
const Header = () =>{

    const [btn , changeBtn] = useState("Login")

    return (
        <div className="header">
            <div id="logo-container">
                <img className="logo"
                 src = {LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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