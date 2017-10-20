import React, { Component } from 'react';
import {Route,HashRouter,hashHistory,IndexRoute,Switch} from 'react-router-dom'
import {Provider} from 'react-redux';

// Main Layouts and Pages

import Layout from './layouts/Layout';

export default function(store){
	return (
	    <Provider store={store}>
            <HashRouter history={hashHistory}>
                <Route  path="/" render ={(props) => <Layout {...props}  /> } />
            </HashRouter>
        </Provider>
	);
}
