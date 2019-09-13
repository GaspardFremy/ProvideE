import React from 'react'
import styled from 'styled-components';
import payment_cards from '../../Helpers/payment_cards'


import Card from '../components/Card';
import Container from '../components/Container';
import MenuHeader from '../components/MenuHeader';
import TextCustom from '../elements/TextCustom';
import Button from '../elements/Button';
import Colors from '../Colors';
import PaymentListItem from '../components/PaymentListItem';
import { FlatList, TouchableWithoutFeedback, Image, TouchableOpacity, View } from 'react-native';

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
                            <TextCustom title white>Ajouter une CB</TextCustom>
                        </TextContainer>
                    </HeaderContainer>
                </TouchableWithoutFeedback>
            ),
        }
    };

	render() {
		return (

            <Container grey flex padding={1}>
                <FlatList
                  data={payment_cards}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({item}) =>
                    <PaymentListItem
                        title={item.name}
                        subtitle={item.number}
                        type={item.type}
                    />}
                />

                <View style={{marginBottom: 10}}>
                    <Button>Enregistrer cette carte</Button>
                </View>

			</Container>
		);
	}
}

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
