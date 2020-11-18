import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './Navigation.module.scss';

function Navigation() {
  return (
    <section className={styles.navigation}>
      <NavLink 
        className={styles.tab}
        to="/main" 
        activeStyle={{
        fontWeight: "bold",
        color: "black",
        borderBottom: "2px solid black",
      }}>
        <i className="fas fa-newspaper fa-lg"></i>
        <span className={styles.tabName}>Pool Cards</span>
      </NavLink>
      <NavLink 
        className={styles.tab}
        to="/poolprogress" 
        activeStyle={{
        fontWeight: "bold",
        color: "black",
        borderBottom: "2px solid black"
      }}>
        <i className="fas fa-chart-bar fa-lg"></i>
        <span className={styles.tabName}>Pool Progress</span>
      </NavLink>
      <NavLink 
        className={styles.tab}
        to="/mypage" 
        activeStyle={{
        fontWeight: "bold",
        color: "black",
        borderBottom: "2px solid black"
      }}>
        <i className="far fa-address-card fa-lg"></i>
        <span className={styles.tabName}>My Pool</span>
      </NavLink>
    </section>
  )
}

export default Navigation;
