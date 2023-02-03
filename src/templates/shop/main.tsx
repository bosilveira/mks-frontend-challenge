import { StyledMain } from './styled';
import ShopCard from '@/components/shop/card';
import ShopCardSkeleton from '@/components/shop/card/skeleton';

export default function Main () {
  return (<>
      <StyledMain>
          <ShopCard/>
          <ShopCardSkeleton/>
      </StyledMain>
  </>);
}
