
import React, { useContext, useEffect, useState } from 'react'
import { Button, InputAdornment, TextField } from '@material-ui/core'
import Modal from 'react-modal'
import styles from './PoolProposal.module.scss'
import { EndorfinContext } from '../store/store'
import { red } from '@material-ui/core/colors'
import CoinSelectModal from './CoinSelectModal'

function PoolProposal() {
  const { state } = useContext(EndorfinContext)
  const { contract, wallet, web3, daiContract } = state
  const [coinSelectedlist, setCoinSelectedlist] = useState<string[]>([])
  const [isCoinModalOpen, setIsCoinModalOpen] = useState(false)
  const onSetCoinSelectedlist = (coinList: string[]) => {
    setCoinSelectedlist(coinList)
    setIsCoinModalOpen(!isCoinModalOpen)
  }

  // const [etherBalance, setEtherBalance] = useState('');
  // const [daiBalance, setDaiBalance] = useState('');


  // const getBalancesFromUserAddress = async () => {


  //   let etherBalance = await web3.eth.getBalance(wallet[0]);
  //   etherBalance = await web3.utils.fromWei(etherBalance, 'ether');
  //   let daiBalance = await daiContract.methods.balanceOf(wallet[0]).call();
  //   daiBalance = await web3.utils.fromWei(daiBalance, 'ether');
  //   console.log(daiBalance);
  //   setEtherBalance(etherBalance);
  //   setDaiBalance(daiBalance);
  // }
  const onSubmit = async () => {
    // const { error, transactionHash } = await contract.methods.set(5).send({ from: wallet[0] });
    // const { error, transactionHash } = await daiContract.methods.transfer('0x2f72161A669C47Ca32F81F814Abc784d504e934e', web3.utils.toWei('1000', 'ether')).send({ from: wallet[0] });
    // if (error) {
    //   console.debug('send 호출에서 에러 발생 : ', error);
    //   alert("에러가 발생했습니다")
    //   return
    // }
    // console.debug('transaction Hash : ', transactionHash);
    // alert("Pool 제안이 완료되었습니다")
    window.location.reload();
  }
  useEffect(() => {
    // getBalancesFromUserAddress();
    // Modal.setAppElement('body');
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
      width: '25vw',
      height: '60vh',
      borderRadius: '16px',
    },
  }

  const openModal = () => {

    setIsCoinModalOpen(!isCoinModalOpen)
  }

  return (
    <>
      <Modal isOpen={isCoinModalOpen} style={proposalStyles}>
        <CoinSelectModal setSelectedCoinInParents={onSetCoinSelectedlist} />
      </Modal>
      <form className={styles.poolProposal}>
        <h3 id="modalTitle">Pool 제안하기</h3>
        <div className={styles.inputWrapper}>
          <h4 style={{ marginRight: '3em', textAlign: 'right' }}>
            코인/토큰 개수 입력
          </h4>
          {coinSelectedlist.length ? (
            <>
              {coinSelectedlist.map((coin) => {
                return (
                  <TextField
                    className={styles.textfield}
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img 
                          src={require('../assets/'+coin+'.svg')}
                          width="auto"
                          height="15px"></img>
                          <p>{coin}</p>
                        </InputAdornment>
                      ),
                    }}
                  />
                )
              })}

              <button type='button' className={styles.coinAddBtn} onClick={openModal}>
                코인 선택하기
              </button>
            </>
          ) : (
            <button type='button' className={styles.coinAddBtn} onClick={openModal}>
              코인 선택하기
            </button>
          )}
        </div>
        <div className={styles.inputWrapper}>
          <h4 style={{ textAlign: 'right' }}>Pool 모집 시작</h4>
          <TextField
            className={styles.textfield}
            type="datetime-local"
            defaultValue="2021-02-20T11:30"
          />
          
          <h4 style={{ textAlign: 'right', marginLeft: '30px' }}>
            Pool 모집 마감(시작일 24시간 후)
          </h4>
          <TextField
            className={styles.textfield}
            type="datetime-local"
            defaultValue="2021-02-20T11:30"
          />
        </div>

        <div className={styles.inputWrapper}>
          <h4 style={{ textAlign: 'right' }}>옵션 모집 시작</h4>
          <TextField
            className={styles.textfield}
            type="datetime-local"
            defaultValue="2021-02-20T11:30"
          />
          <h4 style={{ textAlign: 'right', marginLeft: '40px' }}>
            옵션 모집 만기(시작일 24시간 후)
          </h4>
          <TextField
            className={styles.textfield}
            type="datetime-local"
            defaultValue="2021-02-20T11:30"
          />
        </div>
        <div className={styles.inputWrapper}>
          <h4 style={{ marginRight: '0.5em', textAlign: 'right' }}>
            옵션 행사가격
          </h4>
          <TextField
            className={styles.textfield}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              startAdornment: (

                <InputAdornment position="start">
                  <img
              src={require('../assets/DAI.svg')}
              height="15px"
              width="auto"
            />
                  <p>DAI </p>
                </InputAdornment>
              ),
            }}
          />
          <h4 style={{ marginLeft: '180px', textAlign: 'right' }}>
            옵션만기일
          </h4>
          <TextField
            className={styles.textfield}
            type="datetime-local"
            defaultValue="2021-02-20T11:30"
          />
        </div>

        <div className={styles.inputWrapper}>
          <h4 style={{ textAlign: 'right' }}>옵션 프리미엄/주기</h4>
          <TextField className={styles.textfield} type="text">
          <p>DAI</p>  
          </TextField>
          <TextField className={styles.textfield} type="text" />
          <h5>시간</h5>
        </div>
        <Button onClick={onSubmit} style={{ color: 'red' }}>
          <h3>제안하기</h3>
        </Button>
        <Button onClick={onSubmit}>
          <h3>다음에</h3>
        </Button>
      </form>
    </>
  )
}

export default PoolProposal

