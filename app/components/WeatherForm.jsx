import React, {Component} from 'react';

class WeatherForm extends React.Component {
     onFormSubmit = (e) =>    {
        e.preventDefault();

        const location = this.location.value;

        if(location.length > 0){
            this.location.value = '';
            this.props.onSearch(location);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text"  ref={(ref) => {this.location = ref}} placeholder="Enter city name" className="city"/>
                    <button>Get Weather</button>
                </form>
            </div>
        );
    }
}

module.exports = WeatherForm;
