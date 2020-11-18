import React, { Component } from "react";
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';

import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import { MainPage, MyPage } from './pages';
import { Header, Navigation } from './components';

import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
        <Router>
          <Switch>
            <Route exact path="/main" component={MainPage}/>
            <Route exact path="/mypage" component={MyPage}/>
            <Redirect exact to="/main" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
