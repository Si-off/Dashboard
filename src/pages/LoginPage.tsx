import { postLogin, postRegister } from 'api';
import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { setToken } from 'utils/token';

type UserInfo = {
  id: string;
  password: string;
};

const LoginPage = () => {
  const [loginInfo, setLoginInfo] = useState<UserInfo>({ id: '', password: '' });
  const nagivate = useNavigate();

  const handleChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;

    switch (target.name as keyof UserInfo) {
      case 'id':
        setLoginInfo((prev) => ({ ...prev, id: target.value }));
        break;

      case 'password':
        setLoginInfo((prev) => ({ ...prev, password: target.value }));
        break;

      default:
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await postLogin(loginInfo.id, loginInfo.password);
    console.log(res);

    if (res) {
      const { accessToken, refreshToken } = res;
      accessToken && setToken('access_token', accessToken);
      refreshToken && setToken('refresh_token', refreshToken);
    }

    // postRegister({ name: 'asd', nickname: 'asd', email: 'tesss@naver.com', password: '1q2w3e' });
    // nagivate('/dashboard');
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Input name='id' placeholder='id' value={loginInfo.id} onChange={handleChange} />
      <S.Input
        name='password'
        placeholder='password'
        value={loginInfo.password}
        onChange={handleChange}
      />
      <button type='submit'>submit</button>
    </S.Form>
  );
};

export default LoginPage;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Input = styled.input`
  width: 15rem;
  padding: 6px;
`;

const S = { Form, Input };
