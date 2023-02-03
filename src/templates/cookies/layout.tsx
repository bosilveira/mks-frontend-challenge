import { useRouter } from 'next/router';
import type { ReactElement } from 'react'
import Head from 'next/head'
import { MdArrowBackIos } from 'react-icons/md'

import Header from '@/components/header';
import LogoMKS from '@/components/header/logo';
import Footer from '@/components/footer'

import Button from '@/components/header/button';

export function getLayout(page: ReactElement) {
    const router = useRouter();
    return (<>
        <Head>
            <title>MKS Sistemas</title>
        </Head>
        <Header logo={<LogoMKS/>} menu={<Button onClick={()=>router.push('/')} title={'Voltar para loja'}><><MdArrowBackIos/>Voltar</></Button>}/>
            {page}
        <Footer/>
    </>);
}