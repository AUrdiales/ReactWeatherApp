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
            <div className="row">
                <form onSubmit={this.onFormSubmit} className="col s6">
                    <div className="row">
                        <div className="input-field col s12">
                            <input type="text"  ref={(ref) => {this.location = ref}}  id="city"/>
                            <label htmlFor="city">Enter the city</label>
                        </div>
                         <button className="btn grey lighten-5 blue-text">Get Weather</button>
                    </div>
                </form>
            </div>
        );
    }
}

module.exports = WeatherForm;
