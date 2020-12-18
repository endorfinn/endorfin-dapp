import React from 'react';
import { Pool } from '../utils';
import PoolCard from './PoolCard';
import styles from './PoolCardList.module.scss';

interface Props {
  isPool: boolean;
}

function PoolCardList(props: Props) {
  const samplePool1: Pool = {
    name: '황금알 풀',
    coin: [ 
      {
       name: 'ETH',
       amount: "10",
       currentAmount: "4",
      }, 
      {
       name: 'DAI',
       amount: "10",
       currentAmount: "3",

      }, 
      {
       name: 'LINK',
       amount: "10",
       currentAmount: "4",
      }
    ]
  }

  const samplePool2: Pool = {
    name: '관악 풀',
    coin: [ 
      {
       name: 'ETH',
       amount: "10",
       currentAmount: "4",
      }, 
      {
       name: 'DAI',
       amount: "10",
       currentAmount: "3",

      }, 
      {
       name: 'LINK',
       amount: "10",
       currentAmount: "4",
      }
    ]
  }

  const samplePool3: Pool = {
    name: '서울대 풀',
    coin: [ 
      {
       name: 'ETH',
       amount: "10",
       currentAmount: "4",
      }, 
      {
       name: 'DAI',
       amount: "10",
       currentAmount: "3",

      }, 
      {
       name: 'LINK',
       amount: "10",
       currentAmount: "4",
      }
    ]
  }

  const samplePool4: Pool = {
    name: '관악산 풀',
    coin: [ 
      {
       name: 'ETH',
       amount: "10",
       currentAmount: "4",
      }, 
      {
       name: 'DAI',
       amount: "10",
       currentAmount: "3",

      }, 
      {
       name: 'LINK',
       amount: "10",
       currentAmount: "4",
      }
    ]
  }

  const samplePoolEndorfin: Pool = {
    name: 'Endorfin',
    coin: [ 
      {
       name: 'ETH',
       amount: "1",
       currentAmount: "0",
      }, 
      {
       name: 'DAI',
       amount: "2",
       currentAmount: "0",

      }, 
      {
       name: 'LINK',
       amount: "3",
       currentAmount: "0",
      }
    ]
  }

  return (
    <section className={styles.poolCardList}>
      {props.isPool ? 
      <>
      <PoolCard pool={samplePool1} isPool={props.isPool}/>
      <PoolCard pool={samplePool2} isPool={props.isPool}/>
      <PoolCard pool={samplePool3} isPool={props.isPool}/>
      <PoolCard pool={samplePool4} isPool={props.isPool}/>
      <PoolCard pool={samplePool4} isPool={props.isPool}/>
      <PoolCard pool={samplePool4} isPool={props.isPool}/>
      <PoolCard pool={samplePool4} isPool={props.isPool}/>
      <PoolCard pool={samplePool3} isPool={props.isPool}/>
      <PoolCard pool={samplePoolEndorfin} isPool={props.isPool}/>
      </>
      : 
      <>
      <PoolCard pool={samplePoolEndorfin} isPool={props.isPool}/>
      </>}
    </section>
  )
}

export default PoolCardList;
