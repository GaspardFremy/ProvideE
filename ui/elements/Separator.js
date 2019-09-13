import React from 'react';
import styled from 'styled-components';
import Colors from '../Colors.js'
import TextCustom from './TextCustom'
import { Alert, AppRegistry, StyleSheet, View } from 'react-native';


const Separator = props => (
    <SeparatorContainer {...props}>
        <SeparatorText {...props}>{props.children}</SeparatorText>
    </SeparatorContainer>
);

export default Separator;

const SeparatorContainer = styled.View`
	width: auto;
	height: 40px;
	padding-top: 10px;
    margin-top: 20px;
    background-color: white;
    border-top-width: 1;
    border-top-color: ${Colors.lightgrey};

    ${props => props.nomargin && `
        margin-top: 0px;
        padding-top: 0px;
    `}
`;

const SeparatorText = styled(TextCustom)`
    text-align: center;
    font-size: 15px;
    color: ${Colors.lightgrey};
`;
