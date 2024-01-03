import { AxiosRequestConfig } from 'axios';
import Client from './axios';
import { LoginRes } from 'types';

export const login = async (id: string, password: string): Promise<LoginRes> => {
  const auth = btoa(`${id}:${password}`);
  const res = await new Client('/auth/login/email').post({}, {
    headers: { Authorization: `Basic ${auth}` },
  } as AxiosRequestConfig);

  return res;
};
