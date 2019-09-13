import React from 'react';
import styled from 'styled-components';
import Colors from '../Colors.js';
import TextCustom from './TextCustom';


const TextInputCustom = props => (
    <TextCustomContainer {...props}>
        <TextCustom small grey>{props.label}</TextCustom>
        <Input
            placeholder={props.placeholder}
            value={props.value}
            />
    </TextCustomContainer>
);

export default TextInputCustom;

const Input = styled.TextInput`
    font-size: 17px;
    font-family: 'Muli';
    color: ${Colors.lightgrey};
    width: auto;
    padding-top: 8px;
    padding-bottom: 8px;
    border-bottom-width: 1;
    border-bottom-color: ${Colors.lightgrey};
`;

const TextCustomContainer = styled.View`
    flex-direction: column;
    margin: 10px;
    margin-bottom: 10px;

    ${props => props.noMargin && `
        margin : 0px;
    `}
`;
