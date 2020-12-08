import React, { useContext, useEffect, useState } from 'react';
import { Button, InputAdornment, TextField } from '@material-ui/core';
import styles from './PoolProposal.module.scss';
import { EndorfinContext } from '../store/store';

function PoolProposal() {
  const { state } = useContext(EndorfinContext);
  const { contract, wallet, web3, daiContract } = state;
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
    // window.location.reload();
  }

  useEffect(() => {
    // getBalancesFromUserAddress();
  })

  return (
    <form className={styles.poolProposal}>
      <h3>Pool 제안하기</h3>
      <div className={styles.inputWrapper}>
        <h4 style={{ marginRight: '3em' }}>Pool 구성 토큰</h4>
        <TextField
          className={styles.textfield}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <p>ETH</p>

              </InputAdornment>
            ),
          }}
        />
        <TextField
          className={styles.textfield}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <p>DAI</p>

              </InputAdornment>
            ),
          }}
        />
        <TextField
          className={styles.textfield}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <p>ChainLink</p>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className={styles.inputWrapper}>
      <h4>Pool 모집 시작(UTC)</h4>
      <TextField
        className={styles.textfield}
        type="date"
        defaultValue="2020-12-04"
      />
      <h4>Pool 모집 마감(시작일 24시간 후)</h4>
      <TextField
        className={styles.textfield}
        type="text"
        defaultValue="2020/12/05"
      />
      </div>
      <div className={styles.inputWrapper}>
        <h4 style={{ marginRight: '3em' }}>옵션 행사가격</h4>
        <TextField
          className={styles.textfield}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <p>DAI </p>
              </InputAdornment>
            ),
          }}
        />
        </div>
        <div className={styles.inputWrapper}>
      <h4>옵션 모집 시작</h4>
      <TextField
        className={styles.textfield}
        type="text"
        defaultValue="2020/12/06"
      />
      <h4>옵션 모집 만기(시작일 24시간 후)</h4>
      <TextField
        className={styles.textfield}
        type="text"
        defaultValue="2020/12/07"
      />
      </div>

      <div className={styles.inputWrapper}>
      <h4>옵션 프리미엄</h4>
      <TextField
        className={styles.textfield}
        type="text"
      />
      <h5>개월 마다</h5>
      <TextField
        className={styles.textfield}
        type="text"
      />
      <h5>Dai</h5>
      </div>
      <div className={styles.inputWrapper}>
      <h4>Pool 기간</h4>
      <TextField
        className={styles.textfield}
        type="number"
        defaultValue="6"
      />
      <h5> 개월</h5>
      </div>
      <Button onClick={onSubmit}><h3>제안하기 🐬</h3></Button>
    </form>
  )
}

export default PoolProposal;
