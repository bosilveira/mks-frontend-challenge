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

interface CookieModalProps {
  isShown: boolean;
}

export const StyledDisclaimer = styled.div<CookieModalProps>`
  display: flex;
  animation:  ${props => props.isShown ? show : hide} var(--animationTiming) forwards ease-in-out;
  position: fixed;
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
  z-index: 99;
  padding: 36px;

  .header {
    width: 100%%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    color: #FFFFFF;
}

.body {
  width: 100%%;
  text-align: center;
  padding: 36px 47px 70px 60px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.consent {
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
}

`
