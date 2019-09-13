import React from 'react'
import styled from 'styled-components';
import all_orders from '../../Helpers/all_orders'

import MenuHeader from '../components/MenuHeader';
import TextCustom from '../elements/TextCustom';
import Colors from '../Colors';
import ListItem from '../components/ListItem';
import { FlatList, Button, TouchableWithoutFeedback, Image, TouchableOpacity, StatusBar } from 'react-native';

export default class Menu extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerStyle: {
                height: 80,
                backgroundColor: Colors.primary
            },
            headerTintColor: "#FFFFFF",
            headerLeft: (
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <HeaderContainer>
                        <StatusBar barStyle="light-content" />
                        <Image source={require('../../assets/icons/white_back_arrow.png')}/>
                        <TextContainer>
                            <TextCustom title white>Commandes</TextCustom>
                        </TextContainer>
                    </HeaderContainer>
                </TouchableWithoutFeedback>
            ),
        }
    };

	render() {
		return (
            <OrderContainer>
                <FlatList
                  data={all_orders}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({item}) =>
                    <ListItem
                        title={item.dueDate}
                        subtitle={item.status}
                        status={item.status}
                        id={item.id}
                        nextView={'OrderDetail'}
                        navigation={this.navigation}
                    />}
                />
            </OrderContainer>
		);
	}
}

const MenuListItem = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 20px;
`;

const MenuListContainer = styled.View`
    background-color: white;
    border-radius: 7px;
    margin: 10px;
    box-shadow: 0px 1px 2px #CBCBCB;
`;

const Container = styled.View`
    background-color: ${Colors.background};
    flex: 1;
    padding-top: 20px;
`;

const OrderContainer = styled.View`
    padding: 30px;
`;

const TextContainer = styled.View`
    flex-direction: column;
    flex: 1;
    justify-content: flex-end;
    align-items: flex-start;
    text-align: left;
    padding-left: 20px;

`;

const HeaderContainer = styled.View`
    flex-direction: row;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;

`;
