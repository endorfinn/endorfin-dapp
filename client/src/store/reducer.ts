type ActionType = "SET_WALLET" | "SET_CONTRACT";

export interface EndorfinState {
  wallet: string;
  contract: any;
}

export interface Action {
  type: ActionType;
  value: string;
}

const reducer = (state: EndorfinState, action: Action) => {
  switch(action.type) {
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
    default: return state;
  }
}

export default reducer;
