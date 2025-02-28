const oceanMenu = {
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
            name: 'Яйца Бенедикт',
            icon: 'breakfast',
            slug: 'egg',
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
            price: '449',
            desc: 'Кружка на 23 февраля',
          },
          {
            name: 'WonderWoman',
            icon: 'latte',
            slug: 'wondercup',
            size: '450 мл.',
            price: '449',
            desc: 'Отличный подарок для прекрасного пола и потолка',
          },
        ],
      },
    ],
  },
};

module.exports = oceanMenu;
