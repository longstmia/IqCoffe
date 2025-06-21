import { Head, Text, BoxLogo, Logo } from './Header.styles';
import HedLogo from '../../assets/header/robot.svg';

const Header = () => (
  <Head>
    <Text>Выберите кофейню</Text>
    <BoxLogo>
      <Logo src={HedLogo} alt="Логотип" />
    </BoxLogo>
  </Head>
);

export default Header;
