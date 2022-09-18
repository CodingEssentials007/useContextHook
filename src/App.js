import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
    
    const [img,setImg]=useState('');
   
    const handleCall=()=>
    {
        axios.get("https://dog.ceo/api/breeds/image/random")
        .then((res)=>(setImg(res.data.message)))
    }
    useEffect(()=>{
    axios.get("https://dog.ceo/api/breeds/image/random")
    .then((res)=>(setImg(res.data.message)))
    },[])

   
    return ( 
        <div >
           <img  src={img}  style={{width:'20vw', height:'40vh'}}  />
            <button onClick={handleCall}>click</button>      
        </div>
     );
}

export default  App;