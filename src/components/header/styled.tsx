import styled from 'styled-components'

export const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: var(--headerHeight);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #0F52BA;
    padding: 0 65px;
    transition: all var(--animationTiming);
    z-index: 99;

    @media (max-width: 768px) {
        padding: 0 20px;
        height: var(--headerHeightMobile);
    }    
`