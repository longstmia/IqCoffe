import React from 'react';
import { Head, Text, Logo } from './Header.styles';

const Header = () => (
  <Head>
    <Text>Выберите кофейню</Text>
    <Logo src="/assets/icons/robot.svg" alt="Логотип" />
  </Head>
);

export default Header;
