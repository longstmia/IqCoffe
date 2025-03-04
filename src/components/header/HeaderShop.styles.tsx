import styled from 'styled-components';
import hederIcon from '../../assets/pattern/header.svg';

export const Head = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 88px;
  background-color: #242424;
  background-image: url(${hederIcon});

  color: white;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 0px 0px 15px 15px;
  z-index: 1000;
`;

export const BoxLogo = styled.div`
  background-color: #f3f4f0;
  border: 2px solid #383838;
  margin-right: 30px;
  top: -2px;
  position: relative;
  border-radius: 0px 0px 15px 15px;
`;

export const Logo = styled.img`
  height: 3rem;
  padding: 7px;
`;

export const Text = styled.p`
  margin: 25.5px;
  font-size: 2rem;
`;
