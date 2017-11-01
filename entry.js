require("./node_modules/normalize.css/normalize.css");
require("./node_modules/semantic-ui/dist/semantic.min.css");
require("./node_modules/jquery-ui-dist/jquery-ui.min.css");
require("./node_modules/jquery-ui-dist/jquery-ui.theme.min.css");
require("./node_modules/semantic-ui/dist/components/tab.css");

require("expose-loader?$!expose-loader?jQuery!./node_modules/jquery/dist/jquery.min.js");
require("./node_modules/jquery-ui-dist/jquery-ui.min.js");
require("./node_modules/semantic-ui/dist/semantic.min.js");
require("./node_modules/semantic-ui/dist/components/accordion.js");
require("./node_modules/semantic-ui/dist/components/tab.js");
require("./public/assets/css/app.scss");

import React from 'react';
import ReactDOM from 'react-dom';
import MakeRouter from './react/route';
import store from './react/store/store';


// Subscribe will fire everytime action is dispatched
store.subscribe(()=>{
    console.log("From dispatch:",store.getState());
});

// Try to dispatch an action
// An action should hold your new state so reducer can act upon it.

store.dispatch({
    type: 'CURRENT STATE',
});

const router = MakeRouter(store);
ReactDOM.render(router,document.getElementById('app'));


