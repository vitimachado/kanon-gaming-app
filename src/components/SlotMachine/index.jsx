/* eslint-disable operator-linebreak */
/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Reel1, Reel2, Reel3 } from '../../constants/slotMachine';
import { setCoinsApi, sortMachineApi } from '../../services/slotMachine';
import { setSnackbar } from '../../store/reducers/loading_reducer';
import { clearPrize, setCoins } from '../../store/reducers/slotMachine_reducer';
import store from '../../store/store';
import MachineSlot from '../MachineSlot';
import { getSortedSlotTranslatePosition } from './actions';
import {
  ButonNeon,
  TextNeon,
  WraperContainer,
  WrapperCoinImg,
  WrapperCoins,
  WrapperCoinsContainer,
  WrapperList,
} from './styles';
import coin from '../../assets/img/coin.png';

export default function SlotMachine() {
  const [start, setStart] = useState(false);
  const [freeButton, setFreeButton] = useState(true);
  const { coins, prize, sortMachine } = useSelector(
    (state) => state.slotMachine,
  );

  const slotMachineRules = [
    '3 cherries in a row: 50 coins',
    '2 cherries in a row: 40 coins',
    '3 apples in a row: 20 coins',
    '2 Apples in a row: 10 coins',
    '3 bananas in a row: 15 coins',
    '2 Bananas in a row: 5 coins',
    '3 lemons in a row: 3 coins',
  ];

  const checkIsArrayOk = (array, length) =>
    Array.isArray(array) &&
    array?.length === length &&
    !array?.some((data) => data === null);

  const getValueOfSortedIndex = (index) =>
    getSortedSlotTranslatePosition(
      checkIsArrayOk(sortMachine, 3) ? sortMachine[index - 1] : null,
      index,
    );

  const handleSpin = () => {
    setFreeButton(false);
    setStart(true);
    sortMachineApi(coins);
  };

  const handleAddCoins = () => {
    setCoinsApi(20);
  };

  const handleOnStoped = () => {
    setFreeButton(true);
    if (prize && prize > 0) {
      store.dispatch(setCoins(coins + prize));
      store.dispatch(
        setSnackbar({
          statusCode: 200,
          msg: `WIN ${prize} COINS!`,
          style: {
            backgroundColor: 'green',
          },
        }),
      );
      store.dispatch(clearPrize());
    }
  };

  return coins >= 0 ? (
    <WraperContainer>
      <TextNeon>Question 6</TextNeon>
      <div style={{ display: 'flex' }}>
        <MachineSlot
          machineIndex="1"
          reel={Reel1}
          sortedIndex={getValueOfSortedIndex(1)}
          duration={5000}
          start={start}
          OnStoped={() => setStart(false)}
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
      <WrapperCoins>
        <WrapperCoinsContainer>
          <div>
            <div>
              <WrapperCoinImg src={coin} /> x {coins}
            </div>
            <WrapperList>
              {slotMachineRules.map((rule, index) => (
                <li key={`list-rules-${index}`}>{rule}</li>
              ))}
            </WrapperList>
          </div>
          <ButonNeon onClick={() => handleAddCoins()} disabled={coins > 0}>
            Add 20 coins
          </ButonNeon>
        </WrapperCoinsContainer>
        <ButonNeon
          onClick={() => handleSpin()}
          disabled={coins <= 0 || !freeButton}
        >
          Spin
        </ButonNeon>
      </WrapperCoins>
    </WraperContainer>
  ) : null;
}
