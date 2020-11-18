import React from 'react';
import { Pool } from '../utils';
import PoolCard from './PoolCard';
import styles from './PoolCardList.module.scss';


function PoolCardList() {
  const samplePool: Pool = {
    name: 'pool 1',
    coin: [ 
      {
       name: 'BTC',
       amount: "10"
      }, 
      {
       name: 'ETH',
       amount: "10"
      }
    ]
  }

  return (
    <section className={styles.poolCardList}>
      <PoolCard pool={samplePool}/>
      <PoolCard pool={samplePool}/>
      <PoolCard pool={samplePool}/>
      <PoolCard pool={samplePool}/>
      <PoolCard pool={samplePool}/>
      <PoolCard pool={samplePool}/>
      <PoolCard pool={samplePool}/>
      <PoolCard pool={samplePool}/>
      <PoolCard pool={samplePool}/>
    </section>
  )
}

export default PoolCardList;
