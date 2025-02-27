import styled from 'styled-components';
//   Details,
//   Info,
//   InfoIcon,
//   InfoText,
//   Photo,
//   GoButton;
export const CardsWrapper = styled.div`
  display: flex;
  gap: 16px;
  scroll-snap-type: x mandatory;
  padding-bottom: 20px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 100px;
  }
`;

export const CardContainer = styled.div<{ color: string; pattern: string }>`
  flex: 0 0 auto;
  width: 95%;
  scroll-snap-align: start;
  background-color: ${({ color }) => color};
  background-image: ${({ pattern }) => pattern};
  border-radius: 0px 15px 15px 15px;
  overflow: visible;
  position: relative;
`;

export const CardUp = styled.div`
  position: relative;
  top: 2px;
  border-right: 2px solid #383838;
  border-left: none;
  border-radius: 0px 0px 15px 0px;
  background-color: #f9f9f5;
  padding: 16px 20px;
  width: 70%;
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
  border: solid #ffffff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
`;

export const Details = styled.div`
  display: flex;
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

export const GoButton = styled.button`
  width: 100px;
  height: 44px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  background-color: #14ad99;
  border: 2px #383838;
  border-radius: 8px;
  position: absolute;
  bottom: -20px;
  right: 20px;
`;
