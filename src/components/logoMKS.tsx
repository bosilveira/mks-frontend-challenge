import styled from 'styled-components'

const StyledH1 = styled.h1`
    font-size: 20px;
    font-style: normal;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    color: #FFFFFF;
    span {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 40px;
        color: #FFFFFF;
    }
`

export default function LogoMKS(): JSX.Element {
    return <>
      <StyledH1><span>MKS</span> Sistemas</StyledH1>
    </>;
  }