import React from 'react'
import Navbar from './Navbar'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'
import { useContext } from 'react'
import { PlayerContest } from '../context/PlayerContest'

const DisplayHome = () => {
  const {songsData,albumsData}=useContext(PlayerContest)
  return (
    <>
    <Navbar/>
    <div className='mb-4 '>
      <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
      <div className='flex overflow-auto'>
      {
        albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item._id} image={item.image}/>))
     }
      </div>
     
     
    </div>
    <div className='mb-4 '>
      <h1 className='my-5 font-bold text-2xl'>Today's biggest Hits</h1>
      <div className='flex overflow-auto'>
      {
        songsData.map((items,index)=>{
          return<SongItem key={index} name={items.name} image={items.image} desc={items.desc} id={items._id}/>
        })
     }
      </div>
     
     
    </div>
    </>
  )
}

export default DisplayHome