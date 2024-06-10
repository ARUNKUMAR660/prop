import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Services from './components/services/Services'
import Mywork from './components/mywork/Mywork'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { Routes,Route,BrowserRouter } from 'react-router-dom';




function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>

       <Route path='/' element={<Hero/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/services' element={<Services/>}/>
       <Route path='/mywork' element={ <Mywork/>}/>
       <Route path='/contact' element={<Contact/> }/>
       <Route path='/footer' element={<Footer/>}/>
      
      
     
      
      </Routes>
      
      </BrowserRouter>


    </div>
  )
}

export default App

