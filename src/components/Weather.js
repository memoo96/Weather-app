import React, { Component } from 'react';

class Weather extends Component {
    render() {
        return (
            <div className="info">
                {
                    this.props.tempreature && <p>Tempreature: <span>{this.props.tempreature}</span></p>
                }
                {
                    this.props.city && <p>City: <span>{this.props.city}</span></p>
                }
                {
                    this.props.country && <p>Country: <span>{this.props.country}</span></p>
                }
                {
                    this.props.humidity && <p>Humidity: <span>{this.props.humidity}</span></p>
                }
                {
                    this.props.description && <p>Description: <span>{this.props.description}</span></p>
                }
                {
                    this.props.error && <p>Error: <span>{this.props.error}</span></p>
                }
            </div>
        );
    }
}

export default Weather;
