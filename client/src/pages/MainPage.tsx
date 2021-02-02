import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { PoolCardList, PoolProposal } from '../components';
import styles from './MainPage.module.scss';
import './MainPage.module.scss';
import { EndorfinContext } from '../store/store';
import { Button } from '@material-ui/core';
import HotDealPool from '../components/HotDeal';


function MainPage() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [etherBalance, setEtherBalance] = useState('0');
  const [daiBalance, setDaiBalance] = useState('0');
  const [chainLinkBalance, setChainLinkBalance] = useState('0');
  const [poolTab, setPoolTab] = useState(true);

  const { state, dispatch } = useContext(EndorfinContext);
  const { wallet, web3, daiContract, chainLinkContract } = state;

  const getBalancesFromUserAddress = async () => {
    if (web3 && daiContract && chainLinkContract && Boolean(wallet)) {
      let etherBalance = await web3.eth.getBalance(wallet[0]);
      etherBalance = await web3.utils.fromWei(etherBalance, 'ether');
      let daiBalance = await daiContract.methods.balanceOf(wallet[0]).call();
      daiBalance = await web3.utils.fromWei(daiBalance, 'ether');
      let chainLinkBalance = await chainLinkContract.methods.balanceOf(wallet[0]).call();
      chainLinkBalance = await web3.utils.fromWei(chainLinkBalance, 'ether');

      setEtherBalance(etherBalance);
      setDaiBalance(daiBalance);
      setChainLinkBalance(chainLinkBalance);
    }
  }

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  useEffect(() => {
    if (web3) {
      getBalancesFromUserAddress();
    }

    Modal.setAppElement('body');
  })

  
  const proposalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: '2px solid #D51010',
      width: '70vw',
      height: '78vh',
      borderRadius: '16px',
    }
  };

  const connectWallet = async () => {
    if (!state.wallet.length) {
      await window.ethereum.enable();
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      dispatch({ type: "SET_WALLET", value: accounts });
    }
  }

  const showMyCoins = () => {
    return <>
      <p className={styles.coin}>ETH : {etherBalance}</p>
      <p className={styles.coin}>DAI : {daiBalance}</p>
      <p className={styles.coin}>LINK : {chainLinkBalance}</p>
    </>
  }

  const clickPoolTab = () => {
    setPoolTab(true);
  }

  const clickOptionTab = () => {
    setPoolTab(false);
  }

  return (
    <main className={styles.main}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={proposalStyles}
        contentLabel="Example Modal"
      >
        <PoolProposal />
      </Modal>

      <section className={styles.leftSection}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Button onClick={clickPoolTab}>
            <img src={require("../assets/poolpick.png")} className={styles.pickButton}></img>
            <h1>Pool</h1>
            </Button>
          <Button onClick={clickOptionTab} >
          <img src={require("../assets/optionpick.png")} className={styles.pickButton}></img>
            <h1>Option</h1>
            </Button>
        </div>

        {poolTab ? <h2>마음에 드는 Pool에 참여하세요</h2> : <h2>마음에 드는 Pool에 옵션을 제공하세요</h2>}
        <PoolCardList isPool={poolTab}/>
      </section>
      <section className={styles.rightSection}>
        <div className={styles.wallet}>
          <h3>My Wallet</h3>
          {(!state.wallet.length) ?
            <>
              <h4>지갑을 연결해 풀에 참여해 보세요 👛</h4>
              <Button onClick={connectWallet} className={styles.connectButton}>연결하기</Button>
            </>
            : <>
              {showMyCoins()}
              <h4>직접 풀을 제안해 보세요 👛</h4><Button onClick={openModal} className={styles.connectButton}>풀 제안하기</Button>
            </>}
        </div>
        <div className={styles.hotdeal}>
            {poolTab ?
            <>
                <h3 id="recommnedH3">나를 위한 풀 추천 👍🏻</h3>
          <HotDealPool title= '관악산풀' isFulled= {true} isOptionFinished={false}></HotDealPool>
          <HotDealPool title= '청룡산풀' isFulled= {false} isOptionFinished={false}></HotDealPool>

            </>
            : <>
               <h3 id="recommnedH3">나를위한 옵션 추천 👍🏻</h3>
          <HotDealPool title= '관악산풀' isFulled= {true} isOptionFinished={true}></HotDealPool>
          <HotDealPool title= '청룡산풀' isFulled= {true} isOptionFinished={true}></HotDealPool>
            </>
            }
          

        </div>
      </section>
    </main>
  )
}

export default MainPage;
