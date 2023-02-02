import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'
import React from 'react';
import type { NextPageWithLayout } from './_app'

import Main from '@/templates/shop/main';
import { getLayout } from '@/templates/shop/layout';

type Data = { }

type Props = {
  data: InferGetServerSidePropsType<typeof getServerSideProps>
};

const Home: NextPageWithLayout<Props> = (props) => {
  return (<Main/>);
}

Home.getLayout = getLayout;

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