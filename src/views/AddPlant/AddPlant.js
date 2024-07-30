
import axios from 'axios'
import './AddPlant.css'
import React, { useState } from 'react'
import toast, {Toaster} from 'react-hot-toast'
import { Link } from 'react-router-dom'


function AddPlant() {

  const [name,setName] = useState("")
  const [category,setCategory] = useState("")
  const [price,setPrice] = useState(0)
  const [image,setImage] = useState("")
  const [description,setDescription] = useState("")


  

  const addplant = async()=>{

    toast.loading("Adding plant...")
    if(!name ||  !category ||  !price  ||  !image || !description ){
      toast.error("please Enter all detail")
      return
    }
    

    const response =  await axios.post(`${process.env.React_APP_API_URL}/plant`,{
      name: name,
      category: category,
      price: price,
      image: image,
      description: description

    })
    toast.dismiss()
   toast.success(response.data.message)
   setName("")
   setCategory("")
   setPrice("")
   setImage("")
   setDescription("")
  }

  return (
    <div>
      <h1>Add Plant</h1>
      <form className='addplant-form'>
          <input 
          className='plant-input' 
          type= "text" 
          placeholder='Enter Plant name'
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />

           <input 
          className='plant-input'
          type= "text" 
          placeholder='Enter  category'
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
          />

         <input  
          className='plant-input'
          type= "number" 
          placeholder='Enter price'
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
          />
          <img src={image} className='img-pre' alt="img-preview" />

          <input 
          className='plant-input' 
          type= "text" 
          placeholder='Enter Image'
          value={image}
          onChange={(e)=>setImage(e.target.value)}
          />

         <input  
         className='plant-input'
          type= "text" 
          placeholder='Enter Plant description'
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
          />

        </form>
        <button type='button' onClick={addplant} className='form-btn'>Add plant</button>
                        
          <Link to="/"> 
          <button type='button'  className='form-btn'>Show all plants</button>
         </Link>              

        <Toaster/>
        
        
        </div>
  )
}

export default AddPlant
