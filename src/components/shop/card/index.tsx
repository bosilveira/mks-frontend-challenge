import { StyledCard } from './styled';
import { MdImage } from 'react-icons/md';
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, consentCookie } from '@/redux/cartSlice';
import { AppDispatch, RootState } from "@/redux/store";
import {useRouter} from 'next/router';

interface ShopCardInterface {
    id?: number,
    name?: string,
    brand?: string,
    description?: string,
    photo?: string;
    price?: string
}

export default function ShopCard( data: ShopCardInterface) {
    const dispatch = useDispatch<AppDispatch>();
    const formatBRL = (num: number) => num.toLocaleString("pt-BR", {style:"currency", currency:"BRL", minimumFractionDigits: 0});
    const stringToBRL = (str: string) => {
        let value = parseFloat(str)
        if (!isNaN(value)) {
            return formatBRL(value)
        }
        return '--'
    }

    return (
      <StyledCard>
        { data.photo ? <img className='product' alt='produto' src={data.photo}/> : <MdImage /> }
        <div className='card-info'>
            <div>
                <p className='name'>{data.name || 'Produto'}</p>
                <p className='price'>{data.price ? stringToBRL('2499.00') : 'Preço'}</p>
            </div>
            <p className='description'>{data.description || 'Descrição do produto'}</p>
        </div>
        <button type='button' onClick={()=>dispatch(addItem({produto: 'teste'}))}><img className='shopping-bag' alt='comprar' src="/shopping-bag.png"/>Comprar</button>
      </StyledCard>
    );
  }