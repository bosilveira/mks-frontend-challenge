import { StyledCard } from './styled';
import { MdImage } from 'react-icons/md';
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, removeAllOfKind, clearCart, consentCookie } from '@/redux/cartSlice';
import { AppDispatch, RootState } from "@/redux/store";

interface CartCardInterface {
    id?: number,
    name?: string,
    brand?: string,
    description?: string,
    photo?: string;
    price?: string,
    position?: number,
    quantity?: number
}

type Data = {
    data?: CartCardInterface
}

export default function CartCard( { data }: Data) {
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
            <div className='product-img'>
                { data?.photo ? <img className='product' alt='produto' src={data.photo}/> : <MdImage /> }
            </div>
            <div className='product-info'>
                <p className='name'>{data?.name}</p>
            <div className='quantity'>
                <p className='label'>Qtd.</p>
                <button type='button' className='minus' onClick={()=>dispatch(removeItem(data?.id))}>-</button> <p>{data?.quantity}</p> <button type='button' className='plus' onClick={()=>dispatch(addItem(data))}>+</button>
            </div>
                <p className='price'>{data?.price ? stringToBRL(data.price) : 'Preço'}</p>
            </div>
            <button type='button' className='remove' onClick={()=>dispatch(removeAllOfKind(data?.id))}>x</button>
        </StyledCard>
    );
  }