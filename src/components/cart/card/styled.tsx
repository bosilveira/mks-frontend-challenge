import styled from 'styled-components'

export const StyledCard = styled.div`
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

    .remove {
        position: absolute;
        width: 30px;
        height: 30px;
        top: 0;
        right: 0;
        transform: translate(50%,-50%);
        border-radius: 50%;
        border: none;
        background-color: #000000;
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
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;


        .name {
            font-family: 'Montserrat', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color: #2C2C2C;
            width: 30%;
            text-overflow: ellipsis;
            overflow: hidden;
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
                font-style: normal;
                font-weight: 400;
                font-size: 10px;
                color: #000000;
            }
        }
    
        .price {
            background-color: #ffffff;
            border-radius: 5px;
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            color: #000000;
        }

    }

`
