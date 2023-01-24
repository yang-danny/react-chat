import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import logo from '../img/logo.png';

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

//Async function for user login with entered email and password
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
//get authentication from firebase
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
      <a><img src={logo} alt='logo ' className="logo"/></a>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit} className="inputForm">
          <input type="email" placeholder="email" className="inputText"/>
          <input type="password" placeholder="password" className="inputText"/>
          <button>Sign in</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;