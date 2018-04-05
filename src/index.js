import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route} from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component{

	render(){

		return <div>Hola</div>
	}

}

class Goodbye extends React.Component{

	render(){

		return <div>Chau</div>
	}

}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>
    	Header
    	<Route path="/hello" component={Hello} />
    	<Route path="/bye" component={Goodbye} />
    	</div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
