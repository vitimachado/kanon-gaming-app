/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import { tableMultiplierSorted } from '../../constants/slotMachine';
import { randomArrayValue } from '../../utils/objects';

const getSortedSlotTranslatePosition = (name, reelIndex) => {
  switch (name) {
    case 'apple':
      return reelIndex === 1
        ? tableMultiplierSorted[3]
        : reelIndex === 2
        ? tableMultiplierSorted[randomArrayValue([1, 5])]
        : tableMultiplierSorted[randomArrayValue([1, 3])];
    case 'banana':
      return reelIndex === 1
        ? tableMultiplierSorted[randomArrayValue([5, 6])]
        : tableMultiplierSorted[6];
    case 'cherry':
      return reelIndex === 1
        ? tableMultiplierSorted[1]
        : tableMultiplierSorted[4];
    case 'lemon':
      return reelIndex === 1
        ? tableMultiplierSorted[randomArrayValue([2, 4])]
        : reelIndex === 2
        ? tableMultiplierSorted[randomArrayValue([2, 3])]
        : tableMultiplierSorted[randomArrayValue([2, 5])];

    default:
      return null;
  }
};

export default getSortedSlotTranslatePosition;
