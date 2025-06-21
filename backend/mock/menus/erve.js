const erveMenu = {
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
            name: 'Флэт Блэк',
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

module.exports = erveMenu;
