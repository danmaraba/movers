import React,{useState}from "react";
import { useAuth } from "../contexts/authContext";
import { doSignInWithEmailAndPassword} from "../firebase/auth";
import { Navigate } from "react-router-dom";
import SignInWithGoogle from "./SignInWithGoogle";
function Login() {
   const[action, setAction]= useState("Login")
   const[email,setEmail]=useState('')
   const[password,setPassword]=useState('')
   const[isSigningIn, setIsSigningIn]=useState(false);
  //  const[errorMessage,setErrorMessage]=useState('')
   const{userLoggedIn}=useAuth()

   const handleSubmit=async (e)=>{
    e.preventDefault()
    if(!isSigningIn){
      setIsSigningIn(true)
     await doSignInWithEmailAndPassword(email,password)
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
    <form>
      <h3>Login</h3>
      <div className="login-email">
        <label >Email address</label>
        <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </div>

      <div className="login-password">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </div>

      <div className="login-submit-button">
        <button type="submit">Submit</button>
      </div>
      <p className="forgot-password">
        New user? <a href="">Register Here</a>
      </p>
      <SignInWithGoogle/>
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
