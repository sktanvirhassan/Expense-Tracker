import express, { json } from 'express';
import cors from 'cors';
import {db} from './db/db.js';
import { readdirSync } from 'fs';
import dotenv from "dotenv"
import transectionRoute from './routes/transactions.js';
import userRoute from './routes/user.js';


const app = express()

dotenv.config()

const PORT = process.env.PORT

//middlewares
app.use(json())
app.use(cors({
    origin: '*', // Adjust this to only allow specific origins in production
}));

//routes
// readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))
app.use("/api/v1/transections",transectionRoute)
app.use("/api/v1/users",userRoute)


const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}

server()