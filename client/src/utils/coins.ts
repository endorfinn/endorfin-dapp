export interface Coin {
  name: string;
  amount: string;
  currentAmount: string;
}

export class CoinImage {
  static url(coin: string) {
    return "";
  }
}
