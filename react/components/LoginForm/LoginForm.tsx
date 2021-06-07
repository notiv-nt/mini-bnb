import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import AuthService from '~/services/AuthService';
import { LoginContainer, Form, FormControl } from './LoginForm.elements';
import Head from 'next/head';

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const dispatch = useDispatch();
  const router = useRouter();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await AuthService.login(new FormData(form.current as HTMLFormElement));

    if (res.data) {
      dispatch({ type: 'SET_USER', payload: res.data });
      router.push('/');
    } else {
      console.dir(res);
    }
  }

  return (
    <LoginContainer>
      <Head>
        <title>Login</title>
      </Head>

      <Form role="form" ref={form} onSubmit={onSubmit}>
        <FormControl>
          <input type="email" name="email" placeholder="Email Address" required autoFocus />
        </FormControl>

        <FormControl>
          <input type="password" name="password" placeholder="Password" required />
        </FormControl>

        <FormControl>
          <button type="submit">Log in</button>
        </FormControl>
      </Form>
    </LoginContainer>
  );
};

export default LoginForm;
