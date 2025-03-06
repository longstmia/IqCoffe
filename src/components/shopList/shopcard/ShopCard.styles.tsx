import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface CardContainerProps {
  color: string;
  pattern: string;
}

export const CardsWrapper = styled.div`
  display: flex;
  gap: 16px;
  scroll-snap-type: x mandatory;
  padding-bottom: 20px;
  margin-bottom: 10px;
  margin-top: 10px;

  &:first-child {
    margin-top: 110px;
  }
  &:last-child {
    margin-bottom: 100px;
  }
`;
export const CardContainer = styled.div<CardContainerProps>`
  background-color: ${(props) => props.color};
  background-image: ${(props) =>
    props.pattern ? `url(${props.pattern})` : 'none'};
  background-position: center;
  background-repeat: repeat;

  flex: 0 0 auto;
  width: 95%;
  scroll-snap-align: start;
  border: 2px solid #383838;
  border-left: none;
  border-radius: 0px 0px 15px 0px;
  overflow: visible;
  position: relative;
  margin-bottom: -10px;

  -webkit-box-shadow: 6px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 6px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 6px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;

export const CardUp = styled.div`
  position: relative;
  border: 2px solid #383838;
  border-left: none;
  border-radius: 0px 0px 15px 0px;
  background-color: #f3f4f0;
  padding: 16px 20px;
  width: 70%;
  margin: -2px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #2f2f2f;
  margin: 0;
`;

export const Address = styled.p`
  font-size: 14px;
  color: #ccc;
  margin: 8px 0 0;
`;

export const Arrow = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 12px;
  height: 12px;
  border: solid #f3f4f0;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
`;

export const Details = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  align-items: flex-start;
  flex-direction: column;

  gap: 20px;
  width: 100%;

  h2 {
    color: #f9f9f5;
    margin: 20px 0px 20px 20px;
  }
`;

export const CardInfo = styled.div`
  width: 75%;
  padding: 40px 20px;
  border-radius: 12px;
  background-color: #f4f5f3;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 24px;
    height: 32px;
    margin-right: 4px;
  }

  span {
    font-size: 14px;
    font-weight: 600;
    color: #242424;
  }
`;

export const Schedule = styled.div`
  border-top: 1px solid #e0e0e0;
  padding-top: 20px;

  div {
    display: flex;
    justify-content: flex-start;
    gap: 8px;
    font-size: 14px;
    font-weight: 600;
    margin-top: 4px;
  }
`;

export const CardPhoto = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  white-space: nowrap;
  max-width: 100%;
  margin: 20px 0px 20px 20px;
`;

export const Photo = styled.img`
  width: 100px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
`;

export const ButtonBlock = styled.div`
  display: flex;
`;

export const GoButton = styled(Link)`
  width: 100px;
  height: 44px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  background-color: #14ad99;
  border: 2px solid #383838;
  border-radius: 8px;
  position: absolute;
  bottom: -20px;
  right: 20px;

  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;
`;
