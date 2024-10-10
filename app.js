import express from 'express';
import cron from 'node-cron';
import dotenv from 'dotenv';
import statsRouter from './routes/stats.js';
import deviationRouter from './routes/deviation.js';
import errorHandler from './middleware/errorHandler.js';
import { fetchAndStoreCryptoData } from './services/cryptoService.js';
import connectDatabase from './config/database.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDatabase();

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome to the Crypto Stats API!');
  });


app.use('/stats', statsRouter);
app.use('/deviation', deviationRouter);

app.use(errorHandler);

//Schedule background job to run every 2 hours 
cron.schedule('0 */2 * * *', async () => {
  console.log('Running background job to fetch crypto data');
  await fetchAndStoreCryptoData();
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





