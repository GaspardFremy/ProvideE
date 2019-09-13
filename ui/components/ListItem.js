import React from 'react';
import styled from 'styled-components';
import Colors from '../Colors';
import TextCustom from '../elements/TextCustom';
import { Alert, AppRegistry, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

const ListItem = props =>(
    <TouchableOpacity onPress={() => props.navigation.navigate(props.nextView, {id : props.id})}>
        <ItemContainer>
            <IconAndDateContainer>
                {renderIconStatus(props.status)}
                <DateContainer>
                    <TextCustom>{props.title}</TextCustom>
                    <TextCustom grey small style={{textAlign: 'left'}}>
                        {props.subtitle}
                        {props.status === 'saved' ? ' articles' : ''}
                    </TextCustom>
                </DateContainer>
            </IconAndDateContainer>
            <Image
                source={require('../../assets/icons/right_arrow.png')} />
        </ItemContainer>
    </TouchableOpacity>

);

export default withNavigation(ListItem);


const IconAndDateContainer = styled.View`
    flex-direction: row;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
`;

const ItemContainer = styled.View`
    padding-top: 15px;
    padding-bottom: 15px;
    flex-direction: row;
    align-items: center;
`;

const DateContainer = styled.View`
    margin-left: 20px;
`;

_displayDetails = (nextView, id, nav) => {
    nav.navigate(nextView, {id: id})
}

function renderIconStatus(status) {
    switch(status) {
        case 'pending' :
            return <Image source={require('../../assets/icons/pending.png')} />;
        case 'saved' :
            return <Image source={require('../../assets/icons/payed.png')} />;
        case 'payed' :
            return <Image source={require('../../assets/icons/payed.png')} />;
        case 'accepted' :
            return <Image source={require('../../assets/icons/accepted.png')} />;
        case 'done' :
            return <Image source={require('../../assets/icons/payed.png')} />;
        case 'ready' :
            return <Image source={require('../../assets/icons/ready.png')} />;
        case 'late' :
            return <Image source={require('../../assets/icons/late.png')} />;
        case 'ongoing' :
            return <Image source={require('../../assets/icons/ongoing.png')} />;
        case 'canceled' :
            return <Image source={require('../../assets/icons/canceled.png')} />;
        default :
            return;
    }
}
