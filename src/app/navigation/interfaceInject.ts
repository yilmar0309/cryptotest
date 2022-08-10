import {
  RouteProp,
  ParamListBase,
  NavigationProp,
} from '@react-navigation/native';
import {Dispatch} from '@reduxjs/toolkit';

export interface Props {
  route: RouteProp<ParamListBase>;
  navigation: NavigationProp<ParamListBase, string, any, any>;
  navigateWithReset: (route: string, params?: any) => void;
}

export interface SliceCrypto {
  getAllCryptoRedux: (start: number) => (dispatch: Dispatch) => void;
}
export interface SliceExchange {
  getAllExchangeRedux: (dispatch: Dispatch) => void;
}
