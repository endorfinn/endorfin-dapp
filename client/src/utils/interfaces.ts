import { Coin } from "./coins";

export default interface Pool {
  name: string;
  coin: Coin[];
}
