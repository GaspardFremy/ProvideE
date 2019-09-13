import React from 'react'
import styled from 'styled-components';
import {connect} from 'react-redux'

import order from '../../Helpers/unique_order'

import MenuHeader from '../components/MenuHeader';
import Container from '../components/Container';
import CardContainer from '../components/CardContainer';
import Card from '../components/Card';
import Button from '../elements/Button';
import TextCustom from '../elements/TextCustom';
import Colors from '../Colors';
import ListItem from '../components/ProductListItem';
import { FlatList, TouchableWithoutFeedback, Image, TouchableOpacity, ScrollView, View, ListView, SectionList, Text} from 'react-native';


class AddProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'product' : '',
        }
    }

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
                        <Image source={require('../../assets/icons/white_cancel.png')}/>
                        <TextContainer>
                            <TextCustom title white>Sélection de l'article</TextCustom>
                        </TextContainer>
                    </HeaderContainer>
                </TouchableWithoutFeedback>
            ),
        }
    };

    componentDidMount(){
        this.setState({
            product: this.props.navigation.state.params.info
        });
    }

    incrementeDecremante(operator){
        var product = {...this.state.product}
        if (operator === "add") { product.quantity ++ ;}
        else { if (product.quantity > 0) product.quantity -- ;}
        this.setState({product})
    }

    AddProductTobasket(){
        const action = { type: "EDIT_PRODUCT", value: this.state.product };
        this.props.dispatch(action)
        const {navigate} = this.props.navigation;
        navigate("MakeAnOrder");
    }

	render() {
        const {navigate} = this.props.navigation;
		return (
            <Container grey flex padding={1}>
            <View style={{flex: 1}}>
                <Card>
                    <ProductTextContainer>
                        <QuantityNameContainer style={{marginBottom: 5}}>
                            <TextCustom style={{textAlign: 'left'}}>{this.state.product.name}</TextCustom>
                            <TextCustom grey small style={{textAlign: 'left', marginLeft:10}}>{this.state.product.price}€</TextCustom>
                        </QuantityNameContainer>
                            <TextCustom grey style={{marginTop: 10, marginBottom: 100}}>{this.state.product.description}</TextCustom>
                        <QuantitySelector>

                            <TouchableOpacity onPress={() => this.incrementeDecremante("remove")}>
                                <Image style={{marginRight: 60}} source={require('../../assets/icons/minus.png')}/>
                            </TouchableOpacity>

                            <TextCustom fatTitle>{this.state.product.quantity}</TextCustom>

                            <TouchableOpacity onPress={() => this.incrementeDecremante("add")}>
                                <Image style={{marginLeft: 60}} source={require('../../assets/icons/plus.png')}/>
                            </TouchableOpacity>

                        </QuantitySelector>

                    </ProductTextContainer>
                </Card>
            </View>

                <View style={{marginBottom: 10}}>
                    <Button  onPress={() => this.AddProductTobasket() }>Ajouter l'article</Button>
                </View>

			</Container>

		);
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => { dispatch(action) }
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)

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

const QuantitySelector = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const QuantityNameContainer = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const ProductTextContainer = styled.View`
    padding: 30px;
`;
