import { v2 as cloudinary } from "cloudinary";
import songModel from "../Models/songModel.js"

const addSong = async (req, res) => {
  try {
    const name = req.body.name;
    const desc = req.body.desc;
    const album = req.body.album;
    const audioFile = req.files.audio[0];
    const imageFile = req.files.image[0];
    
    

    // Upload the audio file to Cloudinary (resource_type: "auto" for all types of media files)
    const audioUpload = await cloudinary.uploader.upload(audioFile.path, {
      resource_type: "auto",
    });
    // Upload the image file to Cloudinary (resource_type: "image" for image files)
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const duration = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(
      audioUpload.duration % 60
    )}`;

    const songData = {
      name,
      desc,
      album,
      image: imageUpload.secure_url,
      file: audioUpload.secure_url,
      duration,
    };
    const song = new songModel(songData); // Create a new song document
    await song.save(); // Save the song to MongoDB
    res.json({ success: true, message: "Song Added" });
  } catch (error) {
    console.error("Error uploading song:", error);
    res.status(500).json({ error: "Failed to upload song" });
  }
};

const listSong = async (req, res) => {
  try {
    // Fetch all songs from MongoDB
    const allsongs = await songModel.find({});

    // Respond with the list of songs
    res.json({success:true,songs:allsongs});
    
  } catch (error) {
    console.error("Error fetching songs:", error);
    res.status(500).json({ error: "Failed to list songs" });
  }
};

const removeSong=async(req,res)=>{
   try{  const {id}=req.body;
   
       const deleteaSong = await songModel.findByIdAndDelete(id);

       if (!deleteaSong) {
        return res.status(404).json({ success: false, message: "Song not found." });
      }
      
       
        res.json({success:true,message:"Song Removed"})
   }
   catch(error){
     res.json({success:false,error: error.message});  
   }
}

export { addSong, listSong,removeSong};   
