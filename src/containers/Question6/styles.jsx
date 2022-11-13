import styled from 'styled-components';

export const WraperContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000000;
`;

export const ButtonLogout = styled.button`
  width: fit-content;
  position: fixed;
  bottom: 20px;
  left: 20px;
  border-radius: 100%;
  background-color: indigo;
  z-index: 2;
  font-weight: bold;
  font-size: 16px;
  padding: 0.7em 1.5em;
  margin: 30px;
  color: #ffff;
  cursor: pointer;
`;
