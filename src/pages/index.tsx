import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'
import { useRouter } from 'next/router';
import React from 'react';
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import styled from 'styled-components'
import Head from 'next/head'

import Header from '@/components/header'
import LogoMKS from '@/components/logoMKS'
import Footer from '@/components/footer'

import ShopCard from '@/components/shopcard';
import Cart from '@/components/cart';

const StyledMain = styled.main`
  min-height: calc( 100vh - var(--footerHeight) );
  padding-top: var(--headerHeight);
  position: relative;
  z-index: -1;
`
type Data = { }

type Props = {
  data: InferGetServerSidePropsType<typeof getServerSideProps>
};



const Home: NextPageWithLayout<Props> = (props) => {
  return <>
  <StyledMain>
  <ShopCard/>
  </StyledMain>
  </>
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <>
  <Head>
    <title>MKS Sistemas</title>
  </Head>
  <Header logo={<LogoMKS/>} carrinho={<Cart/>}/>
    {page}
  <Footer/>
  </>
}


export const getServerSideProps: GetServerSideProps<{ data: Data }> = async () => {
  //const res = await fetch('https://www.google.com')
  await new Promise((resolve) => {setTimeout(resolve,5000)});
  const data: Data = {}

  return {
    props: {
      data,
    },
  }
}



export default Home