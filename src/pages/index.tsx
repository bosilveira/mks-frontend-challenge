import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'
import React from 'react';
import type { NextPageWithLayout } from './_app';
import type { ReactElement } from 'react'

import Head from 'next/head'
import Header from '@/components/header';
import LogoMKS from '@/components/header/logo';
import Footer from '@/components/footer'
import Cart from '@/components/cart';
import Shop from '@/components/shop';

import ShopCard from '@/components/shop/card';
import ShopCardSkeleton from '@/components/shop/card/skeleton';


type Props = {
  data: InferGetServerSidePropsType<typeof getServerSideProps>
};

const Home: NextPageWithLayout<Props> = ( { data } : InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (<>
    <Shop data={data.products}/>
</>);}

Home.getLayout = function getLayout(page: ReactElement) {
  return (<>
      <Head>
          <title>MKS Sistemas</title>
      </Head>
      <Header logo={ <LogoMKS/> } menu={ <Cart/> }/>
      { page }
      <Footer/>
  </>);
};

export const getServerSideProps: GetServerSideProps = async ( context ) => {
  const res = await fetch('https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=20&sortBy=id&orderBy=DESC')
  const data = await res.json()
  return {
    props: {
      data: {
        products: data.products || [],
        count: data.count || 0
      }
    }
  }
}



export default Home