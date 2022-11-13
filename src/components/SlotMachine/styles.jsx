/* eslint-disable indent */
/* eslint-disable no-confusing-arrow */
import styled, { keyframes } from 'styled-components';

const purpleColor = '#bc13fe';

// const gradientTop = `
//   background: linear-gradient(to top,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
// `;
// const gradientBottom = `
//   background: linear-gradient(to bottom,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
// `;

const boxShadowNeon = `
  0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem ${purpleColor},
  0 0 0.8rem ${purpleColor}, 0 0 2.8rem ${purpleColor},
  inset 0 0 1.3rem ${purpleColor};
`;

const boxShadowNeonLow = `
  0 0 0.1rem #fff, 0 0 0.1rem #fff, 0 0 1rem ${purpleColor},
  0 0 0.4rem ${purpleColor}, 0 0 1.8rem ${purpleColor},
  inset 0 0 0.3rem ${purpleColor};
`;

const pulsateContainer = keyframes`
  from {
    box-shadow: ${boxShadowNeon};
  }

  to {
    box-shadow: ${boxShadowNeonLow};
  }
`;

export const WraperContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const WrapperCoins = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  text-align: centere;
  margin: auto;
`;

export const WrapperCoinsContainer = styled.div`
  height: fit-content;
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: flex-start;
  flex-direction: row;
`;

export const WrapperCoinImg = styled.img`
  width: 5%;
`;

export const ButonNeon = styled.button`
  background: purpleColor;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  z-index: 2;
  font-weight: bold;
  font-size: 22px;
  padding: 0.7em 1.5em;
  margin: 30px;
  cursor: pointer;

  animation: ${pulsateContainer} 1.5s infinite alternate;
  box-shadow: ${boxShadowNeon};

  &:disabled {
    animation: none;
    box-shadow: none;
  }
`;
