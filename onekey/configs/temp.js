export default {
  dev: true, // 是否开发环境，该值影响到PCSRouter的地址,
  name: 'DiDiDa Coin', // 币的全称
  symbol: 'DIDIDA', // 币的缩写
  decimals: 8, // 小数点位数
  total: 1000000, // 总供应量，单位：亿
  Liquidity: 500000, // 提供到流动性的币量，单位: 亿；该数值同时也决定了自动兑换成BNB至慈善钱包的值
  taxFee: 4, // 每次交易抽取多少手续费，该手续费将作为奖励给所有持币人
  liquidityFee: 6, // 流动性费用
  charityPercentageOfLiquidity: 50, // 流动性费用中有多少百分比用于提取到慈善基金，直接兑成BNB
  maliciousThreshold: 0, // 初始恶意交易者卖出阈值，卖出次数超过该值则被判定为恶意交易者, 等于0时或不配置时，不受控制
  rewardThreshold: 0, // 初始分红剥夺卖出次数限制, 等于0时或不配置时，不受控制
  maxSell: 0, // 最大卖出值，单位：1, 等于0时或不配置时，不受控制
  maxBuy: 0, // 最大买入值, 单位：亿, 等于0时或不配置时，不受控制
  burnAddress: '0x0000000000000000000000000000000000000000', // 燃烧地址
};
