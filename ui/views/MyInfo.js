import React from 'react'
import styled from 'styled-components';

import MenuHeader from '../components/MenuHeader';
import Card from '../components/Card';
import CardContainer from '../components/CardContainer';
import TextCustom from '../elements/TextCustom';
import TextInputCustom from '../elements/TextInputCustom';
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
                            <TextCustom title white>Mes informations</TextCustom>
                        </TextContainer>
                    </HeaderContainer>
                </TouchableWithoutFeedback>
            ),
        }
    };

	render() {
		return (
            <CardContainer>
                <Card>
                    <TextInputCustom placeholder={'test@gmail.com'} label={'Addresse mail'}/>
                    <TextInputCustom placeholder={'Théâtre de L\' Oeuvre'} label={'Raison Sociale'}/>
                    <TextInputCustom placeholder={'0161443119'} label={'Téléphone'}/>
                    <TextInputCustom placeholder={'56 rue de Clichy, 7509, Paris'} label={'Addresse'}/>
                    <TextCustom style={{margin:10, marginBottom: 25}} primary>Modifier le mot de passe</TextCustom>
                </Card>

                <Button>Enregistrer</Button>
			</CardContainer>
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
