import React from 'react';
import styled from 'styled-components';
import Colors from '../Colors.js'


const Container = props => (
    <ContainerComp {...props}>
        {props.children}
    </ContainerComp>
);

export default Container;

const ContainerComp = styled.View`
    padding: 25px;
    padding-top: 0px;

    ${props => props.padding && `
        padding: ${props.padding + 'px'};
        padding-top: 0px;
    `}

    ${props => props.grey && `
        background-color: ${Colors.background}
    `}

    ${props => props.flex && `
        flex: 1
    `}
`;
