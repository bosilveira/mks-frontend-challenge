import { StyledCart } from './styled';
import React from 'react';
import CartCard from './card';
import Button from '../header/button';

import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, consentCookie } from '@/redux/cartSlice';
import { AppDispatch, RootState } from "@/redux/store";

export default function Cart( ) {
    const { cart } = useSelector( (state: RootState) => state.cart );
    const dispatch = useDispatch<AppDispatch>();
    const [cartSize, setCartSize] = React.useState(0);
    const [showCart, setShowCart] = React.useState(true);
    const [cartList, setCartList] = React.useState([]);
    const [total, setTotal] = React.useState(0);

    const listProducts = () => {
        const list = []
        const data = [ ...cartList ] as { id: number, price: string }[]
        data.sort((a: any, b: any)=> (a.name > b.name) ? 1 : (a.name == b.name) ? 0 : -1 )
        let auxList = {} as any
        for (let i=0; i < data.length; i++) {
            let key = data[i].id
            auxList[key] = data[i]
        }
        for (let i in auxList) {
            let qnt = data.filter(element=>element.id == parseInt(i)).length
            auxList[i] = { ...auxList[i], quantity: qnt }
        }

        for (let i in auxList) {
            list.push(<CartCard data={{ ...auxList[i], position: i  }} key={i}/>)
        }
        return list
    }

    const formatBRL = (num: number) => num.toLocaleString("pt-BR", {style:"currency", currency:"BRL", minimumFractionDigits: 0});

    const stringToBRL = (str: string) => {
        let value = parseFloat(str)
        if (!isNaN(value)) {
            return formatBRL(value)
        }
        return '--'
    }

    React.useEffect(()=>{
        setCartSize(cart.length)
        setCartList(cart)
        setTotal( ([ ...cart ] as {price: string }[]).reduce( (value, element) => parseFloat(element?.price) + value, 0 ) )

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
                <div className='total'><span>Total</span> <span>{stringToBRL(total.toString())}</span></div>
            </div>
            <button className='checkout' type='button'>Finalizar Compra</button>
        </StyledCart>
    </>
    );
  }