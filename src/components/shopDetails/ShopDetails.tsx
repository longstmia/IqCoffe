import React from 'react';
import Tabs from './Tabs/Tabs';
import CakeIcon from '../../assets/details/cake.svg';
import CoffeIcon from '../../assets/details/coffe.svg';
import CornIcon from '../../assets/details/corn.svg';
import TeaIcon from '../../assets/details/tea.svg';
import TimeBordIcon from '../../assets/details/timebord.svg';

const tabsData = [
  { name: 'Завтраки', icon: CakeIcon },
  { name: 'Напитки', icon: CoffeIcon },
  { name: 'Еда', icon: CornIcon },
  { name: 'Зерновой кофе', icon: TeaIcon },
  { name: 'Аксессуары', icon: TimeBordIcon },
];

const ShopDetails = () => {
  const handleTabChange = (tabName: string) => {
    console.log('Выбран таб:', tabName);
  };
  return (
    <div style={{ marginTop: '80px' }}>
      <Tabs
        tabs={tabsData}
        defaultActive="Напитки"
        onTabChange={handleTabChange}
      />
    </div>
  );
};
export default ShopDetails;
