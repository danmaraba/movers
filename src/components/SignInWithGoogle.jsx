import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth,db } from '../firebase/firebase';
import { setDoc, doc } from "firebase/firestore";
import { toast } from 'sonner';

function SignInWithGoogle() {

    function googleLogin(){
        const provider=new GoogleAuthProvider();
        signInWithPopup(auth,provider).then(async(result)=>{
            console.log(result);
            const user=result.user
            if(result.user){
                toast.success("User Logged in Successfully!!", {
                    position: "top-center",
                  });
                await setDoc(doc(db, "users", user.uid), {
                    email: user.email,
                    firstName:user.displayName,
                    // lastName:"",
                    photo:user.photoURL
                    
                  });
                
                window.location.href="/profile"
            }
        })
    }
  return (
    <div>
      <p className='google-p'>--or continue with--</p>
      <img src="./images/google.png" alt="img" className='google-photo' onClick={googleLogin}/>
    </div>
  )
}

export default SignInWithGoogle
