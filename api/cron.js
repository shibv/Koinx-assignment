import { fetchAndStoreCryptoData } from "../services/cryptoService";
export default async function handler(req, res) {
    console.log('Running background job to fetch crypto data');
    await fetchAndStoreCryptoData();
    res.status(200).end('Cron job executed!');
  }