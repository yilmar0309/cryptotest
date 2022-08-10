import {createSlice, Dispatch} from '@reduxjs/toolkit';

import {Crypto, ResponseData} from '@core/interfaces/crypto.interface';
import {RequestResponse} from '@core/interfaces/request.interface';

import * as cryptoServices from '@presenter/domain/usecases/crypto.service';

export interface CryptoSlice {
  data: Crypto[];
  numberRows: number;
}

const initialState: CryptoSlice = {
  data: [],
  numberRows: 0,
};

export const getAllCryptoRedux =
  (start: number) => async (dispatch: Dispatch) => {
    try {
      const {error, data}: RequestResponse<ResponseData> =
        await cryptoServices.getAllCrypto(dispatch, start);
      if (!error) {
        dispatch(setDataCrypto(data?.data));
        dispatch(setDataNumberRows(data?.info.coins_num));
      }
    } catch (error: any) {
      console.log('Error', error);
      throw new Error(error.message);
    }
  };

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setDataCrypto: (state, action) => {
      state.data = action.payload;
    },
    setDataNumberRows: (state, action) => {
      state.numberRows = action.payload;
    },
  },
});

export const {setDataCrypto, setDataNumberRows} = cryptoSlice.actions;

export default cryptoSlice.reducer;
