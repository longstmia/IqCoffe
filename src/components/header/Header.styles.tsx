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
  padding: 0 20px;
  z-index: 1000;
`;

export const Logo = styled.img`
  height: 5rem;
  margin-top: 0;
  padding-right: 40px;
  align-self: flex-start;
`;

export const Text = styled.p`
  margin: 22px;
  font-size: 2rem;
`;
