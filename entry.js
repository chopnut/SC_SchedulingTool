//node_modules/normalize.css
//node_modules/jquery/dist/jquery.min.js
//node_modules/jquery-ui-dist/jquery-ui.min.js
//node_modules/semantic-ui/dist/semantic.min.css
//node_modules/semantic-ui/dist/semantic.min.js
//node_modules/semantic-ui/dist/accordion/accordion.min.js
//node_modules/semantic-ui/dist/accordion/accordion.min.css
//node_modules/jquery-ui-dist/jquery-ui.min.css
require("./node_modules/normalize.css/normalize.css");
require("./node_modules/semantic-ui/dist/semantic.css");
require("./node_modules/jquery-ui-dist/jquery-ui.css");
require("./node_modules/jquery-ui-dist/jquery-ui.theme.css");


require("expose-loader?$!expose-loader?jQuery!./node_modules/jquery/dist/jquery.js");
require("./node_modules/jquery-ui-dist/jquery-ui.js");
require("./node_modules/semantic-ui/dist/semantic.js");
require("./node_modules/semantic-ui/dist/components/accordion.js");

// require("./public/assets/js/app.js");

