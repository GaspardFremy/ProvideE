import React from 'react'
import styled from 'styled-components';

import Card from '../components/Card';
import Container from '../components/Container';
import MenuHeader from '../components/MenuHeader';
import TextCustom from '../elements/TextCustom';
import Colors from '../Colors';
import { Button, TouchableWithoutFeedback, Image, TouchableOpacity } from 'react-native';

export default class Menu extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerStyle: {
                height: 80,
                backgroundColor: 'white'
            },
            headerTintColor: Colors.primary,
            headerLeft: (
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <HeaderContainer>
                        <Image source={require('../../assets/icons/back_arrow.png')}/>
                        <TextContainer>
                            <TextCustom title>Compte</TextCustom>
                            <TextCustom grey style={{marginTop: 4}}>Théâtre de l'Oeuvre</TextCustom>
                        </TextContainer>
                    </HeaderContainer>
                </TouchableWithoutFeedback>
            ),
        }
    };

	render() {
        const {navigate} = this.props.navigation;

		return (
			<Container padding={1} grey flex>
                <Card>
                    <TouchableOpacity onPress={() => navigate('Orders')}>
                        <MenuListItem>
                            <Image source={require('../../assets/icons/order.png')}/>
                            <TextCustom style={{marginLeft: 20}}>Commandes</TextCustom>
                        </MenuListItem>
                    </TouchableOpacity>
                </Card>

                <Card>
                    <TouchableOpacity onPress={() => navigate('Invoices')}>
                        <MenuListItem>
                            <Image source={require('../../assets/icons/invoice.png')}/>
                            <TextCustom style={{marginLeft: 20}}>Factures</TextCustom>
                        </MenuListItem>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigate('Payment')}>
                        <MenuListItem>
                            <Image source={require('../../assets/icons/card.png')}/>
                            <TextCustom style={{marginLeft: 20}}>Moyens de paiement</TextCustom>
                        </MenuListItem>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigate('MyInfo')}>
                        <MenuListItem>
                            <Image source={require('../../assets/icons/info.png')}/>
                            <TextCustom style={{marginLeft: 20}}>Mes informations</TextCustom>
                        </MenuListItem>
                    </TouchableOpacity>
                </Card>

                <Card>
                    <TouchableOpacity>
                        <MenuListItem>
                            <TextCustom style={{marginLeft: 20}}>A propos de</TextCustom>
                        </MenuListItem>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <MenuListItem>
                            <TextCustom style={{marginLeft: 20}}>Déconnexion</TextCustom>
                        </MenuListItem>
                    </TouchableOpacity>
                </Card>
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
