import React from 'react';
import styles from './PoolCard.module.scss';

interface Props {
  pool: { name: string };
}

function PoolCard(props: Props) {
  return (
    <div className={styles.poolCard}>
      <h4>{props.pool.name}</h4>
    </div>
  )
}

export default PoolCard;
