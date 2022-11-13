/* eslint-disable indent */
/* eslint-disable no-confusing-arrow */
import styled, { keyframes } from 'styled-components';

const purpleColor = '#bc13fe';

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

const getTextShadowNeon = (divider = 1) => `
    color: #fff;
    text-shadow:
      0 0 ${5 / divider}px #fff,
      0 0 ${10 / divider}px #fff,
      0 0 ${20 / divider}px #fff,
      0 0 ${40 / divider}px ${purpleColor},
      0 0 ${70 / divider}px ${purpleColor},
      0 0 ${90 / divider}px ${purpleColor},
      0 0 ${100 / divider}px ${purpleColor},
      0 0 ${150 / divider}px ${purpleColor};
  `;

const textPulsateContainer = keyframes`
  from {
    ${getTextShadowNeon(1)}
  }

  to {
    ${getTextShadowNeon(4)}
  }
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

export const TextNeon = styled.h1`
  font-family: 'Seaweed Script', sans-serif;
  font-size: 3.2rem;
  animation: ${textPulsateContainer} 1.5s infinite alternate;
  ${getTextShadowNeon()};
`;

export const ButonNeon = styled.button`
  width: 100%;
  width: -moz-available; /* WebKit-based browsers will ignore this. */
  width: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
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

export const WrapperList = styled.ul`
  width: fit-content;
  font-size: 14px;
  padding-left: 0px;
  list-style-type: none;
  padding: 10px;
  border: 1px solid;
`;
