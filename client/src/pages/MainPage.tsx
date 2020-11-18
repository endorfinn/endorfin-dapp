import React from 'react';
import { PoolCardList } from '../components';
import styles from './MainPage.module.scss';
import './MainPage.module.scss';


function MainPage() {
  return (
    <main className={styles.main}>
      <section className={styles.leftSection}>
        <h2>마음에 드는 풀에 참여하세요 🐬</h2>
        <PoolCardList />
      </section>
      <section className={styles.rightSection}>
        <div className={styles.wallet}>
          <h3>My Wallet</h3>
        </div>
        <div className={styles.hotdeal}>
          <h3>마감 임박 🚨</h3>
        </div>
      </section>
    </main>
  )
}

export default MainPage;
