import React from 'react';
import { Head, Text, BoxLogo, Logo } from './HeaderShop.styles';

const Header = () => (
  <Head>
    <Text>Что желаете?</Text>
    <BoxLogo>
      <Logo src="/assets/icons/supergirl.svg" alt="Логотип" />
    </BoxLogo>
  </Head>
);

export default Header;
