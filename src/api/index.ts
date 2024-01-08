import { LoginRes } from 'types';
import createAxiosInstance from './axios';

export const login = async (id: string, password: string): Promise<LoginRes> => {
  const auth = btoa(`${id}:${password}`);

  const res = await createAxiosInstance('/auth/login/email').post(
    {},
    { headers: { Authorization: `Basic ${auth}` } }
  );

  return res;
};
