import React, { useContext, useEffect } from "react";
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Web3 from "web3";
import getWeb3 from "./getWeb3";
import { MainPage, MyPage } from './pages';
import { Header } from './components';
import { EndorfinContext } from './store/store';
import { abi as poolFactoryContractAbi, address as poolFactoryContractAddress } from './customContracts/poolPropasalFactoryContract';
import "./App.css";
import { getDaiInstance, getSNXInstance } from './utils/devSettings';
import {address as oracleAddress, abi as oracleABI} from './utils/oracleContract'

function App() {
  const { dispatch, state } = useContext(EndorfinContext);

  const sethWeb3 = async () => {
    try {
      // TODO: 메인넷 / 테스트넷 / 로컬 가나슈 일 때 설정 분기하기
      const web3 = await getWeb3();
      const poolFactoryInstance = await makePoolFactoryInstance(web3, poolFactoryContractAbi, poolFactoryContractAddress );
      const oracleInstance = await new web3.eth.Contract(oracleABI, oracleAddress);
  
      dispatch({ type: "SET_POOLFACTORY_CONTRACT", value: poolFactoryInstance });
      dispatch({ type: "SET_WEB3", value: web3 });
      dispatch({ type: "SET_ORACLE_CONTRACT", value: oracleInstance})

      const daiInstance = await getDaiInstance(web3);
      const snxInstance = await getSNXInstance(web3);       
      dispatch({ type: "SET_DAI_CONTRACT", value: daiInstance });
      dispatch({ type: "SET_SNX_CONTRACT", value: snxInstance });

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
