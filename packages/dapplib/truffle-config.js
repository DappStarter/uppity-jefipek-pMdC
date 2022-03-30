require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install logic bottom trophy name release night snake idea clip slot gift'; 
let testAccounts = [
"0x68fe7be1cc7b0963d8d8bbc669e41ae7ae22b6bcb700e1904e6c36255ae9c419",
"0xe875b525e42074eee22fc1346b6e74776f2338cfbe12b268f855738caa4901e1",
"0xb51298f359cfe9b0fda97406c6da9770a210919252d0fece1ca42350382846b0",
"0xcd343c666bd92f358e73a752f7989d7515d710443965a48e086b7c6d5992800c",
"0x9438abb9a9b0a37a412905e44e220cb4f56a6332d01c75d8bfd023bc6f50a7fe",
"0x3994556052f92b6d78c4330ee061a4da3bf7097c5f55b088703e21d8328ba20c",
"0xd862a3e9b3ab1e5dcd22537c255eb6ff13e1167ace14394d805106b260fc6beb",
"0x672f63cca706ecf68668caf99431209953a0b60a131b7869c93d60c351d6e65a",
"0xbecb59b67a57f0363be93a18fb1a2fd49831e2663ddf686e638cf5a55bd5e78c",
"0xb7e4cc913451f426daeea8de982ff201b43855a400ea66dbb7fb46f06af48e23"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


