import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginPage = () => {
  // inputData
  const [value, setValue] = useState();
  const nagivate = useNavigate();

  const handleChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;

    switch (target.name) {
      case '':
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('submit');
    nagivate('/dashboard');
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Input name='id' placeholder='id' />
      <S.Input name='password' placeholder='password' />
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
