import {Dispatch} from '@reduxjs/toolkit';

import {
  RequestHeaders,
  RequestResponse,
} from '@core/interfaces/request.interface';

import {createHeaders, get} from '@utils/request.util';

import API from '@presenter/io/config';
import {setShowAlert} from '@presenter/io/alertSlice';

export async function getAllExchange(
  dispatch: Dispatch,
): Promise<RequestResponse<{}>> {
  const resp = await get<RequestHeaders, {}>({
    headers: createHeaders({}),
    url: `${API.baseUrl}/${API.endpoints.exchanges}/`,
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
