import React, { useState } from "react";
// import { useAuth } from "../contexts/authContext";
// import { Navigate } from "react-router-dom";
import SignInWithGoogle from "./SignInWithGoogle";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
function Login() {
  //  const[action, setAction]= useState("Login")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //  const[isSigningIn, setIsSigningIn]=useState(false);
  //  const[errorMessage,setErrorMessage]=useState('')
  //  const{userLoggedIn}=useAuth()

   const handleSubmit=async (e)=>{
    e.preventDefault()
    try {
     await signInWithEmailAndPassword(auth,password,email)
    } catch (error) {
      
    }
  
   }

  //  const onGoogleSignIn=(e)=>{
  //   e.preventDefault()
  //   if(!isSigningIn){
  //     setIsSigningIn(true)
  //     doSignInWithGoogle.catch(err=>{
  //       setIsSigningIn(false)
  //     })
  //   }
  //  }
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h3 className="text">Login</h3>
      <div className="input-container">
        <div className="input">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input">
          <label>Password </label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
          <button type="submit" className="submit-btn">Submit</button>
          <p className="forgot-password">
            New user? <a href="/register">Register Here</a>
          </p>
          <SignInWithGoogle />
      </div>
    </form>

    // <div className="container">
    //   {userLoggedIn && (<Navigate to={'/home'} replace={true}/>)}
    //   <form action="" onSubmit={handleSubmit}>
    //     <div className="text">{action}</div>
    //     <div className="underline"></div>
    //     {action==='Login'?<div></div>:<div className="input">
    //       <label htmlFor="username">Username</label>
    //       <input type="text" />
    //     </div>}
    //     <div className="input">
    //       <label htmlFor="email">Email</label>
    //       <input type="email" />
    //     </div>
    //     <div className="input">
    //       <label htmlFor="password">Password</label>
    //       <input type="password" />
    //     </div>
    //     {action==='Sign Up'?<div></div>:<div className="forgot-password">
    //         Forgot Password? <span><a href="">Click Here</a></span>
    //     </div>}
    //     <div className="login-btns">
    //     <button className={action==="Login"?"sign-up gray":"sign-up"} onClick={()=>{setAction('Sign Up')}}>Sign Up</button>
    //     <button className={action==="Sign Up"?"sign-up gray":"sign-up"}onClick={()=>{setAction('Login')}}>Login</button>
    //     </div>
    //   </form>
    // </div>
  );
}

export default Login;
