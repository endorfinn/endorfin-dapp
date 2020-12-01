import React, { useContext, useState } from 'react';
import { Button, InputAdornment, TextField } from '@material-ui/core';
import styles from './PoolProposal.module.scss';
import { EndorfinContext } from '../store/store';


function PoolProposal() {
  const { state } = useContext(EndorfinContext);
  const { contract, wallet } = state;

  const onSubmit = async () => {
    console.log("23123");
    console.log(contract);
    console.log(wallet);
    await contract.methods.set(5).send({ from: wallet[0] });
  }

  return (
  <form className={styles.poolProposal} onSubmit={onSubmit}>
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
    <Button type="submit"><h3>제안하기 🐬</h3></Button>
  </form>
  )
}

export default PoolProposal;
