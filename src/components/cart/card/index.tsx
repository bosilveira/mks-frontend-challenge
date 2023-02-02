import { StyledCard } from './styled';
import { MdImage } from 'react-icons/md';

interface ShopCardInterface {
    id?: number,
    name?: string,
    brand?: string,
    description?: string,
    photo?: string;
    price?: string
}

export default function CartCard( data: ShopCardInterface) {

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
                { data.photo ? <img className='product' alt='produto' src={data.photo}/> : <MdImage /> }
            </div>
            <div className='product-info'>
                <p className='name'>{data.name || 'Produto'}</p>
            <div className='quantity'>
                <p className='label'>Qtd.</p>
                <button type='button' className='minus'>-</button> <p>1</p> <button type='button' className='plus'>+</button>
            </div>
                <p className='price'>{data.price ? stringToBRL('2499.00') : 'Preço'}</p>
            </div>
            <button type='button' className='remove'>x</button>
        </StyledCard>
    );
  }