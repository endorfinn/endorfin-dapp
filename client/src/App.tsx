import React, { useContext, useEffect } from "react";
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import $ from "jquery";

import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import { MainPage, MyPage } from './pages';
import { Header } from './components';
import { EndorfinContext } from './store/store';

import "./App.css";
import PoolProgressPage from "./pages/PoolProgressPage";

function App() {
  const { dispatch, state } = useContext(EndorfinContext);
  const { wallet } = state;

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

      dispatch({ type: "SET_WALLET", value: accounts });
      dispatch({ type: "SET_CONTRACT", value: instance });
      dispatch({ type: "SET_WEB3", value: web3 });


      $.getJSON('https://api.etherscan.io/api?module=contract&action=getabi&address=0x6b175474e89094c44da98b954eedeac495271d0f&apikey=PA66H1YP2ZK9Z39T88ZBH6F992Z8II9ZAY', async function (data: any) {
        const daiABI = JSON.parse(data.result);

        const daiAddress = '0x6b175474e89094c44da98b954eedeac495271d0f';
        const daiInstance = await new web3.eth.Contract(daiABI, daiAddress);

        await dispatch({ type: "SET_DAI_CONTRACT", value: daiInstance });

        const richAdd = '0x16225a26b5d370Cb0A830896ad365FcFcF2Bf6de';
        const poorAdd = '0x0a51251a0fB77F5c412375B0228C971482Cbc044';

        const daiBalances = await daiInstance.methods.balanceOf(richAdd).call();
        // const poorBalances = await daiInstance.methods.balanceOf(poorAdd).call();

        console.log("밑에 부자 다이 밸런스");
        console.log(daiBalances);

        const poor2 = await daiInstance.methods.balanceOf(poorAdd).call();


        console.log(poor2);
        console.log("위에 다이 못받은 푸어");

        const etherBalances = await web3.eth.getBalance(richAdd);
        console.log("밑에 푸어");
        console.log(etherBalances);

        // await web3.eth.sendTransaction({ from: accounts[0], to: richAdd, value: 1199579160000000000});

        await daiInstance.methods.transfer(poorAdd, 1000).send({ from: richAdd });
        console.log("밑에 에러");

        const poor = await daiInstance.methods.balanceOf(poorAdd).call();


        console.log(poor);
        console.log("위에 다이 받은 푸어");

        // const poorDaiBalnaces = await daiInstance.methods.balanceOf(poorAdd).call();

        // console.log("밑에ㅣㅌ에");
        // console.log(poorDaiBalnaces);


      });


      // const res: Response  = await fetch('https://api.etherscan.io/api?module=contract&action=getabi&address=0x6b175474e89094c44da98b954eedeac495271d0f&apikey=PA66H1YP2ZK9Z39T88ZBH6F992Z8II9ZAY');
      // const data = await res.json();
      // const abi: object = JSON.parse(data.result);
      // const daiInstance = new web3.eth.Contract(abi, daiAddress);

      // console.log(abi);
      // console.log("위에위에");
      // dispatch({type: "SET_DAI_CONTRACT", value: daiInstance});

    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Web3 연결에 실패했습니다 😥 체인 연결 상태를 확인해주세요!`,
      );
      console.error(error);
    }
  }

  const getDaiAbi = async () => {
    // const web3 = await getWeb3();

    // const res: Response  = await fetch('https://api.etherscan.io/api?module=contract&action=getabi&address=0x6b175474e89094c44da98b954eedeac495271d0f&apikey=PA66H1YP2ZK9Z39T88ZBH6F992Z8II9ZAY');
    // const data = await res.json();
    // const abi = JSON.parse(data.result);
    // var MyContract = new web3.eth.contract(abi);
    // console.log(MyContract);
    // console.log("패치 다이 에이비아이");
  }

  useEffect(() => {
    sethWeb3();
    getDaiAbi();
  }, [wallet]);

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
