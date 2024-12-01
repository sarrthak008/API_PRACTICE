import SONG_INFO from "../data.js";
import _ from "lodash";

const getSongs = (req,res)=>{
     res.json({
        data:_.shuffle(SONG_INFO),
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

const postComment= (req, res) => {
   let { songid } = req.params
   let { name, content } = req.body
   try {
        let addCommnetedSong = SONG_INFO[songid - 1];
        addCommnetedSong.comment.push({ name, content })
        SONG_INFO[songid] = addCommnetedSong
        res.json({
             message:'comment added successfully',
             data:{name,content}
        }).status(200)
   } catch (error) {
        res.json({
             message: 'someting went wrong ,try later',
             result: false
        })
   }
}


const getComments = (req,res)=>{
       let {id} =req.params
       try {
          let foundedSong = SONG_INFO[id - 1];
          res.json({
               message:"successfully fetch commnets",
               data:foundedSong.comment
          })
     } catch (error) {
          res.json({
               message: 'someting went wrong ,try later',
               result: false
          })
     }
}



export {getSongs,addLike,postComment,getComments}