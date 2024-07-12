import React from 'react'
import '../App.css'
import { Routes,Route} from 'react-router-dom';
import Navbar from './Navbar'
// import Home from './Home';
import Login from './Login'
// import About from './About'
// import Services from './Services'
// import Contact from './Contact'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>

        {/* <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contacts' element={<Contact/>}/> */}
        <Route path='/login' element={<Login/>}/>
      </Routes>
      {/* <Navbar/> */}
    </div>
  )
}

export default App
