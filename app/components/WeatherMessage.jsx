import React from 'react';

var WeatherMessage = ({temp, location}) => {
    return (
            <p>It's {temp} C in {location}.</p>
        );
}
module.exports = WeatherMessage;
