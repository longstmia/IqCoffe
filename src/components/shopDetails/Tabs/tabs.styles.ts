import styled from 'styled-components';

export const TabsWrapper = styled.div`
  overflow-x: auto;
  padding: 0 16px;
  max-width: 100vw;

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE и Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`;

export const TabsContainer = styled.div`
  position: relative;
  display: flex;
  gap: 24px;
  min-width: max-content;
`;

export const TabItem = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background: white;
  border-radius: 12px;
  color: ${({ $active }) => ($active ? '#383838' : '#BEBEBE')};
  margin-right: 8px;
  gap: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
`;

export const Glider = styled.div`
  position: absolute;
  height: 2px;
  background-color: blue;
  transition: all 0.2s ease;
  bottom: 0;
  left: 0;
  width: 0;
`;
