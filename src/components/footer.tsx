import styled from 'styled-components'

const StyledFooter = styled.footer`
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EEEEEE;
    p {
        height: 17px;
        font-size: 12px;
        font-style: normal;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        line-height: 15px;
        color: #000000;
    }
`

export default function Footer() {
    return (
      <StyledFooter>
        <p>MKS sistemas &copy; Todos os direitos reservados</p>
      </StyledFooter>
    );
  }