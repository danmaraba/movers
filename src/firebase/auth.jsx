import { createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider, sendPasswordResetEmail, updatePassword, sendEmailVerification} from "firebase/auth";
import { auth } from "./firebase";


export const doCreateUserWithEmailAndPassword= async(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

export const doSignInWithEmailAndPassword=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}

export const doSignInWithGoogle=async()=>{
    const provider=new GoogleAuthProvider()
    const result=await signInWithPopup(auth,provider)
    return result
}

export const signOut=()=>{
    return auth.signOut();
}

export const doPasswordReset=()=>{
    return sendPasswordResetEmail(auth,email)
}

export const doPasswordChange=()=>{
    return updatePassword(auth.currentUser,password)
}

export const doSendEmailVerification=()=>{
    return sendEmailVerification(auth.currentUser,{
        url:`${window.location.origin}/home`
    })
}