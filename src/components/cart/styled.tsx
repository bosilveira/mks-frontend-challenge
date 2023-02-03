import styled from 'styled-components'
import { keyframes } from 'styled-components'


const show = keyframes`
    0% { transform: translateX(100%); }
    100% { transform: translateX(0%); }
`

const hide = keyframes`
    0% { transform: translateX(0%); }
    100% { transform: translateX(100%); }
`

interface CartProps {
    isShown: boolean;
}

export const StyledCart = styled.div<CartProps>`
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

    .header {
        width: 486px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 36px 47px 70px 60px;
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        color: #FFFFFF;
    }

    .close {
        position: relative;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        border: none;
        background-color: #000000;
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        color: #FFFFFF;
    }
    
    .body {
        height: 100%;
        width: 100%;
        overflow-y: scroll;
    }

    .list {
        width: 100%;
        padding: 32px 47px 0 60px;
        display: flex;
        gap: 24px;
        flex-direction: column;
    }

    .total {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        color: #FFFFFF;
        padding: 0 47px 0 60px;
        margin: 16px 0;
    }

    .checkout {
        position: relative;
        bottom: 0;
        width: 486px;
        height: 97px;
        border-radius: 0px 0px 8px 8px;
        border: none;
        background-color: #000000;
        display: flex;
        justify-content: center;
        align-items: center;
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        color: #FFFFFF;
`
