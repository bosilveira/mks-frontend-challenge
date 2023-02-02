import { StyledCart } from './styled';
import React from 'react';
import CartCard from './card';
import Button from '../header/button';

import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, consentCookie } from '@/redux/cartSlice';
import { AppDispatch, RootState } from "@/redux/store";

interface CartInterface {
    list?: JSX.Element,
}

export default function Cart( data : CartInterface) {
    const { cart } = useSelector( (state: RootState) => state.cart );
    const dispatch = useDispatch<AppDispatch>();
    const [cartSize, setCartSize] = React.useState(0);
    const [showCart, setShowCart] = React.useState(true);

    const listProducts = () => {
        const list = []
        for (let i=0; i < cartSize; i++) {
            list.push(<CartCard />)
        }
        return list
    }
      
    React.useEffect(()=>{
        setCartSize(cart.length)
    },[cart])

    return (
    <>
        <Button onClick={()=>setShowCart(true)} title={'Abrir carrinho'}>{<><img className='cart' alt='comprar' src="/cart.png"/>{cartSize}</>}</Button>
        <StyledCart isShown={showCart}>
            <div className='header'>
                <p>Carrinho de Compras</p>
                <button className='close' type='button' onClick={()=>setShowCart(false)}>x</button>
            </div>
            <div className='body'>
                <div className='list'>
                    {listProducts()}
                </div>
                <div className='total'><span>Total</span> <span>R$1000</span></div>
            </div>
            <button className='checkout' type='button'>Finalizar Compra</button>
        </StyledCart>
    </>
    );
  }