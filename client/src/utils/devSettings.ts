import $ from "jquery";

export const chainLinkRichAddress = '0x98c63b7b319dfbdf3d811530f2ab9dfe4983af9d';
export const daiRichAddress = '0x66c57bF505A85A74609D2C83E94Aabb26d691E1F';
export const etherRichAddress = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';

const apiKey = 'PA66H1YP2ZK9Z39T88ZBH6F992Z8II9ZAY';

export const getDaiInstance = async (web3: any) => new Promise((resolve) =>
  $.getJSON(`https://api-kovan.etherscan.io/api?module=contract&action=getabi&address=0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa&apikey=${apiKey}`, async function (data: any) {
    const daiABI = JSON.parse(data.result);
    const daiAddress = '0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa';
    const instance = await new web3.eth.Contract(daiABI, daiAddress);
    resolve(instance);
  })
);

export const getSNXInstance = async (web3: any) => new Promise((resolve) =>
  $.getJSON(`https://api-kovan.etherscan.io/api?module=contract&action=getabi&address=0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F&apikey=${apiKey}`, async function (data: any) {
    const snxABI = JSON.parse(data.result);
    const snxAddress = '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F';
    const instance = await new web3.eth.Contract(snxABI, snxAddress);
    resolve(instance);
  })
);

// TODO: chainlink 는 abi 호출이 안됨..
// export const getChainLinkInstance = async (web3: any) => new Promise((resolve) =>
//   $.getJSON(`https://api-kovan.etherscan.io/api?module=contract&action=getabi&address=0xa36085f69e2889c224210f603d836748e7dc0088&apikey=${apiKey}`, async function (data: any) {
//     const chainLinkABI = JSON.parse(data.result);
//     const chainLinkAddress = '0xa36085f69e2889c224210f603d836748e7dc0088';
//     const instance = await new web3.eth.Contract(chainLinkABI, chainLinkAddress);
//     resolve(instance);
//   })
// );

// export const devAccCoinSetup = async (web3: any, daiInstance: any, chainLinkInstance: any, sampleAddresses: any[]) => {
//   for (const address of sampleAddresses) {
//     await daiInstance.methods.transfer(address, web3.utils.toWei('1000', 'ether')).send( { from: daiRichAddress });
//     await chainLinkInstance.methods.transfer(address, web3.utils.toWei('1000', 'ether')).send({ from: chainLinkRichAddress });
//     await web3.eth.sendTransaction({to: address, from: etherRichAddress, value: web3.utils.toWei("1000", "ether")})
//   }
// }
