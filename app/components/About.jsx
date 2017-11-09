const React = require('react');

// let About = React.createClass({
//     render: function() {
//         return (
//             <div>
//                 <h3>About Component</h3>
//             </div>
//         )
//     }
// });

//refactored due to being stateless funct. component
let About = (props) => {
    return (
            <div>
                <h1 className="text-center page-title">About React Weather</h1>
                <p>Simple weather fetching app built on React. 
                    Built as part of React learning process.
                </p>
                <p>Here are some tools used:
                </p>
                <ul>
                    <li><a href="https://facebook.github.io/react">React JS</a> - This was
                    the JavaScript frgit amework used.
                    </li>
                    <li>
                        <a href="http://openweathermap.org">Open Weather Map</a> - Used it's
                        API to search for weather data by the city.
                    </li>
                </ul>

            </div>
    )
};


module.exports = About;