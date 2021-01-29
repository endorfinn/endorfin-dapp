import { TextField, InputAdornment, Button } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';

import styles from './CoinSelectModal.module.scss';

interface Props {
  
}

function CoinSelectModal(props: Props) {

  const onSubmit = () => {
    window.location.reload();
  }

  return (
    <form className={styles.coinSelect}>
      <h1>Your Coin List</h1>
      <div className={styles.pickheader}></div> 
      <div className={styles.coinlistwrapper}></div>



    </form>
    )
}

export default CoinSelectModal;
