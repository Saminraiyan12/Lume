import { useState } from "react";
import "../../styles/authentication.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [emailUsername, setEmailUsername] = useState("");
  const handlePasswordChange =(e)=>{
    setPassword(e.target.value);
  }
  const handleEmailUsernameChange = (e)=>{
    setEmailUsername(e.target.value);
  }
  const login=()=>{

  }
  return (
    <div className="auth-page-body">
      <div className="auth-container">
        <div className="auth-image"></div>
        <div className="auth-main">
          <div className="auth-header">
            <img className="auth-logo" src="/assets/Logo.png"></img>
            <h1>Welcome!</h1>
            <p>Login to continue</p>
          </div>
          <div className="auth-body">
            <div className="auth-input">
              <p>Email address or username</p>
              <input onChange={handleEmailUsernameChange} value={emailUsername} type="text" placeholder="Enter email or username"></input>
            </div>
            <div className="auth-input">
              <p>Password</p>
              <input onChange={handlePasswordChange} value={password} type="password" placeholder="Enter password"></input>
              <p></p>
            </div>
            <div>
              <button onClick={login} className="auth-button">Sign in</button>
              <p className="auth-bottom-text">Need an account? <span onClick={()=>navigate('/register')} className="auth-link">Register</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
