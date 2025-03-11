import { ReactComponent as CoffeIcon } from '../../assets/card/coffe.svg';
import { ReactComponent as CakeIcon } from '../../assets/card/cake.svg';
import { ReactComponent as CornIcon } from '../../assets/card/corn.svg';
import { ReactComponent as TeaIcon } from '../../assets/card/tea.svg';

type IconProps = {
  name: 'drinks' | 'food' | 'beans' | 'accessories';
};

export const MyIcon = ({ name, ...props }: IconProps) => {
  const Icons: Record<IconProps['name'], JSX.Element> = {
    drinks: <CoffeIcon {...props} />,
    food: <CakeIcon {...props} />,
    beans: <CornIcon {...props} />,
    accessories: <TeaIcon {...props} />,
  };

  return Icons[name];
};

export {};
