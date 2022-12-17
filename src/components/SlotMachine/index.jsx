/* eslint-disable operator-linebreak */
/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { TextNeon, WraperContainer } from './styles';
import SlotMachineController from './slotMachineController';
import SlotMachineReels from './slotMachineReels';

export default function SlotMachine() {
  const [start, setStart] = useState(false);
  const slotMachineControllerRef = useRef();
  const { coins } = useSelector((state) => state.slotMachine);

  /**
   * Method to handle the change to start state.
   */
  const handleSetStart = (value) => {
    setStart(value);
  };

  /**
   * Method to handle the actions when the last slot stop to spin.
   */
  const handleOnStoped = () => {
    slotMachineControllerRef.current?.handleOnStoped();
  };

  return coins >= 0 ? (
    <WraperContainer>
      <TextNeon>Question 6</TextNeon>
      <SlotMachineReels
        start={start}
        handleSetStart={handleSetStart}
        handleOnStoped={handleOnStoped}
      />
      <SlotMachineController
        forwardRef={slotMachineControllerRef}
        handleSetStart={handleSetStart}
      />
    </WraperContainer>
  ) : null;
}
