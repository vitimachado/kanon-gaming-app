import React, { useEffect, useState } from 'react';
import apple from '../../assets/img/apple.png';
import banana from '../../assets/img/banana.png';
import cherry from '../../assets/img/cherry.png';
import lemon from '../../assets/img/lemon.png';
import { SlideImg, SlideItem, SliderContainer, SlideTrack } from './styles';

export default function MachineSlot({
  machineIndex,
  reel,
  sortedIndex,
  duration = 3000,
  OnStoped = () => null,
}) {
  const [started, setStarted] = useState(false);
  useEffect(() => {
    console.log('machineIndex', machineIndex, sortedIndex);
    if (sortedIndex) {
      setStarted(true);
      setTimeout(() => {
        setStarted(false);
        OnStoped();
      }, duration);
    }
  }, [sortedIndex]);

  // eslint-disable-next-line no-unused-vars
  const getSlotImage = (name) => {
    switch (name) {
      case 'apple':
        return apple;
      case 'banana':
        return banana;
      case 'cherry':
        return cherry;
      case 'lemon':
        return lemon;

      default:
        return banana;
    }
  };

  return (
    <SliderContainer>
      <SlideTrack
        lengthSlide={reel.length}
        speedSlide={`${started ? 1 : 0}s`}
        sortedIndex={sortedIndex}
      >
        {reel
          ? reel.map((item, index) => (
              // eslint-disable-next-line react/jsx-indent
              <SlideItem key={`${machineIndex}-${item}-${index}`}>
                <SlideImg src={getSlotImage(item)} alt={`${item}-${index}`} />
              </SlideItem>
              // eslint-disable-next-line indent
            ))
          : null}
      </SlideTrack>
    </SliderContainer>
  );
}
