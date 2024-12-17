import React from 'react'
import { assets } from "../assets/frontend-assets/assets"
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className='w-full lg:w-[20%] h-full p-4 flex-col gap-4 text-white lg:flex'>
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
        <div onClick={() => navigate('/')} className='flex items-center gap-3 pl-4 cursor-pointer'>
          <img className='w-6' src={assets.home_icon} alt="Home" />
          <p className='font-bold'>Home</p>
        </div>
        <div className='flex items-center gap-3 pl-4 cursor-pointer'>
          <img className='w-6' src={assets.search_icon} alt="Search" />
          <p className='font-bold'>Search</p>
        </div>
      </div>
      <div className='bg-[#121212] h-[85%] rounded mt-4'>
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img className="w-8" src={assets.stack_icon} alt="Stack" />
            <p className='font-semibold'>Your Library</p>
          </div>
          <div className='flex items-center gap-3'>
            <img className="w-5" src={assets.arrow_icon} alt="Arrow" />
            <img className="w-5" src={assets.plus_icon} alt="Plus" />
          </div>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-2 pl-4'>
          <h1>Create your first playlist</h1>
          <p className='font-light'>It's easy, we'll help you</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>
           <a href="https://sportifyclone-admin.onrender.com/add-album" className='text-black'>
               Create Playlist
           </a></button>
        </div>

        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-2 pl-4'>
          <h1>Let's find some podcasts to follow</h1>
          <p className='font-light'>We'll keep you updated on new episodes</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'><a href="https://sportifyclone-admin.onrender.com/list-album" className='text-black'>Browse Podcasts</a></button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
