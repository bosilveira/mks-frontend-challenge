import styled from 'styled-components'

export const StyledShop = styled.main`
    position: relative;
    width: 80vw;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 16px;
    background-color: transparent;
    min-height: calc( 100vh - var(--footerHeight) );
    padding: calc( 65px + var(--headerHeight) ) 65px;
    z-index: 0;
`

