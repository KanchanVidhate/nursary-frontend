import React, { useEffect } from 'react'
import "./UpdatePlant.css"
import { useParams } from 'react-router-dom';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import toast, {Toaster} from 'react-hot-toast'
import axios from 'axios';

function UpdatePlant() {
    const {id} = useParams();

    const [name,setName] = useState("")
    const [category,setCategory] = useState("")
    const [price,setPrice] = useState(0)
    const [image,setImage] = useState("")
    const [description,setDescription] = useState("")


  const updateplant = async() => {
    const response =await axios.put(`${process.env.React_APP_API_URL}/plant/${id}`,{
      name: name,
      category: category,
      price: price,
      image: image,
      description: description
    })

    toast.success(response.data.message)

  }

const loadplant =async (id) =>{

    if(!id){
      return
    }
    const response =await axios.get(`${process.env.React_APP_API_URL}/plant/${id}`)
    const{name,image,category,price,description}= response.data.data

    setName(name)
    setCategory(category)
    setPrice(price)
    setImage(image)
    setDescription(description)
  }


useEffect(()=>{
  
   loadplant(id)
    
    
   },[id])

  return (
    <div>

        <h1> Update Plant: {id} </h1>

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
        <button type='button' onClick={updateplant} className='form-btn'>Update plant</button>
                        
                        <Link to="/"> 
                        <button type='button'  className='form-btn'>Show all plants</button>
                       </Link> 


                       <Toaster/>            

   
    </div>
  )
}




export default UpdatePlant