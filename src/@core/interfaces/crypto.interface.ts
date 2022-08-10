export interface Crypto {
  id: string;
  symbol: string;
  name: string;
  nameid: string;
  rank: number;
  price_usd: string;
  percent_change_24h: string;
  percent_change_1h: string;
  percent_change_7d: string;
  price_btc: string;
  market_cap_usd: string;
  volume24: number;
  volume24a: number;
  csupply: string;
  tsupply: string;
  msupply: string;
}

export interface RequestDataExtra {
  coins_num: number;
  time: number;
}

export interface ResponseData {
  data: Crypto[];
  info: RequestDataExtra;
}

export interface Pairs {
  base: string;
  quote: string;
  volume: number;
  price: number;
  price_usd: number;
  time: number;
}

export interface ResponseDataExchange {
  pairs: Pairs[];
}
