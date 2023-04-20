import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'

function SiteRoutes() {    
    return (<>
        
            <Routes>                
                <Route path='/' element={<Home />} />                
                <Route path='/about' element={<About />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products/:id' element={<Products />} />                                
            </Routes>                    
    </>)
}

export default SiteRoutes