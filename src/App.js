import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';
import iconimg from '../public/weather-icon.png';


const API_KEY = "b2f3034704cea37c79c47adaf4d539db";

class App extends Component {

  state = {
    tempreature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api.json();
    if (city && country) {
      this.setState({
        tempreature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      })
    }
    else {
      this.setState({
        tempreature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error: 'Please Enter The Data'
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="form_container">
          <img src={iconimg} className="icon" alt="iconimg" />
          <Form getWeather={this.getWeather} />
          <Weather
            tempreature={this.state.tempreature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}

export default App;
