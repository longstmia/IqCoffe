const swagger = require('./openapi');
const express = require('express');

const app = express();
const cors = require('cors');
const sampleSize = require('lodash.samplesize');

const swaggerUI = require('swagger-ui-express');
const { shopsData, shopsItems, detailData, shopNames } = require('./data');
const names = require('./mock/names');
const avatars = require('./mock/avatars');

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swagger));

const PORT = 3001;
app.use(cors());
app.use(express.json());
// app.use()

const getRandomInt = (max) => Math.floor(Math.random() * max);
const findShopBySlug = (slug) => shopsData.find((item) => item.slug === slug);

// catalog
app.get('/api/shops/', (req, res) => {
  if (!shopsData) {
    return res.status(500).send(`Shop list is not found`);
  }
  res.send(shopsData);
});

app.get('/api/catalog/', (req, res) => {
  res.status(400).send(`Maybe you forgot a shop slug?`);
});

app.get('/api/catalog/:shop', (req, res) => {
  const { shop: shopName } = req.params;
  const shop = findShopBySlug(shopName);

  if (!shop) {
    return res.status(404).send(`Shop with name "${shopName}" is not found`);
  }
  const products = shopsItems[shopName];
  if (!products) {
    return res.status(404).send(`Shop with name "${shopName}" is not found`);
  }
  res.send({
    categories: products,
    shop,
  });
});

app.get('/api/catalog/:shop/:item', (req, res) => {
  const { item, shop: shopName } = req.params;
  const shop = findShopBySlug(shopName);
  if (!shop) {
    return res.status(404).send(`Shop with name "${shopName}" is not found`);
  }
  if (!(item in detailData)) {
    return res.status(404).send(`Product with name "${item}" is not found`);
  }
  const product = { ...detailData[item] };

  if (shopName === shopNames.novin && item === 'latte') {
    product.price = '229';
  }

  res.send({
    product,
    shop,
  });
});

app.post('/api/catalog/promo', (req, res) => {
  const { shop: shopName, currentItem } = req.body;

  if (!shopName || !currentItem) {
    return res
      .status(404)
      .send(`Parameters shop and/or currentItem are missing in request body`);
  }
  const shop = findShopBySlug(shopName);
  if (!shop) {
    return res.status(404).send(`Shop with name "${shopName}" is not found`);
  }
  let list = [];
  Object.entries(shopsItems[shopName]).forEach(([_, item]) =>
    item.lists.forEach((el) =>
      el.items.forEach(
        (element) => element.slug !== currentItem && list.push(element),
      ),
    ),
  );
  const promo = sampleSize(list, getRandomInt(4));

  res.json(promo);
});

// payment
app.post('/api/payment', (req, res) => {
  const { shop, basket, time } = req.body;

  if (!basket?.length) {
    return res.status(400).send(`Basket is empty`);
  }

  const localShop = findShopBySlug(shop);
  if (!localShop) {
    return res.status(404).send(`Shop with name "${shop}" is not found`);
  }

  const id = new Date().getTime();
  const orderTime = +time + +(Math.floor(Math.random() * 4) || 1);

  if (shop === shopNames.ocean) {
    return res.status(418).send('Internal server error ¯\\_(ツ)_/¯');
  }

  setTimeout(
    () =>
      res.json({
        success: true,
        orderId: id,
        time: orderTime,
      }),
    3000,
  );
});

// user
app.get('/api/getUser/', (req, res) => {
  const name = names[Math.floor(Math.random() * names.length)];
  const avatar = avatars[Math.floor(Math.random() * avatars.length)];

  res.send({
    name,
    avatar,
  });
});

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server app listening at http://localhost:${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};
start();
