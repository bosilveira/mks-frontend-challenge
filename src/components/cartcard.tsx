import styled from 'styled-components'
import { MdImage } from 'react-icons/md';


const StyledDiv = styled.div`
    position: relative;
    width: 100%;
    height: 95px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;

    button.remove {
        position: absolute;
        width: 18px;
        height: 30px;
        top: 0;
        right: 0;
        transform: translate(50%,-50%);
        border-radius: 50%;
        border: none;
        background-color: #000000;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        color: #FFFFFF;
    }

    .product-img {
        width: 90px;

        .product {
            margin: 18px;
            width: 60px;
            height: 60px;
            object-fit: contain;
          }
    
        svg {
            margin: 18px;
            width: 60px;
            height: 60px;
            object-fit: contain;
            color: gray;
        }
    }


    .product-info {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-right: 18px;


        .name {
            font-family: 'Montserrat', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color: #2C2C2C;
        }

        .quantity {
            position: relative;
            width: auto;
            height: 30px;
            border-radius: 4px;
            border: 1px solid #BFBFBF;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 1px;
            font-family: 'Montserrat', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color: #000000;
    
            .minus, .plus {
                position: relative;
                width: 20px;
                height: 100%;
                border-radius: 8px;
                border: none;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                background-color: #FFFFFF;
                color: #000000;
            }
    
            .label {
                position: absolute;
                top: 0;
                left: 0;
                transform: translateY(-150%);
                font-family: 'Montserrat', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 10px;
                color: #000000;
            }
        }
    
        .price {
            background-color: #ffffff;
            border-radius: 5px;
            font-family: 'Montserrat', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            color: #000000;
        }

    }

`


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
      <StyledDiv>
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
      </StyledDiv>
    );
  }