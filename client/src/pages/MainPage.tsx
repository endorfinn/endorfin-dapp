import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { PoolCardList, PoolProposal } from '../components';
import styles from './MainPage.module.scss';
import './MainPage.module.scss';
import { EndorfinContext } from '../store/store';
import { Button } from '@material-ui/core';

function MainPage() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useContext(EndorfinContext);

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
      border: '2px solid rgba(0, 0, 0, 0.25)',
      width: '50vw',
      height: '72vh',
      borderRadius: '16px',
    }
  };

  const connectWallet = async () => {
    if (!state.wallet.length) {
      await window.ethereum.enable()
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      dispatch({type: "SET_WALLET", value: accounts});
    }
  }

  return (
    <main className={styles.main}>
      <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
          <PoolProposal />
      </Modal>

      <section className={styles.leftSection}>
        <h2>마음에 드는 풀에 참여하세요 🐬</h2>
        <PoolCardList />
      </section>
      <section className={styles.rightSection}>
        <div className={styles.wallet}>
          <h3>My Wallet</h3>
          {(!state.wallet.length) ?
          <>
            <h4>지갑을 연결해 풀에 참여해 보세요 👛</h4>
            <Button onClick={connectWallet}>연결하기</Button>
          </>
          : <><h4>직접 풀을 제안해 보세요 👛</h4><Button onClick={openModal}>풀 제안하기</Button></>}
        </div>
        <div className={styles.hotdeal}>
          <h3>나를 위한 풀 추천 👍🏻</h3>
        </div>
      </section>
    </main>
  )
}

export default MainPage;
