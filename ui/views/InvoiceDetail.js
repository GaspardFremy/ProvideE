import React from 'react'
import styled from 'styled-components';

import order from '../../Helpers/unique_order'

import MenuHeader from '../components/MenuHeader';
import OrderPriceRow from '../components/OrderPriceRow'
import TextCustom from '../elements/TextCustom';
import Separator from '../elements/Separator';
import Button from '../elements/Button';
import Colors from '../Colors';
import { FlatList, TouchableWithoutFeedback, Image, TouchableOpacity, View, ActivityIndicator, TextInput } from 'react-native';
import { Formik } from 'formik';

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
                            <TextCustom title white>Détail Commande</TextCustom>
                        </TextContainer>
                    </HeaderContainer>
                </TouchableWithoutFeedback>
            ),
        }
    };

	render() {
		return (

            <OrderContainer>
                <Separator>INFO GÉNÉRALES</Separator>
                <InfoRowContainer>
                    <InfoRowText><TextCustom  small grey>N°FACTURE</TextCustom></InfoRowText>
                    <InfoRowText><TextCustom small style={{marginLeft: 5}}>{order.order_number}</TextCustom></InfoRowText>
                </InfoRowContainer>

                <InfoRowContainer>
                    <InfoRowText><TextCustom  small grey>STATUT</TextCustom></InfoRowText>
                    <InfoRowText><TextCustom small style={{marginLeft: 5}}>{order.status}</TextCustom></InfoRowText>
                </InfoRowContainer>

                <InfoRowContainer>
                    <InfoRowText><TextCustom  small grey>CRÉER LE</TextCustom></InfoRowText>
                    <InfoRowText><TextCustom small style={{marginLeft: 5}}>{order.created_at}</TextCustom></InfoRowText>
                </InfoRowContainer>

                <InfoRowContainer style={{marginBottom: 5}}>
                    <InfoRowText><TextCustom  small grey>ÉCHEANCE</TextCustom></InfoRowText>
                    <InfoRowText><TextCustom small style={{marginLeft: 5}}>{order.due_date}</TextCustom></InfoRowText>
                </InfoRowContainer>

                <Separator> ARTICLES ET PRIX</Separator>

                <FlatList
                  data={order.order}
                  keyExtractor={(item) => item.article_name}
                  renderItem={({item}) =>
                        <OrderPriceRow data={{quantity: item.article_quantity, name: item.article_name, price: item.article_price}}></OrderPriceRow>
                    }
                />

                <OrderPriceRow data={{quantity: 13, name: 'Baguette Tradition', price: 1.2}}></OrderPriceRow>


                <TotalContainer style={{marginTop: 30}}>
                    <TotalRow><TextCustom small grey>TOTAL</TextCustom></TotalRow>
                    <TotalRow><TextCustom small>369,6 €</TextCustom></TotalRow>
                </TotalContainer>

                <TotalContainer style={{marginTop: 10}}>
                    <TotalRow><TextCustom small grey>RÉDUCTION -10%</TextCustom></TotalRow>
                    <TotalRow><TextCustom small>-36,96 €</TextCustom></TotalRow>
                </TotalContainer>

                <TotalContainer style={{marginTop: 10}}>
                    <TotalRow><TextCustom small grey>TOTAL APRÈS RÉDUCTION</TextCustom></TotalRow>
                    <TotalRow><TextCustom title>332,64 €</TextCustom></TotalRow>
                </TotalContainer>


                <View style={{marginTop: 30}}>
                    <Button primary>Régler</Button>
                    <Button primary outlined>recevoir un PDF par mail</Button>
                </View>

            </OrderContainer>
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

const OrderContainer = styled.View`
    padding: 30px;
    padding-top: 0px;
`;

const TotalContainer = styled.View`
    flex-direction: row;
    margin-top: 10px;
    justify-content: space-between;
`;

const TotalRow = styled.View`

`;

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

const InfoRowContainer = styled.View`
    flex-direction: row;
    align-self: stretch;
    margin-top: 10px;
`;

const InfoRowText = styled.View`
    flex: 1;
    align-self: stretch;
`;
