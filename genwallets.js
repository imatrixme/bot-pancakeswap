'use strict';
import ethers from 'ethers';

// 生成钱包个数
let count = 1;

var wallets = [];
for (let i = 0; i < count; i++) {
  const element = wallets[i];
  let w_ = new ethers.Wallet.createRandom();
  wallets.push({
    地址: w_.address,
    公钥: w_.publicKey,
    私钥: w_.privateKey,
    助记词: w_.mnemonic.phrase,
  });
}
console.log(JSON.stringify(wallets));
