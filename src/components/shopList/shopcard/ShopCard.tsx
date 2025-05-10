import React, { useState } from 'react';
import { Shop } from '../../../shared/types/shops';
import { MyIcon } from '../../../shared/ui/MyIcon';
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
import squarePattern from '../../../assets/pattern/square.svg';
import diamondsPattern from '../../../assets/pattern/diamonds.svg';
import leavesPattern from '../../../assets/pattern/leaves.svg';
import hexagonsPattern from '../../../assets/pattern/hexagons.svg';
import cloudsPattern from '../../../assets/pattern/clouds.svg';

const patternMap: { [key: string]: string } = {
  square: squarePattern,
  diamonds: diamondsPattern,
  leaves: leavesPattern,
  hexagons: hexagonsPattern,
  clouds: cloudsPattern,
};

const ShopCard: React.FC<Shop> = ({
  id,
  name,
  address,
  stylebook,
  categories,
  mode,
  photos,
}) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const toggleDetails = () => {
    setIsDetailsOpen(!isDetailsOpen);
  };

  const patternImage = patternMap[stylebook.pattern] || '';

  const formatTime = (start: string, end: string) => `${start} - ${end}`;

  return (
    <CardsWrapper>
      <CardContainer pattern={patternImage} color={stylebook.secondColor}>
        <CardUp>
          <Content>
            <Title>{name}</Title>
            <Address>{address}</Address>
          </Content>
        </CardUp>
        <Arrow onClick={toggleDetails} isOpen={isDetailsOpen} />

        <Details isOpen={isDetailsOpen}>
          <CardInfo>
            <Info>
              {categories?.slice(1).map(({ icon, name }) => (
                <InfoItem key={name}>
                  <MyIcon
                    name={icon as 'drinks' | 'food' | 'beans' | 'accessories'}
                  />
                  <span>{name}</span>
                </InfoItem>
              ))}
            </Info>

            <Schedule>
              <div>
                <span>Пн-Пт</span>
                <span>|</span>
                <span>{formatTime(mode.weekday.start, mode.weekday.end)}</span>
              </div>
              <div>
                <span>Сб-Вc</span>
                <span>|</span>
                <span>{formatTime(mode.free.start, mode.free.end)}</span>
              </div>
            </Schedule>
          </CardInfo>

          <h2>
            Фотографии <br /> заведения
          </h2>
          <CardPhoto>
            {photos?.map((photo) => (
              <Photo key={photo.id} src={photo.src} alt={photo.alt} />
            ))}
          </CardPhoto>
          <ButtonBlock>
            <GoButton
              to={`/shop-${encodeURIComponent(
                name.replace(/\s+/g, '-').toLowerCase(),
              )}`}
            >
              GO
            </GoButton>
          </ButtonBlock>
        </Details>
      </CardContainer>
    </CardsWrapper>
  );
};

export default ShopCard;
