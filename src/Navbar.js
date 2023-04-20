import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {

    const path = window.location.pathname;
    const nav = useNavigate()
    return (<>
        <nav className='navbar'>

            <a onClick={() => {nav("/") }} className='site-title'> Car-BnB </a>
            
            <ul className='bar-list'>
                <li className= {path == '/about' ? 'active' : ""}>
                    <a onClick={() => {nav("/about") }}> אודות </a>
                </li>
                <li className= {path == '/products' ? 'active' : ""}>
                    <a onClick={() => { nav("/products") }}> מוצרים </a>                                
                </li>                                
            </ul>            
        </nav>
    </>    
  )
}

export default Navbar
