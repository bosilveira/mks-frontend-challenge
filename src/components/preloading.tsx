import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components'
const StyledPreLoading = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: white;
  opacity: .5;
  z-index: 99;
`
function PreLoading() {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      const timer = setTimeout(() =>{setLoading(false)},1000);
      return () => {
        clearTimeout(timer)
      }
    }, []);
    
    return loading ? <StyledPreLoading></StyledPreLoading> : <React.Fragment></React.Fragment>
  }
  
  export default PreLoading