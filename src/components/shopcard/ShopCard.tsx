import React, { useState } from 'react';
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
import {
  photos,
  patterns,
  categories,
  timetable,
} from '../shopcard/ShopCard.constants';

interface ShopCardProps {
  name: string;
  address: string;
  index: number;
}

const ShopCard: React.FC<ShopCardProps> = ({ name, address, index }) => {
  const pattern = patterns[0];
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const toggleDetails = () => {
    setIsDetailsOpen(!isDetailsOpen);
  };
  return (
    <CardsWrapper>
      <CardContainer color={'#383838'} pattern={pattern}>
        <CardUp>
          <Content>
            <Title>{name}</Title>
            <Address>{address}</Address>
          </Content>
        </CardUp>
        <Arrow onClick={toggleDetails} />

        <Details style={{ display: isDetailsOpen ? 'flex' : 'none' }}>
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
              <Photo key={index} src={src} alt="data" />
            ))}
          </CardPhoto>
          <ButtonBlock>
            <GoButton>GO</GoButton>
          </ButtonBlock>
        </Details>
      </CardContainer>
    </CardsWrapper>
  );
};

export default ShopCard;
