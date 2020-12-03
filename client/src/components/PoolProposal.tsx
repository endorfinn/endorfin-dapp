import React, { useContext, useEffect, useState } from 'react';
import { Button, InputAdornment, TextField } from '@material-ui/core';
import styles from './PoolProposal.module.scss';
import { EndorfinContext } from '../store/store';
import getWeb3 from '../getWeb3';


function PoolProposal() {
  const { state } = useContext(EndorfinContext);
  const { contract, wallet, web3, daiContract} = state;


  const getBalancesFromUserAddress = async () => {
    const etherBalances = await web3.eth.getBalance(wallet[0]);
    console.log(daiContract);
    const daiBalnaces = await daiContract.methods.balanceOf('0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7').call();
    console.log("밑에ㅣㅌ에");
    console.log(daiBalnaces);
  }

  const onSubmit = async () => {
    const { error, transactionHash } = await contract.methods.set(5).send({ from: wallet[0] });
    if (error) {
      console.debug('send 호출에서 에러 발생 : ', error);
      alert("에러가 발생했습니다")
      return
    }
    console.debug('transaction Hash : ', transactionHash);
    alert("Pool 제안이 완료되었습니다")
    window.location.reload();
  }

  useEffect(() => {
    getBalancesFromUserAddress();
    console.log("밥밥");
  })

  return (
    <form className={styles.poolProposal}>
      <h3>풀 제안하기</h3>
      <TextField
        className={styles.textfield}
        type="date"
        defaultValue="2020-11-27"
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <h4 style={{ marginRight: '3em' }}>모집 시작일</h4>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        className={styles.textfield}
        type="date"
        defaultValue="2020-12-27"
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <h4 style={{ marginRight: '3em' }}>모집 마감일</h4>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        className={styles.textfield}
        type="number"
        defaultValue="1개월"
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <h4 style={{ marginRight: '3em' }}>옵션 기간(개월)</h4>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        className={styles.textfield}
        type="number"
        defaultValue="1000"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <h4 style={{ marginRight: '3em' }}>옵션 행사 가격</h4>
            $
            </InputAdornment>
          ),
        }}
      />
      <TextField
        className={styles.textfield}
        type="number"
        defaultValue="1000"
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <h4 style={{ marginRight: '3em' }}>옵션 프리미엄</h4>
            $
            </InputAdornment>
          ),
        }}
      />
      <Button onClick={onSubmit}><h3>제안하기 🐬</h3></Button>
    </form>
  )
}

export default PoolProposal;
