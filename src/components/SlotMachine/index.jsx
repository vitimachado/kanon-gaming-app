/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Reel1, Reel2, Reel3 } from '../../constants/slotMachine';
import { setCoinsApi, sortMachineApi } from '../../services/slotMachine';
import { setSnackbar } from '../../store/reducers/loading_reducer';
import { clearPrize, setCoins } from '../../store/reducers/slotMachine_reducer';
import store from '../../store/store';
import Button from '../common/button/button';
import MachineSlot from '../MachineSlot';
import { getSortedSlotTranslatePosition } from './actions';
import {
  ButonNeon,
  WraperContainer,
  WrapperCoinImg,
  WrapperCoins,
  WrapperCoinsContainer,
} from './styles';
import coin from '../../assets/img/coin.png';

export default function SlotMachine() {
  const { coins, prize, sortMachine } = useSelector(
    (state) => state.slotMachine,
  );

  useEffect(() => {
    console.log('coins, sortMachine', coins, sortMachine);
    // setCoinsApi(21);
  }, [coins, sortMachine]);

  const getValueOfSortedIndex = (index) =>
    getSortedSlotTranslatePosition(
      !!sortMachine && sortMachine?.length === 3
        ? sortMachine[index - 1]
        : null,
      index,
    );

  const handleSpin = () => {
    sortMachineApi(coins);
  };

  const handleAddCoins = () => {
    setCoinsApi(20);
  };

  const handleOnStoped = () => {
    if (prize && prize > 0) {
      // getCoinsApi();
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
      {sortMachine ? sortMachine.map((item) => `${item} `) : null}
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
          OnStoped={() => handleOnStoped()}
        />
      </div>
      <WrapperCoins>
        <WrapperCoinsContainer>
          <WrapperCoinImg src={coin} /> x {coins}
        </WrapperCoinsContainer>
        <ButonNeon onClick={() => handleSpin()} disabled={coins <= 0}>
          Spin
        </ButonNeon>
      </WrapperCoins>
      <Button onClick={() => handleAddCoins()} disabled={coins > 0}>
        Add 20 coins
      </Button>
      <div>
        ● 3 cherries in a row: 50 coins, 2 cherries in a row: 40 coins ● 3
        Apples in a row: 20 coins, 2 Apples in a row: 10 coins ● 3 Bananas in a
        row: 15 coins, 2 Bananas in a row: 5 coins ● 3 lemons in a row: 3 coins
      </div>
    </WraperContainer>
  ) : null;
}
