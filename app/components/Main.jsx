const React = require('react');
let Nav = require('Nav');

let Main = (props) => {
    return (
            //showing to the screen:
            //{this.props.children} where to put the children components
            //'this' no longer in use due to arrow f(props) already passed
            <div>
                <Nav/>
                <div className="row">
                    <div className="columns medium-6 large-4 small-centered">
                    {props.children}
                    </div>
                </div>
            </div>
        );
}

module.exports = Main;