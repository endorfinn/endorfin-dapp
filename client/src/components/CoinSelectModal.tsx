import { Button } from '@material-ui/core';
import React, { useState } from 'react';

import styles from './CoinSelectModal.module.scss';

interface Props {
  setSelectedCoinInParents: (coinList: string[]) => void;
}

function CoinSelectModal(props: Props) {

  const officialCoins = [
    'ETH',
    'DAI',
    'SNX',
    'BNB'
  ];
  const [coinSelectedlist, setCoinSelectedlist] = useState([])

  const addToSelectedCoinlist = (coin : string) => {
    setCoinSelectedlist(coinlist => [...coinlist, coin]);
  }

  const onSetSelectedCoinInParents = () => {
    props.setSelectedCoinInParents(coinSelectedlist);
  }

  return (
    <div className="coinList">
        <div className={styles.pickheader}>
          <h1>Coin List</h1>
        </div>
        <div className={styles.coinlistwrapper}>
          {officialCoins.map((coin) => {
          return(
          <Button onClick={()=>addToSelectedCoinlist(coin) }>
            <img
              src={require('../assets/dai.svg')}
              width="30px"
              height="auto"
            />
            <span>{coin}</span>
          </Button>
          );
          })
        }
        <Button onClick={onSetSelectedCoinInParents}>Pick</Button>
        </div>
      </div>
    )
}

export default CoinSelectModal;
