import React from 'react';
import type { NextPageWithLayout } from './_app'

import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'

import Main from '@/templates/cookies/main';
import { getLayout } from '@/templates/cookies/layout';

const Cookies: NextPageWithLayout = () => {
  return (<Main/>)
}

Cookies.getLayout = getLayout;

export default Cookies