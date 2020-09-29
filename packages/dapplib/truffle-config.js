require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remain solid idea clinic obscure gas'; 
let testAccounts = [
"0xd8db299074f75b66ad5782954b477a3f0295c7686f0dd238e742cd7e0de6b5c2",
"0x0c33956c5708253992fc4e649eeb9f17e42c0a8e06d5e6245137fac88da9428c",
"0x67a405d289a9cac1f9442dd61aea1443750e838cd3cfff17e211c45c9f24fffa",
"0xb707a20247e2380d09218a80f4683a5afc8c2b56082aab17049c1692ee551138",
"0xb1c6beb28f6df65f97e4efe3d8a5f88d3794fb330d3c79b9819510869a9f7062",
"0x2c655e23d7458a5aa568cf4649fb422b897bee1ed18407988038875789113701",
"0x620eabb7899fcab8b6e961e1dca7b78e0be5352c652f19e03e446f5e951f2a9f",
"0x02bc240388fc6a6801ace8e47d116495b416b5154283e0090f2528aed3a725ad",
"0x85ac46a10955214b825798df46890c23bb0aa88b8a189b12b53b7f0b2e6c2fef",
"0x034b3a09bf4ad61916acc29a2befa422c1f7c1814e12229cabe298afd8943a6c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
