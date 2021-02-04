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
    'LINK'
  ];
  const [coinSelectedlist, setCoinSelectedlist] = useState([])

  const addToSelectedCoinlist = (coin : string) => {
    if (!(coinSelectedlist.includes(coin))){
      setCoinSelectedlist(coinlist => [...coinlist, coin]);
    }
    else{
      alert({coin} + " Coin is alread included");
      let answer : string = prompt("Do you wanna delete this token? y/n");
      if (answer == "y") {
        setCoinSelectedlist(coinlist => coinlist.filter(c => c != coin));
      } else {
        setCoinSelectedlist(coinlist => coinlist);
      }
    }
    
  }

  const onSetSelectedCoinInParents = () => {
    props.setSelectedCoinInParents(coinSelectedlist);
  }

  return (
    <div className={styles.coinSelect}>
        <div className={styles.pickheader}>
          <h1>Coin List</h1>
          <hr/>
            <span className={styles.pickedlabel}>picked : </span> 
            {coinSelectedlist.map((selectedcoin) => {
              return(
                <img 
                src={require('../assets/coin/'+selectedcoin+'.svg')}
                height = "15px"
                width = "auto"
              ></img>
              )
            })}
          <hr/>
        </div>
        <div className={styles.coinlistwrapper}>
          {officialCoins.map((coin) => {
          return(
          <Button className={styles.buttonStyle} onClick={()=>addToSelectedCoinlist(coin)} >
            <img
              src={require('../assets/coin/'+coin+'.svg')}
              height="30px"
              width="auto"
            />
            <span>{coin}</span>
          </Button>
          );
          })
        }
        <Button className={styles.pickbutton} onClick={onSetSelectedCoinInParents}>Pick</Button>
        </div>
      </div>
    )
}

export default CoinSelectModal;
