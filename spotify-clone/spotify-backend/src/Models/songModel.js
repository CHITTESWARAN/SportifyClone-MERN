import mongoose from "mongoose"
const songSchema=new mongoose.Schema({
   name:{type:String,required:true},
   desc:{type:String,required:true},
   album:{type:String,required:true},
   image: { type: String, required: true, match: /^https?:\/\/.+/ },
   file:{type:String,required:true},
   duration: { type: String, required: true, default: "0:00" },

   }
);
const songModel=mongoose.models.song||mongoose.model("song",songSchema)
export default songModel; 