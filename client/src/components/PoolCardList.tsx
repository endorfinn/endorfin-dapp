import React from 'react';
import PoolCard from './PoolCard';
import styles from './PoolCardList.module.scss';

function PoolCardList() {
  const samplePool = {
    name: 'pool 1',
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
