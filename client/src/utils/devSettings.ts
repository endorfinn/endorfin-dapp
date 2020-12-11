import $ from "jquery";

export const chainLinkRichAddress = '0x98c63b7b319dfbdf3d811530f2ab9dfe4983af9d';
export const daiRichAddress = '0x66c57bF505A85A74609D2C83E94Aabb26d691E1F';
export const etherRichAddress = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';

const apiKey = '';

export const getDaiInstance = async (web3: any) => new Promise((resolve) =>
  $.getJSON(`https://api.etherscan.io/api?module=contract&action=getabi&address=0x6b175474e89094c44da98b954eedeac495271d0f&apikey=${apiKey}`, async function (data: any) {
    const daiABI = JSON.parse(data.result);
    const daiAddress = '0x6b175474e89094c44da98b954eedeac495271d0f';
    const instance = await new web3.eth.Contract(daiABI, daiAddress);
    resolve(instance);
  })
)

export const getChainLinkInstance = async (web3: any) => new Promise((resolve) =>
  $.getJSON(`https://api.etherscan.io/api?module=contract&action=getabi&address=0x514910771af9ca656af840dff83e8264ecf986ca&apikey=${apiKey}`, async function (data: any) {
    const chainLinkABI = JSON.parse(data.result);
    const chainLinkAddress = '0x514910771af9ca656af840dff83e8264ecf986ca';
    const instance = await new web3.eth.Contract(chainLinkABI, chainLinkAddress);
    resolve(instance);
  })
)

export const devAccCoinSetup = async (web3: any, daiInstance: any, chainLinkInstance: any, sampleAddresses: any[]) => {
  for (const address of sampleAddresses) {
    await daiInstance.methods.transfer(address, web3.utils.toWei('1000', 'ether')).send( { from: daiRichAddress });
    await chainLinkInstance.methods.transfer(address, web3.utils.toWei('1000', 'ether')).send({ from: chainLinkRichAddress });
    await web3.eth.sendTransaction({to: address, from: etherRichAddress, value: web3.utils.toWei("1000", "ether")})
  }
}

// let web3 = null;

// try {
//   const provider = new Web3.providers.HttpProvider(
//     "http://127.0.0.1:8545"
//   );
//   web3 = new Web3(provider);
//   } catch (error) {
//     console.error(error);
// }

// const daiInstance = awaitgetDaiInstance(web3);
// getChainLinkInstance(web3);
// devAccCoinSetup(web3, )


