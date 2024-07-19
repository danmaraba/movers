import React from 'react'
import '../App.css'
import { Routes,Route} from 'react-router-dom';
// import Navbar from './Home'
import Home from './Home';
import Login from './Login'
import About from './About'
import Services from './Services'
import Contacts from './Contacts'
import Navlinks from './Navlinks';
import Register from './Register';
// import Distance from './Distance';
import { Toaster } from 'sonner';
import Profile from './Profile';


function App(){



  return (
    <div>
      {/* <Distance/> */}
      <Navlinks/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      <Toaster richColors/>
    </div>
  )
}

export default App
