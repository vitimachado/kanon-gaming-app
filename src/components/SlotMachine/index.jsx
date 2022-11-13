/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Reel1, Reel2, Reel3 } from '../../constants/slotMachine';
import { getCoinsApi, sortMachineApi } from '../../services/slotMachine';
import Button from '../common/button/button';
import MachineSlot from '../MachineSlot';
import { getSortedSlotTranslatePosition } from './actions';
import { WraperContainer } from './styles';

export default function SlotMachine() {
  const { coins, sortMachine } = useSelector((state) => state.slotMachine);

  useEffect(() => {
    getCoinsApi();
  }, []);

  useEffect(() => {
    console.log('coins, sortMachine', coins, sortMachine);
    // setCoinsApi(21);
  }, [coins, sortMachine]);

  const getValueOfSortedIndex = (index) =>
    getSortedSlotTranslatePosition(
      sortMachine && sortMachine?.length === 3 ? sortMachine[index - 1] : null,
      index,
    );

  const handleSpin = () => {
    sortMachineApi();
  };

  return coins ? (
    <WraperContainer>
      {coins} - {sortMachine ? sortMachine.map((item) => `${item} `) : null}
      <div style={{ display: 'flex' }}>
        <MachineSlot
          machineIndex="1"
          reel={Reel1}
          sortedIndex={getValueOfSortedIndex(1)}
          duration={5000}
        />
        <MachineSlot
          machineIndex="2"
          reel={Reel2}
          sortedIndex={getValueOfSortedIndex(2)}
          duration={7000}
        />
        <MachineSlot
          machineIndex="3"
          reel={Reel3}
          sortedIndex={getValueOfSortedIndex(3)}
          duration={9000}
        />
      </div>
      <Button onClick={() => handleSpin()}>Spin</Button>
    </WraperContainer>
  ) : null;
}
