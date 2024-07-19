import React,{useEffect, useState} from 'react'
import { auth,db } from '../firebase/firebase'
import { toast } from 'sonner'
import { doc,getDoc } from 'firebase/firestore'

function Profile() {
    const[userDetails,setUserDetails]=useState(null)
    const fetchUserData=async()=>{
        auth.onAuthStateChanged(async(user)=>{
            console.log(user);
            setUserDetails(user)
            const docRef=doc(db,"users",user.uid)
            const docSnap=await getDoc(docRef)
            if(docSnap.exists()){
                setUserDetails(docSnap.data())
                console.log(docSnap.data());
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
            toast.success("User logged out successfully!");
        } catch (error) {
            console.log("Error logging out:",error.message);
        }
    }
  return (
    <div className='profile-div'>
        {
            userDetails?(
                <>
                <div style={{display:"flex",justifyContent:"center"}}>
                    <img src={userDetails.photo}  width={"60%"} style={{borderRadius:"50%"}}/>
                </div>
                <h3>Welcome <span id='userdetails'>{userDetails.firstName}.</span></h3>
                <div className='profile-details'>
                    <p>Email:{userDetails.email}</p>
                    <p>Name:{userDetails.firstName}</p>
                    {/* <p>lastName:{userDetails.lastName}</p> */}
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
