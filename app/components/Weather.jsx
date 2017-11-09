const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');
const ErrorModal = require('ErrorModal');


let Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        }
    },
    handleNewCity: function(city) {
        //to fix 'this' binding
        let that = this;
        
        //debugger;
        //enable loading when search starts  
        this.setState({
            isLoading: true,
            errorMessage: undefined,
            //clear data
            city: undefined,
            temp: undefined
        });

        openWeatherMap.getTemp(city).then(function(temp){
            that.setState({
                isLoading: false,
                city: city,
                temp: temp
            })
        }, function(e) {
            that.setState({
                isLoading: false,
                errorMessage: e.message
            });
        });
    },
    componentDidMount: function() {
        let city = this.props.location.query.city;
        //debugger;
        if(city && city.length>0) {
            this.handleNewCity(city);
            window.location.hash = '#/';
        }
    },
    componentWillReceiveProps: function(newProps) {
        let city = newProps.location.query.city;
        //debugger;
        if(city && city.length>0) {
            this.handleNewCity(city);
            window.location.hash = '#/';
        }
    },
    render: function() {
        let city = this.state.city;
        let temp = this.state.temp;
        let errorMessage = this.state.errorMessage;
        let isLoading = this.state.isLoading;

        //conditionaly render components
        function renderMessage() {
            if(isLoading) {
                return <h3>Fetching Weather...</h3>;
            }
            //is browser isnt loading and temp and city are specified, render this: 
            else if(temp && city) {
                return <WeatherMessage city={city} temp={temp}/>;
            }
        }

        function renderError () {
            if(typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage}/>
                )
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onNewCity={this.handleNewCity}/>
                {renderMessage()}
                {renderError()}
            </div>
        )
    }
});

module.exports = Weather;