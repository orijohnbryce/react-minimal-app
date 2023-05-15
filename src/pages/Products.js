import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Products() {

  const params = useParams()
  const nav = useNavigate()

  return ( <>
        <div style={{textAlign: 'center', fontSize: "50px"}}>
            דף מוצרים
        </div>           
  </>)
}

export default Products