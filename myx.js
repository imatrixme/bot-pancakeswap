'use strict';

import ethers from 'ethers';
import * as Mycoin from './mytool.js';

// 开启钱包
let mne_ = 'cloud miracle auction joy cabin curve foam ridge job pet demise melody';
let wallet = new ethers.Wallet.fromMnemonic(mne_);
let account = wallet.connect(Mycoin.BSCProvider.TEST);

// 查询余额
let b1 = await Mycoin.fetchBalance(
  '0x2033e9be9b9b71ea485ccb9f3877c373607ac62f', // 合约地址
  '0x6F91EfaC2424eeF0fA3c8dE4Cb51B85EEE44a992', // 持币地址
  account // 网络/钱包
);
console.log(b1);

// prod
// let mne_ = "coast unfair stable practice loyal assist shaft gravity charge kitchen vague senior armed envelope luggage donate hair garbage share rifle attitude cash barely bleak";
// let pkey_ = "0xe28613ea939da5d4be9990d501d796f6c38354fe226b055a8c0dfc46dbc9676f";

// test

// 通过助记词生成钱包
// let wallet = new ethers.Wallet.fromMnemonic(mne_);
// let account = wallet.connect(provide);

// 获取交易笔数
// let transcount = await account.getTransactionCount();
// console.log(transcount);

//
