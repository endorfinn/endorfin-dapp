import React, { useContext, useEffect } from "react";
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';

import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import { MainPage, MyPage } from './pages';
import { Header } from './components';
import { EndorfinContext } from './store/store';

import "./App.css";
import PoolProgressPage from "./pages/PoolProgressPage";

function App() {
  const { dispatch } = useContext(EndorfinContext);

  const sethWeb3 = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // await window.ethereum.enable();
      const accounts = await window.ethereum.request({ method: 'eth_accounts' })

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      dispatch({type: "SET_WALLET", value: accounts});
      dispatch({type: "SET_CONTRACT", value: instance});

    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Web3 연결에 실패했습니다 😥 체인 연결 상태를 확인해주세요!`,
      );
      console.error(error);
    }
  }

  useEffect(() => {
    sethWeb3()
  });
  
  return (
      <div className="App">
          <Router>
            <Header />
            <Switch>
              <Route exact path="/main" component={MainPage}/>
              <Route exact path="/poolprogress" component={PoolProgressPage}/>
              <Route exact path="/mypage" component={MyPage}/>
              <Redirect exact to="/main" />
            </Switch>
          </Router>
      </div>
  );
}

export default App;
