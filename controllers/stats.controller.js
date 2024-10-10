import { getLatestStats } from '../services/cryptoService.js';

export const getStats =async (req, res, next) => {
    try {
      const { coin } = req.query;
      if (!coin) {
        return res.status(400).json({ error: 'Coin parameter is required' });
      }
      const stats = await getLatestStats(coin);
      res.json(stats);
    } catch (error) {
      next(error);
    }
  }

