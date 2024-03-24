import React from "react";


class UserClass extends React.Component{
   
    constructor(props){
        super(props);
        // this is the best place to create usestate.
        
        this.state = {
            UserInfo : {
                login : 'xyz',
                location : 'abc',
            },
          };
    }

          async componentDidMount() {
            const response = await fetch(`https://api.github.com/users/Ankii-Sing`);
            const json = await response.json();
            this.setState({ UserInfo: json });
          }
    
     

    render() {

        const {login , location ,avatar_url} = this.state.UserInfo 

        return (
            <div className="user-card">
                <h2>login : {login}</h2>
                <h3>location: {location} </h3>
                <img src={avatar_url}></img>
                {/* <h3> count2 : {this.state.count2} </h3> */}
                {/* <h3>count3 :{count3}</h3> */}
                <h3>Location : Uttar - Pradesh</h3>
                <h3>Contact : @ANKIT</h3>
    
            </div>
        )
    }
}

export default UserClass ;