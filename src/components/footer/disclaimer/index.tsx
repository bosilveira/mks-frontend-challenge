import { StyledDisclaimer } from './styled';
import React from 'react';
import { keyframes } from 'styled-components'
import Link from 'next/link';

import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, consentCookie } from '@/redux/cartSlice';
import { AppDispatch, RootState } from "@/redux/store";
import {useRouter} from 'next/router';

export default function Disclaimer() {

  const { cookies } = useSelector(
    (state: RootState) => state.cart
  );

  const dispatch = useDispatch<AppDispatch>();

  const router = useRouter()
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    console.log('router', router.asPath)
    if (cookies !== 'true' && router.asPath !== '/cookies') {
        setShowModal(true)
    }
    if (router.asPath === '/cookies') {
      setShowModal(false)
    }
    if (cookies === 'true') {
      setShowModal(false)
    }
  }, [router, cookies]);

  return (
    <StyledDisclaimer isShown={showModal}>
      <div className='header'>Política de cookies</div>
      <div className='body'>
        <p>
          Bem-vindo à nossa loja online! Utilizamos cookies para proporcionar a melhor experiência possível. Nosso uso de cookies está em conformidade com as leis internacionais e locais, bem como o Regulamento Geral de Proteção de Dados (RGPD). Para poder acessar nossa loja online, você deve permitir o uso de cookies. Se você tiver alguma dúvida, por favor, não hesite em contactar-nos. Obrigado pela sua colaboração!
        </p>
        <Link href="/cookies">Saiba mais</Link>
      </div>
      <button type='button' className='consent' onClick={()=>dispatch(consentCookie())}>Aceitar</button>
    </StyledDisclaimer>
  );
}