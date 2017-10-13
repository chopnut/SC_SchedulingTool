require("./node_modules/normalize.css/normalize.css");
require("./node_modules/semantic-ui/dist/semantic.css");
require("./node_modules/jquery-ui-dist/jquery-ui.css");
require("./node_modules/jquery-ui-dist/jquery-ui.theme.css");
require("./node_modules/semantic-ui/dist/components/tab.css");
require("expose-loader?$!expose-loader?jQuery!./node_modules/jquery/dist/jquery.js");

require("./public/assets/css/app.scss");
require("./node_modules/jquery-ui-dist/jquery-ui.js");
require("./node_modules/semantic-ui/dist/semantic.js");
require("./node_modules/semantic-ui/dist/components/accordion.js");
require("./node_modules/semantic-ui/dist/components/tab.js");


import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './react/layouts/index';
import {configureStore} from './react/store/configureStore';



ReactDOM.render(<Layout /> ,document.getElementById('app'));


