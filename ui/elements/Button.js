import React from 'react';
import styled from 'styled-components';
import Colors from '../Colors.js'
import TextCustom from './TextCustom'

const Button = props => (
	<ButtonContainer {...props} onPress={props.onPress}>
		<ButtonText {...props} title>{props.children}</ButtonText>
	</ButtonContainer>
);

export default Button;

const ButtonContainer = styled.TouchableOpacity`
	width: auto;
	height: 40px;
	padding: 10px;
	background-color: ${Colors.primary};
    border-radius : 10px;
    margin: 10px;

    ${props => props.secondary && `
        background-color: ${Colors.secondary};
    `}

    ${props => props.alerte && `
        background-color: ${Colors.alerte};
    `}

    ${props => props.outlined && `
        background-color: white;
        border: 1px solid ${Colors.primary}
    `}

    ${props => props.outlined && props.secondary && `
        background-color: white;
        border: 1px solid ${Colors.secondary}
    `}

    ${props => props.outlined && props.alerte && `
        background-color: white;
        border: 1px solid ${Colors.alerte}
    `}

	${props => props.simple && `
		background-color: transparent;
        border: 0px;
    `}

	${props => props.category && `
		height: 40px;
		padding: 10px;
		background-color: ${Colors.primary};
	    border-radius : 20px;
    `}

`;

const ButtonText = styled(TextCustom)`
    text-align: center;
    font-size: 15px;
    color: white;

    ${props => props.outlined && props.primary && `
        color: ${Colors.primary}
    `}

    ${props => props.outlined && props.secondary && `
        color: ${Colors.secondary}
    `}

    ${props => props.outlined && props.alerte && `
        color: ${Colors.alerte}
    `}

	${props => props.simple && props.primary && `
        color: ${Colors.primary}
    `}


`;
