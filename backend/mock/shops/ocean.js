const ocean = {
  name: 'Океан',
  slug: 'ocean',
  address: 'Республики 42',
  mode: {
    weekday: {
      start: '10:00',
      end: '14:00',
    },
    free: {
      start: '10:00',
      end: '22:00',
    },
  },
  stylebook: {
    mainColor: '#5DD1B7',
    secondColor: '#F3B6D1',
    opacity: '0.32',
    pattern: 'leaves',
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
      src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500',
    },
    {
      id: 2,
      alt: 'Фото заведения',
      src: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=500',
    },
    {
      id: 3,
      alt: 'Фото заведения',
      src: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=500',
    },
    {
      id: 4,
      alt: 'Фото заведения',
      src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500',
    },
  ],
};

module.exports = ocean;
