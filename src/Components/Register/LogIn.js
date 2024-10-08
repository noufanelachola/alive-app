import { useState } from "react";
import "./Register.css"

function LogIn({url,changeRoute,setUser}){
    // State to store the input values
    const [input,setInput] = useState({
        username : "",
        password : ""
    });

    // function to LogIn
    const onLogIn = () => {
        fetch(`${url}/login`,{
            method : "post",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(input)
        }).then(response => response.json())
        .then(user => {
            console.log(user);
            setUser(prevState => ({
                ...prevState,
                name : user.name,
                username : user.username
            }));

            // Set the input tags to empty
            setInput({
                username : "",
                password : ""
            });
            
        }).catch(error => console.log("Error : "+error));
        
        
    }

    // Function to update the input state
    const inputChange = (state,event) => {
        setInput(prevState => ({
            ...prevState,
            [state] : event.target.value
        }));
    }

    return(
        <section id="logIn">
            <input className="inputUserName" placeholder="Enter your username" value={input.username} onChange={(event)=>inputChange("username",event)} />
            <input className="inputPassword" placeholder="Enter your password" value={input.password} type="password" onChange={(event)=>inputChange("password",event)} />
            <button className="btn inBtn color-white font-weight-md" onClick={()=>onLogIn()} >Log In</button>
            <p className="toggleText font-md color-secondary-blue btn" onClick={()=>changeRoute("register")} >Register</p>
        </section>
    );
}


export default LogIn;