import "./js/common.js";
import "./assets/css/main.css";
import "./assets/scss/main.scss";
import 'popper.js';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid' // https://fontawesome.com/icons?d=gallery&s=solid&m=free
import '@fortawesome/fontawesome-free/js/regular' // https://fontawesome.com/icons?d=gallery&s=regular&m=free
import '@fortawesome/fontawesome-free/js/brands' // https://fontawesome.com/icons?d=gallery&s=brands&m=free
import "@fortawesome/fontawesome-free/js/all.js";
import '../node_modules/jquery/src/jquery.js';
//Bootstrap v4-alpha-5
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/bootstrap/scss/bootstrap.scss";

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
// loads the Icon plugin

UIkit.use(Icons);

// components can be called from the imported UIkit reference
UIkit.notification('Hello world.');
import JQuery from 'jquery'
window.$ = window.JQuery = JQuery;

$(document).ready(function() {
    $("#text").click(function(e) {

    });
});
// basic