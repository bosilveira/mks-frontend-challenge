import React from 'react';
import type { ReactElement } from 'react'

import Head from 'next/head'
import Header from '@/components/header';
import LogoMKS from '@/components/header/logo';
import Footer from '@/components/footer'
import Cart from '@/components/cart';

export function getLayout(page: ReactElement) {
    return (<>
        <Head>
            <title>MKS Sistemas</title>
        </Head>
        <Header logo={ <LogoMKS/> } menu={ <Cart/> }/>
        { page }
        <Footer/>
    </>);
}

