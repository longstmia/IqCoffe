const catalogExample = {
  name: 'IQCoffe Калинка',
  slug: 'kalinka',
  address: 'Республики 65',
  mode: {
    weekday: {
      start: '08:00',
      end: '12:00',
    },
    free: {
      start: '10:00',
      end: '22:00',
    },
  },
  stylebook: {
    mainColor: '#14AD99',
    secondColor: '#242424',
    opacity: '0.07',
    pattern: 'diamonds',
  },
  categories: [
    {
      id: 1,
      category: 'breakfast',
      icon: 'breakfast',
      name: 'Завтраки',
    },
    {
      id: 2,
      category: 'drinks',
      icon: 'drinks',
      name: 'Напитки',
    },
    {
      id: 3,
      category: 'food',
      icon: 'food',
      name: 'Еда',
    },
    {
      id: 4,
      category: 'beans',
      icon: 'beans',
      name: 'Зерно',
    },
    {
      id: 5,
      category: 'accessories',
      icon: 'accessories',
      name: 'Аксессуары',
    },
  ],
  photos: [
    {
      id: 1,
      alt: 'Фото заведения',
      src: 'https://mayertrade.com.ua/img/cms/BLOGS/264-creatively-designed-cafes/creatively-designed-cafes_5.jpg',
    },
    {
      id: 2,
      alt: 'Фото заведения',
      src: '',
    },
    {
      id: 3,
      alt: 'Фото заведения',
      src: 'https://maralin.ru/img/catalog_covers/4398-16432099690.jpg',
    },
    {
      id: 4,
      alt: 'Фото заведения',
      src: 'https://mayertrade.com.ua/img/cms/BLOGS/264-creatively-designed-cafes/creatively-designed-cafes_23.jpg',
    },
  ],
};

const menuExample = {
  breakfast: {
    id: 1,
    category: 'breakfast',
    icon: 'breakfast',
    name: 'Завтраки',
    lists: [
      {
        id: 1,
        name: 'Яйца',
        items: [
          {
            name: 'Яйца Эрвье',
            icon: 'breakfast',
            slug: 'erveggs',
            price: '1890',
          },
        ],
      },
    ],
  },
  drinks: {
    id: 2,
    category: 'drinks',
    icon: 'drinks',
    name: 'Напитки',
    lists: [
      {
        id: 1,
        name: 'Кофе',
        items: [
          {
            name: 'Эрвьессо',
            icon: 'coffee',
            slug: 'ervesso',
            price: '109',
          },
          {
            name: 'Фильтр-кофе',
            icon: 'coffee',
            slug: 'filter-coffee',
            price: '129',
          },
          {
            name: 'Американо',
            icon: 'coffee',
            slug: 'americano',
            price: '129',
          },
          {
            name: 'Капучино',
            icon: 'coffee',
            slug: 'cappuccino',
            price: '129',
          },
          {
            name: 'Плоский Белый',
            icon: 'coffee',
            slug: 'flat-white',
            price: '129',
          },
          {
            name: 'Латте',
            icon: 'coffee',
            slug: 'latte',
            price: '129',
          },
          {
            name: 'Матча Латте',
            icon: 'coffee',
            slug: 'matcha-latte',
            price: '259',
          },
          {
            name: 'Какао с эрвьинками',
            icon: 'coffee',
            slug: 'ervecocoa',
            price: '159',
          },
        ],
      },
      {
        id: 2,
        name: 'Авторский кофе',
        items: [
          {
            name: 'Раф Ванильный ну очень ванильный',
            icon: 'latte',
            slug: 'rafael',
            price: '109',
          },
          {
            name: 'Раф Сникерс',
            icon: 'latte',
            slug: 'snickers',
            price: '109',
          },
        ],
      },
    ],
  },
  food: {
    id: 3,
    category: 'food',
    icon: 'food',
    name: 'Еда',
    lists: [
      {
        id: 1,
        name: 'Пицца',
        items: [
          {
            name: 'Пицца с кусками эрвье',
            icon: 'food',
            slug: 'ervizza',
            price: '690',
          },
        ],
      },
    ],
  },
  beans: {
    id: 4,
    category: 'beans',
    icon: 'beans',
    name: 'Зерновой кофе',
    lists: [
      {
        id: 1,
        name: 'Бразилия',
        items: [
          {
            name: 'Эрвьика',
            icon: 'beans',
            slug: 'ervika',
            size: '650 гр.',
            price: '1090',
          },
          {
            name: 'Робуста',
            icon: 'beans',
            slug: 'robusta',
            size: '450 гр.',
            price: '1290',
          },
        ],
      },
    ],
  },
  accessories: {
    id: 5,
    category: 'accessories',
    icon: 'accessories',
    name: 'Аксессуары',
    lists: [
      {
        id: 1,
        name: 'Кружки',
        items: [
          {
            name: 'Я <З Рауля Эрвье',
            icon: 'latte',
            slug: 'ervecup',
            size: '450 мл.',
            price: '449',
            desc: 'Для настоящих фанатов',
          },
        ],
      },
    ],
  },
};

