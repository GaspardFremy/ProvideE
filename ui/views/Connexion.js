import React from 'react'
import styled from 'styled-components';

import CardContainer from '../components/CardContainer';
import Card from '../components/Card';
import TextCustom from '../elements/TextCustom';
import Button from '../elements/Button';
import Colors from '../Colors';
import TextInputCustom from '../elements/TextInputCustom'

import { Image, TouchableOpacity } from 'react-native';

export default class Connexion extends React.Component {
    static navigationOptions = {
        header: null
    }
	render() {
		return (
            <CardContainer>
                <LogoContainer>
                    <Image source={require('../../assets/logo.png')} />
                </LogoContainer>
                <Card style={{flex:1,  justifyContent: 'center'}}>
                    <TextInputCustom placeholder={'Mot de passe'}/>
                    <TextInputCustom placeholder={'Addresse mail'}/>
                    <TouchableOpacity>
                        <TextCustom primary style={{margin: 20, marginLeft:8}}>Mot de passe oublié ?</TextCustom>
                    </TouchableOpacity>

                    <Button>Connexion</Button>
                </Card>
            </CardContainer>
		);
	}
}

const LogoContainer = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    marginBottom: 30px;
    flex: 0.5;
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
