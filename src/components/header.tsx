import styled from 'styled-components'

const StyledHeader = styled.header`
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

interface HeaderInterface {
    logo?: JSX.Element,
    carrinho?: JSX.Element
}

export default function Header( { logo, carrinho }: HeaderInterface) {
    return (
      <StyledHeader>
        {logo}{carrinho}
      </StyledHeader>
    );
  }