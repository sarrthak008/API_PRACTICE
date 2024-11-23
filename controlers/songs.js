import SONG_INFO from "../data.js";

const getSongs = (req,res)=>{
     res.json({
        data:SONG_INFO,
        message:'song loaded successfully'
     }).status(200)
}

const addLike= (req,res)=>{
   let {id} = req.params
   let updatedSong =  SONG_INFO[id]
   updatedSong={...updatedSong,like:true}
   res.json(updatedSong)
   SONG_INFO[id]=updatedSong
}

export {getSongs,addLike}