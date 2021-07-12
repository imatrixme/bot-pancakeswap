'use strict';

import fs from 'fs';
import path from 'path';
import ejs from 'ejs';

const __dirname = path.resolve();
const pancake_dev_v2 = '0xD99D1c33F9fC3444f8101754aBC46c52416550D1';
const pancake_dis_v2 = '0x10ED43C718714eb63d5aA57B78B54704E256024E';

var genSol = (symbol) => {
  const jsonPath = __dirname + '/onekey/configs/' + symbol + '.json';
  const json = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
  const template = __dirname + '/onekey/template/fullTemplate.ejs';
  const outFile = __dirname + '/onekey/sols/' + json.symbol + '.sol';
  json.pancakeSwapRouterV2 = json.dev ? pancake_dev_v2 : pancake_dis_v2;
  json.charitySwapMinimum = (json.Liquidity / 2000) * 10000;
  json.liquidityFee4Charity = (json.liquidityFee * json.charityPercentageOfLiquidity) / 100;
  json.liquidityFee4Liquid = json.liquidityFee - json.liquidityFee4Charity;

  // 默认配置
  if (json.burnAddress === undefined) {
    json.burnAddress = '0x0000000000000000000000000000000000000000';
  }
  if (json.maliciousThreshold === undefined) {
    json.maliciousThreshold = 0;
  }
  if (json.rewardThreshold === undefined) {
    json.rewardThreshold = 0;
  }
  if (json.maxSell === undefined) {
    json.maxSell = 0;
  }
  if (json.maxBuy === undefined) {
    json.maxBuy = 0;
  }

  console.log('>>>> 配置如下\n', json);

  ejs.renderFile(template, json, (err, str) => {
    if (err) {
      console.log(err);
      return;
    }

    fs.writeFile(outFile, str, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('>>>>>>> 文件写入成功 >>>>> 查看文件 ./onekey/sols/' + json.symbol + '.sol');
    });
  });
};

export { genSol };
