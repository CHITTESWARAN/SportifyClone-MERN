import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"
import { url } from '../App';

const AddSong = () => {
  const [image,setImage]=useState(false);
  const[song,setSong]=useState(false);
  const[name,setName]=useState("");
  const[desc,setDesc]=useState("");
  const[album,setAlbum]=useState("none");
  const[loading,setLoading]=useState(false);
  const [albumData,setAlbumData]=useState([])

  const onSubmitHandler=async(e)=>{
    e.preventDefault();
    setLoading(true)

    try{
      const formData=new FormData();
      
      
      formData.append("name",name);
      formData.append("desc",desc);
      formData.append("image",image);
      formData.append("audio",song[0]);
      formData.append("album",album);
      const response = await axios.post(`${url}/api/song/add`,formData);
      if(response.data.success)
      {
        toast.success("Song added")
        setName("");
        setDesc("");
        setSong(false);
        setAlbum("none");
        setImage(false);

      }
      else{
        toast.error("Something went wrong");
      }

    }
    catch(error){
      console.log(error.message)
      toast.error("Error occured") 

    }
    setLoading(false)


  }
  const  loadAlbumData = async ()=>{
    try{

      const response=await axios.get(`${url}/api/album/list`);
      
      
       if(response.data.success)
       {
        setAlbumData(response.data.album)
       }
       else{
        toast.error("unable to load the albums data")
       }
    }
    catch(error)
    {
      toast.error("Error occured")
    }
  }

  useEffect(()=>{
    loadAlbumData();
  },[])
  
  return loading ? (
    <div className="grid place-items-center min-h-[80vh]">
      <div className="w-16 h-16 border-4 border-gray-400 border-t-green-800 rounded-full animate-spin"></div>
    </div>
  )  :(

   <form onSubmit={onSubmitHandler} className='flex flex-col items-start gap-8 text-gray-600'>
    <div className='flex gap-8'>
    <div className='flex flex-col gap-4 '>
      <p>Upload song</p>
      <input type="file" onChange={(e)=>setSong(e.target.files)} id="song" accept='audio/*' hidden />
      <label htmlFor="song">
        <img src={song?assets.upload_added:assets.upload_song} className='w-24 cursor-pointer' alt="" />
      </label>

    </div>

    
    <div className='flex flex-col gap-4 '>
      <p>Upload Image</p>
      <input type="file" onChange={(e)=>setImage(e.target.files[0])} id="image" accept='image/*' hidden />
      <label htmlFor="image">
      <img src={image?URL.createObjectURL(image):assets.upload_area} className="w-24 cursor-pointer" alt="" />
      </label>
    </div>
   
    
    </div>
    <div className='flex flex-col gap-2.5'>
      <p>Song name</p>
      <input onChange={(e)=>{setName(e.target.value)}} type="text" className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]' value={name} placeholder='Type Here' required  />
    </div>

    <div className='flex flex-col gap-2.5'>
      <p>Song description</p>
      <input onChange={(e)=>{setDesc(e.target.value)}} value={desc} type="text" className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]' placeholder='Type Here' required  />
    </div>

    <div className='flex flex-col gap-2.5'>
     <p>Album</p>
     <select onChange={(e)=>{setAlbum(e.target.value)}}  defaultValue={album} className='bg-transparent outline-green-600 bottom-2 border-gray-400 p-2.5 w-[150px]'>
     <option value="none">None</option>
      { 
      albumData?
        albumData.map((item,index)=>(
          <option key={index} value={item.name}>{item.name}</option>)
        ): <option value="none">None</option>
      }

     </select>
    </div>
    <button type='submit' className='text-base bg-black text-white py-2.5 px-14 cursor-pointer '>ADD</button>
 
   </form>
  )
}

export default AddSong