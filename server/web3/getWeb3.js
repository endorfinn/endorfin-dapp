const Web3 = require("web3");
const dotenv = require('dotenv');

dotenv.config({ silent: true });

const getWeb3 = () => {
    return new Promise((resolve, reject) => {
        try {
            const provider = new Web3.providers.HttpProvider(
                process.env.WEB3_HTTP_PROVIDER_URI
            );
            const web3 = new Web3(provider);
            resolve(web3);
        } catch (err) {
            console.error(err)
            reject(err);
        }
    })
}

exports.getWeb3 = getWeb3;
