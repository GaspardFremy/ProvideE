import React from 'react';
import styled from 'styled-components';
import Colors from '../Colors.js'


const Card = props => (
    <CardContainer {...props}>
        {props.children}
    </CardContainer>
);

export default Card;

const MenuListItem = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 20px;
`;

const CardContainer = styled.View`
    background-color: white;
    border-radius: 7px;
    margin: 10px;
    box-shadow: 0px 1px 2px #CBCBCB;
    
    ${props => props.padding && `
        padding: 20px;
    `}

    ${props => props.noMargin && `
        margin-left: 0px;
        margin-right: 0px;
    `}
`;
