import {configureStore} from '@reduxjs/toolkit';

import alert from './alertSlice';
import crypto from './cryptoSlice';
import exchange from './exchangeSlice';

export default configureStore({
  reducer: {
    alert,
    crypto,
    exchange,
  },
  devTools: true,
});
