import CofeIcon from '../../../assets/card/coffe.svg';
import CakeIcon from '../../../assets/card/cake.svg';
import CornIcon from '../../../assets/card/corn.svg';
import TeaIcon from '../../../assets/card/tea.svg';

import photo1 from '../../../assets/card/photo.png';
import photo2 from '../../../assets/card/photo2.png';
import photo3 from '../../../assets/card/photo3.png';

export const photos = [photo1, photo2, photo3];

export const categories = [
  { icon: CofeIcon, name: 'Напитки' },
  { icon: CakeIcon, name: 'Еда' },
  { icon: CornIcon, name: 'Зерно' },
  { icon: TeaIcon, name: 'Аксессуары' },
];

export const timetable = [
  { day: 'Пн-Пт', time: '07:30 - 23:00' },
  { day: 'Сб-Вс', time: '07:30 - 23:00' },
];
