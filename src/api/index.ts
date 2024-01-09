import { LoginRes, RegisterReq } from 'types';
import Axios from './axios';

export const postLogin = async (id: string, password: string): Promise<LoginRes> => {
  const auth = btoa(`${id}:${password}`);

  const res = await Axios('/auth/login/email').post(
    {},
    { headers: { Authorization: `Basic ${auth}` } }
  );

  return res;
};

export const postRegister = async (params: RegisterReq) => {
  const res = await Axios('/auth/register/email').post({ ...params });
  console.log(res);
  return res;
};
