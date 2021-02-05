type ActionType = "SET_WALLET" 
| "SET_POOLFACTORY_CONTRACT" | "SET_WEB3" 
| "SET_DAI_CONTRACT" | "SET_CHAINLINK_CONTRACT" 
| "SET_COIN_PRICE_BY_TIME" | "SET_ORACLE_CONTRACT"
| "SET_SNX_CONTRACT";

interface CoinPricesByTime {
  daiByTime: number[];
  ethByTime: number[];
  snxByTime: number[];
}

export interface EndorfinState {
  wallet: string;
  poolFactoryContract: any;
  web3: any;
  daiContract: any;
  chainLinkContract: any;
  snxContract: any;
  coinPricesByTime: CoinPricesByTime;
  oracleContract: any;
}

export interface Action {
  type: ActionType;
  value: any;
}

const reducer = (state: EndorfinState, action: Action) => {
  switch (action.type) {
    case 'SET_WALLET':
      return {
        ...state,
        wallet: action.value
      }
    case 'SET_POOLFACTORY_CONTRACT':
      return {
        ...state,
        poolFactoryContract: action.value
      }
    case 'SET_WEB3':
      return {
        ...state,
        web3: action.value
      }
    case 'SET_DAI_CONTRACT':
      return {
        ...state,
        daiContract: action.value
      }
    case 'SET_CHAINLINK_CONTRACT':
      return {
        ...state,
        chainLinkContract: action.value
      }
    case 'SET_CHAINLINK_CONTRACT':
      return {
        ...state,
        chainLinkContract: action.value
      }
    case 'SET_SNX_CONTRACT':
      return {
        ...state,
        snxContract: action.value
      }
    default: return state;
  }
}

export default reducer;
