import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import mongoose from 'mongoose'
import pinRoute from './routes/pins.js'
import userRoute from './routes/users.js'

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true }).then(() => {
    console.log("✨Hiker reached the summit✨")
}).catch(err => console.log(err));

//using of routes
app.use('/api/users', userRoute);
app.use('/api/pin', pinRoute);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`⚡Hiking at http://localhost:${PORT}`);
})