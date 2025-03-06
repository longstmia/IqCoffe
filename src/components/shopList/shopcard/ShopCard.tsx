import React, { useState } from 'react';
import { Shop } from '../../../shared/types/shops';
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
import { photos, categories, timetable } from './ShopCard.constants';

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

const ShopCard: React.FC<Shop> = ({ name, address, stylebook }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const toggleDetails = () => {
    setIsDetailsOpen(!isDetailsOpen);
  };

  const patternImage = patternMap[stylebook.pattern] || '';

  return (
    <CardsWrapper>
      <CardContainer pattern={patternImage} color={stylebook.secondColor}>
        <CardUp>
          <Content>
            <Title>{name}</Title>
            <Address>{address}</Address>
          </Content>
        </CardUp>
        <Arrow onClick={toggleDetails} />

        <Details isOpen={isDetailsOpen}>
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
              {timetable.map((time) => (
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
            {photos.map((src) => (
              <Photo src={src} alt="data" />
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
