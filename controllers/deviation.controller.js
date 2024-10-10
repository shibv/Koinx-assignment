import { getStandardDeviation } from '../services/cryptoService.js';

export const getDeviation =async (req, res, next) => {
  try {
    const { coin } = req.query;
    if (!coin) {
      return res.status(400).json({ error: 'Coin parameter is required' });
    }
    const deviation = await getStandardDeviation(coin);
    res.json({ standardDeviation: deviation });
  } catch (error) {
    next(error);
  }
}

