import { StyledShop } from "./styled";
import ShopCard from "./card";

interface ShopCardInterface {
    id?: number,
    name?: string,
    brand?: string,
    description?: string,
    photo?: string;
    price?: string
}

type Data = {
    data?: ShopCardInterface[]
}

export default function Shop( { data }: Data ) {
    return (
      <StyledShop>
        {data?.map((element, index)=><ShopCard data={element} key={index}/>, false)}
      </StyledShop>
    );
  }