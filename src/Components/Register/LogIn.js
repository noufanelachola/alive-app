import "./Register.css"

function LogIn({changeRoute}){
    return(
        <section id="logIn">
            <input className="inputUserName" placeholder="Enter your username" />
            <input className="inputPassword" placeholder="Enter your password" type="password" />
            <button className="btn inBtn color-white font-weight-md">Log In</button>
            <p className="toggleText font-md color-secondary-blue btn" onClick={()=>changeRoute("register")} >Register</p>
        </section>
    );
}


export default LogIn;