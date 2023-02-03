import React from 'react';
import type { NextPageWithLayout } from '../_app';

import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'

import { useRouter } from 'next/router';
import type { ReactElement } from 'react'
import Head from 'next/head'
import { MdArrowBackIos } from 'react-icons/md'

import Header from '@/components/header';
import LogoMKS from '@/components/header/logo';
import Footer from '@/components/footer'

import Button from '@/components/header/button';

const Cookies: NextPageWithLayout = () => {
    
  return (<main>
    <div>
      <h2>Cookies e Política de Privacidade</h2>
      Obrigado por visitar nosso site. Aqui na MKS, comprometemo-nos a proteger a privacidade de nossos visitantes e usuários.
  Usamos cookies em nosso site, de acordo com todas as leis aplicáveis do GDPR, internacionais e locais. Nós levamos a segurança de nossos visitantes e usuários a sério e garantimos que todas as informações pessoais recebidas sejam mantidas seguras e confidenciais.
  Ao aceitar o uso de cookies, você está concordando com o uso de cookies de acordo com esta política. Os cookies são pequenos pedaços de dados armazenados em seu dispositivo que rastreiam, salvam e armazenam informações sobre suas interações e uso deste site. Isso nos ajuda a fornecer uma experiência melhor e entender como você usa nosso site. Também nos ajuda a melhorar nossos serviços e fornecer conteúdo e publicidade personalizados.
  É importante que você ative os cookies em seu dispositivo para prosseguir para a loja online. Caso contrário, nosso site pode não funcionar corretamente e você pode não ser capaz de acessar a loja online.
  Se você tiver alguma dúvida sobre nossa Política de Privacidade ou o uso de cookies, não hesite em contactar-nos. Valorizamos sua privacidade e tomamos todas as medidas para garantir que suas informações sejam mantidas seguras.
      </div>
      <div>
      <h2>Cookies and Privacy Policy</h2>
      Thank you for visiting our site. Here at MKS, we are committed to protecting the privacy of our visitors and users.
  We use cookies on our site in accordance with all applicable GDPR, international, and local laws. We take the safety and security of our visitors and users seriously and ensure that all personal information received is kept secure and confidential.
  By accepting the use of cookies, you are agreeing to our use of cookies in accordance with this policy. Cookies are small pieces of data that are stored on your device that track, save and store information about your interactions and usage of this site. This helps us to provide a better experience and understand how you use our site. It also helps us to improve our services and provide tailored content and advertising.
  It is important that you enable cookies on your device in order to proceed to the online store. Otherwise, our site may not function properly and you may not be able to access the online store.
  If you have any questions about our Privacy Policy or the use of cookies, please do not hesitate to contact us. We value your privacy and take every measure to ensure that your information remains secure.
      </div>
      <div>
      <h2>Cookies y Política de Privacidad</h2>
      Gracias por visitar nuestro sitio. Aquí en MKS, nos comprometemos a proteger la privacidad de nuestros visitantes y usuarios.
  Utilizamos cookies en nuestro sitio de acuerdo con todas las leyes aplicables de GDPR, internacionales y locales. Tomamos en serio la seguridad y la privacidad de nuestros visitantes y usuarios, y aseguramos que toda la información personal recibida sea mantenida de forma segura y confidencial.
  Al aceptar el uso de cookies, usted está aceptando nuestro uso de cookies de acuerdo con esta política. Las cookies son pequeños fragmentos de datos que se almacenan en su dispositivo para rastrear, guardar y almacenar información sobre sus interacciones y uso de este sitio. Esto nos ayuda a ofrecer una mejor experiencia y comprender cómo utiliza nuestro sitio. También nos ayuda a mejorar nuestros servicios y proporcionar contenido y publicidad personalizados.
  Es importante que habilite las cookies en su dispositivo para proceder a la tienda en línea. De lo contrario, es posible que nuestro sitio no funcione correctamente y es posible que no pueda acceder a la tienda en línea.
  Si tiene alguna pregunta sobre nuestra Política de Privacidad o el uso de cookies, no dude en contactarnos. Valoramos su privacidad y tomamos todas las medidas necesarias para garantizar que su información permanezca segura.
      </div>
    </main>)
}

Cookies.getLayout = function getLayout(page: ReactElement) {
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

export default Cookies