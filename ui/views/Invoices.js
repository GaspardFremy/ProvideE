import React from 'react'
import styled from 'styled-components';
import data_invoices from '../../Helpers/data_invoices'


import MenuHeader from '../components/MenuHeader';
import Container from '../components/Container';
import Button from '../elements/Button';
import TextCustom from '../elements/TextCustom';
import Colors from '../Colors';
import ListItem from '../components/ListItem';
import { FlatList, TouchableWithoutFeedback, Image, TouchableOpacity } from 'react-native';

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
                        <Image source={require('../../assets/icons/white_back_arrow.png')}/>
                        <TextContainer>
                            <TextCustom title white>Factures</TextCustom>
                        </TextContainer>
                    </HeaderContainer>
                </TouchableWithoutFeedback>
            ),
        }
    };

	render() {
		return (
            <Container>
                <FlatList
                  data={data_invoices}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({item}) =>
                    <ListItem
                        title={item.date}
                        subtitle={item.status}
                        status={item.status}
                        id={item.id}
                        nextView={'InvoiceDetail'}
                        navigation={this.navigation}
                    />}
                />
            </Container>
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
