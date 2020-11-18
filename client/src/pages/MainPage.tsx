import React from 'react';
import { PoolCardList } from '../components';
import styles from './MainPage.module.scss';
import './MainPage.module.scss';


function MainPage() {
  return (
    <>
      <main className={styles.main}>Main Page</main>
      <PoolCardList />
    </>
  )
}

export default MainPage;
