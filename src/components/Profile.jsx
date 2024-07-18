import React,{useEffect, useState} from 'react'
import { auth,db } from '../firebase/firebase'
import { toast } from 'sonner'
import { doc,getDoc } from 'firebase/firestore'

function Profile() {
    const[userDetails,setUserDetails]=useState(null)
    const fetchUserData=async()=>{
        auth.onAuthStateChanged(async(user)=>{
            console.log(user);
        })
    }
    useEffect(()=>{
        fetchUserData()
    },[])
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
                <button className="logout-btn">
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
