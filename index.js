import expres, { json, urlencoded } from "express"
const app = expres();
const PORT = process.env.port || 3000
import { getHealth } from "./controlers/other.js";
import { getSongs, addLike ,postComment,getComments} from "./controlers/songs.js";
import cors from 'cors'
import SONG_INFO from "./data.js";

//middlewares..
app.use(cors())
app.use(expres.json())
app.use(urlencoded({ extended: true }))

app.get('/health', getHealth);
app.get('/songs', getSongs);
app.patch('/like/:id', addLike)
app.post('/comment/:songid',postComment)
app.get('/comment/:id',getComments)

app.listen(PORT, () => {
     console.log(`app listen on ${PORT}`);
})