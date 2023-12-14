export const coinList = (currency : string) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const singleCoin = (id: string) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

export const historicalChart = (id : string, days :number = 365, currency : string) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;


export const currencyList = "https://api.coingecko.com/api/v3/simple/supported_vs_currencies"