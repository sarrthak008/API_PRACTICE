import expres from "express"
const app =expres();
const PORT  = process.env.port || 3000 
import { getHealth } from "./controlers/other.js";
import { getSongs } from "./controlers/songs.js";
import cors from 'cors'

//middlewares..
app.use(cors())

app.get('/health',getHealth);
app.get('/songs',getSongs)

app.listen(PORT,()=>{
     console.log(`app listen on ${PORT}`);
})