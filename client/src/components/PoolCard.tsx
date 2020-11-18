import React from 'react';
import { Pool } from '../utils';
import styles from './PoolCard.module.scss';

interface Props {
  pool: Pool;
}

function PoolCard(props: Props) {
  return (
    <div className={styles.poolCard}>
      <h4>{props.pool.name}</h4>
      {props.pool.coin.map((coin) => 
      <>
        <p>{coin.name}</p>
        <p>{coin.amount}</p>
      </>
      )}
    </div>
  )
}

export default PoolCard;
