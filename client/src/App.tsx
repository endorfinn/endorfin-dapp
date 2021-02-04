import React, { useContext, useEffect } from "react";
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import getWeb3 from "./getWeb3";
import { MainPage, MyPage } from './pages';
import { Header } from './components';
import { EndorfinContext } from './store/store';
import "./App.css";
import Web3 from "web3";

import {address as oracleAddress, abi as oracleABI} from './utils/oracleContract'

function App() {
  const { dispatch, state } = useContext(EndorfinContext);

  const sethWeb3 = async () => {
    try {
      // TODO: 메인넷 / 테스트넷 / 로컬 가나슈 일 때 설정 분기하기
      const web3 = await getWeb3();
      const oracleInstance = await new web3.eth.Contract(oracleABI, oracleAddress);
  
      dispatch({ type: "SET_WEB3", value: web3 });
      dispatch({ type: "SET_ORACLE_CONTRACT", value: oracleInstance})

    } catch (error) {
      alert(
        `Web3 연결에 연결에 실패했습니다 😥 나중에 에러 처리 잘 하세요!`,
      );
      console.error(error);
    }
  }

  const checkMetamaskConnected = async () => {
    if (window.ethereum) {
      const walletUnlocked = await window.ethereum._metamask.isUnlocked();
      if (walletUnlocked) {
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setCurrentAccount(accounts);
      }
    }
  }

  const makePoolFactoryInstance = async (web3: any, abi: any, address: string) => {
    return await new web3.eth.Contract(abi, address);
  }

  const setCurrentAccount = async (accounts: string[]) => {
    dispatch({ type: "SET_WALLET", value: accounts });
  }

  useEffect(() => {
    sethWeb3();
    checkMetamaskConnected();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/main" component={MainPage} />
          <Route exact path="/mypage" component={MyPage} />
          <Redirect exact to="/main" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
