import React, { createContext, Dispatch, useReducer } from 'react';
import reducer, { Action, EndorfinState } from './reducer';

const initialState: EndorfinState = {
  wallet: "",
  contract: null,
  web3: null,
  daiContract: null,
};

type EndorfinDispatch = Dispatch<Action>;

export const EndorfinContext = createContext<{state: EndorfinState; dispatch: EndorfinDispatch}>({state: initialState, dispatch: () => null})

function Store({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <EndorfinContext.Provider value={{state, dispatch}}> 
        {children}
    </EndorfinContext.Provider>
  )
}

export default Store;
