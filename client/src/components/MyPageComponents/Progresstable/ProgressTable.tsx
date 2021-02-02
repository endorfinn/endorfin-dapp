import React, { useContext, useEffect } from 'react'
import { EndorfinContext } from '../../../store/store'

function ProgressTable() {
  const { dispatch, state } = useContext(EndorfinContext)
  const { coinPricesByTime, web3, oracleContract } = state
  
  const getPrice = async () => {
    if (oracleContract && coinPricesByTime) { 
        const newEthPrice = await oracleContract.methods.getLatestETH().call();
        const newCoinPricesByTime = coinPricesByTime.ethByTime?.push(newEthPrice);
        dispatch({type: "SET_COIN_PRICE_BY_TIME" ,value : newCoinPricesByTime});
    }
  }
  
  useEffect(() => {
      getPrice();
  });

  return (
    <div>
      <div className="tablehead">
        <span>시작가치</span>
        <span>현재가치</span>
        <span>옵션행사</span>
      </div>
      <div className="tabletail">
        <span>558.15 $</span>
        <span>558. $</span>
        <span>300,000 $</span>
      </div>
    </div>
  )
}

export default ProgressTable
