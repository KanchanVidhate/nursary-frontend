import React, { useEffect, useState } from 'react';
import "./Home.css";
import axios from 'axios';
import Plantcard from './../../components/PlantCard/PlantCard.js'
import { Link } from 'react-router-dom';
import Imgadd from './ADD.png'

function Home() {
  const [plants, setPlants] = useState([])
  

  const loadPlants = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/plants`)
    setPlants(response.data.data) 
  };
  


  useEffect(() => {
    loadPlants();
  }, [])

  return (
    <div>
            <h1>Plants</h1>
        {
        plants.map((plant,i)=>{

            const {_id,
                name,
                category,
                image,
                price,
                description} = plant

        return (<Plantcard
                  key={i}
                  _id={_id}
                  name={name}
                  category={category}
                  image={image}
                  price={price}
                  description={description}
                  loadPlants ={loadPlants}
                 />
                )
                })
                   
             }
             <Link to="/add">
             <img src={Imgadd} className='add-btn' alt="add"/>
             </Link>
        
            </div>
          )
        }
              
        export default Home