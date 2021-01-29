import React, { useContext, useEffect, useState } from 'react';
import { Button, InputAdornment, TextField } from '@material-ui/core';
import styles from './PoolProposal.module.scss';
import { EndorfinContext } from '../store/store';
import { red } from '@material-ui/core/colors';

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
  let isSelected : boolean = false;
  return (
    <form className={styles.poolProposal}>
      <h3 id="modalTitle">Pool 제안하기</h3>
      <div className={styles.inputWrapper}>
        <h4 style={{ marginRight: '3em',textAlign : "right"}}>코인/토큰 개수 입력</h4>
        {(isSelected) ? 
        <>
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
        <button className={styles.coinAddBtn}>코인 선택하기</button>
        </> : <button className={styles.coinAddBtn}>코인 선택하기</button>
}



      </div>
      <div className={styles.inputWrapper}>
      <h4 style={{textAlign : "right"}}>Pool 모집 시작</h4>
      <TextField
        className={styles.textfield}
        type="date"
        defaultValue="2020-12-04"
      />
      <h4 style={{textAlign : "right",marginLeft : "30px"}}>Pool 모집 마감(시작일 24시간 후)</h4>
      <TextField
        className={styles.textfield}
        type="text"
        defaultValue="2020/12/05"
      />
      </div>
      
        <div className={styles.inputWrapper}>
      <h4 style={{textAlign : "right"}}>옵션 모집 시작</h4>
      <TextField
        className={styles.textfield}
        type="text"
        defaultValue="2020/12/06"
      />
      <h4 style={{textAlign : "right",marginLeft : "40px"}}>옵션 모집 만기(시작일 24시간 후)</h4>
      <TextField
        className={styles.textfield}
        type="text"
        defaultValue="2020/12/07"
      />
      </div>
      <div className={styles.inputWrapper}>
        <h4 style={{ marginRight: '0.5em' , textAlign : "right"}}>옵션 행사가격</h4>
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
        <h4 style = {{marginLeft : "180px", textAlign : "right"}}>옵션만기일</h4>
        <TextField
        className={styles.textfield}
        type="date"
        defaultValue="2020-12-08"
      />
        
        </div>


      <div className={styles.inputWrapper}>
      <h4 style={{textAlign : "right"}}>옵션 프리미엄/주기</h4>
      <TextField
        className={styles.textfield}
        type="text"
      />
      <h3>DAI</h3><h2 style = {{marginLeft : "30px"}}>/</h2>
      <TextField
        className={styles.textfield}
        type="text"
      />
      <h5>시간</h5>
      </div>
      <Button onClick={onSubmit} style = {{color : "red"}}><h3>제안하기</h3></Button>
      <Button onClick={onSubmit}><h3>다음에</h3></Button>
    </form>
  )
}

export default PoolProposal;
