import React from 'react';
import Head from 'next/head';
import { StoreWrapper } from '../store';
import App, { AppInitialProps, AppContext } from 'next/app';

import '../assets/styles.scss';

import Header from '~/components/Header/Header';
import Footer from '~/components/Footer/Footer';
import UserService from '~/services/UserService';

class WrappedApp extends App<AppInitialProps> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    if (typeof window === 'undefined') {
      const user = await UserService.getMe(ctx.req);

      if (user) {
        ctx.store.dispatch({ type: 'SET_USER', payload: user });
      }
    }

    return {
      pageProps: {
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
      },
    };
  }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
            integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg=="
            crossOrigin="anonymous"
          />
        </Head>

        <Header />

        <main>
          <Component {...pageProps} />
        </main>

        <Footer />
      </>
    );
  }
}

export default StoreWrapper.withRedux(WrappedApp);
