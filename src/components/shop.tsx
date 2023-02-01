import styled from 'styled-components'

const StyledMain = styled.main`
    position: absolute;
    width: 100%;
    height: 101px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #0F52BA;
    padding: 65px;
`

interface ShopInterface {
    data?: JSX.Element,
}

export default function Shop( { data }: ShopInterface) {
    return (
      <StyledMain>
        
      </StyledMain>
    );
  }