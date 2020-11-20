import React from 'react';
import classNames from 'classnames';
import { Pool } from '../utils';
import styles from './PoolCard.module.scss';

interface Props {
  pool: Pool;
}

function PoolCard(props: Props) {
  const mainCoin = props.pool.coin[0].name === 'BTC' ? 'btc' : ''

  return (
    <div className={styles.poolCardWrapper}>
      <div className={styles.poolCard}>
        <h4>{props.pool.name}</h4>
        <div className={styles.mainCoins}>
          <i className={classNames('fab fa-bitcoin fa-3x', styles.bitcoin)}></i>
          <i className="fab fa-ethereum fa-3x"></i>
        </div>
        <div className={styles.coinInfoWrapper}>
          {props.pool.coin.map((coin) => 
          <div className={styles.coinInfo}>
            <i className={classNames('fab fa-bitcoin', styles.bitcoin)}></i>
            <span>{coin.name}</span>
            <progress value="32" max="80" className={styles.bitcoi}></progress>{coin.amount}
          </div>
          )}
        </div>
      </div>
      <span>4900$ / <strong>8000$</strong></span>
    </div>
  )
}

export default PoolCard;
