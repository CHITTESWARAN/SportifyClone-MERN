import React, { useEffect,useRef } from 'react'
import DisplayHome from './DisplayHome'
import {Routes,Route, useLocation} from "react-router-dom"
import DispalyAlbum from './DispalyAlbum'
import { useContext } from 'react'
import { PlayerContest } from '../context/PlayerContest'


const Display = () => {
  const{albumsData}=useContext(PlayerContest);   
   const displayRef=useRef();
   const location=useLocation();
   const isAlbum=location.pathname.includes("album");
   const albumId=isAlbum?location.pathname.split("/").pop():"";
   const bgColor=isAlbum && albumsData.length>0?albumsData.find((x)=>(x._id==albumId)).bgColor:"#121212"
    
  useEffect(()=>{
    if(isAlbum)
    {
      displayRef.current.style.background=`linear-gradient(${bgColor},#121212)`
    }
    else{
      displayRef.current.style.background=`linear-gradient(#121212,#121212)`
    }
  })
  return (
    <div ref={displayRef}className='w-[100%] m-2 px-2 pt-4 rounded bg-[#121212] text-white overflow-auto lg:ml-0'>
      {albumsData.length > 0
       ? <Routes>
      <Route path="/" element={<DisplayHome/>}/>  
      <Route path="/album/:id" element={<DispalyAlbum album={albumsData.find((x)=>(x._id==albumId))}/>}></Route>
    </Routes>
    :null
}
    </div>
  )
}

export default Display