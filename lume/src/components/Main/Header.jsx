import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import '../../styles/header.css'
import { useContext, useState } from "react";
function Header(){
  const {user} = useContext(UserContext);
  const [active, setActive] = useState("home");
  return(
    <div className="header-container">
      <div className="header-left"> 
        <img className="header-logo" src="/assets/Logo.png"></img>
        <p className={active==="home"?'header-active':'header-text'}>Home</p>
        <p className={active==="courses"?'header-active':'header-text'}>Courses</p>
        <p className={active==="create"?'header-active':'header-text'}>Create</p>
        <p className={active==="dashboard"?'header-active':'header-text'}>Dashboard</p>
      </div>
      <div className="header-right">
      <i className="fa-solid fa-magnifying-glass"></i> 
      {user?<img></img>:<><button className="header-signup">Sign Up</button><button className="header-login">Login</button></>}       
      </div>
    </div>
  )
}

export default Header;