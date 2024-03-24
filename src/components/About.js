import User from "./User";
import UserClass from "./UserClass";

const About = ()=> {
    return (
    <div> 
        <h1>This is about page</h1>
        <User name={"Ankit Singh (functional Component)"}/>

        <UserClass />
    </div>
    ) 
    
}

export default About;