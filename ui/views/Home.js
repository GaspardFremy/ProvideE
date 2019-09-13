import React from 'react';
import styled from 'styled-components';

import {connect} from 'react-redux'

import Button from '../elements/Button';
import TextCustom from '../elements/TextCustom';
import ListItem from '../components/ListItem';
import Separator from '../elements/Separator';
import saved_orders from '../../Helpers/saved_orders'
import pending_orders from '../../Helpers/pending_orders'
import {
	View,
	Image,
	SafeAreaView,
	Text,
	TouchableOpacity,
	FlatList,
	ScrollView
} from 'react-native'

class Home extends React.Component {
    static navigationOptions = {
        header: null
    }
	render() {
		console.log('props :')
        console.log(this.props)
        const {navigate} = this.props.navigation;
		return (
			<ScrollView>
				<HomeContainer>
					<HeaderContainer>
						<TextCustom title>Maison Landemaine</TextCustom>
						<TouchableOpacity onPress={() => navigate('Menu')}>
							<Image source={require('../../assets/icons/profil.png')} />
						</TouchableOpacity>
					</HeaderContainer>

					<BodyContainer>
						<Button onPress={() => navigate('MakeAnOrder')} primary outlined>Nouvelle Commande</Button>

						<Separator>COMMANDES EN COURS</Separator>

						<FlatList
						  data={pending_orders}
						  keyExtractor={(item) => item.id.toString()}
						  renderItem={({item}) =>
						  	<ListItem
								title={item.dueDate}
								subtitle={item.status}
								status={item.status}
								id={item.id}
			                    nextView={'OrderDetail'}
			                    navigation={this.navigation}
							/>}
						/>

						<Separator> COMMANDES ENREGISTRÉES</Separator>

						<FlatList
						  data={saved_orders}
						  keyExtractor={(item) => item.id.toString()}
						  renderItem={({item}) =>
						  	<ListItem
								title={item.name}
								subtitle={item.totalProducts}
								status={item.status}
								id={item.id}
			                    nextView={'OrderDetail'}
			                    navigation={this.navigation}
							/>}
						/>

					</BodyContainer>
				</HomeContainer>
			</ScrollView>
		);
	}
}


const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Home)




const HeaderContainer = styled.View`
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

const BodyContainer = styled.View`

`;

const HomeContainer = styled.View`
	margin-top: 30px;
	padding: 20px;
`;
