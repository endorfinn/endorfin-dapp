 type ActionType = "SET_WALLET" | "SET_CONTRACT" | "SET_WEB3" | "SET_DAI_CONTRACT";

export interface EndorfinState {
  wallet: string;
  contract: any;
  web3: any;
  daiContract: any;
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
    case 'SET_CONTRACT':
      return {
        ...state,
        contract: action.value
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
    default: return state;
  }
}

export default reducer;
