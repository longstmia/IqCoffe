const soviet = {
  name: 'Советская',
  slug: 'soviet',
  address: 'Советская 51 к.3',
  mode: {
    weekday: {
      start: '12:00',
      end: '16:00',
    },
    free: {
      start: '10:00',
      end: '22:00',
    },
  },
  stylebook: {
    mainColor: '#A36EBE',
    secondColor: '#B1D465',
    opacity: '0.18',
    pattern: 'clouds',
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
      src: 'https://mayertrade.com.ua/img/cms/BLOGS/264-creatively-designed-cafes/creatively-designed-cafes_27.jpg',
    },
  ],
};

module.exports = soviet;
