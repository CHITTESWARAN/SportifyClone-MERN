import { createContext,useEffect,useRef,useState } from "react";
import axios from "axios"

export const PlayerContest=createContext()
const PlayerContestProvider=(props)=>{
     
    const audioRef=useRef();
    const seekBg=useRef();
    const seekBar=useRef();
    const url="https://sportifyclone-backend.onrender.com";
    const [songsData,setSongData]=useState([])
    const [albumsData,setAlbumsData]=useState([])
    const[track,setTrack]=useState(songsData[0])
    const[playStatus,setPlayerStatus]=useState(false);
    const[time,setTime]=useState({
        currentTime:{
            second:0, 
            minute:0
        },
        totalTime:{
            second:0,
            minute:0
        }
    })
    const play=()=>{
        audioRef.current.play();
        setPlayerStatus(true)
    }
    const pause=()=>{
        audioRef.current.pause();
        setPlayerStatus(false);
    }

    const playwithId=async(id)=>{
    await songsData.map((item)=>{
       if(id===item._id)
        {
            setTrack(item);
        }  
    })
    await audioRef.current.play();
    setPlayerStatus(true);
      
    }

    const previous=async()=>{
       songsData.map(async(item,index)=>{
          if(track._id==item._id && index>0)
          {
             await setTrack(songsData[index-1]);
             await audioRef.current.play();
             setPlayerStatus(true);
          }
       })
    }
    const next=async()=>{
        songsData.map(async(item,index)=>{
            if(track._id==item._id && length<songsData.length)
            {
               await setTrack(songsData[index+1]);
               await audioRef.current.play();
               setPlayerStatus(true);
            }
         })
    }
    const seekSong=async(e)=>{
    audioRef.current.currentTime=((e.nativeEvent.offsetX /seekBg.current.offsetWidth)*audioRef.current.duration)
    
    }
    
    

    const getSongsData= async()=>{
        try{
            const response= await axios.get(`${url}/api/song/list`)
            if(response.data.success)
            {
              setSongData(response.data.songs)
              setTrack(response.data.songs[0])
            }
            else{
               
            }
        }
        catch(error)
        {
          console.log(error.message)
        }
        }


        const getAlbumsData= async()=>{
            try{
                const response= await axios.get(`${url}/api/album/list`)
                if(response.data.success)
                {
                  setAlbumsData(response.data.album)
                  setTrack(response.data.songs[0])
                }
                else{
                   
                }
            }
            catch(error)
            {
              
               
                
            }
            }
       
    useEffect(()=>{
        setTimeout(() => {
           audioRef.current.ontimeupdate=()=>{
            seekBar.current.style.width=(Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%"
            setTime({
                currentTime:{
                    second:Math.floor(audioRef.current.currentTime %60),
                    minute:Math.floor(audioRef.current.currentTime /60)
                },
                totalTime:{
                    second:Math.floor(audioRef.current.duration %60),
                    minute:Math.floor(audioRef.current.duration /60)
                }
            })
           } 
        },1000);
    },[audioRef])

    useEffect(()=>{
        getSongsData();
        getAlbumsData();
    },[])

    const contestValue={
      audioRef,
      seekBar,
      seekBg,
      track,
      setTrack,
      playStatus,
      setPlayerStatus,
      time,
      setTime,
      play,
      pause,
      playwithId,
      previous,
      next,
      seekSong,
      songsData,
      albumsData


    }
   

    return(
        <PlayerContest.Provider value={contestValue}>
        {props.children}
        </PlayerContest.Provider>
    )
}
export default PlayerContestProvider;