const itemExample = {
  name: 'Капучино',
  icon: 'coffee',
  slug: 'cappuccino',
  size: '350 мл.',
  price: '129',
  image: '/assets/images/cappuccino.png',
  info: {
    desc: 'Идеально сбалансированный кофейный напиток, для тех кто ценит классику и постоянство. Готовится на двух эспрессо с долей молока 80%',
  },
  modifications: {
    addons: [
      {
        name: 'Сливки',
        price: '20',
      },
      {
        name: 'Кокосовое молоко',
        price: '30',
      },
    ],
    options: [
      {
        name: 'Без опций',
        price: '0',
      },
      {
        name: 'Меньше сахара',
        price: '0',
      },
      {
        name: 'Больше сахара',
        price: '20',
      },
    ],
  },
  nutritionalValue: [
    {
      name: 'эц',
      unit: 'Ккал',
      value: 303,
    },
    {
      name: 'Белки',
      unit: 'г',
      value: 23,
    },
    {
      name: 'Жиры',
      unit: 'г',
      value: 17,
    },
    {
      name: 'Углеводы',
      unit: 'г',
      value: 38,
    },
  ],
};

const promoExample = [
  {
    name: 'Капучино а-ля Новин',
    icon: 'coffee',
    slug: 'novincino',
    price: '129',
  },
  {
    name: 'Новиника',
    icon: 'beans',
    slug: 'novinika',
    size: '450 гр.',
    price: '1290',
  },
  {
    name: 'Superman',
    icon: 'latte',
    slug: 'supermancup',
    size: '600мл.',
    price: '109',
    desc: 'Кружка на 23 февраля',
  },
];

const userExample = {
  name: 'Сусанна Аксакова',
  avatar: '003-superhero',
};

const swagger = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for IQCoffe',
    version: '1.0.0',
    description: 'The REST API for IQCoffe shops',
  },
  servers: [
    {
      url: 'http://localhost:3001',
      description: 'Development server',
    },
  ],
  paths: {
    '/api/shops': {
      get: {
        tags: ['catalog'],
        summary: 'Get shops list',
        description: 'Returns array of coffe shops',
        responses: {
          200: {
            description: 'A list of coffee-shops.',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  example: [catalogExample],
                },
              },
            },
          },
        },
      },
    },
    '/api/catalog/{shop}': {
      get: {
        tags: ['catalog'],
        summary: 'Get coffeshops menu',
        description: 'Returns object with products in shop',
        parameters: [
          {
            name: 'shop',
            in: 'path',
            description: 'name of shop',
            required: true,
            schema: {
              type: 'string',
            },
            style: 'simple',
          },
        ],
        responses: {
          200: {
            description: 'A list of categories menu, lists and product-items.',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  example: [menuExample],
                },
              },
            },
          },
        },
      },
    },
    '/api/catalog/{shop}/{item}': {
      get: {
        tags: ['catalog'],
        summary: 'Get detail card of product',
        description: 'Returns object with information of product',
        parameters: [
          {
            name: 'shop',
            in: 'path',
            description: 'name of store',
            required: true,
            schema: {
              type: 'string',
            },
            style: 'simple',
          },
          {
            name: 'item',
            in: 'path',
            description: 'name of product',
            required: true,
            schema: {
              type: 'string',
            },
            style: 'simple',
          },
        ],
        responses: {
          200: {
            description: 'Detail data of product-item, store, promo-products',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  example: itemExample,
                },
              },
            },
          },
        },
      },
    },
    '/api/catalog/promo': {
      post: {
        tags: ['catalog'],
        summary: 'Get 0 to 3 promo products',
        description: 'Returns array of products',
        consumes: ['application/json;charset=UTF-8'],
        produces: ['application/json'],
        requestBody: {
          description: 'Shop slug and item slug',
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/definitions/promo' },
            },
          },
        },
        responses: {
          200: {
            description: 'Array of promo-products',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  example: promoExample,
                },
              },
            },
          },
        },
      },
    },
    '/api/payment': {
      post: {
        tags: ['payment'],
        summary: 'Order payment',
        description: 'Returns object described in example',
        consumes: ['application/json;charset=UTF-8'],
        produces: ['application/json'],
        requestBody: {
          description: 'Shop slug and item slug',
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/definitions/payment' },
            },
          },
        },
        responses: {
          200: {
            description: 'Successful operation',
          },
          418: {
            description:
              'В ответе при "shop: ocean" всегда будет приходить 418-я ошибка',
          },
        },
      },
    },
    '/api/getUser': {
      get: {
        tags: ['user'],
        summary: 'Get user data',
        description: 'Returns user object',
        responses: {
          200: {
            description: 'User',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  example: userExample,
                },
              },
            },
          },
        },
      },
    },
  },
  desc: {
    asd: {},
  },
  definitions: {
    promo: {
      type: 'object',
      required: ['shop', 'currentItem'],
      properties: {
        shop: {
          type: 'string',
          example: 'kalinka',
        },
        currentItem: {
          type: 'string',
          example: 'espresso',
        },
      },
    },
    payment: {
      type: 'object',
      required: ['shop', 'currentItem'],
      properties: {
        shop: {
          type: 'string',
          example: 'kalinka',
        },
        time: {
          type: 'number',
          example: '15',
        },
        basket: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              slug: {
                type: 'string',
                example: 'latte',
              },
              count: {
                type: 'number',
                example: 1,
              },
            },
          },
        },
      },
    },
  },
};

module.exports = swagger;
