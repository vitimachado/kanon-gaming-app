import React, { useImperativeHandle, useState } from 'react';
import { useSelector } from 'react-redux';

import { slotMachineRules } from '../../constants/slotMachine';
import { setCoinsApi, sortMachineApi } from '../../services/slotMachine';
import { setSnackbar } from '../../store/reducers/loading_reducer';
import { clearPrize, setCoins } from '../../store/reducers/slotMachine_reducer';
import store from '../../store/store';
import {
  ButonNeon,
  WrapperCoinImg,
  WrapperCoins,
  WrapperCoinsContainer,
  WrapperList,
} from './styles';
import coin from '../../assets/img/coin.png';

export default function SlotMachineController({
  defaultAddCoins = 20,
  handleSetStart = () => null,
  forwardRef,
}) {
  const [freeButton, setFreeButton] = useState(true);
  const { coins, prize } = useSelector((state) => state.slotMachine);
  /**
   * Method to handle the action to add 20 coins.
   */
  const handleAddCoins = () => {
    setCoinsApi(defaultAddCoins);
  };

  /**
   * Method to handle the action to spin the slots.
   */
  const handleSpin = () => {
    setFreeButton(false);
    handleSetStart(true);
    sortMachineApi(coins);
  };

  /**
   * Method to handle the actions when the last slot stop to spin.
   */
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

  useImperativeHandle(forwardRef, () => ({
    handleOnStoped,
  }));

  return (
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
        <ButonNeon
          onClick={() => handleAddCoins()}
          disabled={coins > 0 || !freeButton}
        >
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
  );
}
