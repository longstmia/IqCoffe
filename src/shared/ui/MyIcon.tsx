import CoffeIcon from '../../assets/card/coffe.svg';
import CakeIcon from '../../assets/card/cake.svg';
import CornIcon from '../../assets/card/corn.svg';
import TeaIcon from '../../assets/card/tea.svg';

type IconProps = {
  name: "сoffeIcon" | "сakeIcon" | "сornIcon" | "еeaIcon"; 
};

export const MyIcon = ({ name }: IconProps) => {
  const { name: iconName } = { name };

  const Icons: Record<IconProps["name"], JSX.Element> = {
    сoffeIcon: <CoffeIcon />,
    сakeIcon: <CakeIcon />,
    сornIcon: <CornIcon />,
    еeaIcon: <TeaIcon />,
  };

  return Icons[iconName];
};