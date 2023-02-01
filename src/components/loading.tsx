
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

function Loading() {
    const router = useRouter();
    const [isPageLoading, setIsPageLoading] = React.useState(false);
  
    React.useEffect(() => {
    
      const routeEventStart = () => {
        setIsPageLoading(true);
      };
      const routeEventEnd = () => {
        setIsPageLoading(false)
      };
  
        router.events.on('routeChangeStart', routeEventStart)
        router.events.on('routeChangeComplete', routeEventEnd)
        router.events.on('routeChangeError',  routeEventEnd)
  
        return () => {
            router.events.off('routeChangeStart', routeEventStart)
            router.events.off('routeChangeComplete', routeEventEnd)
            router.events.off('routeChangeError', routeEventEnd)
        }
    },[])
    
    return isPageLoading ? <StyledLoading></StyledLoading> : <React.Fragment></React.Fragment>

  }
  
  export default Loading