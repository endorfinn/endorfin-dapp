import React from 'react';
import PoolCard from './PoolCard';

function PoolCardList() {
  const samplePool = {
    name: 'pool 1',
  }

  return (
    <section>
      <PoolCard pool={samplePool}/>
      <PoolCard pool={samplePool}/>
      <PoolCard pool={samplePool}/>
    </section>
  )
}

export default PoolCardList;
