/* eslint-disable indent */
/* eslint-disable no-confusing-arrow */
import styled, { keyframes } from 'styled-components';

const purpleColor = '#bc13fe';

const gradientTop = `
  background: linear-gradient(to top,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
`;
const gradientBottom = `
  background: linear-gradient(to bottom,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
`;

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

// eslint-disable-next-line import/prefer-default-export
export const SliderContainer = styled.div`
  background: white;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  height: 300px;
  margin: 10px;
  overflow: hidden;
  position: relative;

  animation: ${pulsateContainer} 1.5s infinite alternate;
  box-shadow: ${boxShadowNeon};

  &:before,
  &:after {
    ${gradientTop}
    ${gradientBottom}
    content: "";
    height: 300px;
    position: absolute;
    z-index: 2;
  }

  &:after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &:before {
    left: 0;
    top: 0;
  }
`;

const slideAnimation = (length) => keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(calc(-165px * ${length}));
  }
`;

export const SlideTrack = styled.div`
  animation: ${({ lengthSlide }) => slideAnimation(lengthSlide)}
    ${({ speedSlide }) => speedSlide} linear infinite;
  display: flex;
  flex-direction: column;
  height: auto;
`;

export const SlideItem = styled.div`
  height: 200px;
  width: 250px;
`;

export const SlideImg = styled.img`
  width: 100%;
  height: 100%;
`;
