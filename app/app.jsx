const React = require('react');
const ReactDOM = require('react-dom');
//using obj destructuring:
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
//same as const Route = require('react-router').Route
let Main = require('Main');
let Weather = require('Weather');
let About = require('About');
let Examples = require('Examples');

//load Foundation. 'css!'- css loader to help 'require' 
//load the css file; '!style' - style loader to inject into html so styles show up
require('style-loader!css-loader!foundation-sites/dist/foundation.min.css')
//css
require('style-loader!css-loader!applicationStyles');


//start Foundation
$(document).foundation();

    ReactDOM.render(
        <Router history={hashHistory}>
            <Route path='/' component={Main}>
                <Route path='about' component={About}/>
                <Route path='examples' component={Examples}/>
                <IndexRoute component={Weather}/>
            </Route>
        </Router>,
        document.getElementById('app')
    );