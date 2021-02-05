
import React, { useContext, useEffect, useState } from 'react'
import { Button, InputAdornment, TextField } from '@material-ui/core'
import Modal from 'react-modal'
import { useForm } from 'react-hook-form'
import getUnixTime from 'date-fns/getUnixTime'
import styles from './PoolProposal.module.scss'
import { EndorfinContext } from '../store/store'
import CoinSelectModal from './CoinSelectModal'
import createProposal from '../constractAPIs/createProposal'
import { address as poolFactoryContractAddress } from '../customContracts/poolPropasalFactoryContract';

interface HouseCreateFormData {
  proposalTokenOne: string;
  proposalTokenTwo: string;
  proposalTokenThree: string;
  proposalTokenValueOne: number;
  proposalTokenValueTwo: number;
  proposalTokenValueThree: number;
  fundingStartTime: Date;
  fundingEndTime: Date;
  optionPrice: number;
  optionPremium: number;
  optionInterval: number;
  commission: number;
  name: string;
  symbol: string;   
}

function PoolProposal() {
  const { state } = useContext(EndorfinContext)
  const { poolFactoryContract, wallet, web3, daiContract } = state
  const [coinSelectedlist, setCoinSelectedlist] = useState<string[]>([])
  const [isCoinModalOpen, setIsCoinModalOpen] = useState(false)
  const onSetCoinSelectedlist = (coinList: string[]) => {
    setCoinSelectedlist(coinList)
    setIsCoinModalOpen(!isCoinModalOpen)
  }

  const {
    register, handleSubmit, errors,
  } = useForm<HouseCreateFormData>();

  const approveDai = async (fromAddress: string, toAddress: string, value: number) => {
    daiContract.methods.approve(toAddress, value).send({from: fromAddress});
  }

  const onSubmit = async (data: HouseCreateFormData) => {
    const networkName = 'kovan';

    const linkAddress = '0xa36085f69e2889c224210f603d836748e7dc0088';
    const daiAddress = '0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa'

    // Sample Data
    const proposalTokens = [
      {
      "tokenAddress": linkAddress,
      "amount": "1"
      },
      {
      "tokenAddress": daiAddress,
      "amount": "2"
      }
    ];

    const totalTokenAmount = 100;
    const commission = 100;
    //

    const fundingStartTime = new Date(data.fundingStartTime).getTime();
    const fundingEndTime = new Date(data.fundingEndTime).getTime();
    await approveDai(wallet[0], poolFactoryContractAddress, 2);

    createProposal(
      poolFactoryContract, 
      networkName, 
      wallet[0], 
      proposalTokens, 
      totalTokenAmount, 
      fundingStartTime,
      fundingEndTime,
      data.optionPrice,
      data.optionPremium,
      data.optionInterval,
      commission,
      data.name,
      data.symbol 
     );
  };

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
      <form className={styles.poolProposal} onSubmit={handleSubmit(onSubmit)}>
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
                          src={require('../assets/coin/'+coin+'.svg')}
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
            name="fundingStartTime"
            inputRef={register({ required: true })}
            className={styles.textfield}
            type="datetime-local"
            defaultValue="2021-02-20T11:30"
          />
          
          <h4 style={{ textAlign: 'right', marginLeft: '30px' }}>
            Pool 모집 마감(시작일 24시간 후)
          </h4>
          <TextField
            name="fundingEndTime"
            inputRef={register({ required: true })}
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
            name="optionPrice"
            inputRef={register({ required: true })}
            className={styles.textfield}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              startAdornment: (

                <InputAdornment position="start">
                  <img
              src={require('../assets/coin/DAI.svg')}
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
          <TextField 
            name="optionPremium"
            inputRef={register({ required: true })} 
            className={styles.textfield} 
            type="number"
          />
          <p>DAI</p>
          <TextField
            name="optionInterval"
            inputRef={register({ required: true })}  
            className={styles.textfield} 
            type="number"
          />
          <h5>시간</h5>
        </div>
        <div className={styles.inputWrapper}>
          <h4 style={{ textAlign: 'right' }}>풀 이름</h4>
          <TextField 
            name="name"
            inputRef={register({ required: true })} 
            className={styles.textfield} 
          />
          <h4 style={{ textAlign: 'right' }}>풀 심볼(symbol)</h4>
          <TextField 
            name="symbol"
            inputRef={register({ required: true })} 
            className={styles.textfield} 
          />  
        </div>
        <Button type="submit" style={{ color: 'red' }}>
          <h3>제안하기</h3>
        </Button>
        <Button>
          <h3>다음에</h3>
        </Button>
      </form>
    </>
  )
}

export default PoolProposal

