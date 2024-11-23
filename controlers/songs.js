import SONG_INFO from "../data.js";

const getSongs = (req,res)=>{
     res.json({
        data:SONG_INFO,
        message:'song loaded successfully'
     }).status(200)
}

const addLike= (req,res)=>{
   let {id} = req.params
   
    try {
      let updatedSong =  SONG_INFO[id-1]

      updatedSong={...updatedSong,like:(!updatedSong.like)}
      SONG_INFO[id]=updatedSong
      res.json({
         message:'song like succesfully',
         result:true
      })
    } catch (error) {
      res.json({
         message:'someting went wrong ,try later',
         result:false
      })
    }
}

export {getSongs,addLike}