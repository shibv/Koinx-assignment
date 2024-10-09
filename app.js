import express from 'express'
import dotenv from 'dotenv';
import connectDatabase from './config/database.js';
dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

connectDatabase();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hey hi!!");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});