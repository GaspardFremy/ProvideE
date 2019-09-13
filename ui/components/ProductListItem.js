import React from 'react';
import styled from 'styled-components';

import Card from '../components/Card';
import Colors from '../Colors';
import TextCustom from '../elements/TextCustom';
import { Alert, AppRegistry, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';


const ProductListItem = props =>(
        <TouchableOpacity onPress={() => props.navigation.navigate('AddProduct', {info : props})}>
            <ItemContainer style={[props.quantity > 0 ? styles.border : styles.no_border]}>
                <IconAndDateContainer>
                    <InfoContainer>
                        <QuantityNameContainer>
                            {props.quantity > 0 &&
                                <TextCustom style={{marginRight: 8}} smallBold primary> x {props.quantity}</TextCustom>
                            }
                            <TextCustom style={{textAlign: 'left'}}>{props.name}</TextCustom>
                        </QuantityNameContainer>
                        <TextCustom grey small style={{textAlign: 'left'}}>{props.price} €</TextCustom>
                    </InfoContainer>
                </IconAndDateContainer>
                <Image source={props.img} />
            </ItemContainer>
        </TouchableOpacity>
);

export default withNavigation(ProductListItem)


const MenuListItem = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const QuantityNameContainer = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const IconAndDateContainer = styled.View`
    flex-direction: row;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
`;

const ItemContainer = styled.View`
    padding-bottom: 5px;
    padding-top: 5px;
    padding-left: 15px;
    padding-right: 15px;
    flex-direction: row;
    align-items: center;
    background-color: white;

    ${props => props.quantity && `
        border-left-width: 4px;
        border-left-color: ${Colors.primary};
    `}
`;

const InfoContainer = styled.View`
    justify-content: flex-start;
`;

const styles = StyleSheet.create({
    border: {
        borderLeftWidth: 4, borderLeftColor: '#2D7BF0'
    },
    no_border: {}
});

function renderIconStatus(type) {
    switch(type) {
        case 'visa' :
            return <Image source={require('../../assets/icons/visa.png')} />;
        default :
            return;
    }
}
