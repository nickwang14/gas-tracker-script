const { createAlchemyWeb3 } = require("@alch/alchemy-web3");

// Using WebSockets
const web3 = createAlchemyWeb3(
    "wss://eth-mainnet.alchemyapi.io/v2/<--API KEY-->",
);