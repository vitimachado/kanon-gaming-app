import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  coins: null,
  sortMachine: null,
};

export const slotMachineSlice = createSlice({
  name: 'slotMachine',
  initialState: INITIAL_STATE,
  reducers: {
    setCoins: (state, action) => {
      state.coins = action.payload;
    },
    runSortMachine: (state, action) => {
      state.sortMachine = action.payload;
    },
    clearSlotMachine: (state) => {
      state.coins = null;
      state.sortMachine = null;
    },
  },
});

const { actions } = slotMachineSlice;
export const { setCoins, runSortMachine, clearUser } = actions;
