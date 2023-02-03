import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { useRouter } from 'next/router';
import React from 'react';
import Loading from '@/components/loading';
import styled from 'styled-components'
import Disclaimer from '@/components/footer/disclaimer';

import { Provider } from "react-redux";
import { store } from '@/redux/store';

const GlobalStyle = createGlobalStyle`
  :root {
    --headerHeight: 101px;
    --headerHeightMobile: 48px;
    --footerHeight: 34px;
    --animationTiming: .4s;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    background-color: #E5E5E5;
    overflow-x: hidden;
  }

  .wrapper {
    position: relative;
    top: 0;
    left: 0;
  }

  main {
    min-height: calc( 100vh - var(--footerHeight) );
    padding: calc( var(--headerHeight) + 65px) 65px 0 65px;
    position: relative;
  }

  a {
    color: inherit;
    text-decoration: underline;
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }



`

export type NextPageWithLayout<P = { }, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <>
    <Provider store={store}>
      <GlobalStyle />
        {getLayout(<Component {...pageProps} />)}
        <Loading/>
        <Disclaimer/>
    </Provider>
  </>
  )
}
