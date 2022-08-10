import {createSlice, Dispatch} from '@reduxjs/toolkit';

import {RequestResponse} from '@core/interfaces/request.interface';

import * as exchangeServices from '@presenter/domain/usecases/exchange.service';

export interface ExchangeSlice {
  data: {};
  numberRows: number;
}

const initialState: ExchangeSlice = {
  data: [],
  numberRows: 0,
};

export const getAllExchangeRedux = async (dispatch: Dispatch) => {
  try {
    const {error, data}: RequestResponse<{}> =
      await exchangeServices.getAllExchange(dispatch);
    if (!error) {
      dispatch(setDataExchange(data));
    }
  } catch (error: any) {
    console.log('Error', error);
    throw new Error(error.message);
  }
};

const exchangeSlice = createSlice({
  name: 'exchange',
  initialState,
  reducers: {
    setDataExchange: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {setDataExchange} = exchangeSlice.actions;

export default exchangeSlice.reducer;
