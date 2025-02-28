import CofeIcon from '../../assets/card/coffe.svg';
import CakeIcon from '../../assets/card/cake.svg';
import CornIcon from '../../assets/card/corn.svg';
import TeaIcon from '../../assets/card/tea.svg';

import photo1 from '../../assets/card/photo.png';
import photo2 from '../../assets/card/photo2.png';
import photo3 from '../../assets/card/photo3.png';

import pattern1 from '../../assets/pattern/clouds.svg';
import pattern2 from '../../assets/pattern/diamonds.svg';
import pattern3 from '../../assets/pattern/hexagons.svg';
import pattern4 from '../../assets/pattern/leaves.svg';
import pattern5 from '../../assets/pattern/morphing.svg';
import pattern6 from '../../assets/pattern/square.svg';

export const photos = [photo1, photo2, photo3];

export const patterns = [pattern1, pattern2, pattern3, pattern4, pattern5, pattern6];

// export const colors = ['#383838', '#F3B6D1', '#B1D465', '#FE6A69', '#5DD1B7', '#FFC63'];

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
