import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components'
const StyledLoading = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: white;
  opacity: .5;
  z-index: 99;
`

function Ready() {
    const router = useRouter();
    const [isPageLoading, setIsPageLoading] = React.useState(true);
  
    React.useEffect(() => {
        router.isReady && setTimeout(() =>{setIsPageLoading(false)},1000);
        router.isReady && console.log('isReady')
    },[router])
    
    return isPageLoading ? (<StyledLoading> Ready </StyledLoading>) : <React.Fragment></React.Fragment>

  }
  
  export default Ready