import React from 'react'
import styled from 'styled-components';
import Modal from "react-native-modal";
import {connect} from 'react-redux'

import order from '../../Helpers/unique_order'

import TextInputCustom from '../elements/TextInputCustom';
import MenuHeader from '../components/MenuHeader';
import Container from '../components/Container';
import CardContainer from '../components/CardContainer';
import Card from '../components/Card';
import Button from '../elements/Button';
import TextCustom from '../elements/TextCustom';
import Colors from '../Colors';
import ListItem from '../components/ProductListItem';
import OrderPriceRow from '../components/OrderPriceRow'
import Separator from '../elements/Separator';
import { FlatList, TouchableWithoutFeedback, Image, TouchableOpacity, ScrollView, View, ListView, SectionList, Text} from 'react-native';


class DetailCurrentOrder extends React.Component {

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
                            <TextCustom title white>Détail de la commande</TextCustom>
                        </TextContainer>
                    </HeaderContainer>
                </TouchableWithoutFeedback>
            ),
        }
    };

    state = {
        isModalVisible: false,
        isModalOrderedVisible: false,
        orderName : '',
        orderIsSaved: false,
        total: 0
    };

    _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

    _toggleModalOrder = () =>
    this.setState({ isModalOrderedVisible: !this.state.isModalOrderedVisible });

    saveOrder(){
        this.setState({ isModalVisible: false });
    }

    validateOrder(){
        this.setState({ isModalOrderedVisible: true });
    }

    confirmeOrderValidation(){
        this.setState({ isModalOrderedVisible: false });
        const {navigate} = this.props.navigation;
        navigate('Home');
    }

    componentDidMount() {
        this._sumOrder();
    }

    _sumOrder() {
        let sum = 0;
        this.props.basket.forEach(function(element) {
          let sub_sum = element.price * element.quantity
          sum = sum + sub_sum;
         });

        console.log(sum);

        this.setState({
            total: sum
        });
    }


	render() {
        const {navigate} = this.props.navigation;
		return (
            <Container grey flex padding={1}>

            <View style={{flex: 1}}>
                <Card padding>
                    <Separator nomargin>DATE ET HEURE</Separator>
                    <InfoRowContainer>
                        <InfoRowText><TextCustom  small grey>Commander pour aujourd'hui</TextCustom></InfoRowText>
                        <InfoRowText><TextCustom small primary style={{marginLeft: 5}}>Modifier</TextCustom></InfoRowText>
                    </InfoRowContainer>

                    <InfoRowContainer>
                        <InfoRowText><TextCustom  small grey>Pour au plus tôt</TextCustom></InfoRowText>
                        <InfoRowText><TextCustom small primary style={{marginLeft: 5}}>Modifier</TextCustom></InfoRowText>
                    </InfoRowContainer>

                    <Separator> ARTICLES ET PRIX</Separator>

                    <FlatList
                      data={this.props.basket}
                      keyExtractor={(item) => item.id.toString()}
                      renderItem={({item}) =>
                            <OrderPriceRow data={{quantity: item.quantity, name: item.name, price: item.price}}></OrderPriceRow>
                        }
                    />

                    <TotalContainer style={{marginTop: 30}}>
                        <TotalRow><TextCustom small grey>TOTAL</TextCustom></TotalRow>
                        <TotalRow><TextCustom smallBold>{  Math.round( (this.state.total) * 10 ) / 10} €</TextCustom></TotalRow>
                    </TotalContainer>
                </Card>

                <Card padding>
                    <TextCustom small grey>Gagnez du temps la prochaine fois en enregistrant cette commande !</TextCustom>
                    <TouchableOpacity onPress={this._toggleModal}>
                        <TextCustom small primary style={{marginTop: 15}}>Enregistrer la commande</TextCustom>
                    </TouchableOpacity>
                </Card>

                    <Modal
                        isVisible={this.state.isModalVisible}
                        animationInTiming={500}
                        animationOutTiming={500}
                        backdropTransitionInTiming={1000}
                        backdropTransitionOutTiming={1000}>
                        <View style={{}}>
                            <Card padding style={{justifyContent:'center'  }}>
                            <TextCustom style={{textAlign: 'center'}}>Enregistrer la commande</TextCustom>
                                <TextCustom style={{flex: 0, alignItems: 'center', justifyContent: 'center', marginTop: 10}} small grey>Veuillez nommer votre commande pour la retrouver plus facilement : </TextCustom>


                                <TextInputCustom
                                    placeholder={'ex : Mardi midi'}
                                    name={'orderName'}
                                    />

                                <CtaContainer>
                                    <TouchableOpacity onPress={this._toggleModal}>
                                        <TextCustom alerte style={{padding: 20, paddingTop: 30}}>Annuler</TextCustom>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={ () => { this.saveOrder() } }>
                                        <TextCustom primary style={{padding: 20, paddingTop: 30}}>Enregistrer</TextCustom>
                                    </TouchableOpacity>
                                </CtaContainer>

                            </Card>
                        </View>
                    </Modal>

                    <Modal
                        isVisible={this.state.isModalOrderedVisible}
                        animationInTiming={500}
                        animationOutTiming={500}
                        backdropTransitionInTiming={1000}
                        backdropTransitionOutTiming={1000}>
                        <View style={{}}>
                            <Card padding style={{justifyContent:'center', marginBottom: 10 }}>
                            <TextCustom subtitle style={{textAlign: 'center', marginBottom: 30}}>Commande effectuée</TextCustom>
                            <View style={{flex: 0,justifyContent: 'center', alignItems: 'center', marginBottom: 30 }}>
                                <Image  source={require('../../assets/icons/validated.png')} />
                            </View>
                            <TextCustom style={{textAlign:'center', marginBottom: 30}} small grey>Vous recevrez une notification lorsqu’elle sera acceptée</TextCustom>
                            <TouchableOpacity onPress={ () => { this.confirmeOrderValidation() } }>
                                <TextCustom subtitle primary style={{textAlign:'center'}}>Retour à l’acceuil</TextCustom>
                            </TouchableOpacity>
                            </Card>
                        </View>
                    </Modal>


            </View>

                <View style={{marginBottom: 10}}>
                    <Button  onPress={ () => { this.validateOrder() } }>Valider la commande</Button>
                </View>

			</Container>

		);
	}
}



const CtaContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
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


const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => { dispatch(action) }
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailCurrentOrder)
