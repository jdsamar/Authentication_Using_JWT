import React from "react";
import "./login.css";


const Login = () => {
    return (
        <div className="form">
        <form >
            <h2>Login</h2>
            <input className="input" type="text" placeholder="Email ID"></input><br></br>
            <input className="input" type="text" placeholder="Password"></input>
        </form>

        </div>
    );
}

export default Login;