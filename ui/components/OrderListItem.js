import React from 'react';
import styled from 'styled-components';
import TextCustom from '../elements/TextCustom';


const OrderPriceRow = props => (
    <PriceRowContainer>
        <QuantityNameContainer>
            <PriceRowText>
                <TextCustom  small grey>{props.data.quantity} X </TextCustom>
            </PriceRowText>
            <PriceRowText style={{alignItems:'flex-start'}}><TextCustom small>{props.data.name}</TextCustom></PriceRowText>
        </QuantityNameContainer>
        <PriceRowText style={{flex: 1, alignItems:'flex-end'}}><TextCustom small> {Math.round(props.data.price * props.data.quantity * 100) / 100 } €</TextCustom></PriceRowText>
    </PriceRowContainer>
);

export default OrderPriceRow;


const PriceRowContainer = styled.View`
    flex-direction: row;
    align-self: stretch;
    margin-top: 10px;
    justify-content: space-between
`;

const QuantityNameContainer = styled.View`
    flex-direction: row;
    flex: 1;
    justify-content: flex-start;
`;

const PriceRowText = styled.View`
    /* flex: 1; */
    /* align-self: stretch; */
`;
