import expres from "express"
const app =expres();
const PORT  = process.env.port || 3000 
import { getHealth } from "./controlers/other.js";
import { getSongs ,addLike} from "./controlers/songs.js";
import cors from 'cors'
import SONG_INFO from "./data.js";

//middlewares..
app.use(cors())

app.get('/health',getHealth);
app.get('/songs',getSongs);
app.patch('/like/:id',addLike)

app.listen(PORT,()=>{
     console.log(`app listen on ${PORT}`);
})