const novinMenu = {
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
            name: 'Новые Яйца Бенедикт',
            icon: 'breakfast',
            slug: 'egg',
            price: '1488',
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
            name: 'Новэссо',
            icon: 'coffee',
            slug: 'espresso',
            price: '109',
          },
          {
            name: 'Фильтр-новин',
            icon: 'coffee',
            slug: 'filter-coffee',
            price: '129',
          },
          {
            name: 'Америновиано',
            icon: 'coffee',
            slug: 'americano',
            price: '129',
          },
          {
            name: 'Капучино а-ля Новин',
            icon: 'coffee',
            slug: 'novincino',
            price: '129',
          },
          {
            name: 'Плоский Белый',
            icon: 'coffee',
            slug: 'ploskiybeliy',
            price: '129',
          },
          {
            name: 'Латте',
            icon: 'coffee',
            slug: 'latte',
            price: '229',
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
            name: 'Новенькая',
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
            name: 'Новиника',
            icon: 'beans',
            slug: 'novinika',
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

module.exports = novinMenu;
