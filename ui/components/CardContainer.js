import React from 'react';
import styled from 'styled-components';
import Colors from '../Colors.js'

const CardContainer = props => (
    <ContainerComp>
        {props.children}
    </ContainerComp>
);

export default CardContainer;

const ContainerComp = styled.View`
    background-color: ${Colors.background};
    padding-top: 20px;
`;
