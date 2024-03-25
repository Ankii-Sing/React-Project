import React, { Suspense, lazy } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"    // importing header
import Body from "./components/Body"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
// import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import Resturant from "./components/Resturant"
import Shimmer from "./components/Shimmer"


// implementing lazy loading in about sectoin
const About = lazy( () => import("./components/About"))
 
// creation app Layout
const Applayout = () => {
    return (
        <div className="app">
            <Header/>
            {/* here the the outlet is use to replace the children. */}
            <Outlet/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("steam"))

const appRouter = createBrowserRouter( [
    {
        path :"/",
        element : <Applayout/>,
        children : [
        {
            path : "/",
            element : <Body/>
        },
            {
            path : "/about",
            element : <Suspense fallback = { <Shimmer/> }>  <About/></Suspense>  
        },
        {
            path : "/contact",
            element: <Contact/>
        },
        {
            path : "/resturant/:resId",
            element: <Resturant/>
        },

        ],
        errorElement:<Error/>,
    },
    
])


//  this will rendr the appRouter and help the website in routing.
root.render(<RouterProvider router={appRouter}/>)

