import React from 'react';
import styled from 'styled-components';
import Colors from '../Colors.js'

const TextCustom = styled.Text`
    font-size: 17;
    font-family: 'Muli';
    color: ${Colors.lightblack};

    /* FONT SIZE AND WEIGHT */
    ${props => props.small && `
        font-size: 15;
    `}

    ${props => props.smallBold && `
        font-size: 15;
        font-family: 'Muli-Bold';
    `}

    ${props => props.subtitle && `
        font-size: 20;
    `}

    ${props => props.title && `
        font-size: 20;
        font-family: 'Muli-Bold';
    `}

    ${props => props.fatTitle && `
        font-size: 24;
        font-family: 'Muli-Bold';
    `}

    /* COLOR THEME */
    ${props => props.primary && `
        color: ${Colors.primary};
    `}

    ${props => props.grey && `
        color: ${Colors.lightgrey};
    `}

    ${props => props.secondary && `
        color: ${Colors.secondary};
    `}

    ${props => props.success && `
        color: ${Colors.success};
    `}

    ${props => props.alerte && `
        color: ${Colors.alerte};
    `}

    ${props => props.white && `
        color: #FFFFFF;
    `}
`;

export default TextCustom;



// <CategoriesContainer>
//     <ScrollView horizontal={true}>
//         <Button subtitle primary category>Pains Classiques</Button>
//         <Button subtitle primary simple>Pains Spéciaux</Button>
//         <Button subtitle primary simple>Viennoiseries</Button>
//         <Button subtitle primary simple>Pâtisseries</Button>
//     </ScrollView>
// </CategoriesContainer>
