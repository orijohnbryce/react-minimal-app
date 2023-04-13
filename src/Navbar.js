import React from 'react'

function Navbar() {

    const path = window.location.pathname;

    return (<>
        <nav className='navbar'>

            <a href='/' className='site-title'> Car-BnB </a>
            
            <ul className='bar-list'>
                <li className= {path == '/about' ? 'active' : ""}>
                    <a href='/about'> אודות </a>
                </li>
                <li className= {path == '/products' ? 'active' : ""}>
                    <a href='/products'> מוצרים </a>            
                </li>
                                
            </ul>            
        </nav>
    </>    
  )
}

export default Navbar
