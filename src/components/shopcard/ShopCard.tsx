import { useMemo } from 'react';
import {
  CardsWrapper,
  CardContainer,
  CardUp,
  Content,
  Title,
  Address,
  Arrow,
  Details,
  CardInfo,
  Info,
  InfoItem,
  Schedule,
  CardPhoto,
  Photo,
  ButtonBlock,
  GoButton,
} from './ShopCard.styles';

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

const photos = [photo1, photo2, photo3];

const patterns = [pattern1, pattern2, pattern3, pattern4, pattern5, pattern6];

const colors = [
  '#383838',
  '#F3B6D1',
  '#B1D465',
  '#FE6A69',
  '#5DD1B7',
  '#FFC63',
];

const categories = [
  { icon: CofeIcon, name: 'Напитки' },
  { icon: CakeIcon, name: 'Еда' },
  { icon: CornIcon, name: 'Зерно' },
  { icon: TeaIcon, name: 'Аксессуары' },
];

const timetable = [
  { day: 'Пн-Пт', time: '07:30 - 23:00' },
  { day: 'Сб-Вс', time: '07:30 - 23:00' },
];

interface ShopCardProps {
  name: string;
  address: string;
  index: number;
  pattern?: string;
}

export default function ShopCard({ name, address, index }: ShopCardProps) {
  const color = useMemo(() => colors[index % colors.length], [index]);
  const pattern = useMemo(
    () => `url(${patterns[index % patterns.length]})`,
    [index],
  );

  return (
    <CardsWrapper>
      <CardContainer color={color} pattern={pattern}>
        <CardUp>
          <Content>
            <Title>{name}</Title>
            <Address>{address}</Address>
          </Content>
        </CardUp>
        <Arrow />

        <Details>
          <CardInfo>
            <Info>
              {categories.map(({ icon, name }) => (
                <InfoItem key={name}>
                  <img src={icon} alt={name} />
                  <span>{name}</span>
                </InfoItem>
              ))}
            </Info>

            <Schedule>
              {timetable.map((time, index) => (
                <div key={time.day}>
                  <span>{time.day}</span>
                  <span>|</span>
                  <span>{time.time}</span>
                </div>
              ))}
            </Schedule>
          </CardInfo>

          <h2>
            Фотографии <br /> заведения
          </h2>
          <CardPhoto>
            {photos.map((src, index) => (
              <Photo key={index} src={src} alt={`Фото ${index + 1}`} />
            ))}
          </CardPhoto>
          <ButtonBlock>
            <GoButton>GO</GoButton>
          </ButtonBlock>
        </Details>
      </CardContainer>
    </CardsWrapper>
  );
}
