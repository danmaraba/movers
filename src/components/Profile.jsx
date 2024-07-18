import React,{useEffect, useState} from 'react'
import { auth,db } from '../firebase/firebase'
import { toast } from 'sonner'
import { doc,getDoc } from 'firebase/firestore'

function Profile() {
    const[userDetails,setUserDetails]=useState(null)
    const fetchUserData=async()=>{
        auth.onAuthStateChanged(async(user)=>{
            console.log(user);
            const docRef=doc(db,"users",user.uid)
            const docSnap=await getDoc(docRef)
            if(docSnap.exists()){
                setUserDetails(docSnap.data())
                console.log(docSnap.data);
            }else{
                console.log("user is not logged in");
            }
        })
    }
    useEffect(()=>{
        fetchUserData()
    },[])

    async function handleLogOut(){
        try {
            await auth.signOut()
            window.location.href="/login"
            console.log("User logged out successfully!");
        } catch (error) {
            console.log("Error logging out:",error.message);
        }
    }
  return (
    <div>
        {
            userDetails?(
                <>
                <h3>Welcome {userDetails.firstName}.</h3>
                <div>
                    <p>Email:{userDetails.email}</p>
                    <p>firstName:{userDetails.firstName}</p>
                    <p>lastName:{userDetails.lastName}</p>
                </div>
                <button className="logout-btn" onClick={handleLogOut}>
                    Logout
                </button>
                </>
            )
            :(<p>Loading...</p>)
        }
    </div>
  )
}

export default Profile
