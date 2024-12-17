import React,{useContext} from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { PlayerContest } from './context/PlayerContest'


const App = () => {
  const {audioRef,track,songsData}=useContext(PlayerContest);
  return (
    <div className='h-screen bg-black'>
      {
        songsData.length!=0
        ?<>
        <div className='h-[90%] flex'>
        <Sidebar></Sidebar>
        <Display></Display>
      </div>
        </>
        :null
      }
      
      <Player></Player>
      <audio ref={audioRef} preload="auto" src={track?track.file:""}></audio>
      </div>
  )
}

export default App