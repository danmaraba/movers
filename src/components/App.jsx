import React from 'react'
import '../App.css'
import { Routes,Route} from 'react-router-dom';
import Navbar from './Home'
import Home from './Home';
import Login from './Login'
import About from './About'
import Services from './Services'
import Contacts from './Contacts'
import Navlinks from './Navlinks';

function App() {

  return (
    <div>
      <Navlinks/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
