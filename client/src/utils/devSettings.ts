import $ from "jquery";

export const sampleRichAccount = '0x0a51251a0fB77F5c412375B0228C971482Cbc044';

export const chainLinkRichAddress = '0x98c63b7b319dfbdf3d811530f2ab9dfe4983af9d';

export const daiRichAddress = '0x2c1709205C0d97b192cc81027BAF179D403E724E';

const apikey = '';

export const getDaiInstance = async (web3: any) => new Promise ((resolve) => 
    $.getJSON(`https://api.etherscan.io/api?module=contract&action=getabi&address=0x6b175474e89094c44da98b954eedeac495271d0f&apikey=${apiKEy}`, async function (data: any) {
      const daiABI = JSON.parse(data.result);
      const daiAddress = '0x6b175474e89094c44da98b954eedeac495271d0f';
      console.log('ㅇㄴㅇ');
      const instance = await new web3.eth.Contract(daiABI, daiAddress);
      console.log(instance);
      resolve(instance);
    })
)

export const devAccCoinSetup = async (web3: any, daiInstance: any, sampleAddresses: any[]) => {
        for (const address of sampleAddresses) {
          await daiInstance.methods.transfer(address, web3.utils.toWei('10000', 'ether')).send({ from: daiRichAddress });
        }
        console.log(await daiInstance.methods.balanceOf(sampleAddresses[0]).call());
}

export const testAddress = ['0x3417BaDDFD276FC32edC8bf8cE5FddD472c12E8D', '0x295358803675b18681B831e42F9c5A3c6E828Da8', '0xe851E35748204f712C7d59dE224B3EE20D3Ce568'];
