import { TextField, InputAdornment, Button } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { Pool } from '../utils';
import styles from './PoolCardModal.module.scss';
interface Props {
  isPool: boolean;
  pool: Pool;
}
function PoolCardModal(props: Props) {
  const onSubmit = () => {
    window.location.reload();
    window.scrollTo(0, 0);
  }
  return (
    <div className={styles.poolCardModal}>
      <h1>{props.pool.name}</h1>
      <div className={styles.info}>
        <h5>Token</h5> <img className={styles.etherImage} /><img className={styles.daiImage} /><img className={styles.linkImage} />
      </div>
      <div className={styles.info}>
        <h5>전체</h5> <p style = {{marginLeft : "15px"}}>1</p> <p style = {{marginLeft : "8px"}}>2</p> <p style = {{marginLeft : "12px"}}>3</p>
      </div>
      {props.isPool && 
      <div className={styles.info}>
        <h5>현재</h5> <p style = {{marginLeft : "15px"}}>0</p> <p style = {{marginLeft : "8px"}}>0</p> <p style = {{marginLeft : "12px"}}>0</p>
      </div>
}
      <div className={styles.info}>
        <h5>참여 기간</h5> <p>1개월</p> <h5 style = {{marginLeft : "90px"}}>행사가격</h5> <p>400 DAI</p>
      </div>
      <div className={styles.info}>
        <h5>모집 마감일</h5> <p>2020.12.13 (UTC)</p> <h5>프리미엄</h5> <p>10 DAI</p>
      </div>
      { props.isPool ?
        <>
          <div className={styles.info}>
            <h5>토큰 입력</h5>
          </div>
          <div>
            <TextField
              className={styles.textfield}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img className={styles.etherImage} />
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
                    <img className={styles.daiImage} />
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
                    <img className={styles.linkImage} />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </>
        :
        <>
          <div className={styles.info}>
            <h5>옵션 금액 입력</h5>
          </div>
          <div className={styles.info}>
            <TextField
              className={styles.textfield}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="end">
                    <p>DAI</p>
                  </InputAdornment>
                ),
              }}
            />
            <h3>참여 가능금액 : 400 DAI</h3>
          </div>
          <div className={styles.info}>
            <h3>받게 될 프리미엄 : 10 DAI / 10일</h3>
          </div>
        </>
      }
      <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button onClick={onSubmit} style={{ color: 'blue' }}><h2>참여</h2></Button>
            <Button onClick={onSubmit}><h2>다음에</h2></Button>
          </div>
    </div>
  )
}
export default PoolCardModal;
