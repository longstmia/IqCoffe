const parus = require('./mock/shops/parus');
const kalinka = require('./mock/shops/kalinka');
const ocean = require('./mock/shops/ocean');
const soviet = require('./mock/shops/soviet');
const novin = require('./mock/shops/novin');
const erve = require('./mock/shops/erve');
const detailData = require('./mock/detailData');
const kalinkaMenu = require('./mock/menus/kalinka');
const oceanMenu = require('./mock/menus/ocean');
const sovietMenu = require('./mock/menus/soviet');
const parusMenu = require('./mock/menus/parus');
const novinMenu = require('./mock/menus/novin');
const erveMenu = require('./mock/menus/erve');

const shopsData = [kalinka, ocean, soviet, parus, novin, erve];

const shopsMenus = {
  kalinka: kalinkaMenu,
  ocean: oceanMenu,
  soviet: sovietMenu,
  parus: parusMenu,
  novin: novinMenu,
  erve: erveMenu,
};

const shopNames = {
  kalinka: 'kalinka',
  ocean: 'ocean',
  soviet: 'soviet',
  parus: 'parus',
  novin: 'novin',
  erve: 'erve',
};

module.exports = {
  shopsItems: shopsMenus,
  shopsData,
  detailData,
  shopNames,
};
