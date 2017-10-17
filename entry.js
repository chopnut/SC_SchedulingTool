require("./node_modules/normalize.css/normalize.css");
require("./node_modules/semantic-ui/dist/semantic.css");
require("./node_modules/jquery-ui-dist/jquery-ui.css");
require("./node_modules/jquery-ui-dist/jquery-ui.theme.css");
require("./node_modules/semantic-ui/dist/components/tab.css");

require("expose-loader?$!expose-loader?jQuery!./node_modules/jquery/dist/jquery.js");
require("./node_modules/jquery-ui-dist/jquery-ui.js");
require("./node_modules/semantic-ui/dist/semantic.js");
require("./node_modules/semantic-ui/dist/components/accordion.js");
require("./node_modules/semantic-ui/dist/components/tab.js");

require("./public/assets/css/app.scss");

import React from 'react';
import ReactDOM from 'react-dom';

import MakeRouter from './react/route';
import store from './react/store/store';



// Subscribe will fire everytime action is dispatched
store.subscribe(()=>{
    console.log(store.getState());
});

// Try to dispatch an action
// An action should hold your new state so reducer can act upon it.

store.dispatch({
    type: 'SAMPLE',
    data:{
        moreSample: 'Another hello world'
    }
});

const router = MakeRouter(store);
ReactDOM.render(router,document.getElementById('app'));


