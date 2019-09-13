import React from 'react';
import styled from 'styled-components';
import Navigation from './navigation/Navigation'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'

export default class App extends React.Component {
	render() {
		return (
			<Provider store={Store}>
        		<Navigation/>
      		</Provider>
		);
	}
}
