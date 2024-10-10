# Crypto Stats API

This project is a Node.js API that provides cryptocurrency statistics and price deviation calculations for Bitcoin, Matic, and Ethereum.

## Features

- Fetches and stores cryptocurrency data (price, market cap, 24h change) every 2 hours
- Provides latest stats for a requested cryptocurrency
- Calculates standard deviation of price for the last 100 records of a requested cryptocurrency


## Setup

1. Clone the repository:
   ```
   git clone https://github.com/shibv/Koinx-assignment/
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in project directory

4. Start the server:
   ```
   npm run dev
   ```

## API Endpoints

1. Get Latest Stats
   - Endpoint: `GET /stats`
   - Query Params: `coin` (bitcoin, matic-network, or ethereum)
   - Example: `GET /stats?coin=bitcoin`

2. Get Price Deviation
   - Endpoint: `GET /deviation`
   - Query Params: `coin` (bitcoin, matic-network, or ethereum)
   - Example: `GET /deviation?coin=bitcoin`

## Background Jobs

The application runs a background job every 2 hours to fetch and store the latest cryptocurrency data from the CoinGecko API.

## Environment Variables

- `PORT`: The port number for the server (default: 3000)
- `MONGODB_URI`: MongoDB connection string
- `COINGECKO_API_URL`: CoinGecko API base URL
- `COINGECKO_API_KEY`: CoinGecko API key (if required)

