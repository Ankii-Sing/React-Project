import { LOGO_URL } from "../utils/constants";
// creating Header
const Header = () =>{
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
                </ul>

            </div>
        </div>
    )
}

// we need to export the file to import it somewhere
export default Header;