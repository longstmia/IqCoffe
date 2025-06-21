import { Head, Text, BoxLogo, Logo } from './HeaderShop.styles';
import HedLogo from '../../assets/header/supergirl.svg';

const Header = () => (
  <Head>
    <Text>Что желаете?</Text>
    <BoxLogo>
      <Logo src={HedLogo} alt="Логотип" />
    </BoxLogo>
  </Head>
);

export default Header;
