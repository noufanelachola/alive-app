import "./Register.css";

function Register(){

    return(
        <section id="register">
            <input className="inputName" placeholder="Enter your name" />
            <input className="inputUserName" placeholder="Enter your username" />
            <input className="inputPassword" placeholder="Enter your password" type="password" />
            <p className="toggleText font-md color-secondary-blue btn">LogIn</p>
        </section>
    );

}

export default Register;