import dotenv from 'dotenv';
import axios from 'axios';
import CryptoData from '../models/cryptodata.model.js';
import { calculateStandardDeviation } from '../utils/mathUtils.js';

dotenv.config();

const COINGECKO_API_URL = process.env.COINGECKO_API_URL;
const COINGECKO_API_KEY = process.env.COINGECKO_API_KEY; 
const COINS = ['bitcoin', 'matic-network', 'ethereum'];

export async function fetchAndStoreCryptoData() {
   
  for (const coin of COINS) {
    try {
      const response = await axios.get(`${COINGECKO_API_URL}/coins/${coin}`, {
        headers: {
          'accept': 'application/json',
          'x-cg-demo-api-key': COINGECKO_API_KEY
        }
      });
      
      const { market_data } = response.data;
      console.log(market_data)
      const cryptoData = new CryptoData({
        coin,
        price: market_data.current_price.usd,
        marketCap: market_data.market_cap.usd,
        change24h: market_data.price_change_percentage_24h
      });

      await cryptoData.save();
      console.log(`Data saved for ${coin}`);
    } catch (error) {
      console.error(`Error fetching data for ${coin}:`, error.message);
    }
  }
}

export async function getLatestStats(coin) {
  const latestData = await CryptoData.findOne({ coin }).sort({ timestamp: -1 });
  if (!latestData) {
    throw new Error('No data found for the specified coin');
  }
  return {
    price: latestData.price,
    marketCap: latestData.marketCap,
    "24hChange": latestData.change24h
  };
}

export async function getStandardDeviation(coin) {
  const data = await CryptoData.find({ coin }).sort({ timestamp: -1 }).limit(100);
  if (data.length === 0) {
    throw new Error('No data found for the specified coin');
  }
  const prices = data.map(item => item.price);
  return calculateStandardDeviation(prices);
}