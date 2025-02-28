const parusMenu = {
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
            name: 'Два Яйца',
            icon: 'breakfast',
            slug: 'twoeggs',
            price: '222',
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
            name: 'Эспрессо',
            icon: 'coffee',
            slug: 'espresso',
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
            name: 'Флэт Уайт',
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
            name: 'Какао с невероятно большим количеством зефирок',
            icon: 'coffee',
            slug: 'cocoa',
            price: '159',
          },
        ],
      },
      {
        id: 2,
        name: 'Авторский кофе',
        items: [
          {
            name: 'Раф Парусный',
            icon: 'latte',
            slug: 'sail',
            price: '228',
          },
          {
            name: 'Раф Nate Higgers',
            icon: 'latte',
            slug: 'natehiggers',
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
            name: 'Барбекю',
            icon: 'food',
            slug: 'barbara',
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
            name: 'Арабика',
            icon: 'beans',
            slug: 'arabica',
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
};

module.exports = parusMenu;
