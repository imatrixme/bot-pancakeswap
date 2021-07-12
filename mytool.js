import ethers from 'ethers';
/**
 * 获取BSC网络
 */
const BSCProvider = {
  TEST: new ethers.providers.JsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545/'),
  PROD: new ethers.providers.JsonRpcProvider('https://bsc-dataseed.binance.org/'),
};

/**
 * 快速获取钱包中某种币的余额
 * @param {*} contract 合约地址
 * @param {*} address 持币地址
 * @param {*} provide 网络或钱包实例
 * @param {*} fullmode 全信息模式，将返回币种的名称简称发行量等信息
 * @returns MAP信息
 */
const fetchBalance = async function (contract, address, provide, fullmode = false) {
  let precontract = new ethers.Contract(
    contract,
    [
      {
        constant: true,
        inputs: [{ name: '_owner', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ name: 'balance', type: 'uint256' }],
        payable: false,
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'decimals',
        outputs: [{ name: 'decimals', type: 'uint8' }],
        payable: false,
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'totalSupply',
        outputs: [{ name: 'totalSupply', type: 'uint256' }],
        payable: false,
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'symbol',
        outputs: [{ name: 'symbol', type: 'string' }],
        payable: false,
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'name',
        outputs: [{ name: 'name', type: 'string' }],
        payable: false,
        type: 'function',
      },
    ],
    provide
  );

  let decimal_ = await precontract.decimals();
  let balance_ = await precontract.balanceOf(address);

  let finalrst = {};
  if (fullmode) {
    let symbol_ = await precontract.symbol();
    let name_ = await precontract.name();
    let total_ = await precontract.totalSupply();
    finalrst = {
      decimals: decimal_,
      balance: parseFloat(result),
      symbol: symbol_,
      name: name_,
      totalSupply: parseFloat(ethers.BigNumber.from(total_).div(Math.pow(10, decimal_))).toString(),
    };
  } else {
    finalrst = {
      decimals: decimal_,
      balance: parseFloat(ethers.BigNumber.from(balance_).div(Math.pow(10, decimal_)).toString()),
    };
  }
  return finalrst;
};

export { BSCProvider, fetchBalance };
