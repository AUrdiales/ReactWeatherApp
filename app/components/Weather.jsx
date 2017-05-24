import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import OpenWeatherMap from 'OpenWeatherMap';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }
    handleSearch = (location) => {
        var that = this;

        this.setState({isLoading:true});

        OpenWeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function(err){
            that.setState({isLoading: false});
       
            alert(err);
            
            
        });
        // this.setState({
        //     location: location,
        //      temp: 45});
    }

    render() {
        var {isLoading, location, temp} = this.state
        function renderMessage() {
            if(isLoading){
                return <h3>Fetching weather...</h3>;
            } else if(temp && location) {
                
                return <WeatherMessage location={location} temp={temp}/>
                
            } 
        }
        return (
            <div>
                <h3>Get Weather</h3>
                <WeatherForm onSearch={this.handleSearch}/>
               {renderMessage()}
            </div>
        );
    }

}

module.exports = Weather;