import {v2 as cloudinary} from "cloudinary"
import albumModel from "../Models/albumModel.js"

const addAlbum=async(req,res)=>{
 
    try{
         const name= req.body.name;
         const desc=req.body.desc;
         const bgColor=req.body.bgColor;
         const imageFile=req.file;
         
         const imageUpload=await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"});
         
         
         const albumData={
            name,
            desc,
            bgColor,
            image:imageUpload.secure_url,

         }
         const album=new albumModel(albumData);
         await album.save();

         res.json({success:true,message:"Album added"})


    }
    catch(error){
      res.json({success:false,error: error.message })
    }
}

const listAlbum=async(req,res)=>{
    try{
         const allAlbums =await albumModel.find({});
         res.json({success:true,album:allAlbums});


    }
    catch(error){
        res.json({success:false});

    }

}
const removeAlbum=async(req,res)=>{
    console.log(req.body);
    try{
        const {id}=req.params;
        console.log(id);
        
        
        const removeAlbum= await albumModel.findByIdAndDelete(id);
         
        res.json({success:true,message:"Album removed"})
    }
    catch(error)
    {  res.json({success:false,error:error.message})
 
    }

}
export  {addAlbum,listAlbum,removeAlbum}