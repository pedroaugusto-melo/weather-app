import { useState } from 'react';
import NewCity from '../NewCity/NewCity';
import City from '../City/City';
import { generateId } from '../../Utilities/Utilities';
import './App.css';

function App() {
  const [cities, setCities] = useState([]);

  const fetchCityWeather = async cityName => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=c804928869c84e6b8a6200336222101&q=${cityName}&aqi=no`);
      const jsonResponse = await response.json();
  
      return jsonResponse;
    } catch(e) {
      console.log(e);
    }
  };

  const fetchCityImage = async cityName => {
    try {
      const response = await fetch(`https://api.unsplash.com/photos/random?client_id=oUB5Y5WSWUkVUQFyoyx9hbecL_l0dQT4pH-OW_L0dbk&query=${cityName} City Post Card?promo_shown=1`);
      const jsonResponse = await response.json();

      return jsonResponse;
    } catch(e) {
      console.log(e);
    }
  }
  
  const addNewCity = async cityName => {
    const cityWeather = await fetchCityWeather(cityName);
    const cityImage = await fetchCityImage(cityName);
    
    console.log(cityWeather);
    console.log(cityImage);

    setCities(prevCities => {
      return [
        ...prevCities,
        {
          id: generateId(),
          name: cityName,
          country: cityWeather.location.country,
          weather: cityWeather.current.condition.text,
          icon: cityWeather.current.condition.icon,
          temp: cityWeather.current['temp_c'],
          image: cityImage.urls.thumb
        }
      ];
    });

  };

  return (
    <div className="App">
      {cities.map(city => (
        <City key={city.id} city={city} />
      ))}

    <NewCity addNewCity={addNewCity}/>
    </div>
  );
}

export default App;
