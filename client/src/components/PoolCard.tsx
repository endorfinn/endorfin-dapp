import React from 'react';
import Modal from 'react-modal';
import { Pool } from '../utils';
import styles from './PoolCard.module.scss';
import PoolCardModal from './PoolCardModal';

interface Props {
  pool: Pool;
  isPool?: boolean;
}

function PoolCard(props: Props) {
  const [modalIsOpen,setIsOpen] = React.useState(false);

  const mainCoin = props.pool.coin[0].name === 'BTC' ? 'btc' : ''

  const openModal = () => {
    setIsOpen(true);
  }
 
  const closeModal = () =>{
    setIsOpen(false);
  }

  const customStyles = {
    content : {
      top : '50%',
      left : '50%',
      right : 'auto',
      bottom  : 'auto',
      marginRight : '-50%',
      transform : 'translate(-50%, -50%)',
      border: '1px solid grey',
      borderRadius: '16px',
    }
  };

  return (
    <>
      <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
        <PoolCardModal isPool={props.isPool} />
      </Modal>

      <div className={styles.poolCardWrapper}>
        <div className={styles.poolCard} onClick={openModal}>
          <div className={styles.poolCardHeader}>
            <h4>{props.pool.name}</h4>
            <progress value="32" max="80" className={styles.bitcoi}></progress>
          </div>
          <div className={styles.mainCoins}>
            <img className={styles.etherImage} />
            <img className={styles.daiImage} />
            <img className={styles.snxImage} />
          </div>
          <div className={styles.coinInfoWrapper}>
            <div className={styles.coinInfoHeader}>
              <span></span>
              <span>전체토큰</span>
              <span>참여토큰</span>
            </div>
            {props.pool.coin.map((coin) => 
            <div className={styles.coinInfo}>
              <span className={styles.coinName}>{coin.name}</span>
              <span>8</span>
              <span>4</span>
            </div>
            )}
          </div>
        </div>
        {/* <span>4900$ / <strong>8000$</strong></span> */}
      </div>
    </>
  )
}

export default PoolCard;
