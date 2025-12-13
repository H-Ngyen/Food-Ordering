import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => console.log("Connected to database!")).catch((error) => console.log(`error connect to db:${error}`))

const PORT = process.env.PORT || 7000;
const app = express();
app.use(express.json())
app.use(cors());

app.get('/healthy', async (req: Request, res: Response) => {
    res.json({message:"healthy"});
});

app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`)
})