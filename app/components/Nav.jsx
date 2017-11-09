const React = require('react');
//creates Links that switch pages
const {Link, IndexLink} = require('react-router');

let Nav = React.createClass({
    onSearch: function(e) {
        e.preventDefault();
        
        let city = this.refs.city.value;
        let encodedCity = encodeURIComponent(city);

        if(city.length>0) {
            this.refs.city.value = '';
            //remove location query param. bring back to home page
            window.location.hash = '#/?city=' + encodedCity;
        }
    },
    render: function() {
        return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">React Weather</li>
                    <li>
                        <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                    </li>
                    <li>
                        <Link to='/about' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</Link>    
                    </li>
                    <li>
                    <Link to='/examples' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Examples</Link>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <form onSubmit={this.onSearch}>
                <ul className="menu">
                    <li>
                        <input type="search" ref="city" placeholder="Enter city name"/>
                    </li>
                    <li>
                        <input type="submit" className="button"value="Get Weather"/>
                    </li>
                </ul>

                </form>
            </div>
        </div>
        );
    }
})

module.exports = Nav;