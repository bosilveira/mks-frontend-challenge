import styled from 'styled-components'
import React from 'react';
import { keyframes } from 'styled-components'
import CartCard from './cartcard';

const show = keyframes`
0% { transform: translateX(100%); }
100% { transform: translateX(0%); }
`

const hide = keyframes`
0% { transform: translateX(0%); }
100% { transform: translateX(100%); }
`

const StyleCart = styled.div`
    button {
        position: relative;
        width: 90px;
        height: 45px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: #FFFFFF;
        border-radius: 8px;
        border: none;
        padding: 0 15px;
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        color: #000000;

        cart {
            width: 12px;
            height: 13.5px;
        }
`

interface CartProps {
    readonly isShown: boolean;
}

const StyledDiv = styled.div<CartProps>`
    display: flex;
    animation:  ${props => props.isShown ? show : hide} var(--animationTiming) forwards ease-in-out;
    position: absolute;
    transform: translateX(100%);
    top: 0;
    right: 0;
    width: 486px;
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #0F52BA;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

  .title {
        width: 486px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 36px 47px 70px 60px;
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        color: #FFFFFF;

        .close {
            position: relative;
            width: 38px;
            height: 38px;
            border-radius: 50%;
            border: none;
            background-color: #000000;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Montserrat', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 28px;
            color: #FFFFFF;
        }
    }

    .list {
        width: 100%;
        padding: 0 47px 0 60px;

    }

    div.total {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        color: #FFFFFF;
        padding: 0 47px 0 60px;
    }

    .checkout {
        position: relative;
        width: 486px;
        height: 97px;
        border-radius: 0px 0px 8px 8px;
        border: none;
        background-color: #000000;
        display: flex;
        justify-content: center;
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        color: #FFFFFF;

`

interface CartInterface {
    list?: JSX.Element,
}

export default function Cart( data : CartInterface) {

    const [showCart, setShowCart] = React.useState(true);

    const toggleCart = () => {
        console.log('teste')
        setShowCart(previous=>!previous);
    }

    return (
    <StyleCart>
        <button type='button' onClick={toggleCart}><img className='cart' alt='comprar' src="/cart.png"/> 1</button>
        <StyledDiv isShown={showCart}>
            <div className='title'>
                <p>Carrinho de Compras</p>
                <button className='close' type='button' onClick={toggleCart}>x</button>
            </div>
            <div className='list'>

                <CartCard />

            </div>
            <div className='total'><span>Total</span> <span>R$1000</span></div>
            <button className='checkout' type='button'>Finalizar Compra</button>
        </StyledDiv>
    </StyleCart>
    );
  }