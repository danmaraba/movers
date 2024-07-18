import React,{useState} from 'react'
import { auth } from '../firebase/firebase'
import { toast } from 'sonner'

function Profile() {
    const[userDetails,setUserDetails]=useState()
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  )
}

export default Profile
