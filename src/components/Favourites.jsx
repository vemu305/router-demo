import React, { useEffect, useState} from 'react'
import { useParams} from 'react-router-dom'
import Navbar from './Navbar'


function Favourites() {
  var [newone, setNewone]=useState([])
  var selectedid=useParams()
  console.log(selectedid)
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${selectedid.id}`)
    .then(res=>res.json())
    .then(json=>setNewone(json))
},[selectedid.id]) 

return (
    <div>
Favourites
{
  <div className='row'>
    <div className='col-md-6 border border-dark'>
 <img  src={newone.image} alt='photo' width={"500px"} height={"500px"}/>
 </div >
 <div className='col-md-6'>
  <h1>{newone?.title}</h1><br/>
  <h1>Price : ₹ {newone?.price}</h1><br/>
  <h1>Rating : {newone?.rating?.rate}/5</h1>
  <p>{newone?.description}</p>

  </div>
 </div>
}
</div>
  )
}

export default Favourites