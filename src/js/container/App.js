import React from 'react';

import { Routes } from './Route';
import { Provider } from 'react-redux';

class App extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		return(
			<Provider store={store} >
				<Routes />
			</Provider>
		);
	}
}

export default App;
