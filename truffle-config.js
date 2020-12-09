const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      host: '127.0.0.1',
      network_id: '1',
      port: 8545
    }
  },
	compilers: {
    solc: {
      version: "0.7.3", // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
};
