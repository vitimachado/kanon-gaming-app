import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  coins: null,
  prize: 0,
  sortMachine: null,
};

export const slotMachineSlice = createSlice({
  name: 'slotMachine',
  initialState: INITIAL_STATE,
  reducers: {
    setCoins: (state, action) => {
      state.coins = action.payload;
    },
    setPrize: (state, action) => {
      state.prize = action.payload;
    },
    runSortMachine: (state, action) => {
      state.sortMachine = action.payload;
    },
    clearSlotMachine: (state) => {
      state.sortMachine = null;
      state.prize = 0;
    },
    clearPrize: (state) => {
      state.prize = 0;
    },
  },
});

const { actions } = slotMachineSlice;
export const {
  setCoins,
  setPrize,
  runSortMachine,
  clearSlotMachine,
  clearPrize,
} = actions;
