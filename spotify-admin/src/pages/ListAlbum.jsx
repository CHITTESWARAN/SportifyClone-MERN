import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { url } from '../App';

const ListAlbum = () => {
  const [data,setData]=useState([]);

  const fetchAlbum=async()=>{
   try{
     const response=await axios.get(`${url}/api/album/list`)
    
     if(response.data.success)
     {
      setData(response.data.album)
    
     }

   }
   catch(error){
    console.log(error.message)
       toast.error("Error occur")

   }

  }
  const removeAlbum=async(id)=>{
   
    
     try{
      const response= await axios.delete(`${url}/api/album/remove/${id}`)
      if(response.data.success)
      {
        toast.success(response.data.message);
        await fetchAlbum();
      }

     }
     catch(error)
     {
      console.log(error.message);
      
      toast.error("Error occured")
     }
   
  }


  useEffect(()=>{
    fetchAlbum()
  },[])

  return (
    <div>
      <p>All Album List</p>
      <br />
      <div className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100'>
           <b>Image</b>
           <b>Name</b>
           <b>Description</b>
           <b>Album Color</b>
           <b>Action</b>

      </div>
      {
        data.map((item,index)=>{
          return(
          <div key={index} className='grid grid-cols-[1fr_1fr-1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5'>
            <img src={item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.desc}</p>
            <input type="color" value={item.bgColor} readOnly/>
            <p onClick={()=>removeAlbum(item._id)} className='m-3 cursor-pointer text-xl'>x</p>

          </div>
          )
        })
      }
    </div>
  )
}

export default ListAlbum