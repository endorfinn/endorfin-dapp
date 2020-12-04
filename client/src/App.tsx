import React, { useContext, useEffect } from "react";
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';

import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import { MainPage, MyPage } from './pages';
import { Header } from './components';
import { EndorfinContext } from './store/store';

import "./App.css";
import PoolProgressPage from "./pages/PoolProgressPage";
import { devAccCoinSetup, getChainLinkInstance, getDaiInstance, testAddress } from "./utils/devSettings";
import Web3 from "web3";

function App() {
  const { dispatch, state } = useContext(EndorfinContext);
  const { wallet, web3 } = state;

  const sethWeb3 = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      dispatch({ type: "SET_CONTRACT", value: instance });
      dispatch({ type: "SET_WEB3", value: web3 });

      const daiInstance = await getDaiInstance(web3);
      const chainLinkInstance = await getChainLinkInstance(web3);

      dispatch({ type: "SET_DAI_CONTRACT", value: daiInstance });
      dispatch({ type: "SET_CHAINLINK_CONTRACT", value: daiInstance });

      const testAccounts = ['0x51C2723B15DA7CD45F203BE1FF3becB140E6F5d2', '0x91b90c9f75B22226Af40E058764bf30d1364589d', '0x16145059BCBB5cAf287ee807a3c5371a10292208']
      await devAccCoinSetup(web3, daiInstance, chainLinkInstance, testAccounts);

    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Web3 연결에 실패했습니다 😥 체인 연결 상태를 확인해주세요!`,
      );
      console.error(error);
    }
  }

  const checkMetamaskConnected = async () => {
    if (window.ethereum) {
      const walletUnlocked = await window.ethereum._metamask.isUnlocked();
      if (walletUnlocked) {
        // TODO : 네트워크 local인 경우 체크
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setCurrentAccount(accounts)
      }
    }
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
          <Route exact path="/poolprogress" component={PoolProgressPage} />
          <Route exact path="/mypage" component={MyPage} />
          <Redirect exact to="/main" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
