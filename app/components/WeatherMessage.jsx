const React = require('react');

let WeatherMessage = (props) => {
    let city = props.city;
    let temp = Math.round(props.temp);
        return (
            <div>
                <h3 className="text-center">It's {temp}&#8451; in {city}</h3>
            </div>
        )
}

module.exports = WeatherMessage;