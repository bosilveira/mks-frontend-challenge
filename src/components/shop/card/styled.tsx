import styled from 'styled-components'

export const StyledCard = styled.div`
    position: relative;
    width: 218px;
    height: 285px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    background-color: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;

    .product {
        margin: 18px auto 0 auto;
        width: 210px;
        height: 138px;
        object-fit: contain;
      }

    svg {
        margin: 48px auto 0 auto;
        width: 210px;
        height: 69px;
        object-fit: contain;
        color: gray;
    }

    .card-info {
        width: 100%;
        position: absolute;
        top: 169px;
        padding: 0 12px;
        display: flex;
        flex-direction: column;
        gap: 9px;

        div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }

    .name {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #2C2C2C;
        height: 10%;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .price {
        height: 26px;
        padding: 4px 8px;
        background-color: #373737;
        border-radius: 5px;
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 15px;
        color: #ffffff;
    }

    .description {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 10px;
        line-height: 12px;
        color: #2C2C2C;
        height: 10%;
        text-overflow: ellipsis;
        overflow: hidden;

    }

    button {
        position: relative;
        width: 100%;
        height: 32px;
        border-radius: 0px 0px 8px 8px;
        border: none;
        display: flex;
        flex-direction: row;
        gap: 14px;
        justify-content: center;
        align-items: center;
        background-color: #0F52BA;
        text-transform: uppercase;
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        color: #FFFFFF;

        shopping-bag {
            width: 12px;
            height: 13.5px;
            color: white;
        }
    }


`
