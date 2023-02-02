import styled from 'styled-components'

export const StyledLogo = styled.h1`
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    color: #FFFFFF;
    span {
        font-weight: 300;
        font-size: 20px;
        color: #FFFFFF;
    }

    @media (max-width: 768px) {
        font-size: 32px;
        span {
            font-size: 16px;
        }
    }
`
