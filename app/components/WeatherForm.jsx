const React = require('react');

let WeatherForm = React.createClass({
onFormSubmit: function(e) {
    e.preventDefault();
    let city = this.refs.city.value;

    if(city.length > 0) {
        this.refs.city.value ='';
        this.props.onNewCity(city);
    }
},
render: function() {
    return (
        <div>
        <form onSubmit={this.onFormSubmit}>
            <input type="search" ref='city' placeholder='Enter city name'/>
            <button className="hollow button expanded">Get Weather</button>
        </form>
        </div>
    )
}
});
module.exports = WeatherForm;