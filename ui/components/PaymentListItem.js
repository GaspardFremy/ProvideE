import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Colors from '../Colors';
import TextCustom from '../elements/TextCustom';
import { Alert, AppRegistry, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

const PaymentListItem = props =>(
        <TouchableOpacity>
            <Card>
                <ItemContainer>
                    <IconAndDateContainer>
                        <Image source={require('../../assets/icons/visa.png')} />
                        <InfoContainer>
                            <TextCustom subtitle style={{textAlign: 'left'}}>{props.title}</TextCustom>
                            <TextCustom grey small style={{textAlign: 'left'}}>{props.subtitle}</TextCustom>
                        </InfoContainer>
                    </IconAndDateContainer>
                    <Image
                        source={require('../../assets/icons/right_arrow.png')} />
                </ItemContainer>
            </Card>
        </TouchableOpacity>
);

export default PaymentListItem;

const MenuListItem = styled.View`
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
    padding: 15px;
    flex-direction: row;
    align-items: center;
`;

const InfoContainer = styled.View`
    margin-left: 20px;
    justify-content: flex-start;
`;

function renderIconStatus(type) {
    switch(type) {
        case 'visa' :
            return <Image source={require('../../assets/icons/visa.png')} />;
        default :
            return;
    }
}
