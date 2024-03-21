import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"    // importing header
import Body from "./components/Body"



 
// creation app Layout
const Applayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>

        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("steam"))
root.render(<Applayout/>)