import React from 'react'
import Navbar from './Navbar'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

function Products() {
    var [items, setItems]=useState([])
    var [mobiles,setMobiles]=useState([''])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setItems(json))
    })

   

  return (
    
    <div className='wholobody'>
        
        <h1>Products</h1>
        <div className='Wholediv'>
        {
            items.map((a,i)=>{
               return (
                <div className='maindiv'>
                    <Link to={`/des/${a.id}`}>
                <div className='imgsize'>
                    <img src={a.image} alt="" width={"100px"} height={"150px"}/>
                    </div>
               <h5 className='titeltext'>{a?.title}</h5>
               <h6>₹ {a?.price}</h6>
               <h6>{a?.category}</h6>
               <button > Add to Favaroites</button>
               </Link>
               </div>
               )
            })
            
        }
      
        </div>
       
        </div>
  )
}

export default Products ;