import { useState } from "react";

const User = (props) => {

    const [count ] = useState(0);
    const [count1 ] = useState(1);

    return (
        <div className="user-card">
            <h2>Name : {props.name}</h2>
            <h3>Count values : {count} {" "} {count1} </h3>
            <h3>Location : Uttar - Pradesh</h3>
            <h3>Contact : @ANKIT</h3>

        </div>
    )
}
export default User;
