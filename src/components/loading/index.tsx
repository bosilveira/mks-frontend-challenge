import { useRouter } from 'next/router';
import React from 'react';
import { StyledLoading } from './styled';

function Loading() {
    const router = useRouter();
    const [isPageLoading, setIsPageLoading] = React.useState(true);
  
    React.useEffect(() => {
        router.isReady && setTimeout(() =>{setIsPageLoading(false)},1000);
        router.isReady && console.log('isReady')
    },[router])
    
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

    return isPageLoading ? (<StyledLoading> Ready </StyledLoading>) : null
  }
  
  export default Loading