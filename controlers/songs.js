import SONG_INFO from "../data.js";

const getSongs = (req,res)=>{
     res.json({
        data:SONG_INFO,
        message:'song loaded successfully'
     }).status(200)
}

export {getSongs}