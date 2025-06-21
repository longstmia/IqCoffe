const sovietMenu = {
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
            name: 'Superman',
            icon: 'latte',
            slug: 'supermancup',
            size: '600мл.',
            price: '109',
            desc: 'Кружка на 23 февраля',
          },
        ],
      },
    ],
  },
};

module.exports = sovietMenu;
