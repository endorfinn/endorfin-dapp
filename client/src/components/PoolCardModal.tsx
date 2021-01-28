import { TextField, InputAdornment, Button } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';

import styles from './PoolCardModal.module.scss';

interface Props {
  isPool: boolean;
}

function PoolCardModal(props: Props) {

  const onSubmit = () => {
    window.location.reload();
  }

  return (
    <div className={styles.poolCardModal}>
      <h1>Pool 1</h1>
      <div className={styles.info}>
        <h5>Token</h5> <i className="fab fa-ethereum txt"></i> <i className="fab fa-ethereum txt"></i> <i className="fab fa-ethereum txt"></i>
      </div>
      <div className={styles.info}>
        <h5>전체</h5> <p style = {{marginLeft : "15px"}}>1</p> <p style = {{marginLeft : "12px"}}>2</p> <p style = {{marginLeft : "12px"}}>3</p>
      </div>
      <div className={styles.info}>
        <h5>현재</h5> <p style = {{marginLeft : "10px"}}>0.2</p> <p style = {{marginLeft : "3px"}}>0.4</p> <p style = {{marginLeft : "1px"}}>0.6</p>
      </div>
      <div className={styles.info}>
        <h5>참여 기간</h5> <p>6개월</p> <h5 style = {{marginLeft : "90px"}}>행사가격</h5> <p>5000 DAI</p>
      </div>
      <div className={styles.info}>
        <h5>모집 마감일</h5> <p>2020.12.05 (UTC)</p> <h5>프리미엄</h5> <p>2 DAI</p>
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
                    <i className="fab fa-ethereum"></i>

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
                    <i className="fab fa-ethereum"></i>

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
                    <i className="fab fa-ethereum"></i>

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
                    <p> Dai</p>
                  </InputAdornment>
                ),
              }}
            />
            <h3>참여 가능금액 : 20000 Dai</h3>
          </div>
          <div className={styles.info}>
            <h3>받게 될 프리미엄 : 10 DAI / 개월</h3>
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
