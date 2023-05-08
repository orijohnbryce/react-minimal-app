import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Login from './pages/Login'
import Signup from './pages/Signup'

function SiteRoutes() {    
    return (<>
        
            <Routes>                
                <Route path='/' element={<Home />} />                
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products/:id' element={<Products />} />                                
            </Routes>                    
    </>)
}

export default SiteRoutes