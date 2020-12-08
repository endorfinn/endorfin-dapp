import React from 'react';
import { Pool } from '../utils';
import PoolCard from './PoolCard';
import styles from './PoolCardList.module.scss';

interface Props {
  isPool: boolean;
}

function PoolCardList(props: Props) {
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
      }, 
      {
       name: 'XRC',
       amount: "10"
      }
    ]
  }

  return (
    <section className={styles.poolCardList}>
      {props.isPool ? 
      <>
      <PoolCard pool={samplePool} isPool={props.isPool}/>
      <PoolCard pool={samplePool} isPool={props.isPool}/>
      <PoolCard pool={samplePool} isPool={props.isPool}/>
      <PoolCard pool={samplePool} isPool={props.isPool}/>
      <PoolCard pool={samplePool} isPool={props.isPool}/>
      <PoolCard pool={samplePool} isPool={props.isPool}/>
      <PoolCard pool={samplePool} isPool={props.isPool}/>
      <PoolCard pool={samplePool} isPool={props.isPool}/>
      <PoolCard pool={samplePool} isPool={props.isPool}/>
      </>
      : 
      <>
      <PoolCard pool={samplePool} isPool={props.isPool}/>
      <PoolCard pool={samplePool} isPool={props.isPool}/>
      <PoolCard pool={samplePool} isPool={props.isPool}/>
      </>}
    </section>
  )
}

export default PoolCardList;
