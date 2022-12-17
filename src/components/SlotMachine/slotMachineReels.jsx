import React from 'react';
import { useSelector } from 'react-redux';

import { Reel1, Reel2, Reel3 } from '../../constants/slotMachine';
import MachineSlot from '../MachineSlot';
import getSortedSlotTranslatePosition from './actions';
import { checkIsArrayOk } from '../../utils/objects';

export default function SlotMachineReels({
  start,
  handleSetStart,
  handleOnStoped,
}) {
  const { sortMachine } = useSelector((state) => state.slotMachine);

  /**
   * Get index of sort value
   *
   * @param {*} index
   */
  const getValueOfSortedIndex = (index) =>
    getSortedSlotTranslatePosition(
      checkIsArrayOk(sortMachine, 3) ? sortMachine[index - 1] : null,
      index,
    );
  return (
    <div style={{ display: 'flex' }}>
      <MachineSlot
        machineIndex="1"
        reel={Reel1}
        sortedIndex={getValueOfSortedIndex(1)}
        duration={5000}
        start={start}
        OnStoped={() => handleSetStart(false)}
      />
      <MachineSlot
        machineIndex="2"
        reel={Reel2}
        sortedIndex={getValueOfSortedIndex(2)}
        duration={7000}
        start={start}
      />
      <MachineSlot
        machineIndex="3"
        reel={Reel3}
        sortedIndex={getValueOfSortedIndex(3)}
        duration={9000}
        start={start}
        OnStoped={() => handleOnStoped()}
      />
    </div>
  );
}
