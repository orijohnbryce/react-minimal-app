import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Products() {

  const params = useParams()
  const nav = useNavigate()

  return ( <>
        <div style={{textAlign: 'center', fontSize: "50px"}}>
            מוצרים
        </div>

        <div style={{ textAlign: 'center', fontSize: "30px" }}>      
          <button onClick={() => { nav(-1) }}> חזרה לדף הקודם </button>
      </div>

    
        <br /><br /><br />
        <div style={{ textAlign: 'center', fontSize: "30px" }}>
            <Link to="/">חזרה לדף הבית</Link>
        </div>

       {params.id &&      
        <div style={{textAlign: 'center', fontSize: "50px"}}>
            <p> id sent: {params.id}</p>                      
      </div>}            
    
  </>)
}

export default Products