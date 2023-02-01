import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { useRouter } from 'next/router';
import React from 'react';
import Loading from '@/components/loading';
import PreLoading from '@/components/preloading';
import Ready from '@/components/ready';
import styled from 'styled-components'

const StyledLoading = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: white;
  opacity: .5;
  z-index: 99;
`

const GlobalStyle = createGlobalStyle`
  :root {
    --headerHeight: 101px;
    --footerHeight: 34px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #E5E5E5;
  }
`

interface ThemeInterface {
  colors: {
    primary: string
  }
}

const theme: ThemeInterface = {
  colors: {
    primary: '#0070f3',
  },
}

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
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Ready/>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  )
}
