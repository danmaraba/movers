import React,{useState}from "react";
function Login() {
   const[action, setAction]= useState("Login")

   function handleSubmit(e){
    e.preventDefault()
   }
  return (
    <div className="container">
        
      <form action="" onSubmit={handleSubmit}>
        <div className="text">{action}</div>
        <div className="underline"></div>
        {action==='Login'?<div></div>:<div className="input">
          <label htmlFor="username">Username</label>
          <input type="text" />
        </div>}
        <div className="input">
          <label htmlFor="email">Email</label>
          <input type="email" />
        </div>
        <div className="input">
          <label htmlFor="password">Password</label>
          <input type="password" />
        </div>
        {action==='Sign Up'?<div></div>:<div className="forgot-password">
            Forgot Password? <span><a href="">Click Here</a></span>
        </div>}
        <div className="login-btns">
        <button className={action==="Login"?"sign-up gray":"sign-up"} onClick={()=>{setAction('Sign Up')}}>Sign Up</button>
        <button className={action==="Sign Up"?"sign-up gray":"sign-up"}onClick={()=>{setAction('Login')}}>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
