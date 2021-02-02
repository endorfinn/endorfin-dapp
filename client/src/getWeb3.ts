import Web3 from "web3";
import './utils/env';

const getWeb3 = () =>
  new Promise((resolve, reject) => {
    window.addEventListener("load", async () => {
      const provider = new Web3.providers.HttpProvider(
          process.env.REACT_APP_WEB3_HTTP_PROVIDER_URI!
      );
      const web3 = new Web3(provider);
        resolve(web3);
    });
  });

export default getWeb3;
