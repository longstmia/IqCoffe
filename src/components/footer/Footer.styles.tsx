import styled from 'styled-components';
import hederIcon from '../../assets/pattern/header.svg';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  gap: 20px;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 88px;
  z-index: 1000;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  background-color: #242424;
  background-image: url(${hederIcon});
`;

export const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
  color: #fff;

  img {
    width: 20px;
    height: 20px;
    margin-bottom: 8px;
  }

  span {
    font-size: 14px;
    font-weight: bold;
  }
`;
