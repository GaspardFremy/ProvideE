import React from 'react'
import styled from 'styled-components';
import {connect} from 'react-redux'

import pain from '../../Helpers/products_pains'
import pain_spéciaux from '../../Helpers/products_painsspeciaux'
import viennoiseries from '../../Helpers/products_viennoiseries'


import MenuHeader from '../components/MenuHeader';
import Container from '../components/Container';
import CardContainer from '../components/CardContainer';
import Card from '../components/Card';
import Button from '../elements/Button';
import TextCustom from '../elements/TextCustom';
import Colors from '../Colors';
import ListItem from '../components/ProductListItem';
import { FlatList, TouchableWithoutFeedback, Image, TouchableOpacity, ScrollView, View, ListView, SectionList, Text} from 'react-native';



class MakeAnOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'pain' : pain,
            'pain_spéciaux' : pain_spéciaux,
            'viennoiseries' : viennoiseries,
            'basket' : this.props.basket
        }

    }

    componentDidMount() {
        basket = this.state.basket;

        array1 = this.state.pain;
        array2 = this.state.pain_spéciaux;
        array3 = this.state.viennoiseries;

        array1.map(function(x){
        var result=basket.filter(a1=> a1.id==x.id);
        if(result.length>0) {
        x.quantity = result[0].quantity;
        }
        return x;  })

        array2.map(function(x){
        var result=basket.filter(a1=> a1.id==x.id);
        if(result.length>0) {
        x.quantity = result[0].quantity;
        }
        return x;  })

        array3.map(function(x){
        var result=basket.filter(a1=> a1.id==x.id);
        if(result.length>0) {
        x.quantity = result[0].quantity;
        }
        return x;  })
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
                        <Image source={require('../../assets/icons/white_back_arrow.png')}/>
                        <TextContainer>
                            <TextCustom title white>Nouvelle Commande</TextCustom>
                        </TextContainer>
                    </HeaderContainer>
                </TouchableWithoutFeedback>
            ),
        }
    };

	render() {
        const {navigate} = this.props.navigation;
        console.log("component is rendered");

        basket = this.state.basket;

        array1 = this.state.pain;
        array2 = this.state.pain_spéciaux;
        array3 = this.state.viennoiseries;

        array1.map(function(x){
        var result=basket.filter(a1=> a1.id==x.id);
        if(result.length>0) {
        x.quantity = result[0].quantity;
        }})

        array2.map(function(x){
        var result=basket.filter(a1=> a1.id==x.id);
        if(result.length>0) {
        x.quantity = result[0].quantity;
        }})

        array3.map(function(x){
        var result=basket.filter(a1=> a1.id==x.id);
        if(result.length>0) {
        x.quantity = result[0].quantity;
        }})


		return (
            <View style={{flex: 1}}>
            <View style={{marginBottom: 10, paddingBottom: 10}}>
                <Container grey>
                        <SectionList stickySectionHeadersEnabled={false}
                          renderItem={({item, index, section}) =>
                              <ListItem
                                    name={item.name}
                                    price={item.price}
                                    status={item.status}
                                    id={item.id}
                                    img={item.img}
                                    navigation={this.navigation}
                                    quantity={item.quantity}
                                    description={item.description}
                                    basket={this.props.basket}
                                />
                            }
                          renderSectionHeader={({section: {title}}) => (
                            <CategoryHeaders>
                                <TextCustom title>{title}</TextCustom>
                            </CategoryHeaders>

                          )}
                          sections={[
                            {title: 'pains Classiques', data: this.state.pain},
                            {title: 'pains Spéciaux', data: this.state.pain_spéciaux},
                            {title: 'Viennoiseries', data: this.state.viennoiseries}
                          ]}
                          keyExtractor={(item, index) => item + index}
                        />
                </Container>
                <BottomSpacer>
                    <TextCustom>desdfljn</TextCustom>
                </BottomSpacer>
            </View>
            <View style={{position: 'absolute', left: 0, right: 0, bottom: 0,}}>
                <Button onPress={() => navigate('DetailCurrentOrder')}>Voir la commande - {this.props.sum}</Button>
            </View>
        </View>

		);
	}
}

const CategoryHeaders = styled.View`
    background-color: ${Colors.background};
    padding-top : 15px;
    padding-bottom : 15px;
`;

const CategoriesContainer = styled.View`
    background-color: white;
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

const BottomSpacer = styled.View`
    margin-bottom: 20px;
`;

const HeaderContainer = styled.View`
    flex-direction: row;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
`;

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(MakeAnOrder)
