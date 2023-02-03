import styled from 'styled-components'
import { MdShoppingCart } from 'react-icons/md';
import { keyframes } from 'styled-components'

const blink = keyframes`
0% { background-position: -109px -109px; }
100% { background-position: 109px 109px; }
`
const StyledDiv = styled.div`
    position: relative;
    width: 218px;
    height: 285px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    background-color: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;

    svg {
        position: absolute;
        top: 92px;
        margin: auto;        
        width: 210px;
        height: 69px;
        object-fit: contain;
        color:  rgba(229, 228, 226,1);
    }

    .bottom {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 32px;
        border-radius: 0px 0px 8px 8px;
        border: none;
        background-color: rgba(229, 228, 226,1);
    }

    .shimmer {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(100deg, rgba(255,255,255,0) 20%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 80%); 
        background-repeat: repeat;
        background-size: 218px 285px; 
        display: inline-block;
        position: relative; 
        animation: ${blink} 1s infinite;

    }
`

export default function ShopCardSkeleton() {
    return (
        <StyledDiv>
            <MdShoppingCart />
            <div className='bottom'></div>
            <div className='shimmer'></div>
        </StyledDiv>
    );
}