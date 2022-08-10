import {Dispatch} from '@reduxjs/toolkit';

import {
  RequestHeaders,
  RequestResponse,
} from '@core/interfaces/request.interface';
import {ResponseData} from '@core/interfaces/crypto.interface';

import {createHeaders, get} from '@utils/request.util';

import API from '@presenter/io/config';
import {setShowAlert} from '@presenter/io/alertSlice';

export async function getAllCrypto(
  dispatch: Dispatch,
  start: number,
): Promise<RequestResponse<ResponseData>> {
  const resp = await get<RequestHeaders, ResponseData>({
    headers: createHeaders({}),
    url: `${API.baseUrl}/${API.endpoints.tickers}/?start=${start}&limit=100`,
  });

  if (resp.error) {
    if (resp.code === 0) {
      dispatch(
        setShowAlert({
          variant: 'error',
          message: 'Connection error',
        }),
      );
    } else {
      dispatch(
        setShowAlert({
          variant: 'error',
          message: resp.message,
        }),
      );
    }
  }
  return resp;
}

export async function getAllExchangeByCurrency(
  dispatch: Dispatch,
  id: string,
): Promise<RequestResponse<ResponseData>> {
  const resp = await get<RequestHeaders, ResponseData>({
    headers: createHeaders({}),
    url: `${API.baseUrl}/${API.endpoints.exchange}/id=${id}`,
  });

  if (resp.error) {
    if (resp.code === 0) {
      dispatch(
        setShowAlert({
          variant: 'error',
          message: 'Connection error',
        }),
      );
    } else {
      dispatch(
        setShowAlert({
          variant: 'error',
          message: resp.message,
        }),
      );
    }
  }
  return resp;
}
