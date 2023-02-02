import { Button } from './button';
import styled from 'styled-components'

export const StyledButton = styled(Button)`
    position: relative;
    min-width: 90px;
    height: 45px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 8px;
    border: none;
    padding: 0 15px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #000000;

    svg, img {
        height: 19px;
    }

    @media (max-width: 768px) {
        height: 26px;
        min-width: 52px;
        font-size: 12px;
        
        svg, img {
            height: 10.98px;
        }
    }
`