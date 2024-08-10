import "./Register.css";

function Register({changeRoute}){

    return(
        <section id="register">
            <input className="inputName" placeholder="Enter your name" />
            <input className="inputUserName" placeholder="Enter your username" />
            <input className="inputPassword" placeholder="Enter your password" type="password" />
            <button className="btn inBtn color-white font-weight-md">Register</button>
            <p className="toggleText font-md color-secondary-blue btn" onClick={()=>changeRoute("logIn")} >LogIn</p>
        </section>
    );

}

export default Register;